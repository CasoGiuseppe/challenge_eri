/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import TableList from '@components/elements/table-list/TableList.vue'
import { DEFAULT_BODY, DEFAULT_HEAD } from './constants'
import BaseButton from '@components/base/base-button/BaseButton.vue'

const meta = {
  title: 'Elements/Table list',
  component: TableList,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    head: { control: 'object' },
    body: { control: 'object' },
  },
  args: {
    id: 'table',
    head: DEFAULT_HEAD,
    body: DEFAULT_BODY,
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof TableList>

const Templates: Story = {
  render: (args: any) => ({
    components: { TableList, BaseButton },
    setup() {
      return { args }
    },
    template: `
      <TableList
        v-bind="args"
      >
        <template #head="{ property: { label }}">{{ label }}</template>
        <template #body="{ property: { id, label, action }}">
          <template v-if="action">
            <BaseButton size="s" id="id" @click="action">{{ label }}</BaseButton>
          </template>
          <template v-else>{{ label }}</template>
        </template>
      </TableList>
    `,
    methods: {
      click: action('click'),
    },
  }),
}

export const Default: Story = {
  ...Templates,
}
