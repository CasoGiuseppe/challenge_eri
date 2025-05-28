import BaseButton from './BaseButton-DM4CEr0r.js';
import UserInfoMenu from './UserInfoMenu-BFCBpi3B.js';
import { g as defineStore, h as reactive, i as computed, d as defineComponent, j as inject, s as storeToRefs, c as createElementBlock, b as createVNode, w as withCtx, u as unref, o as openBlock, m as mergeProps, n as createSlots, p as createTextVNode, t as toDisplayString, q as keyUseTranslation, _ as _export_sfc } from './index-De3N5Jaj.js';
import './index-D92cg9IP.js';
import './constants-BOYW6QZ0.js';
import './ComponentIs.scss_vue_type_style_index_0_src_true_lang-CKn-0rRp.js';
import './TransitionIs.scss_vue_type_style_index_1_src_true_lang-Cy1RmGSY.js';

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
    const changeLanguage = async (event) => {
      const { id } = event.target;
      await setNewTranslationLocale(id);
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

const SectionHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9dd69acc"]]);

export { SectionHeader as default };
