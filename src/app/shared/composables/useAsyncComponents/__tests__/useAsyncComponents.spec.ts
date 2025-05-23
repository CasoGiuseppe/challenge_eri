import { describe, it, expect, beforeEach } from 'vitest'
import useAsyncComponents from '../'
import useComponentsMapping from '@composables/useComponentsMapping'
import Error from './fixture/error'
import { $isFoo, $moduleExistResult, $modules, $successComponent } from './configuration'

let $create: ReturnType<typeof useAsyncComponents>['create']

describe('useAsyncComponents composable test', () => {
  beforeEach(async () => {
    const { parseGlobModules } = useComponentsMapping({ modules: $modules })
    const { create } = useAsyncComponents({ modules: parseGlobModules() })
    $create = create
  })

  it('should return a required component instance when component exist', async () => {
    const fn = async () =>
      await $create({ component: $successComponent, error: Error, loader: Error })
    const { name } = await fn()
    expect(name).toBe($moduleExistResult)
  })

  it('should return an error component instance when component is not found', async () => {
    const fn = async () => await $create({ component: $isFoo, error: Error, loader: Error })
    const result = await fn()
    const { name } = result
    expect(name).toBe('Error')
    expect(result).toHaveProperty('name')
  })
})
