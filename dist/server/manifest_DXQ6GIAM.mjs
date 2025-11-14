import { q as decodeKey } from './chunks/astro/server_TzH25wzC.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Dz1izyuD.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/","cacheDir":"file:///C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/node_modules/.astro/","outDir":"file:///C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/dist/","srcDir":"file:///C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/","publicDir":"file:///C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/public/","buildClientDir":"file:///C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/dist/client/","buildServerDir":"file:///C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"apropos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/apropos","isIndex":false,"type":"page","pattern":"^\\/apropos\\/?$","segments":[[{"content":"apropos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/apropos.astro","pathname":"/apropos","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"doss/projets/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/doss/projets","isIndex":false,"type":"page","pattern":"^\\/doss\\/projets\\/?$","segments":[[{"content":"doss","dynamic":false,"spread":false}],[{"content":"projets","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/doss/projets.astro","pathname":"/doss/projets","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"ml/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ml","isIndex":false,"type":"page","pattern":"^\\/ml\\/?$","segments":[[{"content":"ml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ml.astro","pathname":"/ml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"thea/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/thea","isIndex":false,"type":"page","pattern":"^\\/thea\\/?$","segments":[[{"content":"thea","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thea.astro","pathname":"/thea","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/apropos.CxSWLBOZ.css"}],"routeData":{"route":"/doss/[id]","isIndex":false,"type":"page","pattern":"^\\/doss\\/([^/]+?)\\/?$","segments":[[{"content":"doss","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/doss/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/apropos.CxSWLBOZ.css"}],"routeData":{"route":"/photo/[id]","isIndex":false,"type":"page","pattern":"^\\/photo\\/([^/]+?)\\/?$","segments":[[{"content":"photo","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/photo/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/apropos.astro",{"propagation":"none","containsHead":true}],["C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/doss/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/doss/projets.astro",{"propagation":"none","containsHead":true}],["C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/photo/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/thea.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/apropos@_@astro":"pages/apropos.astro.mjs","\u0000@astro-page:src/pages/doss/projets@_@astro":"pages/doss/projets.astro.mjs","\u0000@astro-page:src/pages/doss/[id]@_@astro":"pages/doss/_id_.astro.mjs","\u0000@astro-page:src/pages/ml@_@astro":"pages/ml.astro.mjs","\u0000@astro-page:src/pages/photo/[id]@_@astro":"pages/photo/_id_.astro.mjs","\u0000@astro-page:src/pages/thea@_@astro":"pages/thea.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DXQ6GIAM.mjs","C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DypPVelK.mjs","C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/apropos.astro?astro&type=script&index=0&lang.ts":"_astro/apropos.astro_astro_type_script_index_0_lang.CJJu_IHV.js","C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/photo/[id].astro?astro&type=script&index=0&lang.ts":"_astro/_id_.astro_astro_type_script_index_0_lang.NJoQK0aQ.js","C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/components/header.astro?astro&type=script&index=0&lang.ts":"_astro/header.astro_astro_type_script_index_0_lang.RfD4u83i.js","C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/components/CustomCursor.astro?astro&type=script&index=0&lang.ts":"_astro/CustomCursor.astro_astro_type_script_index_0_lang.CYPiKvf-.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/apropos.astro?astro&type=script&index=0&lang.ts","const a={threshold:.1,rootMargin:\"0px 0px -100px 0px\"},s=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.remove(\"opacity-0\",\"translate-y-8\"),t.target.classList.add(\"opacity-100\",\"translate-y-0\"))})},a);document.querySelectorAll(\"[data-animate]\").forEach(e=>s.observe(e));const r=document.querySelectorAll(\"[data-paragraph]\");let o=0;const c=document.getElementById(\"scroll-arrow\");c?.addEventListener(\"click\",()=>{r.length!==0&&(r[o].scrollIntoView({behavior:\"smooth\",block:\"center\"}),o=(o+1)%r.length)});"],["C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/photo/[id].astro?astro&type=script&index=0&lang.ts","const n=document.getElementById(\"lightbox\"),i=document.getElementById(\"lightbox-img\"),r=document.querySelectorAll(\".gallery-item img\"),o=document.getElementById(\"close-btn\"),l=document.getElementById(\"prev-btn\"),a=document.getElementById(\"next-btn\");let s=0;const d=Array.from(r).map(e=>e.src);function c(e){i&&(i.src=d[e],s=e)}r.forEach((e,t)=>{e.addEventListener(\"click\",()=>{n&&(c(t),n.classList.remove(\"hidden\"))})});l&&l.addEventListener(\"click\",e=>{e.stopPropagation();const t=(s-1+d.length)%d.length;c(t)});a&&a.addEventListener(\"click\",e=>{e.stopPropagation();const t=(s+1)%d.length;c(t)});document.addEventListener(\"keydown\",e=>{if(!n?.classList.contains(\"hidden\"))if(e.key===\"ArrowLeft\"){const t=(s-1+d.length)%d.length;c(t)}else if(e.key===\"ArrowRight\"){const t=(s+1)%d.length;c(t)}else e.key===\"Escape\"&&n.classList.add(\"hidden\")});o&&n&&(o.addEventListener(\"click\",()=>{n.classList.add(\"hidden\")}),n.addEventListener(\"click\",e=>{e.target===n&&n.classList.add(\"hidden\")}));"],["C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/components/header.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"burger-btn\"),e=document.getElementById(\"mobile-nav\"),t=s?.querySelectorAll(\"span\");s?.addEventListener(\"click\",()=>{e?.classList.toggle(\"hidden\"),t&&(t[0].style.transform=e?.classList.contains(\"hidden\")?\"rotate(0)\":\"rotate(45deg) translateY(10px)\",t[1].style.opacity=e?.classList.contains(\"hidden\")?\"1\":\"0\",t[2].style.transform=e?.classList.contains(\"hidden\")?\"rotate(0)\":\"rotate(-45deg) translateY(-10px)\")});e?.querySelectorAll(\"a\").forEach(n=>{n.addEventListener(\"click\",()=>{e.classList.add(\"hidden\"),t&&(t[0].style.transform=\"rotate(0)\",t[1].style.opacity=\"1\",t[2].style.transform=\"rotate(0)\")})});"],["C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/components/CustomCursor.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"custom-cursor\"),s=[\"@\",\"s\",\"p\",\"l\",\"m\",\"o\",\"7\",\"4\",\"1\",\"0\"];let e=0;document.addEventListener(\"mousemove\",n=>{t&&(t.style.left=`${n.clientX}px`,t.style.top=`${n.clientY}px`,t.style.transform=\"translate(-50%, -50%)\")});setInterval(()=>{t&&(e=(e+1)%s.length,t.textContent=s[e])},150);"]],"assets":["/_astro/propos.CXrjyQxR.webp","/_astro/f1.CS4Zyetb.webp","/_astro/f5.BUhjrAeW.webp","/_astro/f2.BOhexTdQ.webp","/_astro/f7.DKaAfIb2.webp","/_astro/f4.B7Rrvui5.webp","/_astro/f3.Bm17sJPd.webp","/_astro/f6.BC5wbsL1.webp","/_astro/fond1.0WdW0Xjc.webp","/_astro/logo.CrsDOdOd.webp","/_astro/fond2.Bs96LYuP.webp","/_astro/fondfooter.BPYSZkWv.webp","/_astro/apropos.CxSWLBOZ.css","/apropos/index.html","/doss/projets/index.html","/ml/index.html","/thea/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"1poMDUkl5zfIMlEcHOKBHE4j8GvQrCN/6LWztSgKLB0=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\Ethan\\Documents\\MMI2\\Portfolio\\ethanhennequindemeyer\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
