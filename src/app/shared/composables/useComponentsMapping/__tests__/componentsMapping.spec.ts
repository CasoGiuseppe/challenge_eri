import { describe, it, expect, beforeEach } from 'vitest'
import useComponentsMapping from '..'
import { $isFoo, $module, $modules } from './configuration'

let $getModules: ReturnType<typeof useComponentsMapping>['parseGlobModules']
describe('componentsMapping utility test', () => {
  beforeEach(async () => {
    const { parseGlobModules } = useComponentsMapping({ modules: $modules })
    $getModules = await parseGlobModules
  })

  it('should return an object of values', async () => {
    const fn = async () => await $getModules()
    expect((await fn()) && typeof fn() === 'object').toBeTruthy()
  })

  it('should return an object with length === 4', async () => {
    const fn = async () => await $getModules()
    expect(Object.keys(await fn()).length).toBe(4)
  })

  it('should contain provided module name', async () => {
    const fn = async () => await $getModules()
    const modules = await fn()
    expect(modules[$module]).toBeTruthy()
  })

  it('should return undefined if module not exist in collection', async () => {
    const fn = async () => await $getModules()
    const modules = await fn()
    expect(modules[$isFoo]).toBe(undefined)
    expect(typeof modules[$isFoo]).toBe('undefined')
  })
})
