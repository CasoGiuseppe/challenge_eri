/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import AccordionInfo from '@components/tools/accordion-info/AccordionInfo.vue'
import { computed } from 'vue'
const meta = {
  title: 'Tools/Accordion Info',
  component: AccordionInfo,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta

export default meta

type Story = StoryObj<typeof AccordionInfo>

const Templates: Story = {
  render: (args: any) => ({
    components: { AccordionInfo },
    setup() {
      const hasDefaultSLot = computed<boolean>(() => args.default !== '')
      return { args, hasDefaultSLot }
    },
    template: `
      <AccordionInfo
        v-bind="args"
        @click="click"
      >
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
