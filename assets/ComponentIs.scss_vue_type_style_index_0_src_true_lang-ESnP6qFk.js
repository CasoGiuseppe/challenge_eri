import { u as useIsString } from './index-DusSqiUz.js';
import { u as useValidateTypeUnion, a as useIsArray } from './index-0W8rK_An.js';
import { d as defineComponent, A as useAttrs, B as toRefs, c as computed, b as createBlock, r as resolveComponent, v as mergeProps, k as unref, w as withCtx, f as resolveDynamicComponent, H as renderSlot, e as openBlock } from './index-BtHDwOie.js';

const SUITABLE_IS = ["button", "router-link"];
const useDefaultIsKey = Symbol("button");

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComponentIs",
  props: {
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
  setup(__props) {
    const attrs = useAttrs();
    const props = __props;
    const { is } = toRefs(props);
    const isInternalLink = computed(() => is.value === "router-link");
    const toRouter = computed(() => {
      const { to = { path: "/" } } = attrs;
      return to;
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return isInternalLink.value ? (openBlock(), createBlock(_component_RouterLink, mergeProps({ key: 0 }, unref(attrs), {
        to: toRouter.value,
        class: "component-is"
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["to"])) : (openBlock(), createBlock(resolveDynamicComponent(unref(is)), {
        key: 1,
        class: "component-is"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }));
    };
  }
});

export { SUITABLE_IS as S, _sfc_main as _, useDefaultIsKey as u };
