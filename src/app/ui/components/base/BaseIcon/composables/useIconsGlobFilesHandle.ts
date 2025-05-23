import type { collectionMappingRow } from '@composables/useComponentsMapping/interfaces'
import { escapeRegExp } from '@utilities/index'
import type { IGlobFilesHandle, IGlobFilesTypeHandler } from './interfaces'
import { useIsString } from '@ui/validators/typesChecker/useIsString'
import useComponentsMapping from '@composables/useComponentsMapping'
import useAsyncComponents from '@composables/useAsyncComponents'

/**
 * A composable function for handling icon glob files and filtering paths based on brand and name.
 *
 * @param defaultPath - The default path for icon files. Defaults to DEFAULT_IMPORT_MODULE.
 * @param filterByBrand - Optional brand name to filter the icon files.
 * @param name - Optional icon name to further filter the files.
 * @returns An object containing methods for getting paths list and filtering paths.
 */
export default function useIconsGlobFilesHandle({
  name,
  mapping = useComponentsMapping,
  loader = useAsyncComponents,
  defaultPath = import.meta.glob('@ui/components/icons/icon*.vue'),
  filterByBrand,
}: IGlobFilesTypeHandler): IGlobFilesHandle {
  const getPathsList = (): collectionMappingRow => {
    // check if prop filterByBrand is provided
    if (filterByBrand) {
      // get file in list of files of provided folder
      const filterByName = filteredPaths({
        collection: filteredPaths({
          collection: import.meta.glob('@ui/components/**/*.vue'),
          filter: filterByBrand,
        }),
        filter: name,
      })

      // if returned object is empty, then return default list of paths
      return Object.keys(filterByName).length > 0 ? filterByName : defaultPath
    }

    return defaultPath
  }

  const filteredPaths = ({
    collection,
    filter,
  }: {
    collection: collectionMappingRow
    filter: string
  }): collectionMappingRow => {
    const filterRegex = new RegExp(`\\b${escapeRegExp(new useIsString(filter).value)}\\b`, 'i')
    return Object.fromEntries(Object.entries(collection).filter(([key]) => filterRegex.test(key)))
  }

  const asyncLoader = async () => {
    const { parseGlobModules } = mapping({ modules: getPathsList() })
    const { create } = loader({ modules: parseGlobModules() })
    return await create({ component: name })
  }

  return { getPathsList, filteredPaths, asyncLoader }
}
