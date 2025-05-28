import { D as DEFAULT_RULE_TYPE, u as useDefaultSizeKey, a as SEMANTIC_RULES, b as SUITABLE_SEMANTIC_RULES, c as SUITABLE_SIZES, S as SUITABLE_NAMES } from './constants-Ba6FyYqG.js';
import { u as useValidateTypeUnion, a as useIsArray } from './index-0W8rK_An.js';
import { u as useIsString } from './index-DusSqiUz.js';
import { _ as __vitePreload, d as defineComponent, B as toRefs, c as computed, C as shallowRef, I as watchEffect, b as createBlock, v as mergeProps, f as resolveDynamicComponent, e as openBlock } from './index-iNNkU7hW.js';
import { a as useComponentsMapping, u as useAsyncComponents, e as escapeRegExp } from './index-C8i_DEUA.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';
import './StateError.scss_vue_type_style_index_0_src_true_lang-SiCvQDpo.js';
import './iconAdd-DPFtN3Ve.js';
import './StateLoader-T2mFyijj.js';

function useIconsGlobFilesHandle({
  name,
  mapping = useComponentsMapping,
  loader = useAsyncComponents,
  defaultPath = /* #__PURE__ */ Object.assign({"/src/app/ui/components/icons/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-DPFtN3Ve.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAddDocument.vue": () => __vitePreload(() => import('./iconAddDocument-BeU00dQa.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdministration.vue": () => __vitePreload(() => import('./iconAdministration-CvuTHQJT.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconArrowRight.vue": () => __vitePreload(() => import('./iconArrowRight-CIQm02Sm.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconCustomer.vue": () => __vitePreload(() => import('./iconCustomer-uziDEBhG.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconDropDown.vue": () => __vitePreload(() => import('./iconDropDown-DMOyrW-U.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconFolder.vue": () => __vitePreload(() => import('./iconFolder-BKa70tu1.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconManegement.vue": () => __vitePreload(() => import('./iconManegement-CCTxKMvp.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconPrint.vue": () => __vitePreload(() => import('./iconPrint-DM_ClANH.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSearch.vue": () => __vitePreload(() => import('./iconSearch-C3uWFicX.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconStar.vue": () => __vitePreload(() => import('./iconStar-Dfs7rZmB.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSubtract.vue": () => __vitePreload(() => import('./iconSubtract-DaiCiSC4.js'),true              ?[]:void 0)}),
  filterByBrand
}) {
  const getPathsList = () => {
    if (filterByBrand) {
      const filterByName = filteredPaths({
        collection: filteredPaths({
          collection: /* #__PURE__ */ Object.assign({"/src/app/ui/components/abstracts/component-is/ComponentIs.vue": () => __vitePreload(() => import('./ComponentIs-DPDeYOTH.js'),true              ?[]:void 0),"/src/app/ui/components/abstracts/transition-is/TransitionIs.vue": () => __vitePreload(() => import('./TransitionIs-DKmOb16d.js'),true              ?[]:void 0),"/src/app/ui/components/base/BaseIndex.vue": () => __vitePreload(() => import('./BaseIndex-7SVkCDgu.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-button/BaseButton.vue": () => __vitePreload(() => import('./BaseButton-7gsjHXAa.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-icon/BaseIcon.vue": () => __vitePreload(() => Promise.resolve().then(() => BaseIcon$1),true              ?void 0:void 0),"/src/app/ui/components/base/base-pill/BasePill.vue": () => __vitePreload(() => import('./BasePill-CWE1kzS3.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-tab/BaseTab.vue": () => __vitePreload(() => import('./BaseTab-C1uxGNq3.js'),true              ?[]:void 0),"/src/app/ui/components/elements/sidebar-menu/SidebarMenu.vue": () => __vitePreload(() => import('./SidebarMenu-90wyt7zK.js'),true              ?[]:void 0),"/src/app/ui/components/elements/table-list/TableList.vue": () => __vitePreload(() => import('./TableList-ByvHhllk.js'),true              ?[]:void 0),"/src/app/ui/components/icons/__mocks__/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-CcnsliOJ.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-DPFtN3Ve.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAddDocument.vue": () => __vitePreload(() => import('./iconAddDocument-BeU00dQa.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdministration.vue": () => __vitePreload(() => import('./iconAdministration-CvuTHQJT.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconArrowRight.vue": () => __vitePreload(() => import('./iconArrowRight-CIQm02Sm.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconCustomer.vue": () => __vitePreload(() => import('./iconCustomer-uziDEBhG.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconDropDown.vue": () => __vitePreload(() => import('./iconDropDown-DMOyrW-U.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconFolder.vue": () => __vitePreload(() => import('./iconFolder-BKa70tu1.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconManegement.vue": () => __vitePreload(() => import('./iconManegement-CCTxKMvp.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconPrint.vue": () => __vitePreload(() => import('./iconPrint-DM_ClANH.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSearch.vue": () => __vitePreload(() => import('./iconSearch-C3uWFicX.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconStar.vue": () => __vitePreload(() => import('./iconStar-Dfs7rZmB.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSubtract.vue": () => __vitePreload(() => import('./iconSubtract-DaiCiSC4.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-error/StateError.vue": () => __vitePreload(() => import('./StateError-BTmIrS3_.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-loader/StateLoader.vue": () => __vitePreload(() => import('./StateLoader-T2mFyijj.js'),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-body/AccordionBody.vue": () => __vitePreload(() => import('./AccordionBody-kOZVKYrh.js'),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-info/AccordionInfo.vue": () => __vitePreload(() => import('./AccordionInfo-CuqDqfr9.js'),true              ?[]:void 0),"/src/app/ui/components/tools/navigation-tabs/NavigationTabs.vue": () => __vitePreload(() => import('./NavigationTabs-C_yq4rwb.js'),true              ?[]:void 0),"/src/app/ui/components/tools/user-info-menu/UserInfoMenu.vue": () => __vitePreload(() => import('./UserInfoMenu-P0ETj3tI.js'),true              ?[]:void 0)}),
          filter: filterByBrand
        }),
        filter: name
      });
      return Object.keys(filterByName).length > 0 ? filterByName : defaultPath;
    }
    return defaultPath;
  };
  const filteredPaths = ({
    collection,
    filter
  }) => {
    const filterRegex = new RegExp(`\\b${escapeRegExp(new useIsString(filter).value)}\\b`, "i");
    return Object.fromEntries(Object.entries(collection).filter(([key]) => filterRegex.test(key)));
  };
  const asyncLoader = async () => {
    const { parseGlobModules } = mapping({ modules: getPathsList() });
    const { create } = loader({ modules: parseGlobModules() });
    return await create({ component: name });
  };
  return { getPathsList, filteredPaths, asyncLoader };
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseIcon",
  props: {
    /**
     * Set the name of the ui icon component
     */
    name: {
      type: String,
      required: true,
      validator: (type) => {
        new useValidateTypeUnion(
          new useIsArray([...SUITABLE_NAMES]).value,
          new useIsString(type).value
        );
        return true;
      }
    },
    /**
     * Set the size of the ui icon component [m, s]
     */
    size: {
      type: String,
      default: useDefaultSizeKey.description,
      validator: (type) => {
        new useValidateTypeUnion(
          new useIsArray([...SUITABLE_SIZES]).value,
          new useIsString(type).value
        );
        return true;
      }
    },
    /**
     * Set the semantic meaning of the ui icon component
     */
    semanticMeaning: {
      type: String,
      default: DEFAULT_RULE_TYPE,
      validator: (type) => {
        new useValidateTypeUnion(
          new useIsArray([...SUITABLE_SEMANTIC_RULES]).value,
          new useIsString(type).value
        );
        return true;
      }
    }
  },
  setup(__props) {
    const props = __props;
    const { name, size, semanticMeaning } = toRefs(props);
    const baseIconSize = computed(() => {
      if (typeof size.value !== "string") {
        return;
      }
      return size.value;
    });
    const asyncComponents = shallowRef();
    const semanticIconType = computed(() => {
      return SEMANTIC_RULES[semanticMeaning?.value];
    });
    watchEffect(async () => {
      if (!name.value) {
        return;
      }
      const { asyncLoader } = useIconsGlobFilesHandle({
        name: name.value
      });
      asyncComponents.value = await asyncLoader();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(asyncComponents.value), mergeProps({
        class: ["base-icon", `base-icon--is-${baseIconSize.value}`]
      }, semanticIconType.value), null, 16, ["class"]);
    };
  }
});

const BaseIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-98c40608"]]);

const BaseIcon$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: BaseIcon
}, Symbol.toStringTag, { value: 'Module' }));

export { BaseIcon as default };
