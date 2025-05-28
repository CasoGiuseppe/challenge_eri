import BaseButton from './BaseButton-Y-AYY1Qd.js';
import UserInfoMenu from './UserInfoMenu-CCKBI3c2.js';
import { c as keyUseTranslation } from './symbols-r3KuG7tB.js';
import { l as defineStore, m as reactive, c as computed, d as defineComponent, n as inject, s as storeToRefs, g as createElementBlock, j as createVNode, w as withCtx, k as unref, e as openBlock, v as mergeProps, x as createSlots, y as createTextVNode, z as toDisplayString } from './index-BI7m2tYL.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';
import './index-DusSqiUz.js';
import './index-0W8rK_An.js';
import './constants-8sZsE3Rj.js';
import './ComponentIs.scss_vue_type_style_index_0_src_true_lang-Bs1tAhYH.js';
import './TransitionIs.scss_vue_type_style_index_1_src_true_lang-lmaBq5Os.js';

const globalLocales = {
  locales: [
    {
      id: "es",
      type: "button",
      label: "es"
    },
    {
      id: "en",
      type: "button",
      label: "en"
    },
    {
      id: "fr",
      type: "button",
      label: "fr"
    }
  ]
};

const useLocaleHandle = defineStore("useLocaleHandle", () => {
  const state = reactive(structuredClone(globalLocales));
  const localesLanguages = computed(() => state.locales);
  return {
    state,
    localesLanguages
  };
});
const useLocalesStore = useLocaleHandle();

const _hoisted_1 = { class: "section-header" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SectionHeader",
  setup(__props) {
    const useTranslation = inject(keyUseTranslation);
    const { setNewTranslationLocale, getLocale } = useTranslation();
    const { localesLanguages: DEFATULT_LOCALES } = storeToRefs(useLocalesStore);
    const changeLanguage = (event) => {
      const { id } = event.target;
      setNewTranslationLocale(id);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, [
        createVNode(UserInfoMenu, {
          id: "user-menu",
          items: unref(DEFATULT_LOCALES)
        }, {
          action: withCtx(({ property: { id, label, icon, to, type } }) => [
            createVNode(BaseButton, mergeProps({
              id,
              size: "s",
              isRounded: false,
              is: type,
              disabled: id === unref(getLocale)
            }, {
              ...icon && { hasIcon: icon },
              ...to && { to },
              ...type === "button" && { onclick: changeLanguage }
            }, { style: { "--custom-background": "hsla(219, 100%, 18%, 1)" } }), createSlots({ _: 2 }, [
              label ? {
                name: "default",
                fn: withCtx(() => [
                  createTextVNode(toDisplayString(label), 1)
                ]),
                key: "0"
              } : void 0
            ]), 1040, ["id", "is", "disabled"])
          ]),
          _: 1
        }, 8, ["items"])
      ]);
    };
  }
});

const SectionHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-34812939"]]);

export { SectionHeader as default };
