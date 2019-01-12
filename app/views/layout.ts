import Koa from '@banejs/framework/Server/KoaExport';
import { Bundle } from 'react-loadable/webpack';
import { HelmetData } from 'react-helmet';

/**
 * Page layout.
 *
 * @param {Application.Context} context
 * @param {string} markup
 * @param {HelmetData} helmet
 * @param {Array<Bundle>} bundles
 *
 * @return {string}
 */
export default function layout(context: Koa.Context, markup: string, helmet: HelmetData, bundles: Array<Bundle>): string {
    const styles: Array<Bundle> = bundles.filter(({ file }: Bundle) => file.endsWith('.css'));
    const scripts: Array<Bundle> = bundles.filter(({ file }: Bundle) => file.endsWith('.js'));

    return `<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${styles.map(({ file }: Bundle) => `<link rel="stylesheet" href="/assets/${file}">`).join('')}
        ${helmet.link.toString()}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        <div id="app">${markup}</div>
        <script src="/assets/js/manifest.js"></script>
        <script src="/assets/js/vendor.chunk.js"></script>
        <!--<script src="/assets/js/common.chunk.js"></script>-->
        ${scripts.map(({ file }: Bundle) => `<script src="/assets/${file}"></script>`).join('')}
        <script src="/assets/js/app.chunk.js"></script>
    </body>
</html>`;
}
