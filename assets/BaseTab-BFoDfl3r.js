import { d as defineComponent, v as useAttrs, x as toRefs, i as computed, e as createBlock, w as withCtx, u as unref, B as normalizeClass, C as useIsString, E as renderSlot, o as openBlock, _ as _export_sfc } from './index-De3N5Jaj.js';
import { u as useValidateTypeUnion, a as useIsArray } from './index-D92cg9IP.js';
import { u as useDefaultIsKey, _ as _sfc_main$1, S as SUITABLE_IS } from './ComponentIs.scss_vue_type_style_index_0_src_true_lang-CKn-0rRp.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseTab",
  props: {
    /**
     * Set uniqueId for ui tab component
     */
    id: {
      type: String,
      required: true,
      validator: (type) => {
        new useIsString(type);
        return true;
      }
    },
    /**
     * Set selected component state
     */
    isSelected: {
      type: Boolean,
      default: false
    },
    /**
     * Set the component type [button, router-link]
     */
    is: {
      type: String,
      default: useDefaultIsKey.description,
      validator: (variant) => {
        new useValidateTypeUnion(
          new useIsArray([...SUITABLE_IS]).value,
          new useIsString(variant).value
        );
        return true;
      }
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const attrs = useAttrs();
    const props = __props;
    const { id, is } = toRefs(props);
    const emits = __emit;
    const isDisabled = computed(() => {
      const { disabled = false } = attrs;
      return disabled;
    });
    const toRouter = computed(() => {
      const { to = { path: "/" } } = attrs;
      return to;
    });
    const isTypeLink = computed(() => is.value === "router-link");
    const handleClick = () => {
      if (isTypeLink.value) {
        return;
      }
      emits("click", { id: id?.value });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        class: normalizeClass(["base-tab", __props.isSelected ? "base-tab--is-selected" : null]),
        "aria-disabled": isDisabled.value,
        to: toRouter.value,
        is: unref(is),
        onClick: handleClick
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["class", "aria-disabled", "to", "is"]);
    };
  }
});

const BaseTab = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a77b7345"]]);

export { BaseTab as default };
