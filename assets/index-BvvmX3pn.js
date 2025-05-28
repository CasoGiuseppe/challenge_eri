import { _ as __vitePreload, J as defineAsyncComponent } from './index-LKE7e4cB.js';
import { u as useIsString } from './index-DusSqiUz.js';
import { _ as _sfc_main } from './StateError.scss_vue_type_style_index_0_src_true_lang-BwgLec6i.js';
import UserStateLoader from './StateLoader-SMgAmH7i.js';

const removeFileNameExtension = (name) => {
  const currentName = new useIsString(name).value;
  return currentName.replace(/\.[^/.]+$/, "");
};
const escapeRegExp = (string) => {
  return new useIsString(string).value.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
};

function useComponentsMapping({
  modules = /* #__PURE__ */ Object.assign({"/src/app/ui/components/abstracts/component-is/ComponentIs.vue": () => __vitePreload(() => import('./ComponentIs-CMDhGidu.js'),true              ?[]:void 0),"/src/app/ui/components/abstracts/transition-is/TransitionIs.vue": () => __vitePreload(() => import('./TransitionIs-DjmMNghf.js'),true              ?[]:void 0),"/src/app/ui/components/base/BaseIndex.vue": () => __vitePreload(() => import('./BaseIndex-7HMnYiVg.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-button/BaseButton.vue": () => __vitePreload(() => import('./BaseButton-BOeKL_gs.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-icon/BaseIcon.vue": () => __vitePreload(() => import('./BaseIcon-Bczk3K_1.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-pill/BasePill.vue": () => __vitePreload(() => import('./BasePill-BgoM0zNK.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-tab/BaseTab.vue": () => __vitePreload(() => import('./BaseTab-Dg6qR_Bu.js'),true              ?[]:void 0),"/src/app/ui/components/elements/sidebar-menu/SidebarMenu.vue": () => __vitePreload(() => import('./SidebarMenu-CK-RIMUv.js'),true              ?[]:void 0),"/src/app/ui/components/elements/table-list/TableList.vue": () => __vitePreload(() => import('./TableList-5HlIWTxo.js'),true              ?[]:void 0),"/src/app/ui/components/icons/__mocks__/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-DM3PeARo.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-m1o9pYRy.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAddDocument.vue": () => __vitePreload(() => import('./iconAddDocument-C_nyvmYd.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdministration.vue": () => __vitePreload(() => import('./iconAdministration-BQz4XUzs.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconArrowRight.vue": () => __vitePreload(() => import('./iconArrowRight-CIpQaSWW.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconCustomer.vue": () => __vitePreload(() => import('./iconCustomer-BS4h1UnF.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconDropDown.vue": () => __vitePreload(() => import('./iconDropDown-CjTFy3fE.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconFolder.vue": () => __vitePreload(() => import('./iconFolder-boqr5oBZ.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconManegement.vue": () => __vitePreload(() => import('./iconManegement-C2ezFhK7.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconPrint.vue": () => __vitePreload(() => import('./iconPrint-skK8ejag.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSearch.vue": () => __vitePreload(() => import('./iconSearch-DVaDV8LS.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconStar.vue": () => __vitePreload(() => import('./iconStar-B8TqDZC-.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSubtract.vue": () => __vitePreload(() => import('./iconSubtract-JDbngpBi.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-error/StateError.vue": () => __vitePreload(() => import('./StateError-BER7lN9q.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-loader/StateLoader.vue": () => __vitePreload(() => import('./StateLoader-SMgAmH7i.js'),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-body/AccordionBody.vue": () => __vitePreload(() => import('./AccordionBody-BnoULQ4t.js'),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-info/AccordionInfo.vue": () => __vitePreload(() => import('./AccordionInfo-Clj6K7gh.js'),true              ?[]:void 0),"/src/app/ui/components/tools/navigation-tabs/NavigationTabs.vue": () => __vitePreload(() => import('./NavigationTabs-DB1mKeXJ.js'),true              ?[]:void 0),"/src/app/ui/components/tools/user-info-menu/UserInfoMenu.vue": () => __vitePreload(() => import('./UserInfoMenu-CvZEirh2.js'),true              ?[]:void 0)})
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
