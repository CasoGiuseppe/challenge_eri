import { _ as __vitePreload } from './index-C_cS1vHU.js';

const useMeaningfulKey = Symbol("meaningful");
const useDecorativeKey = Symbol("decorative");
const useDefaultSizeKey = Symbol("m");
const SUITABLE_SIZES = ["m", "s"];
const SUITABLE_SEMANTIC_RULES = ["meaningful", "decorative"];
const DEFAULT_IMPORT_MODULE = /* #__PURE__ */ Object.assign({"/src/app/ui/components/icons/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-1mcLojAN.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAddDocument.vue": () => __vitePreload(() => import('./iconAddDocument-HBGf59Rv.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdministration.vue": () => __vitePreload(() => import('./iconAdministration-DOvNtybA.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconArrowRight.vue": () => __vitePreload(() => import('./iconArrowRight-CVgEPoi5.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconCustomer.vue": () => __vitePreload(() => import('./iconCustomer-B_QJkn8W.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconDropDown.vue": () => __vitePreload(() => import('./iconDropDown-B-J1jrGj.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconFolder.vue": () => __vitePreload(() => import('./iconFolder-CWQ8qHlc.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconManegement.vue": () => __vitePreload(() => import('./iconManegement-Dtng72Te.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconPrint.vue": () => __vitePreload(() => import('./iconPrint-Bm252V7X.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSearch.vue": () => __vitePreload(() => import('./iconSearch-DC4NhEhC.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconStar.vue": () => __vitePreload(() => import('./iconStar-CNu6I6A4.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSubtract.vue": () => __vitePreload(() => import('./iconSubtract-bcSctGK-.js'),true              ?[]:void 0)


});
const SUITABLE_NAMES = [
  ...new Set(
    Object.keys(DEFAULT_IMPORT_MODULE).map((path) => path.split("/").pop()).map((icon) => icon?.replace(".vue", ""))
  )
];
const DEFAULT_RULE_TYPE = useDecorativeKey.description;
const SEMANTIC_RULES = {
  [useMeaningfulKey.description]: { role: "img" },
  [DEFAULT_RULE_TYPE]: { "aria-hidden": true }
};

export { DEFAULT_RULE_TYPE as D, SUITABLE_NAMES as S, SEMANTIC_RULES as a, SUITABLE_SEMANTIC_RULES as b, SUITABLE_SIZES as c, useDefaultSizeKey as u };
