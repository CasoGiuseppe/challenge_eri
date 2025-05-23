/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import BaseIcon from '@components/base/base-icon/BaseIcon.vue'
import {
  SUITABLE_NAMES,
  SUITABLE_SEMANTIC_RULES,
  SUITABLE_SIZES,
  useDefaultSizeKey,
} from '@components/base/base-icon/constants'
import { computed } from 'vue'
import { defaultIcon } from './constants'

const meta = {
  title: 'Base/Base Icon',
  component: BaseIcon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'select', options: [...SUITABLE_NAMES] },
    size: { control: 'select', options: [...SUITABLE_SIZES] },
    semanticMeaning: { control: 'select', options: [...SUITABLE_SEMANTIC_RULES] },
    color: { control: 'color' },
    customSize: { control: 'number' },
  },
  args: {
    name: defaultIcon,
    size: useDefaultSizeKey.description,
    semanticMeaning: 'decorative',
    customSize: 0,
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof BaseIcon>

const Templates: Story = {
  render: (args: any) => ({
    components: { BaseIcon },
    setup() {
      const setSize = computed(() => {
        return args.customSize === 0 ? {} : { width: `${args.customSize}px` }
      })
      return { args, setSize }
    },
    template: `
      <Suspense>
        <BaseIcon v-bind="args" :style="setSize" />
      </Suspense>`,
  }),
}

export const Default: Story = {
  ...Templates,
}
