/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import { computed } from 'vue'
import BasePill from '@components/base/base-pill/BasePill.vue'
import { SUITABLE_TYPES, useDefaultTypeKey } from '@components/base/base-pill/constants'

const meta = {
  title: 'Base/Base Pill',
  component: BasePill,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: [...SUITABLE_TYPES] },
    default: { control: 'text' },
  },
  args: {
    variant: useDefaultTypeKey.description,
    default: 'Pill',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof BasePill>

const Templates: Story = {
  render: (args: any) => ({
    components: { BasePill },
    setup() {
      const hasDefaultSLot = computed<boolean>(() => args.default !== '')
      return { args, hasDefaultSLot }
    },
    template: `
      <BasePill
        v-bind="args"
      >
        <template #default v-if="hasDefaultSLot">{{ args.default }}</template>
      </BasePill>
    `,
  }),
}

export const Default: Story = {
  ...Templates,
}
