import React from 'react';
import Loadable from 'react-loadable';
import { hydrate } from 'react-dom';
import { Provider } from 'mobx-react';

import ContainerInterface from '@banejs/container/ContainerInterface';
import ApplicationInterface from '@banejs/framework/Foundation/ApplicationInterface';

import Application from '@banejs/framework/Foundation/Application';

import configureContainer from 'bootstrap/client/configureContainer';

import App from 'app/modules/core/components/common/App';

const app: ApplicationInterface = new Application(configureContainer());

app.handle(async (container: ContainerInterface): Promise<void> => {
    await Loadable.preloadReady();

    hydrate(
        <Provider>
            <App />
        </Provider>,
        document.querySelector('#app')
    );
});
