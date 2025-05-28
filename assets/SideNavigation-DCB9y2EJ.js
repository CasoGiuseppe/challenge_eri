import { g as defineStore, h as reactive, i as computed, d as defineComponent, j as inject, s as storeToRefs, k as ref, l as useRoute, c as createElementBlock, b as createVNode, w as withCtx, u as unref, F as Fragment, m as mergeProps, n as createSlots, p as createTextVNode, t as toDisplayString, o as openBlock, q as keyUseTranslation } from './index-De3N5Jaj.js';
import SidebarMenu from './SidebarMenu-zJvYNmzy.js';
import BaseButton from './BaseButton-DM4CEr0r.js';
import './index-D92cg9IP.js';
import './TransitionIs.scss_vue_type_style_index_1_src_true_lang-Cy1RmGSY.js';
import './constants-BOYW6QZ0.js';
import './ComponentIs.scss_vue_type_style_index_0_src_true_lang-CKn-0rRp.js';

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
