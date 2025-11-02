import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_C8Hi_dzp.mjs';
import { $ as $$Layout } from '../chunks/Layout_Rz8EqW2s.mjs';
export { renderers } from '../renderers.mjs';

const $$Projets = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {})}`;
}, "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/projets.astro", void 0);

const $$file = "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/pages/projets.astro";
const $$url = "/projets";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Projets,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
