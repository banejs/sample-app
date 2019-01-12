import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider, useStaticRendering } from 'mobx-react';
import { Helmet, HelmetData } from 'react-helmet';
import Loadable, { Capture } from 'react-loadable';
import { Bundle, getBundles } from 'react-loadable/webpack';
import Koa from 'koa';
import koaStatic from 'koa-static';

import ContainerInterface from '@banejs/container/ContainerInterface';
import ApplicationInterface from '@banejs/framework/Foundation/ApplicationInterface';
import RouterInterface from '@banejs/framework/Router/RouterInterface';
import ServerInterface from '@banejs/framework/Server/ServerInterface';

import Application from '@banejs/framework/Foundation/Application';

import configureContainer from 'bootstrap/server/configureContainer';

import App from 'app/modules/core/components/common/App';
import layout from 'app/views/layout';

import useragentMiddleware from 'app/middleware/useragent';

// static/build/react-loadable.json is dynamically generated
import stats from 'static/build/react-loadable.json';

export default function(): void {
    const app: ApplicationInterface = new Application(configureContainer());

    app.handle(async (container: ContainerInterface): Promise<void> => {
        const router: RouterInterface = container.get('ServerRouter');
        const server: ServerInterface = container.get('Server');

        /**
         * @see https://github.com/mobxjs/mobx-react#server-side-rendering-with-usestaticrendering
         */
        useStaticRendering(true);

        /**
         * Serves static resource using static server.
         */
        server.middleware(koaStatic(path.join(__dirname, '..', '..', 'static'), {}));

        router.match('/api/:methodName', ['GET', 'HEAD', 'POST', 'PATCH', 'PUT', 'DELETE'], async (context: Koa.Context): Promise<object> => {
            context.type = 'application/json';

            try {
                const methodFn: (context: Koa.Context) => Promise<object> = await import(`app/api/${context.params.name}`);

                return methodFn(context);
            } catch (error) {
                return {
                    errors: []
                };
            }
        });

        router
            .get('(.*)', async (context: Koa.Context): Promise<string> => {
                context.type = 'text/html';

                throw new Error('yarrr');

                console.log(context.state);

                const modules: Array<string> = [];

                function reactLoadableReporter(moduleName: string): void {
                    modules.push(moduleName);
                }

                const markup: string = renderToString(
                    <Capture report={reactLoadableReporter}>
                        <Provider>
                            <App />
                        </Provider>
                    </Capture>
                );

                const helmet: HelmetData = Helmet.renderStatic();
                const bundles: Array<Bundle> = getBundles(stats, modules);

                return layout(context, markup, helmet, bundles);
            })
            .middleware([useragentMiddleware]);

        await Loadable.preloadAll();

        server.listen('localhost', 3000);
    });
}
