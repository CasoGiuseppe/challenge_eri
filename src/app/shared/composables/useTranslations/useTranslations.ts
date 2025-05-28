import { useI18n } from 'vue-i18n'
import { i18n } from '@app/translations'
import type { ITranslation } from './interfaces'
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
  const setNewTranslationLocale = (locale: any): void => {
    const checkLocaleExist = i18n.global.availableLocales.value.includes(locale)
    if (!checkLocaleExist) {
      throw new Error(`new locale ${locale} is not available`)
    }
    i18n.global.locale.value = locale
  }

  const getLocale = computed(() => i18n.global.locale.value)

  return { translate, setNewTranslationLocale, getLocale }
}
