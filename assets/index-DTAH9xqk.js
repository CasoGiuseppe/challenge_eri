import { _ as __vitePreload, J as defineAsyncComponent } from './index-BtHDwOie.js';
import { u as useIsString } from './index-DusSqiUz.js';
import { _ as _sfc_main } from './StateError.scss_vue_type_style_index_0_src_true_lang-fOgxGry6.js';
import UserStateLoader from './StateLoader-CkqCTqn9.js';

const removeFileNameExtension = (name) => {
  const currentName = new useIsString(name).value;
  return currentName.replace(/\.[^/.]+$/, "");
};
const escapeRegExp = (string) => {
  return new useIsString(string).value.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
};

function useComponentsMapping({
  modules = /* #__PURE__ */ Object.assign({"/src/app/ui/components/abstracts/component-is/ComponentIs.vue": () => __vitePreload(() => import('./ComponentIs-DP1UKu2I.js'),true              ?[]:void 0),"/src/app/ui/components/abstracts/transition-is/TransitionIs.vue": () => __vitePreload(() => import('./TransitionIs-CPmTA074.js'),true              ?[]:void 0),"/src/app/ui/components/base/BaseIndex.vue": () => __vitePreload(() => import('./BaseIndex-DyAcDxXX.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-button/BaseButton.vue": () => __vitePreload(() => import('./BaseButton-Ce4zd4fI.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-icon/BaseIcon.vue": () => __vitePreload(() => import('./BaseIcon-Db5hP7j4.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-pill/BasePill.vue": () => __vitePreload(() => import('./BasePill-9z_zyjiN.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-tab/BaseTab.vue": () => __vitePreload(() => import('./BaseTab-f2rpbKvF.js'),true              ?[]:void 0),"/src/app/ui/components/elements/sidebar-menu/SidebarMenu.vue": () => __vitePreload(() => import('./SidebarMenu-Dz80Her1.js'),true              ?[]:void 0),"/src/app/ui/components/elements/table-list/TableList.vue": () => __vitePreload(() => import('./TableList-Dc_5D75k.js'),true              ?[]:void 0),"/src/app/ui/components/icons/__mocks__/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-DKZuts4a.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-C1DIdjZO.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAddDocument.vue": () => __vitePreload(() => import('./iconAddDocument-BvHjo3T6.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdministration.vue": () => __vitePreload(() => import('./iconAdministration-DbcLOUsP.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconArrowRight.vue": () => __vitePreload(() => import('./iconArrowRight-BKbIIytz.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconCustomer.vue": () => __vitePreload(() => import('./iconCustomer-BuEjG8SQ.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconDropDown.vue": () => __vitePreload(() => import('./iconDropDown-Hx4aPiXU.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconFolder.vue": () => __vitePreload(() => import('./iconFolder-415T8-7S.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconManegement.vue": () => __vitePreload(() => import('./iconManegement-BoPYkFXM.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconPrint.vue": () => __vitePreload(() => import('./iconPrint-9vjTUw1Q.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSearch.vue": () => __vitePreload(() => import('./iconSearch-BTCtRsR5.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconStar.vue": () => __vitePreload(() => import('./iconStar-C17Tly-Q.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSubtract.vue": () => __vitePreload(() => import('./iconSubtract-AfVhNtil.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-error/StateError.vue": () => __vitePreload(() => import('./StateError-Cs4CxaHe.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-loader/StateLoader.vue": () => __vitePreload(() => import('./StateLoader-CkqCTqn9.js'),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-body/AccordionBody.vue": () => __vitePreload(() => import('./AccordionBody-pgLtipVb.js'),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-info/AccordionInfo.vue": () => __vitePreload(() => import('./AccordionInfo-DVKHjF-F.js'),true              ?[]:void 0),"/src/app/ui/components/tools/navigation-tabs/NavigationTabs.vue": () => __vitePreload(() => import('./NavigationTabs-CM0Da2eS.js'),true              ?[]:void 0),"/src/app/ui/components/tools/user-info-menu/UserInfoMenu.vue": () => __vitePreload(() => import('./UserInfoMenu-rohZvPLh.js'),true              ?[]:void 0)})
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
