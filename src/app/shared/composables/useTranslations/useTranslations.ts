import { useI18n } from 'vue-i18n'
import { i18n } from '@app/translations'
import type { ITranslation, LocaleMessages } from './interfaces'
import { computed } from 'vue'

export default function useTranslation(): ITranslation {
  const { t, te } = useI18n({
    inheritLocale: true,
    useScope: 'local',
  })

  /**
   * Method to return locale translation string
   * @param {string} key - translation locale key name
   * @param {string} option - record of parameters for locale translation options
   * @returns {string} - translation string or default value if locale translation is not found
   */
  const translate = ({
    key,
    options = {},
  }: {
    key: string
    options?: Record<string, unknown>
  }): string => {
    return te(key) ? t(key, options) : `no translation was found for ${key} key`
  }

  /**
   * Method to set a new translation locale value
   * @param {string} locale - new translation locale value
   * @returns {void}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setNewTranslationLocale = async (locale: any): Promise<void> => {
    if (!i18n) {
      console.warn('[i18n] i18n instance not initialized yet. Cannot set locale.')
      return
    }

    const messagesToSet = await loadLocaleMessages(locale)
    // Set the locale message for the current locale
    i18n.global.setLocaleMessage(locale, messagesToSet.default)

    // Update the global locale value
    i18n.global.locale.value = locale
  }

  const loadedMessages: Record<string, LocaleMessages> = {}

  /**
   * Loads locale messages for a given locale.
   * @param locale The locale to load (e.g., 'es', 'en').
   * @returns A Promise that resolves with the loaded messages, or an empty object if loading fails.
   */
  const loadLocaleMessages = async (locale: string): Promise<LocaleMessages> => {
    if (loadedMessages[locale]) {
      return loadedMessages[locale]
    }

    try {
      const module = await import(`@app/translations/locales/${locale}.ts`)
      const messages = module as LocaleMessages
      loadedMessages[locale] = messages // Cache the loaded messages
      return messages
    } catch (error) {
      console.warn(`[i18n] Failed to load locale messages for ${locale}:`, error)
      return {}
    }
  }

  const getLocale = computed(() => i18n.global.locale.value)

  return { translate, setNewTranslationLocale, getLocale, loadLocaleMessages }
}
