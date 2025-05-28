import { createI18n } from 'vue-i18n'

export const i18n = await createI18n({
  locale: 'es',
  fallbackLocale: import.meta.env.VITE_APP_LOCALE_FALLBACK,
  legacy: false,
  globalInjection: true,
  availableLocales: ['es', 'en'],
  missingWarn: false,
  silentTranslationWarn: false,
  fallbackWarn: false,
  messages: {},
})
