import { _ as __vitePreload } from './index-D2pe-F0k.js';

const useMeaningfulKey = Symbol("meaningful");
const useDecorativeKey = Symbol("decorative");
const useDefaultSizeKey = Symbol("m");
const SUITABLE_SIZES = ["m", "s"];
const SUITABLE_SEMANTIC_RULES = ["meaningful", "decorative"];
const DEFAULT_IMPORT_MODULE = /* #__PURE__ */ Object.assign({"/src/app/ui/components/icons/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-BaAHjXQJ.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAddDocument.vue": () => __vitePreload(() => import('./iconAddDocument-CRx9Z9fz.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdministration.vue": () => __vitePreload(() => import('./iconAdministration-D9CuP0hV.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconArrowRight.vue": () => __vitePreload(() => import('./iconArrowRight-D0oDLZYi.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconCustomer.vue": () => __vitePreload(() => import('./iconCustomer-BpxkdKJf.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconDropDown.vue": () => __vitePreload(() => import('./iconDropDown-vHAuvBRv.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconFolder.vue": () => __vitePreload(() => import('./iconFolder-DxD3Gpvf.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconManegement.vue": () => __vitePreload(() => import('./iconManegement-CodY_Xux.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconPrint.vue": () => __vitePreload(() => import('./iconPrint-BHKPLwV-.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSearch.vue": () => __vitePreload(() => import('./iconSearch-DdDwdVQp.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconStar.vue": () => __vitePreload(() => import('./iconStar-D6I5opV3.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSubtract.vue": () => __vitePreload(() => import('./iconSubtract-BeoV0ep3.js'),true              ?[]:void 0)


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
