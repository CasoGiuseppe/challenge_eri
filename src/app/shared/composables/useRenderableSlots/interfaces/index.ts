export interface IRenderableSlots {
  isRenderableSlot(key: string): boolean
}

export type IProvidedRenderableCheck = () => IRenderableSlots
