/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import SidebarMenu from '@components/elements/sidebar-menu/SidebarMenu.vue'
import { DEFAULT_NAVIGATION } from './constants'
import BaseButton from '@components/base/base-button/BaseButton.vue'
import { computed } from 'vue'

const meta = {
  title: 'Elements/Sidebar Menu',
  component: SidebarMenu,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    navigation: { control: 'object' },
    isExpanded: { control: 'boolean' },
  },
  args: {
    id: 'sidebar',
    navigation: DEFAULT_NAVIGATION,
    isExpanded: true,
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof SidebarMenu>

const Templates: Story = {
  render: (args: any) => ({
    components: { SidebarMenu, BaseButton },
    setup() {
      const isExpanded = computed(() => args.isExpanded === true)
      const bindProps = computed(() => {
        return {
          isRounded: !isExpanded.value,
          unsetStyle: isExpanded.value,
          isFullSize: isExpanded.value,
          size: isExpanded.value ? 'l' : 's',
          style: isExpanded.value ? {} : { '--custom-background': 'hsla(219, 100%, 18%, 1)' },
        }
      })
      return { args, isExpanded, bindProps }
    },
    template: `
      <SidebarMenu
        v-bind="args"
        :style="{'--custom-sidebar-background': 'hsla(358, 78%, 55%, 1)'}"
      >
        <template #navigation="{ property: { id, translation, icon, to }}">
          <BaseButton
            :id="id"
            is="router-link"
            :to="to"
            v-bind="{
              ...bindProps,
              ...(icon && { hasIcon: icon })
            }">
              <template
                v-if="isExpanded"
                #default
              >
                  {{ translation }}
              </template>
            </BaseButton>
        </template>
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
