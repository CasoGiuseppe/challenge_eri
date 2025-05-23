export type collectionMappingRow = Record<string, () => Promise<unknown>>

export interface IComponentMapping {
  parseGlobModules(): collectionMappingRow
}
