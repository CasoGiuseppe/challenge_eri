import { _ as __vitePreload, J as defineAsyncComponent } from './index-B8dVr3XC.js';
import { u as useIsString } from './index-DusSqiUz.js';
import { _ as _sfc_main } from './StateError.scss_vue_type_style_index_0_src_true_lang-DNTcNdzi.js';
import UserStateLoader from './StateLoader-KoxNMG_j.js';

const removeFileNameExtension = (name) => {
  const currentName = new useIsString(name).value;
  return currentName.replace(/\.[^/.]+$/, "");
};
const escapeRegExp = (string) => {
  return new useIsString(string).value.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
};

function useComponentsMapping({
  modules = /* #__PURE__ */ Object.assign({"/src/app/ui/components/abstracts/component-is/ComponentIs.vue": () => __vitePreload(() => import('./ComponentIs-CL5pENQS.js'),true              ?[]:void 0),"/src/app/ui/components/abstracts/transition-is/TransitionIs.vue": () => __vitePreload(() => import('./TransitionIs-k89rpS0t.js'),true              ?[]:void 0),"/src/app/ui/components/base/BaseIndex.vue": () => __vitePreload(() => import('./BaseIndex-HhcfpBd6.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-button/BaseButton.vue": () => __vitePreload(() => import('./BaseButton-bKwyqrrq.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-icon/BaseIcon.vue": () => __vitePreload(() => import('./BaseIcon-CoopWV9A.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-pill/BasePill.vue": () => __vitePreload(() => import('./BasePill-CBqz46K7.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-tab/BaseTab.vue": () => __vitePreload(() => import('./BaseTab-lEU07J3a.js'),true              ?[]:void 0),"/src/app/ui/components/elements/sidebar-menu/SidebarMenu.vue": () => __vitePreload(() => import('./SidebarMenu-CM2k6j3K.js'),true              ?[]:void 0),"/src/app/ui/components/elements/table-list/TableList.vue": () => __vitePreload(() => import('./TableList-D0YOV6WY.js'),true              ?[]:void 0),"/src/app/ui/components/icons/__mocks__/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-CKffGKgE.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-B6aEzMwz.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAddDocument.vue": () => __vitePreload(() => import('./iconAddDocument-BlyRpEUc.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdministration.vue": () => __vitePreload(() => import('./iconAdministration-D7UMv1P6.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconArrowRight.vue": () => __vitePreload(() => import('./iconArrowRight-CAdri9RO.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconCustomer.vue": () => __vitePreload(() => import('./iconCustomer-BiuAz0hT.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconDropDown.vue": () => __vitePreload(() => import('./iconDropDown-BzAgMWo6.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconFolder.vue": () => __vitePreload(() => import('./iconFolder-BF9MtXk9.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconManegement.vue": () => __vitePreload(() => import('./iconManegement-BR70wyax.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconPrint.vue": () => __vitePreload(() => import('./iconPrint-CVBgd8fy.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSearch.vue": () => __vitePreload(() => import('./iconSearch-DfKmPA88.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconStar.vue": () => __vitePreload(() => import('./iconStar-IE_-2NXA.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSubtract.vue": () => __vitePreload(() => import('./iconSubtract-Rcdlt2pG.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-error/StateError.vue": () => __vitePreload(() => import('./StateError-BooVi-Wj.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-loader/StateLoader.vue": () => __vitePreload(() => import('./StateLoader-KoxNMG_j.js'),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-body/AccordionBody.vue": () => __vitePreload(() => import('./AccordionBody-Bq1A5nM6.js'),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-info/AccordionInfo.vue": () => __vitePreload(() => import('./AccordionInfo-ChiX6Sjm.js'),true              ?[]:void 0),"/src/app/ui/components/tools/navigation-tabs/NavigationTabs.vue": () => __vitePreload(() => import('./NavigationTabs-CJhlryFs.js'),true              ?[]:void 0),"/src/app/ui/components/tools/user-info-menu/UserInfoMenu.vue": () => __vitePreload(() => import('./UserInfoMenu-DNbAX6qo.js'),true              ?[]:void 0)})
} = {}) {
  const parseGlobModules = () => {
    return Object.entries(modules).reduce(
      (acc = {}, [item, module]) => {
        const moduleSplitted = item.split("/");
        const name = moduleSplitted.at(-1);
        if (!name) {
          return acc;
        }
        return {
          ...acc,
          [removeFileNameExtension(new useIsString(name).value)]: module
        };
      },
      {}
    );
  };
  return { parseGlobModules };
}

function useAsyncComponents({
  modules
}) {
  const create = async ({
    component,
    error = _sfc_main,
    loader = UserStateLoader
  }) => {
    if (!modules) {
      return error;
    }
    if (Object.keys(modules).length === 0) {
      return error;
    }
    if (Object.keys(modules).length === 0) {
      return error;
    }
    const currentLoader = modules[component];
    if (currentLoader === void 0) {
      return error;
    }
    return defineAsyncComponent({
      errorComponent: error,
      loadingComponent: loader,
      loader: currentLoader
    });
  };
  return { create };
}

export { useComponentsMapping as a, escapeRegExp as e, useAsyncComponents as u };
