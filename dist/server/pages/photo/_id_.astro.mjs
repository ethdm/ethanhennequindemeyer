import { c as createComponent, e as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderScript, F as Fragment } from '../../chunks/astro/server_TzH25wzC.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CFZmdzoR.mjs';
import { p as pb } from '../../chunks/pb_DFRBviiV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const id = Astro2.params.id;
  const record = await pb.collection("page_projet_classique").getOne(id);
  const heroUrl = pb.files.getUrl(record, record.hero);
  const fondUrl = pb.files.getUrl(record, record.fond);
  const imagefUrl = pb.files.getUrl(record, record.imagef);
  const photoGroups = [];
  if (record.photos && record.photos.length > 0) {
    for (let i = 0; i < record.photos.length; i += 6) {
      photoGroups.push(record.photos.slice(i, i + 6));
    }
  }
  const fondcoll1Url = record.fondcoll1 ? pb.files.getUrl(record, record.fondcoll1) : null;
  const hasColl1 = record.fondcoll1 && record.titlecoll1 && record.desccoll1 && record.seriecoll1;
  const fondcoll2Url = record.fondcoll2 ? pb.files.getUrl(record, record.fondcoll2) : null;
  const hasColl2 = record.fondcoll2 && record.titlecoll2 && record.desccoll2 && record.seriecoll2;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": record.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed top-0 left-0 w-full h-screen -z-10"> <img${addAttribute(fondUrl, "src")} alt="Background" class="w-full h-full object-cover"> </div> <div class="relative w-full h-screen">  <img${addAttribute(heroUrl, "src")}${addAttribute(record.title, "alt")} class="w-full h-full object-cover">  <div class="absolute bottom-5 left-5 p-8 text-white"> <h1 class="text-[60px]" style="font-family: 'Climate Crisis', sans-serif;">${record.title}</h1> <h2 class="text-[32px] max-w-2xl" style="font-family: 'Climate Crisis', sans-serif;">${record.subtitle}</h2> <p class="text-[16px] max-w-2xl" style="font-family: 'Cal Sans', sans-serif;">${record.desc}</p> </div> </div> ${photoGroups.length > 0 && renderTemplate`<div class="w-full px-20 py-16 space-y-20"> ${photoGroups.map((group, groupIndex) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <div class="grid grid-cols-3 auto-rows-max gap-4"> ${group.map((photo) => {
    const photoUrl = pb.files.getUrl(record, photo);
    return renderTemplate`<div class="cursor-pointer gallery-item"> <img${addAttribute(photoUrl, "src")} alt="Photo de galerie" class="w-full h-64 object-cover hover:scale-105 hover:-rotate-5 hover:border-3 hover:border-white transition-transform duration-300"> </div>`;
  })} </div> ${groupIndex === 1 && hasColl1 && renderTemplate`<div class="w-screen relative left-1/2 right-1/2 -mx-[50vw]">  <div class="relative w-full"> <img${addAttribute(fondcoll1Url, "src")} alt="Fond collection" class="w-full h-auto object-cover -z-10 mb-40"> <div class="absolute top-10 left-10 text-white max-w-xl"> <h3 class="text-[32px] mb-4" style="font-family: 'Climate Crisis', sans-serif;">${record.titlecoll1}</h3> <p class="text-[16px] whitespace-pre-wrap" style="font-family: 'Cal Sans', sans-serif;">${record.desccoll1}</p> </div>  ${record.seriecoll1 && record.seriecoll1.length > 0 && renderTemplate`<div class="absolute bottom-30 left-1/2 -translate-x-1/2 translate-y-1/2 w-full px-20"> <div class="grid grid-cols-3 gap-4 mb-20"> ${record.seriecoll1.map((seriePhoto) => {
    const serieUrl = pb.files.getUrl(record, seriePhoto);
    return renderTemplate`<div class="cursor-pointer gallery-item"> <img${addAttribute(serieUrl, "src")} alt="Photo de série" class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"> </div>`;
  })} </div> </div>`} </div> </div>`}${groupIndex === 3 && hasColl2 && renderTemplate`<div class="w-screen relative left-1/2 right-1/2 -mx-[50vw]">  <div class="relative w-full"> <img${addAttribute(fondcoll2Url, "src")} alt="Fond collection 2" class="w-full h-auto object-cover -z-10 mb-40"> <div class="absolute top-10 left-10 text-white max-w-xl"> <h3 class="text-[32px] mb-4" style="font-family: 'Climate Crisis', sans-serif;">${record.titlecoll2}</h3> <p class="text-[16px] whitespace-pre-wrap" style="font-family: 'Cal Sans', sans-serif;">${record.desccoll2}</p> </div>  ${record.seriecoll2 && record.seriecoll2.length > 0 && renderTemplate`<div class="absolute bottom-30 left-1/2 -translate-x-1/2 translate-y-1/2 w-full px-20"> <div class="grid grid-cols-3 gap-4 mb-20"> ${record.seriecoll2.map((seriePhoto) => {
    const serieUrl = pb.files.getUrl(record, seriePhoto);
    return renderTemplate`<div class="cursor-pointer gallery-item hover:-rotate-30"> <img${addAttribute(serieUrl, "src")} alt="Photo de série 2" class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"> </div>`;
  })} </div> </div>`} </div> </div>`}` })}`)} </div>`}<div id="lightbox" class="hidden cursor-default fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"> <span id="close-btn" class="absolute top-8 right-8 text-white text-4xl cursor-pointer hover:text-gray-300">&times;</span>  <button id="prev-btn" class="absolute left-8 text-white text-5xl cursor-pointer hover:text-gray-300 p-4">
&#8249;
</button> <img id="lightbox-img" src="" alt="Image agrandie" class="max-w-3xl max-h-[70vh] object-contain">  <button id="next-btn" class="absolute right-8 text-white text-5xl cursor-pointer hover:text-gray-300 p-4">
&#8250;
</button> </div> ${renderScript($$result2, "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/photo/[id].astro?astro&type=script&index=0&lang.ts")} ${record.txtfin && renderTemplate`<div class="w-full px-20 pb-10 flex justify-center"> <p class="text-black text-[16px] bg-white p-4 border-[5px] border-white max-w-3xl whitespace-pre-wrap" style="font-family: 'Cal Sans', sans-serif; outline: 5px solid black;">${record.txtfin}</p> </div>`}<div class="w-full"> <img${addAttribute(imagefUrl, "src")} alt="Image finale" class="w-full h-auto object-cover"> </div> ` })}`;
}, "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/photo/[id].astro", void 0);

const $$file = "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/photo/[id].astro";
const $$url = "/photo/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
