import type { InjectionKey } from 'vue'
import type { IAsyncComponent } from '@composables/useAsyncComponents/interfaces'
import type { collectionMappingRow } from '@composables/useComponentsMapping/interfaces'

export const keyUseAsyncComponent = Symbol() as InjectionKey<
  ({ modules }: { modules: collectionMappingRow }) => IAsyncComponent
>
