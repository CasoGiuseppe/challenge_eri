// shared utilities
import { useIsString } from '@validators/typeCheckers/useIsString'
import type { VNode } from 'vue'

export const removeFileNameExtension = (name: string): string => {
  const currentName = new useIsString(name).value
  return currentName.replace(/\.[^/.]+$/, '')
}

export const escapeRegExp = (string: string): string | undefined => {
  return new useIsString(string).value.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
}

export const getSlotString = (node: VNode): string => {
  return typeof node.children === 'string'
    ? node.children
    : Array.isArray(node.children)
      ? node.children.map((child) => (child ? getSlotString(child as VNode) : '')).join('')
      : ''
}
