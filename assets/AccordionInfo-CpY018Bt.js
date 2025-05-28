import { d as defineComponent, k as ref, x as toRefs, j as inject, y as __vitePreload, z as shallowRef, i as computed, S as onMounted, c as createElementBlock, a as createBaseVNode, D as createCommentVNode, e as createBlock, U as normalizeProps, m as mergeProps, f as resolveDynamicComponent, u as unref, E as renderSlot, w as withCtx, C as useIsString, F as Fragment, N as renderList, o as openBlock, O as normalizeStyle, G as keyUseRenderableSlot, H as keyUseMappingComponent, I as keyUseAsyncComponent, _ as _export_sfc } from './index-De3N5Jaj.js';
import { a as useIsArray } from './index-D92cg9IP.js';
import { _ as _sfc_main$1 } from './TransitionIs.scss_vue_type_style_index_1_src_true_lang-Cy1RmGSY.js';

const _hoisted_1 = ["id", "title", "open"];
const _hoisted_2 = {
  id: "accordion-summary",
  class: "accordion-info__summary"
};
const _hoisted_3 = {
  key: 1,
  class: "accordion-info__title"
};
const _hoisted_4 = {
  key: 0,
  id: "accordion-content",
  class: "accordion-info__content"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AccordionInfo",
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
    }
  },
  setup(__props) {
    const accordionDetail = ref(null);
    const currentIcon = ref(null);
    const props = __props;
    const { id, actions } = toRefs(props);
    const useRenderableKeyCheck = inject(keyUseRenderableSlot);
    const useMappingKeyGetter = inject(keyUseMappingComponent);
    const useAsyncKeyLoader = inject(keyUseAsyncComponent);
    const { parseGlobModules } = useMappingKeyGetter({
      modules: /* #__PURE__ */ Object.assign({"/src/app/ui/components/abstracts/component-is/ComponentIs.vue": () => __vitePreload(() => import('./ComponentIs-3fbbOCuG.js'),true              ?[]:void 0),"/src/app/ui/components/abstracts/transition-is/TransitionIs.vue": () => __vitePreload(() => import('./TransitionIs-jD0TOyW9.js'),true              ?[]:void 0),"/src/app/ui/components/base/BaseIndex.vue": () => __vitePreload(() => import('./BaseIndex-mSLo6sYq.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-button/BaseButton.vue": () => __vitePreload(() => import('./BaseButton-DM4CEr0r.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-icon/BaseIcon.vue": () => __vitePreload(() => import('./BaseIcon-xREOLKNS.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-pill/BasePill.vue": () => __vitePreload(() => import('./BasePill-tBkGjSqv.js'),true              ?[]:void 0),"/src/app/ui/components/base/base-tab/BaseTab.vue": () => __vitePreload(() => import('./BaseTab-BFoDfl3r.js'),true              ?[]:void 0),"/src/app/ui/components/elements/sidebar-menu/SidebarMenu.vue": () => __vitePreload(() => import('./SidebarMenu-zJvYNmzy.js'),true              ?[]:void 0),"/src/app/ui/components/elements/table-list/TableList.vue": () => __vitePreload(() => import('./TableList-9hAaQkaE.js'),true              ?[]:void 0),"/src/app/ui/components/icons/__mocks__/iconAdd.vue": () => __vitePreload(() => import('./iconAdd-DpeZ-VVn.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdd.vue": () => __vitePreload(() => import('./index-De3N5Jaj.js').then(n => n.X),true              ?[]:void 0),"/src/app/ui/components/icons/iconAddDocument.vue": () => __vitePreload(() => import('./iconAddDocument-B6EZ_m6W.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconAdministration.vue": () => __vitePreload(() => import('./iconAdministration-CzXjsmhh.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconArrowRight.vue": () => __vitePreload(() => import('./iconArrowRight-BTn0pfuu.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconCustomer.vue": () => __vitePreload(() => import('./iconCustomer-5JkAFBsc.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconDropDown.vue": () => __vitePreload(() => import('./iconDropDown-tBOsuOO7.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconFolder.vue": () => __vitePreload(() => import('./iconFolder-J5G2Z_kW.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconManegement.vue": () => __vitePreload(() => import('./iconManegement-Bapl14Xg.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconPrint.vue": () => __vitePreload(() => import('./iconPrint-BdQfLI8z.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSearch.vue": () => __vitePreload(() => import('./iconSearch-B5lvQ9Ef.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconStar.vue": () => __vitePreload(() => import('./iconStar-Cd4AVHKK.js'),true              ?[]:void 0),"/src/app/ui/components/icons/iconSubtract.vue": () => __vitePreload(() => import('./iconSubtract-LoblhGO9.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-error/StateError.vue": () => __vitePreload(() => import('./StateError-COQJxKRL.js'),true              ?[]:void 0),"/src/app/ui/components/states/state-loader/StateLoader.vue": () => __vitePreload(() => import('./index-De3N5Jaj.js').then(n => n.Y),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-body/AccordionBody.vue": () => __vitePreload(() => import('./AccordionBody-BIEt5n7m.js'),true              ?[]:void 0),"/src/app/ui/components/tools/accordion-info/AccordionInfo.vue": () => __vitePreload(() => Promise.resolve().then(() => AccordionInfo$1),true              ?void 0:void 0),"/src/app/ui/components/tools/navigation-tabs/NavigationTabs.vue": () => __vitePreload(() => import('./NavigationTabs-iBrSw51q.js'),true              ?[]:void 0),"/src/app/ui/components/tools/user-info-menu/UserInfoMenu.vue": () => __vitePreload(() => import('./UserInfoMenu-BFCBpi3B.js'),true              ?[]:void 0)})
    });
    const { create } = useAsyncKeyLoader({ modules: parseGlobModules() });
    const { isRenderableSlot } = useRenderableKeyCheck();
    const shallowIconComponent = shallowRef();
    const bindIconProps = computed(() => {
      return {
        id: `openClose${id?.value}`,
        size: "s",
        hasIcon: currentIcon.value ?? "iconAdd",
        isRounded: false,
        unsetStyle: true,
        style: { "--custom-foreground": "black" }
      };
    });
    const handleToggle = (event) => {
      const targetDetails = event.target;
      currentIcon.value = targetDetails.open ? "iconSubtract" : "iconAdd";
    };
    const hasActions = computed(() => {
      const evaluables = [actions?.value !== void 0, (actions?.value?.length ?? 0) > 0];
      return evaluables.every((state) => state);
    });
    onMounted(async () => {
      shallowIconComponent.value = await create({ component: "BaseButton" });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("details", {
        id: unref(id),
        title: __props.title,
        open: __props.open,
        "aria-labelledby": "accordion-summary",
        "aria-describedby": "accordion-content",
        class: "accordion-info",
        onToggle: handleToggle,
        ref_key: "accordionDetail",
        ref: accordionDetail
      }, [
        createBaseVNode("summary", _hoisted_2, [
          shallowIconComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(shallowIconComponent.value), normalizeProps(mergeProps({ key: 0 }, { ...bindIconProps.value })), null, 16)) : createCommentVNode("", true),
          unref(isRenderableSlot)("summary") ? (openBlock(), createElementBlock("p", _hoisted_3, [
            renderSlot(_ctx.$slots, "summary", {}, void 0, true)
          ])) : createCommentVNode("", true),
          hasActions.value ? (openBlock(), createBlock(_sfc_main$1, {
            key: 2,
            class: "accordion-info__actions",
            group: "",
            tag: "ul",
            type: "from-bottom"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(actions), ({ id: id2, icon }, index) => {
                return openBlock(), createElementBlock("li", {
                  key: id2,
                  style: normalizeStyle({ transitionDelay: `${index * 0.1}s` })
                }, [
                  renderSlot(_ctx.$slots, "actions", {
                    property: { id: id2, icon }
                  }, void 0, true)
                ], 4);
              }), 128))
            ]),
            _: 3
          })) : createCommentVNode("", true)
        ]),
        unref(isRenderableSlot)("content") ? (openBlock(), createElementBlock("article", _hoisted_4, [
          renderSlot(_ctx.$slots, "content", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ], 40, _hoisted_1);
    };
  }
});

const AccordionInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e9cf0afc"]]);

const AccordionInfo$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: AccordionInfo
}, Symbol.toStringTag, { value: 'Module' }));

export { AccordionInfo as default };
