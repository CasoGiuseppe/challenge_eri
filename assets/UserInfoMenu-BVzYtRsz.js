import { u as useIsString } from './index-DusSqiUz.js';
import { a as useIsArray } from './index-0W8rK_An.js';
import { _ as _sfc_main$1 } from './TransitionIs.scss_vue_type_style_index_1_src_true_lang-Civtt9kr.js';
import { d as defineComponent, B as toRefs, c as computed, g as createElementBlock, G as createCommentVNode, j as createVNode, w as withCtx, F as Fragment, K as renderList, k as unref, e as openBlock, L as normalizeStyle, H as renderSlot } from './index-Dm0sDQBW.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const _hoisted_1 = ["id"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserInfoMenu",
  props: {
    /**
     * Set uniqueId for ui user navigation item
     */
    id: {
      type: String,
      validator: (type) => {
        new useIsString(type);
        return true;
      }
    },
    /**
     * Set the user navigation items
     */
    items: {
      type: Array,
      validator: (type) => {
        new useIsArray(type);
        return true;
      }
    }
  },
  setup(__props) {
    const props = __props;
    const { items } = toRefs(props);
    const hasItems = computed(() => {
      const evaluables = [items?.value !== void 0, (items?.value?.length ?? 0) > 0];
      return evaluables.every((state) => state);
    });
    return (_ctx, _cache) => {
      return hasItems.value ? (openBlock(), createElementBlock("nav", {
        key: 0,
        class: "user-info-menu",
        id: __props.id
      }, [
        createVNode(_sfc_main$1, {
          group: "",
          tag: "ul",
          type: "from-top",
          class: "user-info-menu__list"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(items), ({ id, label, icon, to, type }, index) => {
              return openBlock(), createElementBlock("li", {
                key: id,
                style: normalizeStyle({ transitionDelay: `${index * 0.15}s` })
              }, [
                renderSlot(_ctx.$slots, "action", {
                  property: { id, label, icon, to, type }
                }, void 0, true)
              ], 4);
            }), 128))
          ]),
          _: 3
        })
      ], 8, _hoisted_1)) : createCommentVNode("", true);
    };
  }
});

const UserInfoMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-542bc397"]]);

export { UserInfoMenu as default };
