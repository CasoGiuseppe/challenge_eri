import { k as keyUseAsyncComponent, a as keyUseMappingComponent, b as keyUseRenderableSlot, c as keyUseTranslation } from './symbols-r3KuG7tB.js';
import { u as useAsyncComponents, a as useComponentsMapping } from './index-Bwv7cu8l.js';
import { u as useSlots, a as useI18n, c as computed, i as i18n, d as defineComponent, o as onBeforeMount, r as resolveComponent, b as createBlock, e as openBlock, w as withCtx, f as resolveDynamicComponent, p as provide } from './index-C_cS1vHU.js';
import './index-DusSqiUz.js';
import './StateError.scss_vue_type_style_index_0_src_true_lang-DMLKt9dv.js';
import './iconAdd-1mcLojAN.js';
import './_plugin-vue_export-helper-pcqpp-6-.js';
import './StateLoader-C-Qmkrq0.js';

function useRenderableSlots() {
  const slots = useSlots();
  const isRenderableSlot = (key) => {
    if (!slots || !key) {
      return false;
    }
    if (!slots[key]?.()) {
      return false;
    }
    return true;
  };
  return {
    isRenderableSlot
  };
}

function useTranslation() {
  const { t, te } = useI18n({
    inheritLocale: true,
    useScope: "local"
  });
  const translate = ({
    key,
    options = {}
  }) => {
    return te(key) ? t(key, options) : `no translation was found for ${key} key`;
  };
  const setNewTranslationLocale = (locale) => {
    const checkLocaleExist = i18n.global.availableLocales.value.includes(locale);
    if (!checkLocaleExist) {
      throw new Error(`new locale ${locale} is not available`);
    }
    i18n.global.locale.value = locale;
  };
  const getLocale = computed(() => i18n.global.locale.value);
  return { translate, setNewTranslationLocale, getLocale };
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    onBeforeMount(() => {
      provide(keyUseAsyncComponent, useAsyncComponents);
      provide(keyUseMappingComponent, useComponentsMapping);
      provide(keyUseRenderableSlot, useRenderableSlots);
      provide(keyUseTranslation, useTranslation);
    });
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createBlock(_component_RouterView, null, {
        default: withCtx(({ Component }) => [
          (openBlock(), createBlock(resolveDynamicComponent(Component)))
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
