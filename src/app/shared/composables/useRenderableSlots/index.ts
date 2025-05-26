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

    return true
  }

  return {
    isRenderableSlot,
  }
}
