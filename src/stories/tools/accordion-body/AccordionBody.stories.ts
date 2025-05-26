/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import AccordionBody from '@components/tools/accordion-body/AccordionBody.vue'
import { computed } from 'vue'

const meta = {
  title: 'Tools/Accordion Body',
  component: AccordionBody,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta

export default meta

type Story = StoryObj<typeof AccordionBody>

const Templates: Story = {
  render: (args: any) => ({
    components: { AccordionBody },
    setup() {
      const hasSummarytSLot = computed<boolean>(() => args.summary !== '')
      const hasContenttSLot = computed<boolean>(() => args.content !== '')
      return { args, hasSummarytSLot, hasContenttSLot }
    },
    template: `
      <AccordionBody
        v-bind="args"
        @click="click"
      >
      </AccordionBody>
    `,
    methods: {
      click: action('click'),
    },
  }),
}

export const Default: Story = {
  ...Templates,
}
