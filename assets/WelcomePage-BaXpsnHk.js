import BaseButton from './BaseButton-DM4CEr0r.js';
import { d as defineComponent, j as inject, c as createElementBlock, a as createBaseVNode, b as createVNode, t as toDisplayString, u as unref, w as withCtx, p as createTextVNode, o as openBlock, q as keyUseTranslation, _ as _export_sfc } from './index-De3N5Jaj.js';
import './index-D92cg9IP.js';
import './constants-BOYW6QZ0.js';
import './ComponentIs.scss_vue_type_style_index_0_src_true_lang-CKn-0rRp.js';

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
