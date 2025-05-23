import type { collectionMappingRow, IComponentMapping } from './interfaces'
import { removeFileNameExtension } from '@shared/utilities'
import { useIsString } from '@validators/typeCheckers/useIsString'

export default function useComponentsMapping({
  modules = import.meta.glob('@components/**/*.vue'),
}: { modules?: collectionMappingRow } = {}): IComponentMapping {
  /**
   * Parses the glob-imported modules and creates a mapping of component names to their respective modules.
   * This function transforms the raw glob import object into a more usable format where keys are the component
   * names (without file extensions) and values are the corresponding module import functions.
   *
   * @returns {collectionMappingRow} An object mapping component names to their respective dynamic import functions.
   *                                 Each key is a component name without extension, and each value is a function
   *                                 that returns a Promise resolving to the component module.
   */
  const parseGlobModules = (): collectionMappingRow => {
    return Object.entries(modules).reduce(
      (acc: collectionMappingRow = {}, [item, module]: [string, () => Promise<unknown>]) => {
        const moduleSplitted = item.split('/')

        const name = moduleSplitted.at(-1)
        if (!name) {
          return acc
        }
        return {
          ...acc,
          [removeFileNameExtension(new useIsString(name as string).value)]: module,
        }
      },
      {},
    )
  }

  return { parseGlobModules }
}
