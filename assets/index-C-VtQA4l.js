import { _ as __vitePreload, J as defineAsyncComponent } from './index-CaKh6aO8.js';
import { u as useIsString } from './index-DusSqiUz.js';
import { _ as _sfc_main } from './StateError.scss_vue_type_style_index_0_src_true_lang-DIsq6AAJ.js';
import UserStateLoader from './StateLoader-B2MwwhDE.js';

const removeFileNameExtension = (name) => {
  const currentName = new useIsString(name).value;
  return currentName.replace(/\.[^/.]+$/, "");
};
const escapeRegExp = (string) => {
  return new useIsString(string).value.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
};

function useComponentsMapping({
  modules = /* #__PURE__ */ Object.assign({"/src/app/ui/components/abstracts/component-is/ComponentIs.vue": () => __vitePreload(() => import('./ComponentIs-CxdP8wxs.js'),true              ?[]:void 0),"/src/app/ui/components/abstracts/transition-is/TransitionIs.vue": () => __vitePreload(() => import('./TransitionIs-DZpq07IP.js'),true              ?[]:void 0),"/src/app/ui/components/base/BaseIndex.vue": () => __vitePreload(() => import('./BaseIndex-CFtyieJy.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-button/BaseButton.vue": () => __vitePreload(() => import('./BaseButton-BJ-nGMyU.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-icon/BaseIcon.vue": () => __vitePreload(() => import('./BaseIcon-3GbxacB3.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-pill/BasePill.vue": () => __vitePreload(() => import('./BasePill-D4Fx8ci9.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-tab/BaseTab.vue": () => __vitePreload(() => import('./BaseTab-BHHQJ-pE.js'),true              ?[]:void 0),"/src/app/ui/components/elements/sidebar-menu/SidebarMenu.vue": () => __vitePreload(() => import('./SidebarMenu-D47URQK8.js'),true              ?[]:void 0),"/src/app/ui/components/elements/table-list/TableList.vue": () => __vitePreload(() => import('./TableList-DKnWX6b_.js'),true              ?[]:void 0),"/src/app/ui/components/icons/__mocks__/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-Bl-qy_w3.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-DhR8A6V0.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAddDocument.vue": () => __vitePreload(() => import('./iconAddDocument-H5kZdzHl.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdministration.vue": () => __vitePreload(() => import('./iconAdministration-bxxwKQXH.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconArrowRight.vue": () => __vitePreload(() => import('./iconArrowRight-R8aUkQ_H.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconCustomer.vue": () => __vitePreload(() => import('./iconCustomer-CZg4jUPd.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconDropDown.vue": () => __vitePreload(() => import('./iconDropDown-BSUoNf6p.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconFolder.vue": () => __vitePreload(() => import('./iconFolder-BJLTYVrT.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconManegement.vue": () => __vitePreload(() => import('./iconManegement-DYS8a9oY.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconPrint.vue": () => __vitePreload(() => import('./iconPrint-Cv61UI8X.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSearch.vue": () => __vitePreload(() => import('./iconSearch-Bf-bAKEH.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconStar.vue": () => __vitePreload(() => import('./iconStar-BGAtGyYX.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSubtract.vue": () => __vitePreload(() => import('./iconSubtract-DYKHBbq-.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-error/StateError.vue": () => __vitePreload(() => import('./StateError-CD1P41Fk.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-loader/StateLoader.vue": () => __vitePreload(() => import('./StateLoader-B2MwwhDE.js'),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-body/AccordionBody.vue": () => __vitePreload(() => import('./AccordionBody-CQz4X1Db.js'),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-info/AccordionInfo.vue": () => __vitePreload(() => import('./AccordionInfo-BOhURZHi.js'),true              ?[]:void 0),"/src/app/ui/components/tools/navigation-tabs/NavigationTabs.vue": () => __vitePreload(() => import('./NavigationTabs-CpjVjxCF.js'),true              ?[]:void 0),"/src/app/ui/components/tools/user-info-menu/UserInfoMenu.vue": () => __vitePreload(() => import('./UserInfoMenu-DqLOJ0Sx.js'),true              ?[]:void 0)})
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
