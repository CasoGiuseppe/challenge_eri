/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from '@components/base/base-button/BaseButton.vue'
import {
  SUITABLE_SIZES,
  SUITABLE_TYPES,
  useDefaultSizeKey,
  useDefaultTypeKey,
} from '@components/base/base-button/constants'

const meta = {
  title: 'Base/Base Button',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: [...SUITABLE_SIZES] },
    variant: { control: 'select', options: [...SUITABLE_TYPES] },
  },
  args: {
    size: useDefaultSizeKey.description,
    variant: useDefaultTypeKey.description,
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof BaseButton>

const Templates: Story = {
  render: (args: any) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: `
      <BaseButton v-bind="args" />
    `,
  }),
}

export const Default: Story = {
  ...Templates,
}
