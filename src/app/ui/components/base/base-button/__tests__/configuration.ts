import { useDefaultPositionKey, useDefaultTypeKey } from '../constants'

export const $isDefaultID = 'Button component'
export const $isDefaultSize = 'l'
export const $isDefaultBooleanState = false
export const $isDefaultIcon = 'iconAdd'
export const $isDefaultSlot = 'Label'
export const $uiIconID = '[data-testID=ui-icon]'
export const $isDefaultIconPosition = 'leading'
export const $isTrailingIconPosition = 'trailing'

export const $propCases = [
  {
    prop: 'id',
    isRequired: true,
    defaultVal: $isDefaultID,
  },
  {
    prop: 'variant',
    isRequired: false,
    defaultVal: useDefaultTypeKey.description,
  },
  {
    prop: 'size',
    isRequired: false,
    defaultVal: $isDefaultSize,
  },
  {
    prop: 'hasIcon',
    isRequired: false,
    defaultVal: $isDefaultIcon,
  },
  {
    prop: 'iconPosition',
    isRequired: false,
    defaultVal: useDefaultPositionKey.description,
  },
]

export const $classesCases = [{ variant: 'primary' }, { size: 's' }]

export const $typographyCases = [
  {
    size: 'l',
    typo: 'typography-label-m',
  },
  {
    size: 'm',
    typo: 'typography-label-m',
  },
  {
    size: 's',
    typo: 'typography-label-s',
  },
  {
    size: 'xs',
    typo: 'typography-label-xs',
  },
]
