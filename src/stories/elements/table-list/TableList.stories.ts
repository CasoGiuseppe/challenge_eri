/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import TableList from '@components/elements/table-list/TableList.vue'
import { DEFAULT_HEAD } from './constants'

const meta = {
  title: 'Elements/Table list',
  component: TableList,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    head: { control: 'object' },
  },
  args: {
    id: 'table',
    head: DEFAULT_HEAD,
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof TableList>

const Templates: Story = {
  render: (args: any) => ({
    components: { TableList },
    setup() {
      return { args }
    },
    template: `
      <TableList
        v-bind="args"
      >
        <template #head="{ property: { label }}">{{ label }}</template>
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
