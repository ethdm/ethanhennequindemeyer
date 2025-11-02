import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_C8Hi_dzp.mjs';
import { $ as $$Layout } from '../chunks/Layout_Rz8EqW2s.mjs';
import PocketBase from 'pocketbase';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$CardItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardItem;
  const { record, imgUrl, align = "left" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex ${align === "right" ? "sm:flex-row-reverse" : "sm:flex-row"} items-start gap-6`, "class")} data-astro-cid-dvqnzqdf> <div class="relative bg-white overflow-hidden shadow-sm w-[468px] min-w-[468px] max-w-[468px] flex-none" data-astro-cid-dvqnzqdf> <div class="p-3" data-astro-cid-dvqnzqdf> <div class="relative" data-astro-cid-dvqnzqdf> <div class="aspect-[468/328] w-full overflow-hidden" data-astro-cid-dvqnzqdf> <img${addAttribute(imgUrl, "src")}${addAttribute(record?.titre ?? "image", "alt")} class="w-full h-full object-cover" loading="lazy" data-astro-cid-dvqnzqdf> </div> <div class="absolute top-3 right-4" data-astro-cid-dvqnzqdf> <span class="font-[ClimateCrisis] text-[22px] tracking-tight text-white text-outline" data-astro-cid-dvqnzqdf>${record?.categorie}</span> </div> <div class="absolute bottom-3 left-4" data-astro-cid-dvqnzqdf> <span class="font-[ClimateCrisis] text-[22px] tracking-tight text-white text-outline" data-astro-cid-dvqnzqdf>${record?.date}</span> </div> </div>  <div${addAttribute(`w-full mt-3 ${align === "left" ? "sm:text-right" : "sm:text-left"}`, "class")} data-astro-cid-dvqnzqdf> <h3 class="font-[ClimateCrisis] text-[38px] sm:text-[43px] leading-none mt-1" data-astro-cid-dvqnzqdf>${record?.titre}</h3> </div> </div> </div> </div> `;
}, "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/components/CardItem.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pbUrl = "http://127.0.0.1:8090";
  const pb = new PocketBase(pbUrl);
  const res = await pb.collection("card_accueil").getList(1, 200, {
    sort: "created"
  });
  const items = res.items.map((r) => ({
    record: r,
    imgUrl: r.img ? pb.files.getUrl(r, r.img) : ""
  }));
  const sortedItems = [...items].sort(
    (a, b) => new Date(a.record.created).getTime() - new Date(b.record.created).getTime()
  );
  const categoriesUI = [
    {
      name: "Photographie",
      traits: ["Inventivité", "Polyvalence", "Créativité", "Mise en valeurs", "Création technique & artistique"]
    },
    {
      name: "Audiovisuel",
      traits: ["Captation d'évènement", "Régis de plateau TV et Streaming", "Création technique & artistique"]
    },
    {
      name: "Évènementiel",
      traits: ["Aide", "Sociabilité", "Logistique", "Enquêtes", "Services", "Accueil", "Gestion des lieux"]
    },
    {
      name: "Communication",
      traits: ["Post", "Visuels", "Flyers, affiches", "Vidéo promotionnelles"]
    },
    {
      name: "Design graphique",
      traits: ["Maquette UX/UI", "Posters", "Visuels", "Cover"]
    },
    {
      name: "Autres",
      traits: ["Dessin", "Peinture", "Musique (MAO)", "Illustration"]
    }
  ];
  const categoriesFromPB = [...new Set(
    items.map(({ record }) => record.categorie).filter((v) => !!v)
  )].sort((a, b) => a.localeCompare(b));
  const urlCat = Astro2.url.searchParams.get("cat");
  const filteredItems = urlCat && urlCat !== "ALL" ? sortedItems.filter(({ record }) => record.categorie === urlCat) : sortedItems;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex flex-col items-center justify-center min-h-screen bg-transparent relative" data-astro-cid-j7pv25f6> <h1 class="text-center text-[60px] px-12" style="font-family: 'Climate Crisis', sans-serif;
             -webkit-text-stroke-width: 57px;
             -webkit-text-stroke-color: transparent;
             -webkit-text-fill-color: white;
             color: white;
             background: linear-gradient(33deg, #0000FF, #FF00C8, #7B00FF);
             -webkit-background-clip: text;
             background-clip: text;
             display: inline-block;" data-astro-cid-j7pv25f6>
Ethan<br data-astro-cid-j7pv25f6>HENNEQUIN DE MEYER
</h1> <!-- Flèche vers Qq proj --> <button onclick="document.getElementById('qq-proj-section').scrollIntoView({ behavior: 'smooth' })" class="absolute bottom-8 animate-bounce cursor-pointer hover:opacity-80 transition-opacity" aria-label="Descendre vers les projets" data-astro-cid-j7pv25f6> <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-j7pv25f6> <path d="M24 8V40M24 40L8 24M24 40L40 24" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6></path> </svg> </button> </div>  <div class="bg-transparent overflow-hidden h-12 w-full relative -translate-y-12" data-astro-cid-j7pv25f6>  <div class="scrolling-container" data-astro-cid-j7pv25f6> <div class="scrolling-text" data-astro-cid-j7pv25f6>Practice any art, music, singing, dancing… no matter how well or badly, not to get money and fame, but to experience becoming, to find out what's inside you, to make your soul grow... - Sir Ian McKellen</div> <div class="scrolling-text" data-astro-cid-j7pv25f6>Practice any art, music, singing, dancing… no matter how well or badly, not to get money and fame, but to experience becoming, to find out what's inside you, to make your soul grow... - Sir Ian McKellen</div> </div> </div>  <div class="min-h-screen p-8" data-astro-cid-j7pv25f6> <div class="max-w-6xl mx-auto" data-astro-cid-j7pv25f6> <div class="ml-4 mb-8" data-astro-cid-j7pv25f6> <h1 style="font-family: 'Climate Crisis'; -webkit-text-stroke: 2px #CAFB23; paint-order: stroke fill;" class="text-[32px] text-black" data-astro-cid-j7pv25f6>
Mes domaines
</h1> </div> <div class="space-y-20" data-astro-cid-j7pv25f6> ${categoriesUI.map((category, index) => renderTemplate`<div${addAttribute(index, "key")} class="group flex items-start gap-12 cursor-pointer h-[45px]" data-astro-cid-j7pv25f6> <div class="w-64 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-j7pv25f6> <ul class="space-y-2" data-astro-cid-j7pv25f6> ${(category.traits ?? []).map((trait, traitIndex) => renderTemplate`<li${addAttribute(traitIndex, "key")} class="flex items-start gap-3" data-astro-cid-j7pv25f6> <span class="text-black text-2xl mt-0" data-astro-cid-j7pv25f6>•</span> <span style="font-family: 'Cal Sans'" class="text-black text-[24px] leading-tight" data-astro-cid-j7pv25f6>${trait}</span> </li>`)} </ul> </div> <div class="flex-grow group/title" data-astro-cid-j7pv25f6> <h2 style="font-family: 'Climate Crisis'; -webkit-text-stroke: 2px #CAFB23; paint-order: stroke fill; color: black;" class="text-[48px] transition-all duration-300 hover:bg-transparent" onmouseover="this.style.color='#CAFB23'; this.style.WebkitTextStroke='1px black';" onmouseout="this.style.color='black'; this.style.WebkitTextStroke='2px #CAFB23';" data-astro-cid-j7pv25f6> ${category.name} </h2> </div> ${index === 0 && renderTemplate`<div class="w-80 flex-shrink-0" data-astro-cid-j7pv25f6> <p style="font-family: 'Cal Sans'" class="text-[24px] text-black leading-tight" data-astro-cid-j7pv25f6>
Je suis polyvalent, c'est l'essence même de mon univers créatif.
<br data-astro-cid-j7pv25f6><br data-astro-cid-j7pv25f6>
Œuvrer sur de différents supports avec des idées variés et toujours originale.
</p> </div>`} </div>`)} </div> </div> </div>   <div class="flex justify-center items-center mt-10 py-16" id="qq-proj-section" data-astro-cid-j7pv25f6> <div class="relative mx-5 w-[calc(100%-40px)] px-16 py-8 pt-5 pb-5 hover:shadow-3xl transition-shadow" style="border-radius: 71px; background: radial-gradient(ellipse 100% 60% at center, #E5E5E7 0%, #7B00FF 100%); font-family: 'Climate Crisis', sans-serif;" data-astro-cid-j7pv25f6> <h2 class="text-4xl font-black text-black text-center" data-astro-cid-j7pv25f6>Quelques projets...</h2> </div> </div>  <section class="max-w-7xl mx-auto px-4 mb-8" data-astro-cid-j7pv25f6> <div class="flex flex-wrap gap-3" data-astro-cid-j7pv25f6> <a href="?cat=ALL" class="px-3 py-1 rounded-full border border-black/20 hover:bg-black hover:text-white transition" style="font-family:'Cal Sans'" data-astro-cid-j7pv25f6>Toutes</a> ${categoriesFromPB.map((cat) => renderTemplate`<a${addAttribute(`?cat=${encodeURIComponent(cat)}`, "href")} class="px-3 py-1 rounded-full border border-black/20 hover:bg-black hover:text-white transition" style="font-family:'Cal Sans'" data-astro-cid-j7pv25f6>${cat}</a>`)} </div> </section>  <section class="mx-auto max-w-6xl px-4 mb-5 " data-astro-cid-j7pv25f6> <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 justify-items-center" data-astro-cid-j7pv25f6> ${filteredItems.slice(0, 6).map(({ record, imgUrl }, i) => renderTemplate`<div class="w-[468px] group" data-astro-cid-j7pv25f6> <!-- toute la carte est incluse dans la zone de hover --> <div class="will-change-transform transition-transform transition-[filter]
                 duration-150 ease-[cubic-bezier(.2,.8,.2,1)]
                 group-hover:duration-250 group-hover:ease-[cubic-bezier(.16,1,.3,1)]
                 group-active:scale-[0.995] group-hover:scale-[1.06] group-hover:brightness-110" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CardItem", $$CardItem, { "record": record, "imgUrl": imgUrl, "align": i % 2 === 0 ? "left" : "right", "data-astro-cid-j7pv25f6": true })} </div> </div>`)} </div> </section> ` })}`;
}, "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/index.astro", void 0);
const $$file = "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
