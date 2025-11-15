import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Dqya3tb8.mjs';
import { manifest } from './manifest_By1uG7Uu.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/apropos.astro.mjs');
const _page2 = () => import('./pages/doss/projets.astro.mjs');
const _page3 = () => import('./pages/doss/_id_.astro.mjs');
const _page4 = () => import('./pages/ml.astro.mjs');
const _page5 = () => import('./pages/photo/_id_.astro.mjs');
const _page6 = () => import('./pages/thea.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/apropos.astro", _page1],
    ["src/pages/doss/projets.astro", _page2],
    ["src/pages/doss/[id].astro", _page3],
    ["src/pages/ml.astro", _page4],
    ["src/pages/photo/[id].astro", _page5],
    ["src/pages/thea.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/dist/client/",
    "server": "file:///C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
