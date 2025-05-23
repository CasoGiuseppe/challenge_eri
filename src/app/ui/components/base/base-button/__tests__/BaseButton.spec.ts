import { describe, expect, it, vi, beforeEach } from 'vitest'
import {
  $classesCases,
  $isDefaultIcon,
  $isDefaultIconPosition,
  $isDefaultID,
  $isDefaultSlot,
  $propCases,
  $typographyCases,
  $uiIconID,
} from './configuration'
import { mountComponent } from '@tests/index'
import type { TestPropType } from '@tests/types'
import BaseButton from '../BaseButton.vue'

let $wrapper: any
const renderButton = async (mountOptions: TestPropType = {}) => {
  const wrapper = await mountComponent(BaseButton, mountOptions)
  await vi.dynamicImportSettled()
  return wrapper
}

describe('BaseButton component tests', () => {
  describe('Test props behaviours', () => {
    beforeEach(async () => {
      $wrapper = await renderButton({ props: { id: $isDefaultID } })
    })

    it.each($propCases)(
      'should have prop $prop with correct required and default values',
      ({ prop, isRequired, defaultVal }) => {
        const $propItem = BaseButton.props[prop]
        expect(BaseButton.props).toHaveProperty(prop)

        expect(Boolean($propItem.required)).toBe(isRequired)

        if ($propItem.default !== undefined) {
          expect($propItem.default).toBe(defaultVal)
        }
      },
    )
  })

  describe('Test classes behaviours', () => {
    beforeEach(async () => {
      $wrapper = await renderButton({
        props: {
          id: $isDefaultID,
        },
      })
    })

    it.each($classesCases)(
      'should have correct classes for variant and size case',
      async (prop) => {
        await $wrapper.setProps(prop)
        const key = Object.keys(prop)[0]
        const value = Object.values(prop)[0]
        const classes = $wrapper.classes(`base-button--is-${value}`)
        expect(classes).toBeTruthy()
      },
    )
  })

  describe('Test emit behaviours', () => {
    beforeEach(async () => {
      $wrapper = await renderButton({
        props: {
          id: $isDefaultID,
        },
      })
    })
    it('should have correct emit on click event', async () => {
      $wrapper.trigger('click')
      expect($wrapper.emitted()).toHaveProperty('click')
    })
  })

  describe('Test html props behaviours', () => {
    beforeEach(async () => {
      $wrapper = await renderButton({
        props: {
          id: $isDefaultID,
          disabled: true,
        },
      })
    })

    it('should has correct disabled state when prop is true', async () => {
      const htmlAttributes = $wrapper.attributes()
      expect(htmlAttributes).toHaveProperty('disabled')
    })
  })

  describe('Test slot behaviours', () => {
    beforeEach(async () => {
      $wrapper = await renderButton({
        props: {
          id: $isDefaultID,
          hasIcon: $isDefaultIcon,
        },
        slots: {
          default: $isDefaultSlot,
        },
      })
    })

    it('should render the correct default slot content', () => {
      expect($wrapper.html()).toContain($isDefaultSlot)
    })

    it('should render the correct icon when exist', async () => {
      const $icon = $wrapper.find(`${$uiIconID}`)
      expect($icon.exists()).toBeTruthy()
      expect($icon.attributes('position')).toBe($isDefaultIconPosition)
    })
  })
})
