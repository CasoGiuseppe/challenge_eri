/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import AccordionBody from '@components/tools/accordion-body/AccordionBody.vue'
import { computed } from 'vue'
import { DEFAULT_ACTIONS } from '../accordion-info/constants'
import BaseIcon from '@components/base/base-icon/BaseIcon.vue'

const meta = {
  title: 'Tools/Accordion Body',
  component: AccordionBody,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    open: { control: 'boolean' },
    summary: { control: 'text' },
    actions: { control: 'object' },
  },
  args: {
    open: false,
    summary: 'Accordion title',
    actions: DEFAULT_ACTIONS,
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof AccordionBody>

const Templates: Story = {
  render: (args: any) => ({
    components: { AccordionBody, BaseIcon },
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
        <template #summary v-if="hasSummarytSLot">{{ args.summary }}</template>
        <template #actions="{ property: { id, icon }}">
          <BaseIcon :id="id" :name="icon"></BaseIcon>
        </template>
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
