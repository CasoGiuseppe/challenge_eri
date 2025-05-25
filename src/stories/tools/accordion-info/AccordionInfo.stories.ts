/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import AccordionInfo from '@components/tools/accordion-info/AccordionInfo.vue'
import { computed } from 'vue'
const meta = {
  title: 'Tools/Accordion Info',
  component: AccordionInfo,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    title: { control: 'text' },
    summary: { control: 'text' },
    content: { control: 'text' },
  },
  args: {
    id: 'accordion',
    summary: 'Summary',
    content: 'content',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof AccordionInfo>

const Templates: Story = {
  render: (args: any) => ({
    components: { AccordionInfo },
    setup() {
      const hasSummarytSLot = computed<boolean>(() => args.summary !== '')
      const hasContenttSLot = computed<boolean>(() => args.content !== '')
      return { args, hasSummarytSLot, hasContenttSLot }
    },
    template: `
      <AccordionInfo
        v-bind="args"
        @click="click"
      >
        <template #summary v-if="hasSummarytSLot">{{ args.summary }}</template>
        <template #content v-if="hasContenttSLot">{{ args.content }}</template>
      </AccordionInfo>
    `,
    methods: {
      click: action('click'),
    },
  }),
}

export const Default: Story = {
  ...Templates,
}
