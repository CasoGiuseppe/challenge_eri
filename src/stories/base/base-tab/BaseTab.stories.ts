/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import BaseTab from '@components/base/base-tab/BaseTab.vue'
import { computed } from 'vue'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Base/Base Tab',
  component: BaseTab,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    selected: { control: 'boolean' },
    default: { control: 'text' },

    // extra props
    disabled: { control: 'boolean' },
  },
  args: {
    id: 'tab',
    selected: false,
    default: 'Tab',

    // extra props
    disabled: false,
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof BaseTab>

const Templates: Story = {
  render: (args: any) => ({
    components: { BaseTab },
    setup() {
      const hasDefaultSLot = computed<boolean>(() => args.default !== '')
      return { args, hasDefaultSLot }
    },
    template: `
      <BaseTab
        v-bind="args"
        @click="click"
      >
        <template #default v-if="hasDefaultSLot">{{ args.default }}</template>
      </BaseTab>
    `,
    methods: {
      click: action('click'),
    },
  }),
}

export const Default: Story = {
  ...Templates,
}

Default.decorators = [vueRouter()]
