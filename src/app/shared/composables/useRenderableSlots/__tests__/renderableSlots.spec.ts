import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import mockedComponent from './mocks/mockedComponent'
import { uiSlot } from './constants'
import { shallowRef } from 'vue'

const mockComponent = async ({ slot }: { slot?: string } = {}) => {
  const component = mount(
    {
      template: `
      <component :is="current">
        <slot />
      </component>
    `,
      data() {
        return {
          current: shallowRef(mockedComponent),
        }
      },
    },
    {
      ...(slot && { slots: { default: slot } }),
    },
  )

  return { component }
}

describe('useRenderableSlots composable tests', () => {
  it('Test that component is mounted', async () => {
    const { component } = await mockComponent()
    expect(component.exists()).toBe(true)
    expect(component.html()).toBeTruthy()
  })

  it('should prevent html element render when slot default not exist', async () => {
    const { component } = await mockComponent()
    const slotElement = component.find(`${uiSlot}`)
    expect(slotElement.exists()).toBe(false)
  })

  it('should prevent html element render when slot default content is empty', async () => {
    const { component } = await mockComponent({ slot: '' })
    const slotElement = component.find(`${uiSlot}`)
    expect(slotElement.exists()).toBe(false)
  })

  it('should render html element when slot default content is present', async () => {
    const { component } = await mockComponent({ slot: 'slot' })
    const slotElement = component.find(`${uiSlot}`)
    expect(slotElement.exists()).toBe(true)
  })
})
