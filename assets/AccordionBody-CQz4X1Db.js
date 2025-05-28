import { d as defineComponent, q as ref, B as toRefs, n as inject, _ as __vitePreload, C as shallowRef, c as computed, P as onMounted, g as createElementBlock, h as createBaseVNode, G as createCommentVNode, j as createVNode, k as unref, b as createBlock, H as renderSlot, f as resolveDynamicComponent, w as withCtx, F as Fragment, K as renderList, Q as normalizeProps, v as mergeProps, e as openBlock, L as normalizeStyle } from './index-CaKh6aO8.js';
import { u as useIsString } from './index-DusSqiUz.js';
import { u as useValidateTypeUnion, a as useIsArray } from './index-0W8rK_An.js';
import { S as SUITABLE_NAMES } from './constants-BFgLdoRy.js';
import { _ as _sfc_main$1 } from './TransitionIs.scss_vue_type_style_index_1_src_true_lang-CgCQgZY4.js';
import { b as keyUseRenderableSlot, a as keyUseMappingComponent, k as keyUseAsyncComponent } from './symbols-r3KuG7tB.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const _hoisted_1 = ["id", "title", "open"];
const _hoisted_2 = {
  id: "accordion-summary",
  class: "accordion-body__summary"
};
const _hoisted_3 = {
  key: 0,
  class: "accordion-body__title"
};
const _hoisted_4 = {
  key: 0,
  id: "accordion-content",
  class: "accordion-body__content"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AccordionBody",
  props: {
    /**
     * Set uniqueId for ui accordion component
     */
    id: {
      type: String,
      validator: (type) => {
        new useIsString(type);
        return true;
      }
    },
    /**
     * Set the aria accesibility label
     */
    title: {
      type: String,
      default: "Accordion title"
    },
    /**
     * Set accordion open/close state
     */
    open: {
      type: Boolean,
      default: false
    },
    /**
     * Set action button collection
     */
    actions: {
      type: Array,
      validator: (type) => {
        new useIsArray(type);
        return true;
      }
    },
    /**
     * Set the name of the ui accordion component
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
    }
  },
  setup(__props) {
    const currentIcon = ref(null);
    const props = __props;
    const { id, actions, hasIcon } = toRefs(props);
    const useRenderableKeyCheck = inject(keyUseRenderableSlot);
    const useMappingKeyGetter = inject(keyUseMappingComponent);
    const useAsyncKeyLoader = inject(keyUseAsyncComponent);
    const { parseGlobModules } = useMappingKeyGetter({
      modules: /* #__PURE__ */ Object.assign({"/src/app/ui/components/abstracts/component-is/ComponentIs.vue": () => __vitePreload(() => import('./ComponentIs-CxdP8wxs.js'),true              ?[]:void 0),"/src/app/ui/components/abstracts/transition-is/TransitionIs.vue": () => __vitePreload(() => import('./TransitionIs-DZpq07IP.js'),true              ?[]:void 0),"/src/app/ui/components/base/BaseIndex.vue": () => __vitePreload(() => import('./BaseIndex-CFtyieJy.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-button/BaseButton.vue": () => __vitePreload(() => import('./BaseButton-BJ-nGMyU.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-icon/BaseIcon.vue": () => __vitePreload(() => import('./BaseIcon-3GbxacB3.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-pill/BasePill.vue": () => __vitePreload(() => import('./BasePill-D4Fx8ci9.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-tab/BaseTab.vue": () => __vitePreload(() => import('./BaseTab-BHHQJ-pE.js'),true              ?[]:void 0),"/src/app/ui/components/elements/sidebar-menu/SidebarMenu.vue": () => __vitePreload(() => import('./SidebarMenu-D47URQK8.js'),true              ?[]:void 0),"/src/app/ui/components/elements/table-list/TableList.vue": () => __vitePreload(() => import('./TableList-DKnWX6b_.js'),true              ?[]:void 0),"/src/app/ui/components/icons/__mocks__/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-Bl-qy_w3.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-DhR8A6V0.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAddDocument.vue": () => __vitePreload(() => import('./iconAddDocument-H5kZdzHl.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdministration.vue": () => __vitePreload(() => import('./iconAdministration-bxxwKQXH.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconArrowRight.vue": () => __vitePreload(() => import('./iconArrowRight-R8aUkQ_H.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconCustomer.vue": () => __vitePreload(() => import('./iconCustomer-CZg4jUPd.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconDropDown.vue": () => __vitePreload(() => import('./iconDropDown-BSUoNf6p.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconFolder.vue": () => __vitePreload(() => import('./iconFolder-BJLTYVrT.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconManegement.vue": () => __vitePreload(() => import('./iconManegement-DYS8a9oY.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconPrint.vue": () => __vitePreload(() => import('./iconPrint-Cv61UI8X.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSearch.vue": () => __vitePreload(() => import('./iconSearch-Bf-bAKEH.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconStar.vue": () => __vitePreload(() => import('./iconStar-BGAtGyYX.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSubtract.vue": () => __vitePreload(() => import('./iconSubtract-DYKHBbq-.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-error/StateError.vue": () => __vitePreload(() => import('./StateError-CD1P41Fk.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-loader/StateLoader.vue": () => __vitePreload(() => import('./StateLoader-B2MwwhDE.js'),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-body/AccordionBody.vue": () => __vitePreload(() => Promise.resolve().then(() => AccordionBody$1),true              ?void 0:void 0),"/src/app/ui/components/tools/accordion-info/AccordionInfo.vue": () => __vitePreload(() => import('./AccordionInfo-BOhURZHi.js'),true              ?[]:void 0),"/src/app/ui/components/tools/navigation-tabs/NavigationTabs.vue": () => __vitePreload(() => import('./NavigationTabs-CpjVjxCF.js'),true              ?[]:void 0),"/src/app/ui/components/tools/user-info-menu/UserInfoMenu.vue": () => __vitePreload(() => import('./UserInfoMenu-DqLOJ0Sx.js'),true              ?[]:void 0)})
    });
    const { create } = useAsyncKeyLoader({ modules: parseGlobModules() });
    const { isRenderableSlot } = useRenderableKeyCheck();
    const shallowIconComponent = shallowRef();
    const bindButtonProps = computed(() => {
      return {
        id: `openClose${id?.value}`,
        name: currentIcon.value ?? "iconAdd"
      };
    });
    const hasActions = computed(() => {
      const evaluables = [actions?.value !== void 0, (actions?.value?.length ?? 0) > 0];
      return evaluables.every((state) => state);
    });
    const handleToggle = (event) => {
      const targetDetails = event.target;
      currentIcon.value = targetDetails.open ? "iconSubtract" : "iconAdd";
    };
    onMounted(async () => {
      shallowIconComponent.value = await create({ component: "BaseIcon" });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("details", {
        id: unref(id),
        title: __props.title,
        open: __props.open,
        "aria-labelledby": "accordion-summary",
        "aria-describedby": "accordion-content",
        class: "accordion-body",
        onToggle: handleToggle,
        ref: "accordionDetail"
      }, [
        createBaseVNode("summary", _hoisted_2, [
          unref(isRenderableSlot)("summary") ? (openBlock(), createElementBlock("p", _hoisted_3, [
            shallowIconComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(shallowIconComponent.value), {
              key: 0,
              name: unref(hasIcon)
            }, null, 8, ["name"])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "summary", {}, void 0, true)
          ])) : createCommentVNode("", true),
          createVNode(_sfc_main$1, {
            class: "accordion-body__actions",
            group: "",
            tag: "ul",
            type: "from-bottom"
          }, {
            default: withCtx(() => [
              hasActions.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(actions), ({ id: id2, icon }, index) => {
                return openBlock(), createElementBlock("li", {
                  key: id2,
                  style: normalizeStyle({ transitionDelay: `${index * 0.15}s` })
                }, [
                  renderSlot(_ctx.$slots, "actions", {
                    property: { id: id2, icon }
                  }, void 0, true)
                ], 4);
              }), 128)) : createCommentVNode("", true),
              createBaseVNode("li", null, [
                shallowIconComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(shallowIconComponent.value), normalizeProps(mergeProps({ key: 0 }, { ...bindButtonProps.value })), null, 16)) : createCommentVNode("", true)
              ])
            ]),
            _: 3
          })
        ]),
        unref(isRenderableSlot)("content") ? (openBlock(), createElementBlock("article", _hoisted_4, [
          renderSlot(_ctx.$slots, "content", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ], 40, _hoisted_1);
    };
  }
});

const AccordionBody = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0b10c9ad"]]);

const AccordionBody$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: AccordionBody
}, Symbol.toStringTag, { value: 'Module' }));

export { AccordionBody as default };
