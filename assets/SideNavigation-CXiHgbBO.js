import { l as defineStore, m as reactive, c as computed, d as defineComponent, n as inject, s as storeToRefs, q as ref, t as useRoute, g as createElementBlock, j as createVNode, w as withCtx, k as unref, F as Fragment, v as mergeProps, x as createSlots, y as createTextVNode, z as toDisplayString, e as openBlock } from './index-B8dVr3XC.js';
import SidebarMenu from './SidebarMenu-CM2k6j3K.js';
import BaseButton from './BaseButton-bKwyqrrq.js';
import { c as keyUseTranslation } from './symbols-r3KuG7tB.js';
import './index-DusSqiUz.js';
import './index-0W8rK_An.js';
import './TransitionIs.scss_vue_type_style_index_1_src_true_lang-DaJU3a6O.js';
import './_plugin-vue_export-helper-pcqpp-6-.js';
import './constants-BiwEcvJW.js';
import './ComponentIs.scss_vue_type_style_index_0_src_true_lang-CC0S4Kf9.js';

const globalNavigation = {
  items: [
    {
      id: "adm",
      translation: "administration",
      icon: "iconAdministration",
      to: { name: "Admin" }
    },
    {
      id: "cst",
      translation: "customers",
      icon: "iconCustomer",
      to: { name: "Customers" }
    },
    {
      id: "acc",
      translation: "accounts",
      icon: "iconFolder",
      to: { name: "Accounts" }
    }
  ]
};

const useGlobalNavigation = defineStore("useGlobalNavigation", () => {
  const state = reactive(structuredClone(globalNavigation));
  const mainNavigationItems = computed(() => state.items);
  return {
    state,
    mainNavigationItems
  };
});
const useGlobalNavigationStore = useGlobalNavigation();

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SideNavigation",
  setup(__props) {
    const useTranslation = inject(keyUseTranslation);
    const { translate } = useTranslation();
    const { mainNavigationItems } = storeToRefs(useGlobalNavigationStore);
    const expandedState = ref(false);
    const setExpandState = () => {
      expandedState.value = !expandedState.value;
    };
    const bindExpandedProps = (expanded) => {
      return {
        isRounded: !expanded,
        isFullSize: expanded,
        isFullRounded: !expanded,
        size: expanded ? "l" : "s",
        style: expanded ? {} : { "--custom-background": "hsla(219, 100%, 18%, 1)" }
      };
    };
    const route = useRoute();
    const currentRoot = computed(() => {
      if (!route) {
        return;
      }
      const {
        meta: { family }
      } = route;
      const currentFamily = family;
      return currentFamily.replace(/^./, currentFamily[0].toUpperCase());
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(SidebarMenu, {
          navigation: unref(mainNavigationItems),
          isExpanded: expandedState.value
        }, {
          navigation: withCtx(({ property: { id, translation, icon, to, isExpanded } }) => [
            createVNode(BaseButton, mergeProps({
              id,
              is: "router-link",
              to,
              hasIcon: icon,
              disabled: to.name === currentRoot.value
            }, { ...bindExpandedProps(isExpanded) }), createSlots({ _: 2 }, [
              isExpanded ? {
                name: "default",
                fn: withCtx(() => [
                  createTextVNode(toDisplayString(unref(translate)({ key: `NAVIGATION.items.${translation}` })), 1)
                ]),
                key: "0"
              } : void 0
            ]), 1040, ["id", "to", "hasIcon", "disabled"])
          ]),
          _: 1
        }, 8, ["navigation", "isExpanded"]),
        createVNode(BaseButton, {
          id: "expand",
          hasIcon: "iconDropDown",
          style: { "--custom-background": "hsla(358, 78%, 27%, 1)" },
          onClick: setExpandState
        })
      ], 64);
    };
  }
});

export { _sfc_main as default };
