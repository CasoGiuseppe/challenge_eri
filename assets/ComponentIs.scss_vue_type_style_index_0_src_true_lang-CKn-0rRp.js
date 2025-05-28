import { d as defineComponent, v as useAttrs, x as toRefs, i as computed, e as createBlock, r as resolveComponent, m as mergeProps, u as unref, w as withCtx, f as resolveDynamicComponent, C as useIsString, E as renderSlot, o as openBlock } from './index-De3N5Jaj.js';
import { u as useValidateTypeUnion, a as useIsArray } from './index-D92cg9IP.js';

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
