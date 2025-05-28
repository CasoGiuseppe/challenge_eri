import { d as defineComponent, n as inject, s as storeToRefs, c as computed, g as createElementBlock, j as createVNode, w as withCtx, k as unref, x as createSlots, F as Fragment, y as createTextVNode, z as toDisplayString, e as openBlock } from './index-BtHDwOie.js';
import NavigationTabs from './NavigationTabs-CM0Da2eS.js';
import BaseTab from './BaseTab-f2rpbKvF.js';
import AccordionInfo from './AccordionInfo-DVKHjF-F.js';
import AccordionBody from './AccordionBody-pgLtipVb.js';
import BaseIcon from './BaseIcon-Db5hP7j4.js';
import BaseButton from './BaseButton-Ce4zd4fI.js';
import { c as keyUseTranslation } from './symbols-r3KuG7tB.js';
import { u as useCustomerDataStore, a as useDefaultPanelIconsStore } from './icons-iMW8h0LB.js';
import './index-DusSqiUz.js';
import './index-0W8rK_An.js';
import './TransitionIs.scss_vue_type_style_index_1_src_true_lang-CL6jkwDO.js';
import './_plugin-vue_export-helper-pcqpp-6-.js';
import './ComponentIs.scss_vue_type_style_index_0_src_true_lang-ESnP6qFk.js';
import './constants-Ab3ZY0PW.js';
import './index-DTAH9xqk.js';
import './StateError.scss_vue_type_style_index_0_src_true_lang-fOgxGry6.js';
import './iconAdd-C1DIdjZO.js';
import './StateLoader-CkqCTqn9.js';

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
