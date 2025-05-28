import { d as defineComponent, j as inject, s as storeToRefs, i as computed, c as createElementBlock, b as createVNode, w as withCtx, u as unref, n as createSlots, F as Fragment, p as createTextVNode, t as toDisplayString, o as openBlock, q as keyUseTranslation } from './index-De3N5Jaj.js';
import NavigationTabs from './NavigationTabs-iBrSw51q.js';
import BaseTab from './BaseTab-BFoDfl3r.js';
import AccordionInfo from './AccordionInfo-CpY018Bt.js';
import AccordionBody from './AccordionBody-BIEt5n7m.js';
import BaseIcon from './BaseIcon-xREOLKNS.js';
import BaseButton from './BaseButton-DM4CEr0r.js';
import { u as useCustomerDataStore, a as useDefaultPanelIconsStore } from './icons-QcrBBKJ3.js';
import './index-D92cg9IP.js';
import './TransitionIs.scss_vue_type_style_index_1_src_true_lang-Cy1RmGSY.js';
import './ComponentIs.scss_vue_type_style_index_0_src_true_lang-CKn-0rRp.js';
import './constants-BOYW6QZ0.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CustomerBoard",
  setup(__props) {
    const useTranslation = inject(keyUseTranslation);
    const { translate } = useTranslation();
    const { customerID, completeName, customerAreas } = storeToRefs(useCustomerDataStore);
    const { defaultIcons: DEFAULT_ICONS, defaultActions: DEFAULT_ACTIONS } = storeToRefs(useDefaultPanelIconsStore);
    const hasCustomerAreas = computed(() => customerAreas.value.length > 0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(AccordionBody, {
          hasIcon: "iconCustomer",
          actions: unref(DEFAULT_ICONS),
          open: ""
        }, {
          summary: withCtx(() => [
            createTextVNode(toDisplayString(unref(translate)({ key: `CUSTOMER.client`, options: { id: unref(customerID), name: unref(completeName) } })), 1)
          ]),
          actions: withCtx(({ property: { id, icon } }) => [
            createVNode(BaseIcon, {
              id,
              name: icon
            }, null, 8, ["id", "name"])
          ]),
          content: withCtx(() => [
            createVNode(AccordionInfo, { actions: unref(DEFAULT_ACTIONS) }, {
              summary: withCtx(() => [
                createTextVNode(toDisplayString(unref(translate)({ key: `CUSTOMER.client`, options: { id: unref(customerID) } })), 1)
              ]),
              content: withCtx(() => [
                createTextVNode(toDisplayString(unref(translate)({ key: `MOCKS.panels.client` })), 1)
              ]),
              actions: withCtx(({ property: { id, icon } }) => [
                createVNode(BaseButton, {
                  id,
                  hasIcon: icon,
                  size: "s",
                  isRounded: false,
                  unsetStyle: true,
                  style: { "--custom-foreground": "black" }
                }, null, 8, ["id", "hasIcon"])
              ]),
              _: 1
            }, 8, ["actions"])
          ]),
          _: 1
        }, 8, ["actions"]),
        createVNode(AccordionBody, {
          hasIcon: "iconCustomer",
          actions: unref(DEFAULT_ICONS),
          open: ""
        }, createSlots({
          summary: withCtx(() => [
            createTextVNode(toDisplayString(unref(translate)({ key: `CUSTOMER.labels.details` })), 1)
          ]),
          actions: withCtx(({ property: { id, icon } }) => [
            createVNode(BaseIcon, {
              id,
              name: icon
            }, null, 8, ["id", "name"])
          ]),
          _: 2
        }, [
          hasCustomerAreas.value ? {
            name: "content",
            fn: withCtx(() => [
              createVNode(NavigationTabs, { tabs: unref(customerAreas) }, {
                tab: withCtx(({ property: { id, translation, to, selected = false } }) => [
                  createVNode(BaseTab, {
                    id,
                    to,
                    isSelected: selected,
                    is: "router-link"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(translate)({ key: `MOCKS.areas.${translation}` })), 1)
                    ]),
                    _: 2
                  }, 1032, ["id", "to", "isSelected"])
                ]),
                _: 1
              }, 8, ["tabs"])
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["actions"])
      ], 64);
    };
  }
});

export { _sfc_main as default };
