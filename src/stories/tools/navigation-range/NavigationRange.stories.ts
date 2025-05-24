/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import { computed } from 'vue'
import { action } from '@storybook/addon-actions'
import NavigationRange from '@components/tools/navigation-range/NavigationRange.vue'

const meta = {
  title: 'Tools/Navigation range',
  component: NavigationRange,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta

export default meta

type Story = StoryObj<typeof NavigationRange>

const Templates: Story = {
  render: (args: any) => ({
    components: { NavigationRange },
    setup() {
      const hasDefaultSLot = computed<boolean>(() => args.default !== '')
      return { args, hasDefaultSLot }
    },
    template: `
      <NavigationRange
        v-bind="args"
        @click="click"
      >
        <template #default v-if="hasDefaultSLot">{{ args.default }}</template>
      </NavigationRange>
    `,
    methods: {
      click: action('click'),
    },
  }),
}

export const Default: Story = {
  ...Templates,
}
