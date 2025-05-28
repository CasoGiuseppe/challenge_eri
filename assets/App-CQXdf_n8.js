import { k as keyUseAsyncComponent, a as keyUseMappingComponent, b as keyUseRenderableSlot, c as keyUseTranslation } from './symbols-r3KuG7tB.js';
import { u as useAsyncComponents, a as useComponentsMapping } from './index-DTAH9xqk.js';
import { u as useSlots, a as useI18n, c as computed, i as i18n, _ as __vitePreload, d as defineComponent, o as onBeforeMount, r as resolveComponent, b as createBlock, e as openBlock, w as withCtx, f as resolveDynamicComponent, p as provide } from './index-BtHDwOie.js';
import './index-DusSqiUz.js';
import './StateError.scss_vue_type_style_index_0_src_true_lang-fOgxGry6.js';
import './iconAdd-C1DIdjZO.js';
import './_plugin-vue_export-helper-pcqpp-6-.js';
import './StateLoader-CkqCTqn9.js';

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

const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};

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
  const setNewTranslationLocale = async (locale) => {
    if (!i18n) {
      console.warn("[i18n] i18n instance not initialized yet. Cannot set locale.");
      return;
    }
    const messagesToSet = await loadLocaleMessages(locale);
    i18n.global.setLocaleMessage(locale, messagesToSet.default);
    i18n.global.locale.value = locale;
  };
  const loadedMessages = {};
  const loadLocaleMessages = async (locale) => {
    if (loadedMessages[locale]) {
      return loadedMessages[locale];
    }
    try {
      const module = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../../../translations/locales/en.ts": () => __vitePreload(() => import('./en-CrDrtmuA.js'),true              ?[]:void 0),"../../../translations/locales/es.ts": () => __vitePreload(() => import('./es-CZzi1FFa.js'),true              ?[]:void 0),"../../../translations/locales/fr.ts": () => __vitePreload(() => import('./fr-DYFsVqCY.js'),true              ?[]:void 0)})), `../../../translations/locales/${locale}.ts`, 6);
      const messages = module;
      loadedMessages[locale] = messages;
      return messages;
    } catch (error) {
      console.warn(`[i18n] Failed to load locale messages for ${locale}:`, error);
      return {};
    }
  };
  const getLocale = computed(() => i18n.global.locale.value);
  return { translate, setNewTranslationLocale, getLocale, loadLocaleMessages };
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    onBeforeMount(async () => {
      provide(keyUseAsyncComponent, useAsyncComponents);
      provide(keyUseMappingComponent, useComponentsMapping);
      provide(keyUseRenderableSlot, useRenderableSlots);
      provide(keyUseTranslation, useTranslation);
      const { setNewTranslationLocale } = useTranslation();
      await setNewTranslationLocale("en");
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
