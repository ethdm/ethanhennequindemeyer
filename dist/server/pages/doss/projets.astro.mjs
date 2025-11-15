import { c as createComponent, e as createAstro, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent } from '../../chunks/astro/server_TzH25wzC.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Ct1r6xTS.mjs';
import PocketBase from 'pocketbase';
import 'clsx';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$CardProjets = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardProjets;
  const { record, imgUrl, align = "left" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex ${align === "right" ? "sm:flex-row-reverse" : "sm:flex-row"} items-start gap-6`, "class")} data-astro-cid-ygbl6fbx> <div class="relative bg-white overflow-hidden shadow-sm w-[468px] min-w-[468px] max-w-[468px] flex-none" data-astro-cid-ygbl6fbx> <div class="p-3" data-astro-cid-ygbl6fbx> <div class="relative" data-astro-cid-ygbl6fbx> <div class="aspect-[468/328] w-full overflow-hidden" data-astro-cid-ygbl6fbx> <img${addAttribute(imgUrl, "src")}${addAttribute(record?.titre ?? "image", "alt")} class="w-full h-full object-cover" loading="lazy" data-astro-cid-ygbl6fbx> </div> <!-- Desc & date--> <div class="absolute top-3 right-4 ml-2" data-astro-cid-ygbl6fbx> <span class="font-[ClimateCrisis] text-[22px] tracking-tight text-white text-outline" data-astro-cid-ygbl6fbx> ${Array.isArray(record?.desc) ? record.desc.join(" / ") : record?.desc} </span> </div> <div class="absolute bottom-3 left-4" data-astro-cid-ygbl6fbx> <span class="font-[ClimateCrisis] text-[22px] tracking-tight text-white text-outline" data-astro-cid-ygbl6fbx> ${record?.date} </span> </div> </div>  <!-- Titre --> <div${addAttribute(`w-full mt-3 ${align === "left" ? "sm:text-right" : "sm:text-left"}`, "class")} data-astro-cid-ygbl6fbx> <h3 class="font-[ClimateCrisis] text-[38px] sm:text-[34px] leading-none mt-1" data-astro-cid-ygbl6fbx> ${record?.titre} </h3> </div> </div> </div> </div> `;
}, "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/components/CardProjets.astro", void 0);

const fond2 = new Proxy({"src":"/_astro/fond2.Bs96LYuP.webp","width":1728,"height":1117,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/assets/fond2.webp";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const prerender = false;
const $$Projets = createComponent(async ($$result, $$props, $$slots) => {
  const pbUrl = "http://127.0.0.1:8090";
  const pb = new PocketBase(pbUrl);
  const res = await pb.collection("card_p_projets").getList(1, 500, {
    sort: "created"
  });
  const items = res.items.map((r) => ({
    record: r,
    imgUrl: r.img ? pb.files.getUrl(r, r.img) : ""
  }));
  function normalizeCategories(val) {
    if (Array.isArray(val)) return val.filter(Boolean);
    if (typeof val === "string" && val.trim() !== "") return [val];
    return [];
  }
  const mapByCat = /* @__PURE__ */ new Map();
  for (const it of items) {
    const cats = normalizeCategories(it.record.categorie);
    if (cats.length === 0) {
      const key = "Sans catégorie";
      mapByCat.set(key, [...mapByCat.get(key) ?? [], it]);
    } else {
      for (const c of cats) {
        mapByCat.set(c, [...mapByCat.get(c) ?? [], it]);
      }
    }
  }
  const allCats = Array.from(mapByCat.keys()).sort((a, b) => {
    if (a === "Sans catégorie") return 1;
    if (b === "Sans catégorie") return -1;
    return a.localeCompare(b);
  });
  function slugifyCat(cat) {
    return cat.toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/&/g, "et").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }
  const slugCounts = /* @__PURE__ */ new Map();
  function uniqueSlug(cat) {
    const base = slugifyCat(cat || "sans-categorie");
    const n = (slugCounts.get(base) || 0) + 1;
    slugCounts.set(base, n);
    return n === 1 ? base : `${base}-${n}`;
  }
  const catToSlug = Object.fromEntries(allCats.map((c) => [c, uniqueSlug(c)]));
  return renderTemplate(_a || (_a = __template(["", "<body", " data-astro-cid-5cfh4nzh> ", ` </body> <!-- Script ancres smooth + surbrillance active --> <script type="module">
  // Scroll doux pour toutes les ancres internes
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href")?.slice(1);
      const el = id ? document.getElementById(id) : null;
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", \`#\${id}\`);
    });
  });


  // Surbrillance de la puce active au scroll
  const chips = new Map();
  document.querySelectorAll('a[href^="#"]').forEach((chip) => {
    const href = chip.getAttribute("href") || "";
    const id = href.startsWith("#") ? href.slice(1) : "";
    if (id && id !== "all") chips.set(id, chip);
  });


  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const id = visible.target.id;
      chips.forEach((chip, key) => {
        chip.classList.toggle("bg-black", key === id);
        chip.classList.toggle("text-white", key === id);
      });
    },
    { rootMargin: "-20% 0px -60% 0px", threshold: [0.2, 0.5, 0.8] },
  );


  document.querySelectorAll("[id]").forEach((sec) => {
    if (chips.has(sec.id)) observer.observe(sec);
  });
</script> <!-- Script centrage initial des carousels --> <script type="module">
  document.querySelectorAll(".carousel-scroll").forEach((scroller) => {
    requestAnimationFrame(() => {
      scroller.scrollTo({ left: 0, behavior: "auto" });
    });
  });
</script>`], ["", "<body", " data-astro-cid-5cfh4nzh> ", ` </body> <!-- Script ancres smooth + surbrillance active --> <script type="module">
  // Scroll doux pour toutes les ancres internes
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href")?.slice(1);
      const el = id ? document.getElementById(id) : null;
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", \\\`#\\\${id}\\\`);
    });
  });


  // Surbrillance de la puce active au scroll
  const chips = new Map();
  document.querySelectorAll('a[href^="#"]').forEach((chip) => {
    const href = chip.getAttribute("href") || "";
    const id = href.startsWith("#") ? href.slice(1) : "";
    if (id && id !== "all") chips.set(id, chip);
  });


  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const id = visible.target.id;
      chips.forEach((chip, key) => {
        chip.classList.toggle("bg-black", key === id);
        chip.classList.toggle("text-white", key === id);
      });
    },
    { rootMargin: "-20% 0px -60% 0px", threshold: [0.2, 0.5, 0.8] },
  );


  document.querySelectorAll("[id]").forEach((sec) => {
    if (chips.has(sec.id)) observer.observe(sec);
  });
</script> <!-- Script centrage initial des carousels --> <script type="module">
  document.querySelectorAll(".carousel-scroll").forEach((scroller) => {
    requestAnimationFrame(() => {
      scroller.scrollTo({ left: 0, behavior: "auto" });
    });
  });
</script>`])), maybeRenderHead(), addAttribute(`background-image: url('${fond2.src}'); overflow-x: hidden;`, "style"), renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-5cfh4nzh": true }, { "default": async ($$result2) => renderTemplate` <section class="max-w-7xl mx-auto px-4 mt-34 mb-8" data-astro-cid-5cfh4nzh> <div class="flex flex-wrap gap-3" data-astro-cid-5cfh4nzh> <a href="#all" class="px-3 py-1 rounded-full border border-white !text-white hover:bg-white/20 transition" style="font-family:'Cal Sans'" data-astro-cid-5cfh4nzh>Toutes</a> ${allCats.map((cat) => renderTemplate`<a${addAttribute(`#${catToSlug[cat]}`, "href")} class="px-3 py-1 rounded-full border border-white !text-white hover:bg-white/20 transition" style="font-family:'Cal Sans'" data-astro-cid-5cfh4nzh> ${cat} </a>`)} </div> </section> <section id="all" class="mx-auto max-w-full overflow-hidden space-y-14" data-astro-cid-5cfh4nzh> ${allCats.map((cat, catIndex) => {
    const list = mapByCat.get(cat) ?? [];
    const id = catToSlug[cat];
    return renderTemplate`<div${addAttribute(id, "id")} class="scroll-mt-28" data-astro-cid-5cfh4nzh> <h2 class="mb-4 pl-9 text-white" style="font-family: 'Climate Crisis', system-ui, sans-serif; font-size: 28px; letter-spacing: .5px;" data-astro-cid-5cfh4nzh> ${cat} </h2> <div class="relative mb-8" data-astro-cid-5cfh4nzh> <div class="carousel-scroll flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-[246px] pb-4 pt-10" style="scroll-padding-inline: 246px;" data-astro-cid-5cfh4nzh>  ${catIndex === 0 && renderTemplate`<div class="snap-center shrink-0 w-[468px] group" data-astro-cid-5cfh4nzh> <a href="/thea" class="block relative group-hover:z-20" data-astro-cid-5cfh4nzh> <div class="will-change-transform transition-transform transition-[filter] duration-150 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:duration-250 group-hover:ease-[cubic-bezier(.16,1,.3,1)] group-active:scale-[0.995] group-hover:scale-[1.06] group-hover:brightness-110" data-astro-cid-5cfh4nzh> <div class="flex sm:flex-row items-start gap-6" data-astro-cid-5cfh4nzh> <div class="relative bg-white overflow-hidden shadow-sm w-[468px] min-w-[468px] max-w-[468px] flex-none" data-astro-cid-5cfh4nzh> <div class="p-3" data-astro-cid-5cfh4nzh> <div class="relative" data-astro-cid-5cfh4nzh> <div class="aspect-[468/328] w-full overflow-hidden" data-astro-cid-5cfh4nzh> <img src="/src/assets/card/thea.webp" alt="THÉA" class="w-full h-full object-cover" loading="lazy" data-astro-cid-5cfh4nzh> </div> <div class="absolute top-3 right-4 ml-2" data-astro-cid-5cfh4nzh> <span class="font-[ClimateCrisis] text-[22px] tracking-tight text-white text-outline" data-astro-cid-5cfh4nzh>
Collection / Galerie Photo
</span> </div> <div class="absolute bottom-3 left-4" data-astro-cid-5cfh4nzh> <span class="font-[ClimateCrisis] text-[22px] tracking-tight text-white text-outline" data-astro-cid-5cfh4nzh>
08/2025
</span> </div> </div> <div class="w-full mt-3 sm:text-right" data-astro-cid-5cfh4nzh> <h3 class="font-[ClimateCrisis] text-[38px] sm:text-[34px] leading-none mt-1" data-astro-cid-5cfh4nzh>
THÉA
</h3> </div> </div> </div> </div> </div> </a> </div>`}  ${list.map(({ record, imgUrl }, i) => {
      let path = "/doss/";
      let pageId = record.page_autre;
      if (record.page_photo) {
        path = "/photo/";
        pageId = record.page_photo;
      }
      return renderTemplate`<a${addAttribute(`${path}${pageId}`, "href")} class="snap-center shrink-0 w-[468px] group block" data-astro-cid-5cfh4nzh> <div class="relative group-hover:z-20" data-astro-cid-5cfh4nzh> <div class="will-change-transform transition-transform transition-[filter] duration-150 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:duration-250 group-hover:ease-[cubic-bezier(.16,1,.3,1)] group-active:scale-[0.995] group-hover:scale-[1.06] group-hover:brightness-110" data-astro-cid-5cfh4nzh> ${renderComponent($$result2, "CardProjets", $$CardProjets, { "record": record, "imgUrl": imgUrl, "align": i % 2 === 0 ? "left" : "right", "data-astro-cid-5cfh4nzh": true })} </div> </div> </a>`;
    })} </div>  <div class="mt-6 flex items-center justify-center gap-x-4" data-astro-cid-5cfh4nzh>  <button class="carousel-btn left flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white/90 backdrop-blur-sm transition-colors hover:bg-white/30 hover:text-white" aria-label="Précédent" onclick="const root = this.closest('.relative'); const scroller = root?.querySelector('.carousel-scroll'); if (scroller) scroller.scrollBy({ left: -492, behavior: 'smooth' });" data-astro-cid-5cfh4nzh> <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true" data-astro-cid-5cfh4nzh> <path d="M30 10 L18 24 L30 38" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5cfh4nzh></path> </svg> </button>  <button class="carousel-btn right flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white/90 backdrop-blur-sm transition-colors hover:bg-white/30 hover:text-white" aria-label="Suivant" onclick="const root = this.closest('.relative'); const scroller = root?.querySelector('.carousel-scroll'); if (scroller) scroller.scrollBy({ left: 492, behavior: 'smooth' });" data-astro-cid-5cfh4nzh> <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true" data-astro-cid-5cfh4nzh> <path d="M18 10 L30 24 L18 38" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5cfh4nzh></path> </svg> </button> </div> </div> </div>`;
  })} </section>  ` }));
}, "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/doss/projets.astro", void 0);
const $$file = "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/doss/projets.astro";
const $$url = "/doss/projets";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projets,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
