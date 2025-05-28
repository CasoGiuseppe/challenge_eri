import { d as defineComponent, c as computed, b as createBlock, w as withCtx, T as Transition, v as mergeProps, N as TransitionGroup, H as renderSlot, O as useCssVars, e as openBlock } from './index-LKE7e4cB.js';
import { u as useValidateTypeUnion, a as useIsArray } from './index-0W8rK_An.js';
import { u as useIsString } from './index-DusSqiUz.js';

const useDefaultTypeKey = Symbol("opacity");
const SUITABLE_TYPES = [
  "from-top",
  "from-bottom",
  "from-left",
  "from-right",
  "opacity"
];
var SUITABLE_EASING = /* @__PURE__ */ ((SUITABLE_EASING2) => {
  SUITABLE_EASING2["OUT"] = "cubic-bezier(.17, .67, .17, 1.01)";
  SUITABLE_EASING2["ELASTIC"] = "cubic-bezier(.08, 1.48, .69, 1.14)";
  return SUITABLE_EASING2;
})(SUITABLE_EASING || {});
var SUITABLE_TIMING = /* @__PURE__ */ ((SUITABLE_TIMING2) => {
  SUITABLE_TIMING2["NONE"] = "0s";
  SUITABLE_TIMING2["FAST"] = ".5s";
  SUITABLE_TIMING2["NORMAL"] = ".8s";
  return SUITABLE_TIMING2;
})(SUITABLE_TIMING || {});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TransitionIs",
  props: {
    /**
     * Set the type of custom animation [from-bottom, from-left, from-right, from-top]
     */
    type: {
      type: String,
      default: useDefaultTypeKey.description,
      validator: (type) => {
        new useValidateTypeUnion(
          new useIsArray([...SUITABLE_TYPES]).value,
          new useIsString(type).value
        );
        return true;
      }
    },
    /**
     * Set if transition handle a group of elements
     */
    group: {
      type: Boolean,
      default: false
    },
    /**
     * Set easing type
     */
    easing: {
      type: String,
      default: SUITABLE_EASING.OUT
    },
    /**
     * Set the animation velocity
     */
    timing: {
      type: String,
      default: SUITABLE_TIMING.NORMAL
    },
    /**
     * Set delay type
     */
    delay: {
      type: String,
      default: "0s"
    }
  },
  emits: ["enter", "before"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "922045c6": __props.timing,
      "c62dac04": __props.easing,
      "05036650": __props.delay
    }));
    const isNotAGroup = computed(() => !__props.group);
    const removeBehaviour = (el) => {
      el.classList.remove("transition-is");
      el.removeAttribute("style");
    };
    const emits = __emit;
    const afterEnter = (el) => emits("enter", { el });
    const beforeEnter = (el) => emits("before", { el });
    return (_ctx, _cache) => {
      return isNotAGroup.value ? (openBlock(), createBlock(Transition, {
        key: 0,
        name: __props.type,
        mode: "out-in",
        appear: "",
        class: "transition-is",
        onAfterEnter: removeBehaviour
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["name"])) : (openBlock(), createBlock(TransitionGroup, mergeProps({
        key: 1,
        name: __props.type
      }, _ctx.$attrs, {
        mode: "out-in",
        appear: "",
        class: "transition-is",
        onAfterEnter: afterEnter,
        onBeforeEnter: beforeEnter
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["name"]));
    };
  }
});

export { SUITABLE_TIMING as S, _sfc_main as _ };
