import { _ as __vitePreload } from './index-iNNkU7hW.js';

const useMeaningfulKey = Symbol("meaningful");
const useDecorativeKey = Symbol("decorative");
const useDefaultSizeKey = Symbol("m");
const SUITABLE_SIZES = ["m", "s"];
const SUITABLE_SEMANTIC_RULES = ["meaningful", "decorative"];
const DEFAULT_IMPORT_MODULE = /* #__PURE__ */ Object.assign({"/src/app/ui/components/icons/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-DPFtN3Ve.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAddDocument.vue": () => __vitePreload(() => import('./iconAddDocument-BeU00dQa.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdministration.vue": () => __vitePreload(() => import('./iconAdministration-CvuTHQJT.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconArrowRight.vue": () => __vitePreload(() => import('./iconArrowRight-CIQm02Sm.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconCustomer.vue": () => __vitePreload(() => import('./iconCustomer-uziDEBhG.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconDropDown.vue": () => __vitePreload(() => import('./iconDropDown-DMOyrW-U.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconFolder.vue": () => __vitePreload(() => import('./iconFolder-BKa70tu1.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconManegement.vue": () => __vitePreload(() => import('./iconManegement-CCTxKMvp.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconPrint.vue": () => __vitePreload(() => import('./iconPrint-DM_ClANH.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSearch.vue": () => __vitePreload(() => import('./iconSearch-C3uWFicX.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconStar.vue": () => __vitePreload(() => import('./iconStar-Dfs7rZmB.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSubtract.vue": () => __vitePreload(() => import('./iconSubtract-DaiCiSC4.js'),true              ?[]:void 0)


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
