/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import TableList from '@components/elements/table-list/TableList.vue'
import { DEFAULT_BODY, DEFAULT_HEAD } from './constants'
import BasePill from '@components/base/base-pill/BasePill.vue'

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
    components: { TableList, BasePill },
    setup() {
      return { args }
    },
    template: `
      <TableList
        v-bind="args"
      >
        <template #head="{ property: { translate }}">{{ translation }}</template>
        <template #body="{ property: { id, label, state }}">
          <template v-if="state">
            <BasePill :variant="state" id="id">{{ state }}</BasePill>
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
