import BaseButton from './BaseButton-DVJ0DiGR.js';
import { c as keyUseTranslation } from './symbols-r3KuG7tB.js';
import { d as defineComponent, n as inject, g as createElementBlock, h as createBaseVNode, j as createVNode, z as toDisplayString, k as unref, w as withCtx, y as createTextVNode, e as openBlock } from './index-C_cS1vHU.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';
import './index-DusSqiUz.js';
import './index-0W8rK_An.js';
import './constants-CmYb1HaZ.js';
import './ComponentIs.scss_vue_type_style_index_0_src_true_lang-D1aLJJW-.js';

const _hoisted_1 = { class: "welcome-page" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WelcomePage",
  setup(__props) {
    const useTranslation = inject(keyUseTranslation);
    const { translate } = useTranslation();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, [
        createBaseVNode("h1", null, toDisplayString(unref(translate)({ key: `WELCOME.message` })), 1),
        createVNode(BaseButton, {
          id: "welcome",
          is: "router-link",
          to: { name: "Customers" }
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(translate)({ key: `WELCOME.link` })), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});

const WelcomePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f8897bd"]]);

export { WelcomePage as default };
