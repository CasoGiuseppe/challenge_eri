/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import SidebarMenu from '@components/elements/sidebar-menu/SidebarMenu.vue'

const meta = {
  title: 'Elements/Sidebar Menu',
  component: SidebarMenu,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta

export default meta

type Story = StoryObj<typeof SidebarMenu>

const Templates: Story = {
  render: (args: any) => ({
    components: { SidebarMenu },
    setup() {
      return { args }
    },
    template: `
      <SidebarMenu
        v-bind="args"
      >
      </SidebarMenu>
    `,
    methods: {
      click: action('click'),
    },
  }),
}

export const Default: Story = {
  ...Templates,
}
