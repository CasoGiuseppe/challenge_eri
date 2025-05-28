import { _ as _sfc_main$1, S as SUITABLE_TIMING } from './TransitionIs.scss_vue_type_style_index_1_src_true_lang-Cy1RmGSY.js';
import { d as defineComponent, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, r as resolveComponent, u as unref, e as createBlock, f as resolveDynamicComponent, o as openBlock } from './index-De3N5Jaj.js';
import './index-D92cg9IP.js';

const _hoisted_1 = { class: "app-layout" };
const _hoisted_2 = { class: "app-layout__sidebar" };
const _hoisted_3 = { class: "app-layout__header" };
const _hoisted_4 = { class: "app-layout__content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SkeletonRoot",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createElementBlock("section", _hoisted_1, [
        createBaseVNode("aside", _hoisted_2, [
          createVNode(_component_RouterView, { name: "aside" }, {
            default: withCtx(({ Component }) => [
              createVNode(_sfc_main$1, {
                type: "opacity",
                timing: unref(SUITABLE_TIMING).FAST
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component)))
                ]),
                _: 2
              }, 1032, ["timing"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("header", _hoisted_3, [
          createVNode(_component_RouterView, { name: "header" }, {
            default: withCtx(({ Component }) => [
              (openBlock(), createBlock(resolveDynamicComponent(Component)))
            ]),
            _: 1
          })
        ]),
        createBaseVNode("section", _hoisted_4, [
          createVNode(_component_RouterView, { name: "content" }, {
            default: withCtx(({
              Component,
              route: {
                meta: { family }
              }
            }) => [
              createVNode(_sfc_main$1, { type: "from-bottom" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component), { key: family }))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});

export { _sfc_main as default };
