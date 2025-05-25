/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import AccordionInfo from '@components/tools/accordion-info/AccordionInfo.vue'
import { computed } from 'vue'
import { DEFAULT_ACTIONS } from './constants'
import BaseButton from '@components/base/base-button/BaseButton.vue'

const meta = {
  title: 'Tools/Accordion Info',
  component: AccordionInfo,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    title: { control: 'text' },
    open: { control: 'boolean' },
    summary: { control: 'text' },
    content: { control: 'text' },
    actions: { control: 'object' },
  },
  args: {
    id: 'accordion',
    open: false,
    summary: 'Client',
    content: 'content',
    actions: DEFAULT_ACTIONS,
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof AccordionInfo>

const Templates: Story = {
  render: (args: any) => ({
    components: { AccordionInfo, BaseButton },
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
        <template #summary v-if="hasSummarytSLot">{{ args.summary }} <strong>015454156 - Client 1111111111 NC</strong></template>
        <template #content v-if="hasContenttSLot">{{ args.content }}</template>
        <template #actions="{ property: { id, icon }}">
          <BaseButton
            :id="id"
            :hasIcon="icon"
            size="s"
            :isRounded="false"
            :unsetStyle="true"
            @click="click"
          />
        </template>
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
