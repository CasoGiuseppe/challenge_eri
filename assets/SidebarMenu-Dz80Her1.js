import { u as useIsString } from './index-DusSqiUz.js';
import { a as useIsArray } from './index-0W8rK_An.js';
import { _ as _sfc_main$1 } from './TransitionIs.scss_vue_type_style_index_1_src_true_lang-CL6jkwDO.js';
import { d as defineComponent, B as toRefs, c as computed, g as createElementBlock, E as normalizeClass, G as createCommentVNode, j as createVNode, w as withCtx, F as Fragment, K as renderList, k as unref, e as openBlock, L as normalizeStyle, H as renderSlot } from './index-BtHDwOie.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const _hoisted_1 = {
  key: 0,
  class: "sidebar-menu__list"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenu",
  props: {
    /**
     * Set uniqueId for ui sidebar component
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
    navigation: {
      type: Array,
      validator: (type) => {
        new useIsArray(type);
        return true;
      }
    },
    /**
     * Set expanded sidebar state
     */
    isExpanded: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    const { navigation } = toRefs(props);
    const hasNavigation = computed(() => {
      const evaluables = [navigation?.value !== void 0, (navigation?.value?.length ?? 0) > 0];
      return evaluables.every((state) => state);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(["sidebar-menu", __props.isExpanded ? "sidebar-menu--is-expanded" : null])
      }, [
        hasNavigation.value ? (openBlock(), createElementBlock("nav", _hoisted_1, [
          createVNode(_sfc_main$1, {
            class: "sidebar-menu__items",
            group: "",
            tag: "ul",
            type: "from-left"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(navigation), ({ id, translation, icon, to }, index) => {
                return openBlock(), createElementBlock("li", {
                  key: id,
                  style: normalizeStyle({ transitionDelay: `${index * 0.15}s` })
                }, [
                  renderSlot(_ctx.$slots, "navigation", {
                    property: { id, translation, icon, to, isExpanded: __props.isExpanded }
                  }, void 0, true)
                ], 4);
              }), 128))
            ]),
            _: 3
          })
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});

const SidebarMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b909c57b"]]);

export { SidebarMenu as default };
