/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import NavigationTabs from '@components/tools/navigation-tabs/NavigationTabs.vue'
import { computed } from 'vue'
import { DEFAULT_TABS } from './constants'
import BaseTab from '@components/base/base-tab/BaseTab.vue'
const meta = {
  title: 'Tools/Navigation Tabs',
  component: NavigationTabs,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    tabs: { control: 'object' },
  },
  args: {
    id: 'navigation tabs',
    tabs: DEFAULT_TABS,
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof NavigationTabs>

const Templates: Story = {
  render: (args: any) => ({
    components: { NavigationTabs, BaseTab },
    setup() {
      const hasDefaultSLot = computed<boolean>(() => args.default !== '')
      return { args, hasDefaultSLot }
    },
    template: `
      <NavigationTabs
        v-bind="args"
        @click="click"
      >
        <template #tab="{ property: { id, translation, to, selected = false }}">
          <BaseTab :id="id" :to="to" :selected="selected">{{ translation }}</BaseTab>
        </template>
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
