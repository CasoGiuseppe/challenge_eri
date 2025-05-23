// SYMBOLS
export const useMeaningfulKey = Symbol('meaningful')
export const useDecorativeKey = Symbol('decorative')
export const useDataBrandKey = Symbol('brand')

export const SUITABLE_SIZES = ['l', 'm', 's'] as const
export const SUITABLE_SEMANTIC_RULES = ['meaningful', 'decorative'] as const
export const DEFAULT_IMPORT_MODULE = import.meta.glob([
  '@ui/components/icons/**/icon*.vue',
  '!@ui/components/icons/__mocks__/**/*',
])

export const SUITABLE_NAMES = [
  ...new Set(
    Object.keys(DEFAULT_IMPORT_MODULE)
      .map((path) => path.split('/').pop())
      .map((icon) => icon?.replace('.vue', '')),
  ),
] as const

export const DEFAULT_RULE_TYPE: string = useDecorativeKey.description as string

export const SEMANTIC_RULES = {
  [useMeaningfulKey.description as string]: { role: 'img' },
  [DEFAULT_RULE_TYPE]: { 'aria-hidden': true },
}
