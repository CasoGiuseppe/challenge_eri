import type { ComputedRef } from 'vue'

export interface ITranslation {
  translate({ key, options }: { key: string; options?: Record<string, unknown> }): string
  setNewTranslationLocale(newLocale: string): void
  getLocale: ComputedRef
}

export type IProvidedTranslation = () => ITranslation
