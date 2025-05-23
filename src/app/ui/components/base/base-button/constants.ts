// SYMBOLS
export const useDefaultSizeKey = Symbol('l')
export const useDefaultTypeKey = Symbol('primary')
export const useDefaultPositionKey = Symbol('leading')

export const SUITABLE_SIZES = ['l', 's'] as const
export const SUITABLE_TYPES = ['primary', 'secondary'] as const
export const SUITABLE_POSITION = ['leading', 'trailing'] as const
export const ICONS = {
  l: 'm',
  s: 's',
} as const
