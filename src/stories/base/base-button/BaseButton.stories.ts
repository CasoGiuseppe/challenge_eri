/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from '@components/base/base-button/BaseButton.vue'

const meta = {
  title: 'Base/Base Button',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
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
