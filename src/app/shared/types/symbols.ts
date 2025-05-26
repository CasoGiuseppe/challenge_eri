import type { InjectionKey } from 'vue'
import type { IProvidedAsyncComponent } from '@composables/useAsyncComponents/interfaces'
import type { IProvidedComponentMapping } from '@composables/useComponentsMapping/interfaces'
import type { IProvidedRenderableCheck } from '@composables/useRenderableSlots/interfaces'
import type { IProvidedTranslation } from '@composables/useTranslations/interfaces'

export const keyUseAsyncComponent = Symbol() as InjectionKey<IProvidedAsyncComponent>
export const keyUseMappingComponent = Symbol() as InjectionKey<IProvidedComponentMapping>
export const keyUseRenderableSlot = Symbol() as InjectionKey<IProvidedRenderableCheck>
export const keyUseTranslation = Symbol() as InjectionKey<IProvidedTranslation>
