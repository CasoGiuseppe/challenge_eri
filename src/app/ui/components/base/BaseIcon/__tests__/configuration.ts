import type { mount, VueWrapper, DOMWrapper } from '@vue/test-utils'
import { SUITABLE_NAMES, SUITABLE_SEMANTIC_RULES, SUITABLE_SIZES } from '../constants'

export const $uiIconName = 'iconAdd'
export const $isFoo = 'foo'
export const $isNumber = 1
export const $propCases = [
  {
    prop: 'name',
    isRequired: true,
  },
  {
    prop: 'size',
    isRequired: false,
    defaultVal: 'm',
  },
  {
    prop: 'semanticMeaning',
    isRequired: false,
    defaultVal: 'decorative',
  },
]
export const $sizeClassCases = [
  { size: 's', expectedClass: 'base-icon--is-s' },
  { size: 'm', expectedClass: 'base-icon--is-m' },
  { size: 'l', expectedClass: 'base-icon--is-l' },
]
const meaningfulCase = { semanticMeaning: 'meaningful', attr: 'role', value: 'img' }
const decorativeCase = { semanticMeaning: 'decorative', attr: 'aria-hidden', value: 'true' }
export const $semanticMeaningCases = [
  { ...meaningfulCase, oppositeCase: decorativeCase },
  { ...decorativeCase, oppositeCase: meaningfulCase },
]
export const $validatorCases = [
  {
    prop: 'name',
    validValues: SUITABLE_NAMES,
    wrongType: $isNumber,
    wrongValue: $isFoo,
  },
  {
    prop: 'size',
    validValues: SUITABLE_SIZES,
    wrongType: $isNumber,
    wrongValue: $isFoo,
  },
  {
    prop: 'semanticMeaning',
    validValues: SUITABLE_SEMANTIC_RULES,
    wrongType: $isNumber,
    wrongValue: $isFoo,
  },
]
export interface RenderBaseIconOptions {
  template?: string
  baseIconProps?: {
    name?: string
    size?: string
    semanticMeaning?: string
    [key: string]: any
  }
  settleDynamicImport?: boolean
}

export interface RenderBaseIconAPI {
  wrapper: ReturnType<typeof mount>
  readonly baseIcon: VueWrapper
  readonly svg: DOMWrapper<Element>
  readonly classes: string[]
  readonly attributes: Record<string, string>
}
