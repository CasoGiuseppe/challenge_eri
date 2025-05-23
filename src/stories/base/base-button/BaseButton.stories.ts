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
    id: { control: 'text' },
    size: { control: 'select', options: [...SUITABLE_SIZES] },
    variant: { control: 'select', options: [...SUITABLE_TYPES] },

    // extra props
    disabled: { control: 'boolean' },
  },
  args: {
    id: 'button',
    size: useDefaultSizeKey.description,
    variant: useDefaultTypeKey.description,

    // extra props
    disabled: false,
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
