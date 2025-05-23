/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from '@components/base/base-button/BaseButton.vue'
import {
  SUITABLE_SIZES,
  SUITABLE_TYPES,
  useDefaultSizeKey,
  useDefaultTypeKey,
} from '@components/base/base-button/constants'
import { computed } from 'vue'

const meta = {
  title: 'Base/Base Button',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    size: { control: 'select', options: [...SUITABLE_SIZES] },
    variant: { control: 'select', options: [...SUITABLE_TYPES] },
    default: { control: 'text' },

    // extra props
    disabled: { control: 'boolean' },
  },
  args: {
    id: 'button',
    size: useDefaultSizeKey.description,
    variant: useDefaultTypeKey.description,
    default: 'Label',

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
      const hasDefaultSLot = computed<boolean>(() => args.default !== '')
      return { args, hasDefaultSLot }
    },
    template: `
      <BaseButton v-bind="args">
        <template #default v-if="hasDefaultSLot">{{ args.default }}</template>
      </BaseButton>
    `,
  }),
}

export const Default: Story = {
  ...Templates,
}
