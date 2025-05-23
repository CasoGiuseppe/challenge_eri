import { type AsyncComponentLoader, type Component, defineAsyncComponent } from 'vue'
import type { IAsyncComponent } from './interfaces'
import UserStateError from '@components/states/state-error/StateError.vue'
import UserStateLoader from '@components/states/state-loader/StateLoader.vue'
import type { collectionMappingRow } from '@composables/useComponentsMapping/interfaces'

export default function useAsyncComponents({
  modules,
}: {
  modules: collectionMappingRow
}): IAsyncComponent {
  /**
   * Asynchronously creates a Vue component based on the provided component name.
   *
   * @param {string} component - The name of the component to be created.
   * @param {Component} [error=UserStateError] - The error component to display if loading fails.
   * @param {Component} [loader=UserDefaultLoader] - The loading component to display while the main component is being loaded.
   * @returns {Promise<Component>} A promise that resolves to the created Vue component.
   */
  const create = async ({
    component,
    error = UserStateError,
    loader = UserStateLoader,
  }: {
    component: string
    error: Component
    loader: Component
  }): Promise<Component> => {
    if (!modules) {
      return error
    }

    if (Object.keys(modules).length === 0) {
      return error
    }

    if (Object.keys(modules).length === 0) {
      return error
    }

    const currentLoader = modules[component]
    if (currentLoader === undefined) {
      return error
    }

    return defineAsyncComponent({
      errorComponent: error,
      loadingComponent: loader,
      loader: currentLoader as AsyncComponentLoader<Component>,
    })
  }

  return { create }
}
