/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, it, vi } from 'vitest'
import BaseIcon from '../BaseIcon.vue'
import { mount } from '@vue/test-utils'
import {
  $uiIconName,
  $propCases,
  $sizeClassCases,
  $semanticMeaningCases,
  $validatorCases,
  type RenderBaseIconOptions,
  type RenderBaseIconAPI,
} from './configuration'
import { expectedCorrectType } from '@shared/utilities/tests/commons/expectedCorrectType'
import { expectedCorrectValue } from '@shared/utilities/tests/commons/expectedCorrectValue'

vi.mock('@components/icons/iconAdd.vue')

const renderBaseIcon = async ({
  template = '<BaseIcon v-bind="baseIconProps" />',
  baseIconProps = { name: $uiIconName },
  settleDynamicImport = true,
}: RenderBaseIconOptions = {}): Promise<RenderBaseIconAPI> => {
  const wrapper = mount({
    template: `<Suspense>${template}</Suspense>`,
    components: { BaseIcon },
    data() {
      return { baseIconProps }
    },
  })

  if (settleDynamicImport) {
    await vi.dynamicImportSettled()
  }

  const getSvg = () => wrapper.find('[data-test="mockedSVG"]')

  return {
    wrapper,
    get baseIcon() {
      return wrapper.findComponent(BaseIcon)
    },
    get svg() {
      return getSvg()
    },
    get classes() {
      return getSvg().classes()
    },
    get attributes() {
      return getSvg().attributes()
    },
  }
}

describe('BaseIcon component tests', () => {
  describe('Test props behaviours', () => {
    it('loads the component content asynchronously', async () => {
      const $render = await renderBaseIcon({ settleDynamicImport: false })
      expect($render.wrapper.exists()).toBe(true)
      expect($render.wrapper.html()).toBeFalsy()

      await vi.dynamicImportSettled()
      expect($render.wrapper.html()).toBeTruthy()
      expect($render.baseIcon.exists()).toBe(true)
    })

    it.each($propCases)(
      'should have prop $prop withcorrect required and default values',
      ({ prop, isRequired, defaultVal }) => {
        const $propItem = BaseIcon.props[prop]
        expect(BaseIcon.props).toHaveProperty(prop)

        expect(Boolean($propItem.required)).toBe(isRequired)

        if ($propItem.default !== undefined) {
          expect($propItem.default).toBe(defaultVal)
        }
      },
    )
  })

  describe("Test component's SVG", () => {
    it('loads the icon passed as prop', async () => {
      const { svg } = await renderBaseIcon()
      expect(svg.exists()).toBe(true)
    })

    it('should have the base-icon class in the SVG', async () => {
      const { classes } = await renderBaseIcon()

      expect(classes).toContain('base-icon')
    })

    it.each($sizeClassCases)(
      'has the class $expectedClass when size is $size',
      async ({ size, expectedClass }) => {
        const { classes } = await renderBaseIcon({ baseIconProps: { name: $uiIconName, size } })
        expect(classes).toStrictEqual(['base-icon', expectedClass])
      },
    )
  })

  describe("Test component's semantic meaning", () => {
    it.each($semanticMeaningCases)(
      'has the attribute $attr with value $value when semanticMeaning is $semanticMeaning',
      async ({ semanticMeaning, attr, value, oppositeCase }) => {
        const { attributes } = await renderBaseIcon({
          baseIconProps: { name: $uiIconName, semanticMeaning },
        })

        expect(attributes).toHaveProperty(attr, value)
        expect(attributes).not.toHaveProperty(oppositeCase.attr, oppositeCase.value)
      },
    )
  })

  describe("Test component's validators", () => {
    describe.each($validatorCases)(
      'Test prop $prop validator',
      ({ prop, validValues, wrongType, wrongValue }) => {
        it.each(validValues)('validates %s as a valid value', (value) => {
          const $validator = BaseIcon.props[prop].validator

          expect($validator(value)).toBe(true)
        })
        expectedCorrectType(BaseIcon, prop, wrongType)
        expectedCorrectValue(BaseIcon, prop, wrongValue)
      },
    )
  })
})
