import { u as useIsString } from './index-DusSqiUz.js';
import { a as useIsArray } from './index-0W8rK_An.js';
import { _ as _sfc_main$1 } from './TransitionIs.scss_vue_type_style_index_1_src_true_lang-DgeRIxUp.js';
import { d as defineComponent, B as toRefs, c as computed, g as createElementBlock, G as createCommentVNode, b as createBlock, j as createVNode, w as withCtx, k as unref, F as Fragment, K as renderList, e as openBlock, L as normalizeStyle, H as renderSlot } from './index-LKE7e4cB.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const _hoisted_1 = ["id"];
const _hoisted_2 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TableList",
  props: {
    /**
     * Set uniqueId for ui table component
     */
    id: {
      type: String,
      validator: (type) => {
        new useIsString(type);
        return true;
      }
    },
    /**
     * Set the elements for thead
     */
    head: {
      type: Array,
      validator: (type) => {
        new useIsArray(type);
        return true;
      }
    },
    /**
     * Set the elements for tbody
     */
    body: {
      type: Array,
      required: true,
      validator: (type) => {
        new useIsArray(type);
        return true;
      }
    }
  },
  setup(__props) {
    const props = __props;
    const { id, head, body } = toRefs(props);
    const hasHead = computed(() => {
      const evaluables = [head?.value !== void 0, (head?.value?.length ?? 0) > 0];
      return evaluables.every((state) => state);
    });
    const hasBody = computed(() => {
      const evaluables = [body?.value !== void 0, (body?.value?.length ?? 0) > 0];
      return evaluables.every((state) => state);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", {
        id: unref(id),
        class: "table-list"
      }, [
        hasHead.value ? (openBlock(), createElementBlock("thead", _hoisted_2, [
          createVNode(_sfc_main$1, {
            group: "",
            tag: "tr",
            type: "from-bottom"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(head), ({ id: id2, translation, state }, index) => {
                return openBlock(), createElementBlock("th", {
                  key: id2,
                  style: normalizeStyle({ transitionDelay: `${index * 0.15}s` })
                }, [
                  renderSlot(_ctx.$slots, "head", {
                    property: { translation, state }
                  }, void 0, true)
                ], 4);
              }), 128))
            ]),
            _: 3
          })
        ])) : createCommentVNode("", true),
        hasBody.value ? (openBlock(), createBlock(_sfc_main$1, {
          key: 1,
          group: "",
          tag: "tbody",
          type: "from-bottom"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(body), ({ row }, index) => {
              return openBlock(), createElementBlock("tr", {
                key: index,
                style: normalizeStyle({ transitionDelay: `${index * 0.15}s` })
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(row, ({ id: id2, label, state }) => {
                  return openBlock(), createElementBlock("td", { key: id2 }, [
                    renderSlot(_ctx.$slots, "body", {
                      property: { id: id2, label, state }
                    }, void 0, true)
                  ]);
                }), 128))
              ], 4);
            }), 128))
          ]),
          _: 3
        })) : createCommentVNode("", true)
      ], 8, _hoisted_1);
    };
  }
});

const TableList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b2604a65"]]);

export { TableList as default };
