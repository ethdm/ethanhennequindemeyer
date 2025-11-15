import { c as createComponent, e as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_TzH25wzC.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Ct1r6xTS.mjs';
import { p as pb } from '../../chunks/pb_CwsyNcw4.mjs';
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
  const ill1Url = pb.files.getUrl(record, record.ill1);
  const ill2Url = pb.files.getUrl(record, record.ill2);
  const ill3Url = pb.files.getUrl(record, record.ill3);
  const ill4Url = pb.files.getUrl(record, record.ill4);
  const imagefUrl = pb.files.getUrl(record, record.imagef);
  const contenumultiUrl = record.contenumulti ? pb.files.getUrl(record, record.contenumulti) : null;
  const miniaUrl = record.minia ? pb.files.getUrl(record, record.minia) : null;
  function getYouTubeID(url) {
    if (!url) return null;
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
  const youtubeID = getYouTubeID(record.youtube_url);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": record.title }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="fixed top-0 left-0 w-full h-screen -z-10"> <img${addAttribute(fondUrl, "src")} alt="Background" class="w-full h-full object-cover"> </div> <div class="relative w-full h-screen">  <img${addAttribute(heroUrl, "src")}${addAttribute(record.title, "alt")} class="w-full h-full object-cover">  <div class="absolute bottom-5 left-5 p-4 md:p-8 text-white"> <h1 class="text-[32px] md:text-[60px]" style="font-family: 'Climate Crisis', sans-serif;">${record.title}</h1> <h2 class="text-[18px] md:text-[32px] max-w-2xl" style="font-family: 'Climate Crisis', sans-serif;">${record.subtitle}</h2> <p class="text-[14px] md:text-[16px] max-w-2xl" style="font-family: 'Cal Sans', sans-serif;">${record.desc}</p> </div> </div> ${record.txt1 && record.ill1 && renderTemplate`<div class="w-full flex flex-col md:flex-row items-center justify-between px-5 md:px-20 py-8 gap-8"> <p class="text-white text-[14px] md:text-[16px] bg-black w-full md:max-w-md p-4 border-[5px] border-black" style="font-family: 'Cal Sans', sans-serif; outline: 5px solid black;">${record.txt1}</p> <img${addAttribute(ill1Url, "src")} alt="Illustration 1" class="w-full md:max-w-md h-auto"> </div>`}${record.ill2 && record.txt2 && renderTemplate`<div class="w-full flex flex-col-reverse md:flex-row items-center justify-between px-5 md:px-20 py-8 gap-8"> <img${addAttribute(ill2Url, "src")} alt="Illustration 2" class="w-full md:max-w-md h-auto"> <p class="text-white text-[14px] md:text-[16px] bg-black w-full md:max-w-md p-4 border-[5px] border-black" style="font-family: 'Cal Sans', sans-serif; outline: 5px solid black;">${record.txt2}</p> </div>`}${record.txt3 && record.ill3 && renderTemplate`<div class="w-full flex flex-col md:flex-row items-center justify-between px-5 md:px-20 py-8 gap-8"> <p class="text-white text-[14px] md:text-[16px] bg-black w-full md:max-w-md p-4 border-[5px] border-black" style="font-family: 'Cal Sans', sans-serif; outline: 5px solid black;">${record.txt3}</p> <img${addAttribute(ill3Url, "src")} alt="Illustration 3" class="w-full md:max-w-md h-auto"> </div>`}${record.ill4 && record.txt4 && renderTemplate`<div class="w-full flex flex-col-reverse md:flex-row items-center justify-between px-5 md:px-20 py-8 gap-8"> <img${addAttribute(ill4Url, "src")} alt="Illustration 4" class="w-full md:max-w-md h-auto"> <p class="text-white text-[14px] md:text-[16px] bg-black w-full md:max-w-md p-4 border-[5px] border-black" style="font-family: 'Cal Sans', sans-serif; outline: 5px solid black;">${record.txt4}</p> </div>`}${youtubeID ? renderTemplate`<div class="w-full flex flex-col items-center px-5 md:px-20 py-8"> <div class="max-w-4xl w-full aspect-video"> <iframe${addAttribute(`https://www.youtube.com/embed/${youtubeID}`, "src")} class="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div> ${record.txtmedia && renderTemplate`<p class="text-black text-[14px] md:text-[16px] bg-white max-w-4xl mt-4 p-4 w-full" style="font-family: 'Cal Sans', sans-serif; outline: 5px solid black;">${record.txtmedia}</p>`} </div>` : record.contenumulti && record.minia && renderTemplate`<div class="w-full flex flex-col items-center px-5 md:px-20 py-8"> <div class="max-w-4xl w-full"> <video controls${addAttribute(miniaUrl, "poster")} class="w-full h-auto"> <source${addAttribute(contenumultiUrl, "src")} type="video/mp4"> <source${addAttribute(contenumultiUrl, "src")} type="audio/mpeg">
Votre navigateur ne supporte pas la lecture de ce contenu.
</video> </div> ${record.txtmedia && renderTemplate`<p class="text-black text-[14px] md:text-[16px] bg-white max-w-4xl mt-4 p-4 w-full" style="font-family: 'Cal Sans', sans-serif; outline: 5px solid black;">${record.txtmedia}</p>`} </div>`}<div class="w-full"> <img${addAttribute(imagefUrl, "src")} alt="Image finale" class="w-full h-auto object-cover"> </div> ` })}`;
}, "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/doss/[id].astro", void 0);

const $$file = "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/doss/[id].astro";
const $$url = "/doss/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
