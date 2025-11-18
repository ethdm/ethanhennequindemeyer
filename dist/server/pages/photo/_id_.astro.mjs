import { c as createComponent, e as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderScript, F as Fragment } from '../../chunks/astro/server_TzH25wzC.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DEH3c9Ad.mjs';
import { p as pb } from '../../chunks/pb_0iPnV-5y.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let record = null;
  try {
    record = await pb.collection("page_projet_photo").getOne(id);
  } catch (error) {
    console.error("Erreur lors de la r\xE9cup\xE9ration du projet:", error);
    return Astro2.redirect("/404");
  }
  if (!record) {
    return Astro2.redirect("/404");
  }
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": record.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed top-0 left-0 w-full h-screen -z-10"> <img${addAttribute(fondUrl, "src")} alt="Background" class="w-full h-full object-cover"> </div> <div class="relative w-full h-screen">  <img${addAttribute(heroUrl, "src")}${addAttribute(record.title, "alt")} class="w-full h-full object-cover">  <div class="absolute bottom-3 left-3 md:bottom-5 md:left-5 p-4 md:p-8 text-white"> <h1 class="text-3xl md:text-5xl lg:text-[60px]" style="font-family: 'Climate Crisis', sans-serif;">${record.title}</h1> <h2 class="text-xl md:text-2xl lg:text-[32px] max-w-2xl" style="font-family: 'Climate Crisis', sans-serif;">${record.subtitle}</h2> <p class="text-sm md:text-base lg:text-[16px] max-w-2xl" style="font-family: 'Cal Sans', sans-serif;">${record.desc}</p> </div> </div> ${photoGroups.length > 0 && renderTemplate`<div class="w-full px-4 md:px-10 lg:px-20 py-8 md:py-12 lg:py-16 space-y-10 md:space-y-16 lg:space-y-20"> ${photoGroups.map((group, groupIndex) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-3 md:gap-4"> ${group.map((photo) => {
    const photoUrl = pb.files.getUrl(record, photo);
    return renderTemplate`<div class="cursor-pointer gallery-item"> <img${addAttribute(photoUrl, "src")} alt="Photo de galerie" class="w-full h-48 md:h-56 lg:h-64 object-cover hover:scale-105 hover:-rotate-5 hover:border-3 hover:border-white transition-transform duration-300"> </div>`;
  })} </div> ${groupIndex === 1 && hasColl1 && renderTemplate`<div class="w-screen relative left-1/2 right-1/2 -mx-[50vw]">  <div class="relative w-full"> <img${addAttribute(fondcoll1Url, "src")} alt="Fond collection" class="w-full h-auto object-cover -z-10 mb-20 md:mb-32 lg:mb-40"> <div class="absolute top-4 left-4 md:top-8 md:left-8 lg:top-10 lg:left-10 text-white max-w-xs md:max-w-lg lg:max-w-xl"> <h3 class="text-xl md:text-2xl lg:text-[32px] mb-2 md:mb-3 lg:mb-4" style="font-family: 'Climate Crisis', sans-serif;">${record.titlecoll1}</h3> <p class="text-sm md:text-base lg:text-[16px] whitespace-pre-wrap" style="font-family: 'Cal Sans', sans-serif;">${record.desccoll1}</p> </div>  ${record.seriecoll1 && record.seriecoll1.length > 0 && renderTemplate`<div class="absolute bottom-10 md:bottom-20 lg:bottom-30 left-1/2 -translate-x-1/2 translate-y-1/2 w-full px-4 md:px-10 lg:px-20"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-16 lg:mb-20"> ${record.seriecoll1.map((seriePhoto) => {
    const serieUrl = pb.files.getUrl(record, seriePhoto);
    return renderTemplate`<div class="cursor-pointer gallery-item"> <img${addAttribute(serieUrl, "src")} alt="Photo de série" class="w-full h-48 md:h-56 lg:h-64 object-cover  hover:scale-105 hover:-rotate-5 hover:border-3 hover:border-white transition-transform duration-300"> </div>`;
  })} </div> </div>`} </div> </div>`}${groupIndex === 3 && hasColl2 && renderTemplate`<div class="w-screen relative left-1/2 right-1/2 -mx-[50vw]">  <div class="relative w-full"> <img${addAttribute(fondcoll2Url, "src")} alt="Fond collection 2" class="w-full h-auto object-cover -z-10 mb-20 md:mb-32 lg:mb-40"> <div class="absolute top-4 left-4 md:top-8 md:left-8 lg:top-10 lg:left-10 text-white max-w-xs md:max-w-lg lg:max-w-xl"> <h3 class="text-xl md:text-2xl lg:text-[32px] mb-2 md:mb-3 lg:mb-4" style="font-family: 'Climate Crisis', sans-serif;">${record.titlecoll2}</h3> <p class="text-sm md:text-base lg:text-[16px] whitespace-pre-wrap" style="font-family: 'Cal Sans', sans-serif;">${record.desccoll2}</p> </div>  ${record.seriecoll2 && record.seriecoll2.length > 0 && renderTemplate`<div class="absolute bottom-10 md:bottom-20 lg:bottom-30 left-1/2 -translate-x-1/2 translate-y-1/2 w-full px-4 md:px-10 lg:px-20"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-16 lg:mb-20"> ${record.seriecoll2.map((seriePhoto) => {
    const serieUrl = pb.files.getUrl(record, seriePhoto);
    return renderTemplate`<div class="cursor-pointer gallery-item"> <img${addAttribute(serieUrl, "src")} alt="Photo de série 2" class="w-full h-48 md:h-56 lg:h-64 object-cover  hover:scale-105 hover:-rotate-5 hover:border-3 hover:border-white transition-transform duration-300"> </div>`;
  })} </div> </div>`} </div> </div>`}` })}`)} </div>`}<div id="lightbox" class="hidden cursor-default fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"> <span id="close-btn" class="absolute top-4 right-4 md:top-8 md:right-8 text-white text-3xl md:text-4xl cursor-pointer hover:text-gray-300">&times;</span>  <button id="prev-btn" class="absolute left-2 md:left-8 text-white text-4xl md:text-5xl cursor-pointer hover:text-gray-300 p-2 md:p-4">
&#8249;
</button> <img id="lightbox-img" src="" alt="Image agrandie" class="max-w-full md:max-w-3xl max-h-[70vh] object-contain">  <button id="next-btn" class="absolute right-2 md:right-8 text-white text-4xl md:text-5xl cursor-pointer hover:text-gray-300 p-2 md:p-4">
&#8250;
</button> </div> ${renderScript($$result2, "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/photo/[id].astro?astro&type=script&index=0&lang.ts")} ${record.txtfin && renderTemplate`<div class="w-full px-4 md:px-10 lg:px-20 pb-6 md:pb-8 lg:pb-10 flex justify-center"> <p class="text-black text-sm md:text-base lg:text-[16px] bg-white p-3 md:p-4 border-[3px] md:border-[5px] border-white max-w-full md:max-w-2xl lg:max-w-3xl whitespace-pre-wrap" style="font-family: 'Cal Sans', sans-serif; outline: 3px solid black; outline-offset: 0;">${record.txtfin}</p> </div>`}<div class="w-full"> <img${addAttribute(imagefUrl, "src")} alt="Image finale" class="w-full h-auto object-cover"> </div> ` })}`;
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
