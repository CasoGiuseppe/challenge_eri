import type { IAsyncComponent } from '@composables/useAsyncComponents/interfaces'
import type {
  collectionMappingRow,
  IComponentMapping,
} from '@composables/useComponentsMapping/interfaces'
import type { Component } from 'vue'

export interface IGlobFilesHandle {
  getPathsList(): collectionMappingRow
  filteredPaths({
    collection,
    filter,
  }: {
    collection: collectionMappingRow
    filter: string
  }): collectionMappingRow
  asyncLoader(): Promise<Component>
}

export type IMappedLoader = ({ modules }: { modules?: collectionMappingRow }) => IComponentMapping
export type IAsyncLoader = ({ modules }: { modules: collectionMappingRow }) => IAsyncComponent
export interface IGlobFilesTypeHandler {
  name: string
  defaultPath?: collectionMappingRow
  filterByBrand?: string
  mapping?: IMappedLoader
  loader?: IAsyncLoader
}
