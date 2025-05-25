import { getSlotString } from '@shared/utilities'
import { useSlots } from 'vue'
import type { IRenderableSlots } from './interfaces'

export function useRenderableSlots(): IRenderableSlots {
  const slots = useSlots()
  const isRenderableSlot = (key: string): boolean => {
    if (!slots || !key) {
      return false
    }
    if (!slots[key]?.()) {
      return false
    }

    const slotValues = slots[key]?.().map((vnode) => {
      return getSlotString(vnode)
    })

    return slotValues.some((node: string) => node !== '')
  }

  return {
    isRenderableSlot,
  }
}
