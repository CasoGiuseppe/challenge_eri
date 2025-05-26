import type { InjectionKey } from 'vue'
import type { IAsyncComponent } from '@composables/useAsyncComponents/interfaces'
import type {
  collectionMappingRow,
  IComponentMapping,
} from '@composables/useComponentsMapping/interfaces'
import type { IRenderableSlots } from '@composables/useRenderableSlots/interfaces'

export const keyUseAsyncComponent = Symbol() as InjectionKey<
  ({ modules }: { modules: collectionMappingRow }) => IAsyncComponent
>

export const keyUseMappingComponent = Symbol() as InjectionKey<
  ({ modules }: { modules: collectionMappingRow }) => IComponentMapping
>

export const keyUseRenderableSlot = Symbol() as InjectionKey<() => IRenderableSlots>
