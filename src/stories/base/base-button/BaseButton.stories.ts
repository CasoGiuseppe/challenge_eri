/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import BaseButton from '@components/base/base-button/BaseButton.vue'
import {
  SUITABLE_POSITION,
  SUITABLE_SIZES,
  SUITABLE_TYPES,
  useDefaultPositionKey,
  useDefaultSizeKey,
  useDefaultTypeKey,
} from '@components/base/base-button/constants'
import { computed } from 'vue'
import { SUITABLE_NAMES } from '@components/base/base-icon/constants'

const meta = {
  title: 'Base/Base Button',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    size: { control: 'select', options: [...SUITABLE_SIZES] },
    variant: { control: 'select', options: [...SUITABLE_TYPES] },
    default: { control: 'text' },
    hasIcon: {
      if: { arg: 'showIcon', eq: true },
      control: 'select',
      options: [...SUITABLE_NAMES],
    },
    iconPosition: {
      if: { arg: 'showIcon', eq: true },
      control: 'select',
      options: [...SUITABLE_POSITION],
    },

    // extra props
    disabled: { control: 'boolean' },
    showIcon: { control: 'boolean' },
  },
  args: {
    id: 'button',
    size: useDefaultSizeKey.description,
    variant: useDefaultTypeKey.description,
    iconPosition: useDefaultPositionKey.description,
    default: 'Label',

    // extra props
    disabled: false,
    showIcon: false,
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
      <BaseButton
        v-bind="args"
        @click="click"
      >
        <template #default v-if="hasDefaultSLot">{{ args.default }}</template>
      </BaseButton>
    `,
    methods: {
      click: action('click'),
    },
  }),
}

export const Default: Story = {
  ...Templates,
}
