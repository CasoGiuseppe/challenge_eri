import type { Component } from 'vue'
import type { collectionMappingRow } from '@composables/useComponentsMapping/interfaces'

export interface IAsyncComponent {
  create({
    component,
    error,
    loader,
  }: {
    component: string
    error?: Component
    loader?: Component
  }): Promise<Component>
}

export type IProvidedAsyncComponent = ({
  modules,
}: {
  modules: collectionMappingRow
}) => IAsyncComponent
