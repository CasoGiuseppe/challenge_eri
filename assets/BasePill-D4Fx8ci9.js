import { u as useIsString } from './index-DusSqiUz.js';
import { u as useValidateTypeUnion, a as useIsArray } from './index-0W8rK_An.js';
import { d as defineComponent, g as createElementBlock, H as renderSlot, E as normalizeClass, e as openBlock } from './index-CaKh6aO8.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const useDefaultTypeKey = Symbol("active");
const SUITABLE_TYPES = ["active", "inactive"];

const _hoisted_1 = ["id"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BasePill",
  props: {
    /**
     * Set uniqueId for ui pill component
     */
    id: {
      type: String,
      validator: (type) => {
        new useIsString(type);
        return true;
      }
    },
    /**
     * Set the size of the ui button component [active, inactive]
     */
    variant: {
      type: String,
      default: useDefaultTypeKey.description,
      validator: (type) => {
        new useValidateTypeUnion(
          new useIsArray([...SUITABLE_TYPES]).value,
          new useIsString(type).value
        );
        return true;
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        id: __props.id,
        class: normalizeClass(["base-pill", `base-pill--is-${__props.variant}`])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 10, _hoisted_1);
    };
  }
});

const BasePill = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4b6ba285"]]);

export { BasePill as default };
