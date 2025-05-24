// SYMBOLS
export const useDefaultTypeKey = Symbol('opacity')
export const SUITABLE_TYPES = [
  'from-top',
  'from-bottom',
  'from-left',
  'from-right',
  'opacity',
] as const

export enum SUITABLE_EASING {
  OUT = 'cubic-bezier(.17, .67, .17, 1.01)',
  ELASTIC = 'cubic-bezier(.08, 1.48, .69, 1.14)',
}

export enum SUITABLE_TIMING {
  NONE = '0s',
  FAST = '.5s',
  NORMAL = '.8s',
}
