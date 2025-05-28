import { d as defineComponent, x as toRefs, i as computed, l as useRoute, c as createElementBlock, D as createCommentVNode, a as createBaseVNode, b as createVNode, w as withCtx, e as createBlock, u as unref, C as useIsString, r as resolveComponent, F as Fragment, N as renderList, f as resolveDynamicComponent, o as openBlock, O as normalizeStyle, E as renderSlot, _ as _export_sfc } from './index-De3N5Jaj.js';
import { a as useIsArray } from './index-D92cg9IP.js';
import { _ as _sfc_main$1 } from './TransitionIs.scss_vue_type_style_index_1_src_true_lang-Cy1RmGSY.js';

const _hoisted_1 = ["id"];
const _hoisted_2 = {
  key: 0,
  class: "navigation-tabs__bar"
};
const _hoisted_3 = { class: "navigation-tabs__view" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NavigationTabs",
  props: {
    /**
     * Set uniqueId for ui navigation tabs component
     */
    id: {
      type: String,
      validator: (type) => {
        new useIsString(type);
        return true;
      }
    },
    /**
     * Set the navigation items
     */
    tabs: {
      type: Array,
      validator: (type) => {
        new useIsArray(type);
        return true;
      }
    }
  },
  setup(__props) {
    const route = useRoute();
    const props = __props;
    const { tabs } = toRefs(props);
    const hasTabs = computed(() => {
      const evaluables = [tabs?.value !== void 0, (tabs?.value?.length ?? 0) > 0];
      return evaluables.every((state) => state);
    });
    const currentRoot = computed(() => {
      if (!route) {
        return;
      }
      const { name } = route;
      return name;
    });
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createElementBlock("section", {
        id: __props.id,
        class: "navigation-tabs"
      }, [
        hasTabs.value ? (openBlock(), createElementBlock("nav", _hoisted_2, [
          createVNode(_sfc_main$1, {
            class: "navigation-tabs__list",
            group: "",
            tag: "ul",
            type: "from-bottom"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tabs), ({ id, translation, to }, index) => {
                return openBlock(), createElementBlock("li", {
                  key: id,
                  style: normalizeStyle({ transitionDelay: `${index * 0.15}s` })
                }, [
                  renderSlot(_ctx.$slots, "tab", {
                    property: { id, translation, to, selected: to.name === currentRoot.value }
                  }, void 0, true)
                ], 4);
              }), 128))
            ]),
            _: 3
          })
        ])) : createCommentVNode("", true),
        createBaseVNode("section", _hoisted_3, [
          unref(route) ? (openBlock(), createBlock(_component_RouterView, {
            key: 0,
            name: "tabs"
          }, {
            default: withCtx(({ Component }) => [
              createVNode(_sfc_main$1, { type: "from-bottom" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component)))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ], 8, _hoisted_1);
    };
  }
});

const NavigationTabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b634f7b"]]);

export { NavigationTabs as default };
