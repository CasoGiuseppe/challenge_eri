/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import NavigationTabs from '@components/tools/navigation-tabs/NavigationTabs.vue'
import { computed } from 'vue'

const meta = {
  title: 'Tools/Navigation Tabs',
  component: NavigationTabs,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
  },
  args: {
    id: 'navigation tabs',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof NavigationTabs>

const Templates: Story = {
  render: (args: any) => ({
    components: { NavigationTabs },
    setup() {
      const hasDefaultSLot = computed<boolean>(() => args.default !== '')
      return { args, hasDefaultSLot }
    },
    template: `
      <NavigationTabs
        v-bind="args"
        @click="click"
      >
        <template #default v-if="hasDefaultSLot">{{ args.default }}</template>
      </NavigationTabs>
    `,
    methods: {
      click: action('click'),
    },
  }),
}

export const Default: Story = {
  ...Templates,
}
