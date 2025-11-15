import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderScript, b as renderTemplate, d as addAttribute, e as createAstro, f as renderHead, g as renderSlot } from './astro/server_TzH25wzC.mjs';
/* empty css                           */
import { $ as $$Image } from './_astro_assets_BLRUC9AM.mjs';
import 'clsx';

const logo = new Proxy({"src":"/_astro/logo.CrsDOdOd.webp","width":97,"height":95,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/assets/logo.webp";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-4 bg-[#692AAD80]/85 backdrop-blur-md pointer-events-none"> <a href="/" class="flex items-center pointer-events-auto"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Logo", "class": "h-16 w-16" })} </a> <a href="/" class="text-[28px] text-white font-normal pointer-events-auto" style="font-family: 'Climate Crisis', sans-serif;">
Ethan Hennequin De Meyer
</a> <button id="burger-btn" class="md:hidden pointer-events-auto flex flex-col gap-1.5" aria-label="Menu"> <span class="w-6 h-0.5 block transition-all"></span> <span class="w-6 h-0.5 block transition-all"></span> <span class="w-6 h-0.5 block transition-all"></span> </button> <nav class="hidden md:flex gap-12 text-[28px] font-normal pointer-events-auto" style="font-family: 'Climate Crisis', sans-serif;"> <a href="/doss/projets" class="text-white hover:opacity-90 hover:-translate-y-0.5 transition">Projets</a> <a href="/apropos" class="text-white hover:opacity-90 hover:-translate-y-0.5 transition">À propos</a> <a href="/apropos#idencre-contact" class="text-white hover:opacity-90 hover:-translate-y-0.5 transition">Contact</a> </nav> <nav id="mobile-nav" class="hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md flex flex-col gap-4 px-8 py-6 md:hidden pointer-events-auto" style="font-family: 'Climate Crisis', sans-serif;"> <a href="#projets" class="text-[24px] font-normal hover:opacity-90 hover:-translate-y-0.5 transition">Projets</a> <a href="#apropos" class="text-[24px] font-normal hover:opacity-90 hover:-translate-y-0.5 transition">À propos</a> <a href="#contact" class="text-[24px] font-normal hover:opacity-90 hover:-translate-y-0.5 transition">Contact</a> </nav> </header> ${renderScript($$result, "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/components/header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/components/header.astro", void 0);

const fond1 = new Proxy({"src":"/_astro/fond1.0WdW0Xjc.webp","width":1728,"height":1117,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/assets/fond1.webp";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const links = {
    behance: "https://behance.net/...",
    instagram: "https://www.instagram.com/splmo_7410/",
    linkedin: "https://www.linkedin.com/in/ethan-hennequin-de-meyer-457343329/",
    dribbble: "https://dribbble.com/spleen-aha"
  };
  return renderTemplate`${maybeRenderHead()}<footer class="relative overflow-hidden bg-[url('/src/assets/footer/fondfooter.webp')] bg-cover bg-center text-black px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-14"> <img src="/fondfooter.jpg" alt="" class="pointer-events-none select-none absolute -top-10 right-[6vw] w-[400px] sm:w-[550px] md:w-[720px] max-w-none drop-shadow-[0_12px_28px_rgba(90,0,255,0.25)] hidden md:block" width="720" height="720" loading="lazy"> <div class="relative grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-[6vw] items-start"> <div> <h2 class="font-[Climate_Crisis] text-[20px] sm:text-[24px] md:text-[28px] leading-[1.05] tracking-[-0.5px] m-0 mb-4 sm:mb-6">
Ethan Hennequin De Meyer
</h2> <nav class="grid gap-1 sm:gap-1.5"> <a href="/doss/projets" class="inline-flex items-center gap-2 sm:gap-3 font-[Climate_Crisis] text-[16px] sm:text-[20px] md:text-[24px] leading-[1.15] tracking-[-0.25px] py-2 hover:opacity-90 hover:-translate-y-0.5 transition">
Projets
</a> <a href="/apropos" class="inline-flex items-center gap-2 sm:gap-3 font-[Climate_Crisis] text-[16px] sm:text-[20px] md:text-[24px] leading-[1.15] tracking-[-0.25px] py-2 hover:opacity-90 hover:-translate-y-0.5 transition">
À propos
</a> <a href="/apropos#idencre-contact" class="inline-flex items-center gap-2 sm:gap-3 font-[Climate_Crisis] text-[16px] sm:text-[20px] md:text-[24px] leading-[1.15] tracking-[-0.25px] py-2 hover:opacity-90 hover:-translate-y-0.5 transition">
Contact
</a> </nav> </div> <!-- Colonne droite --> <div> <h2 class="font-[Climate_Crisis] text-[20px] sm:text-[24px] md:text-[28px] leading-[1.05] tracking-[-0.5px] m-0 mb-4 sm:mb-6">
Mes réseaux
</h2> <ul class="grid gap-1 sm:gap-2"> <li> <a${addAttribute(links.behance, "href")} class="inline-flex items-center gap-2 sm:gap-3 font-[Climate_Crisis] text-[16px] sm:text-[20px] md:text-[24px] leading-[1.15] tracking-[-0.25px] py-2 hover:opacity-90 hover:-translate-y-0.5 transition"> <img src="/src/assets/footer/be.svg" alt="" width="28" height="28" class="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 object-contain" loading="lazy"> <span>Behance</span> </a> </li> <li> <a${addAttribute(links.instagram, "href")} class="inline-flex items-center gap-2 sm:gap-3 font-[Climate_Crisis] text-[16px] sm:text-[20px] md:text-[24px] leading-[1.15] tracking-[-0.25px] py-2 hover:opacity-90 hover:-translate-y-0.5 transition"> <img src="/src/assets/footer/insta.svg" alt="" width="28" height="28" class="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 object-contain" loading="lazy"> <span>Instagram</span> </a> </li> <li> <a${addAttribute(links.linkedin, "href")} class="inline-flex items-center gap-2 sm:gap-3 font-[Climate_Crisis] text-[16px] sm:text-[20px] md:text-[24px] leading-[1.15] tracking-[-0.25px] py-2 hover:opacity-90 hover:-translate-y-0.5 transition"> <img src="/src/assets/footer/lkin.svg" alt="" width="28" height="28" class="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 object-contain" loading="lazy"> <span>LinkedIn</span> </a> </li> <li> <a${addAttribute(links.dribbble, "href")} class="inline-flex items-center gap-2 sm:gap-3 font-[Climate_Crisis] text-[16px] sm:text-[20px] md:text-[24px] leading-[1.15] tracking-[-0.25px] py-2 hover:opacity-90 hover:-translate-y-0.5 transition"> <img src="/src/assets/footer/dri.svg" alt="" width="28" height="28" class="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 object-contain" loading="lazy"> <span>Dribbble</span> </a> </li> </ul> </div> </div> </footer>`;
}, "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/components/footer.astro", void 0);

const $$CustomCursor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="custom-cursor" class="fixed pointer-events-none z-50 text-white text-2xl font-bold mix-blend-difference" style="font-family: 'Climate Crisis', sans-serif; text-[15px];" data-astro-cid-ofxtmv4x>
s
</div>  ${renderScript($$result, "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/components/CustomCursor.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/components/CustomCursor.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> ${renderComponent($$result, "CustomCursor", $$CustomCursor, {})} <body class="bg-fixed bg-cover bg-center bg-no-repeat min-h-screen"${addAttribute(`background-image: url('${fond1.src}');`, "style")}> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/layouts/Layout.astro", void 0);

export { $$Layout as $, fond1 as f };
