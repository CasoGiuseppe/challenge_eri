import type { ComputedRef } from 'vue'

export interface ITranslation {
  translate({ key, options }: { key: string; options?: Record<string, unknown> }): string
  setNewTranslationLocale(newLocale: string): void
  loadLocaleMessages(locale: string): Promise<LocaleMessages>
  getLocale: ComputedRef
}

export interface LocaleMessages {
  [key: string]: string | LocaleMessages
}

export type IProvidedTranslation = () => ITranslation
