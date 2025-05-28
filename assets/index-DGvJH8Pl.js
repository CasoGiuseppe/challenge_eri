import { _ as __vitePreload, J as defineAsyncComponent } from './index-D2pe-F0k.js';
import { u as useIsString } from './index-DusSqiUz.js';
import { _ as _sfc_main } from './StateError.scss_vue_type_style_index_0_src_true_lang-gs0lN4gs.js';
import UserStateLoader from './StateLoader-DSRLX-Sn.js';

const removeFileNameExtension = (name) => {
  const currentName = new useIsString(name).value;
  return currentName.replace(/\.[^/.]+$/, "");
};
const escapeRegExp = (string) => {
  return new useIsString(string).value.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
};

function useComponentsMapping({
  modules = /* #__PURE__ */ Object.assign({"/src/app/ui/components/abstracts/component-is/ComponentIs.vue": () => __vitePreload(() => import('./ComponentIs-CEZ88Ibi.js'),true              ?[]:void 0),"/src/app/ui/components/abstracts/transition-is/TransitionIs.vue": () => __vitePreload(() => import('./TransitionIs-BnAv7lLV.js'),true              ?[]:void 0),"/src/app/ui/components/base/BaseIndex.vue": () => __vitePreload(() => import('./BaseIndex-CoogD1wP.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-button/BaseButton.vue": () => __vitePreload(() => import('./BaseButton-AW0677tz.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-icon/BaseIcon.vue": () => __vitePreload(() => import('./BaseIcon-D9uAi4qG.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-pill/BasePill.vue": () => __vitePreload(() => import('./BasePill-hMZMJQjs.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-tab/BaseTab.vue": () => __vitePreload(() => import('./BaseTab-C9dzOpPH.js'),true              ?[]:void 0),"/src/app/ui/components/elements/sidebar-menu/SidebarMenu.vue": () => __vitePreload(() => import('./SidebarMenu-4ncEu6uc.js'),true              ?[]:void 0),"/src/app/ui/components/elements/table-list/TableList.vue": () => __vitePreload(() => import('./TableList-CX2U7et6.js'),true              ?[]:void 0),"/src/app/ui/components/icons/__mocks__/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-CTcR1Rdq.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-BaAHjXQJ.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAddDocument.vue": () => __vitePreload(() => import('./iconAddDocument-CRx9Z9fz.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdministration.vue": () => __vitePreload(() => import('./iconAdministration-D9CuP0hV.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconArrowRight.vue": () => __vitePreload(() => import('./iconArrowRight-D0oDLZYi.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconCustomer.vue": () => __vitePreload(() => import('./iconCustomer-BpxkdKJf.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconDropDown.vue": () => __vitePreload(() => import('./iconDropDown-vHAuvBRv.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconFolder.vue": () => __vitePreload(() => import('./iconFolder-DxD3Gpvf.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconManegement.vue": () => __vitePreload(() => import('./iconManegement-CodY_Xux.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconPrint.vue": () => __vitePreload(() => import('./iconPrint-BHKPLwV-.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSearch.vue": () => __vitePreload(() => import('./iconSearch-DdDwdVQp.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconStar.vue": () => __vitePreload(() => import('./iconStar-D6I5opV3.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSubtract.vue": () => __vitePreload(() => import('./iconSubtract-BeoV0ep3.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-error/StateError.vue": () => __vitePreload(() => import('./StateError-CkrLcPre.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-loader/StateLoader.vue": () => __vitePreload(() => import('./StateLoader-DSRLX-Sn.js'),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-body/AccordionBody.vue": () => __vitePreload(() => import('./AccordionBody-D7e1fQBQ.js'),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-info/AccordionInfo.vue": () => __vitePreload(() => import('./AccordionInfo-borNVRHB.js'),true              ?[]:void 0),"/src/app/ui/components/tools/navigation-tabs/NavigationTabs.vue": () => __vitePreload(() => import('./NavigationTabs-DzInxOVh.js'),true              ?[]:void 0),"/src/app/ui/components/tools/user-info-menu/UserInfoMenu.vue": () => __vitePreload(() => import('./UserInfoMenu-CV9JAJXT.js'),true              ?[]:void 0)})
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
