import { d as defineComponent, A as useAttrs, B as toRefs, n as inject, _ as __vitePreload, C as shallowRef, c as computed, D as watch, b as createBlock, w as withCtx, k as unref, E as normalizeClass, G as createCommentVNode, g as createElementBlock, f as resolveDynamicComponent, v as mergeProps, H as renderSlot, e as openBlock } from './index-BtHDwOie.js';
import { u as useIsString } from './index-DusSqiUz.js';
import { u as useValidateTypeUnion, a as useIsArray } from './index-0W8rK_An.js';
import { S as SUITABLE_NAMES } from './constants-Ab3ZY0PW.js';
import { u as useDefaultIsKey, _ as _sfc_main$1, S as SUITABLE_IS } from './ComponentIs.scss_vue_type_style_index_0_src_true_lang-ESnP6qFk.js';
import { b as keyUseRenderableSlot, a as keyUseMappingComponent, k as keyUseAsyncComponent } from './symbols-r3KuG7tB.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const useDefaultSizeKey = Symbol("l");
const useDefaultTypeKey = Symbol("primary");
const useDefaultPositionKey = Symbol("leading");
const SUITABLE_SIZES = ["l", "s"];
const SUITABLE_TYPES = ["primary", "secondary"];
const SUITABLE_POSITION = ["leading", "trailing"];
const ICONS = {
  l: "m",
  s: "s"
};

const _hoisted_1 = {
  key: 1,
  class: "base-button__label"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseButton",
  props: {
    /**
     * Set uniqueId for ui button component
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
     * Set the size of the ui button component [l, s]
     */
    size: {
      type: String,
      default: useDefaultSizeKey.description,
      validator: (type) => {
        new useValidateTypeUnion(
          new useIsArray([...SUITABLE_SIZES]).value,
          new useIsString(type).value
        );
        return true;
      }
    },
    /**
     * Set the button variant family [primary, secondary]
     */
    variant: {
      type: String,
      default: useDefaultTypeKey.description,
      validator: (variant) => {
        new useValidateTypeUnion(
          new useIsArray([...SUITABLE_TYPES]).value,
          new useIsString(variant).value
        );
        return true;
      }
    },
    /**
     * Set the name of the ui icon component
     */
    hasIcon: {
      type: String,
      validator: (icon) => {
        new useValidateTypeUnion(
          new useIsArray([...SUITABLE_NAMES]).value,
          new useIsString(icon).value
        );
        return true;
      }
    },
    /**
     * Set the icon positon inside button [leading, trailing]
     */
    iconPosition: {
      type: String,
      default: useDefaultPositionKey.description,
      validator: (position) => {
        new useValidateTypeUnion(
          new useIsArray([...SUITABLE_POSITION]).value,
          new useIsString(position).value
        );
        return true;
      }
    },
    /**
     * Set corner component rounded state
     */
    isRounded: {
      type: Boolean,
      default: true
    },
    /**
     * Set corner component rounded state
     */
    isFullRounded: {
      type: Boolean,
      default: false
    },
    /**
     * Remove applied styles as background or border
     */
    unsetStyle: {
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
    },
    /**
     * Set fullsize component width
     */
    isFullSize: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const attrs = useAttrs();
    const props = __props;
    const { id, size, hasIcon, iconPosition, is } = toRefs(props);
    const emits = __emit;
    const useRenderableKeyCheck = inject(keyUseRenderableSlot);
    const useMappingKeyGetter = inject(keyUseMappingComponent);
    const useAsyncKeyLoader = inject(keyUseAsyncComponent);
    const { parseGlobModules } = useMappingKeyGetter({
      modules: /* #__PURE__ */ Object.assign({"/src/app/ui/components/abstracts/component-is/ComponentIs.vue": () => __vitePreload(() => import('./ComponentIs-DP1UKu2I.js'),true              ?[]:void 0),"/src/app/ui/components/abstracts/transition-is/TransitionIs.vue": () => __vitePreload(() => import('./TransitionIs-CPmTA074.js'),true              ?[]:void 0),"/src/app/ui/components/base/BaseIndex.vue": () => __vitePreload(() => import('./BaseIndex-DyAcDxXX.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-button/BaseButton.vue": () => __vitePreload(() => Promise.resolve().then(() => BaseButton$1),true              ?void 0:void 0),"/src/app/ui/components/base/base-icon/BaseIcon.vue": () => __vitePreload(() => import('./BaseIcon-Db5hP7j4.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-pill/BasePill.vue": () => __vitePreload(() => import('./BasePill-9z_zyjiN.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-tab/BaseTab.vue": () => __vitePreload(() => import('./BaseTab-f2rpbKvF.js'),true              ?[]:void 0),"/src/app/ui/components/elements/sidebar-menu/SidebarMenu.vue": () => __vitePreload(() => import('./SidebarMenu-Dz80Her1.js'),true              ?[]:void 0),"/src/app/ui/components/elements/table-list/TableList.vue": () => __vitePreload(() => import('./TableList-Dc_5D75k.js'),true              ?[]:void 0),"/src/app/ui/components/icons/__mocks__/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-DKZuts4a.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-C1DIdjZO.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAddDocument.vue": () => __vitePreload(() => import('./iconAddDocument-BvHjo3T6.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdministration.vue": () => __vitePreload(() => import('./iconAdministration-DbcLOUsP.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconArrowRight.vue": () => __vitePreload(() => import('./iconArrowRight-BKbIIytz.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconCustomer.vue": () => __vitePreload(() => import('./iconCustomer-BuEjG8SQ.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconDropDown.vue": () => __vitePreload(() => import('./iconDropDown-Hx4aPiXU.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconFolder.vue": () => __vitePreload(() => import('./iconFolder-415T8-7S.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconManegement.vue": () => __vitePreload(() => import('./iconManegement-BoPYkFXM.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconPrint.vue": () => __vitePreload(() => import('./iconPrint-9vjTUw1Q.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSearch.vue": () => __vitePreload(() => import('./iconSearch-BTCtRsR5.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconStar.vue": () => __vitePreload(() => import('./iconStar-C17Tly-Q.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSubtract.vue": () => __vitePreload(() => import('./iconSubtract-AfVhNtil.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-error/StateError.vue": () => __vitePreload(() => import('./StateError-Cs4CxaHe.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-loader/StateLoader.vue": () => __vitePreload(() => import('./StateLoader-CkqCTqn9.js'),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-body/AccordionBody.vue": () => __vitePreload(() => import('./AccordionBody-pgLtipVb.js'),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-info/AccordionInfo.vue": () => __vitePreload(() => import('./AccordionInfo-DVKHjF-F.js'),true              ?[]:void 0),"/src/app/ui/components/tools/navigation-tabs/NavigationTabs.vue": () => __vitePreload(() => import('./NavigationTabs-CM0Da2eS.js'),true              ?[]:void 0),"/src/app/ui/components/tools/user-info-menu/UserInfoMenu.vue": () => __vitePreload(() => import('./UserInfoMenu-rohZvPLh.js'),true              ?[]:void 0)})
    });
    const { create } = useAsyncKeyLoader({ modules: parseGlobModules() });
    const { isRenderableSlot } = useRenderableKeyCheck();
    const shallowIconComponent = shallowRef();
    const isDisabled = computed(() => {
      const { disabled = false } = attrs;
      return disabled;
    });
    const bindIconProps = computed(() => {
      if (!hasIcon?.value) {
        return void 0;
      }
      return {
        name: hasIcon?.value,
        size: ICONS[size.value],
        position: iconPosition.value
      };
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
    watch(
      () => hasIcon?.value,
      async () => {
        if (!hasIcon?.value) {
          return;
        }
        shallowIconComponent.value = await create({ component: "BaseIcon" });
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        id: unref(id),
        class: normalizeClass([
          "base-button",
          `base-button--is-${unref(size)}`,
          `base-button--is-${__props.variant}`,
          !__props.isRounded ? "base-button--is-square" : null,
          __props.unsetStyle ? "base-button--is-unset" : null,
          __props.isFullSize ? "base-button--is-fullsize" : null,
          __props.isFullRounded ? "base-button--is-fullrounded" : null
        ]),
        is: unref(is),
        to: toRouter.value,
        "aria-disabled": isDisabled.value,
        onClick: handleClick
      }, {
        default: withCtx(() => [
          bindIconProps.value ? (openBlock(), createBlock(resolveDynamicComponent(shallowIconComponent.value), mergeProps({
            key: 0,
            "data-testID": "ui-icon"
          }, { ...bindIconProps.value }), null, 16)) : createCommentVNode("", true),
          unref(isRenderableSlot)("default") ? (openBlock(), createElementBlock("p", _hoisted_1, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["id", "class", "is", "to", "aria-disabled"]);
    };
  }
});

const BaseButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0df6b59e"]]);

const BaseButton$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: BaseButton
}, Symbol.toStringTag, { value: 'Module' }));

export { BaseButton as default };
