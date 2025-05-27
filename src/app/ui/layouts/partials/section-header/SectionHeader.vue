<template>
  <section class="section-header">
    <UserInfoMenu id="user-menu" :items="DEFATULT_ITEMS">
      <template #action="{ property: { id, label, icon, to, type } }">
        <BaseButton
          :id="id"
          size="s"
          :isRounded="false"
          :is="type"
          :disabled="id === getLocale"
          v-bind="{
            ...(icon && { hasIcon: icon }),
            ...(to && { to: to }),
            ...(type === 'button' && { onclick: changeLanguage }),
          }"
          :style="{ '--custom-background': 'hsla(219, 100%, 18%, 1)' }"
        >
          <template #default v-if="label">{{ label }}</template>
        </BaseButton>
      </template>
    </UserInfoMenu>
  </section>
</template>
<script setup lang="ts">
import { inject } from 'vue'
import BaseButton from '@components/base/base-button/BaseButton.vue'
import type { IUserNavigationItem } from '@/app/ui/components/tools/user-info-menu/types'
import UserInfoMenu from '@components/tools/user-info-menu/UserInfoMenu.vue'
import { keyUseTranslation } from '@shared/types/symbols'
import type { IProvidedTranslation } from '@composables/useTranslations/interfaces'

const DEFATULT_ITEMS: IUserNavigationItem[] = [
  {
    id: 'es',
    type: 'button',
    label: 'es',
  },
  {
    id: 'en',
    type: 'button',
    label: 'en',
  },
  {
    id: 'fr',
    type: 'button',
    label: 'fr',
  },
  {
    id: '1',
    type: 'router-link',
    icon: 'iconSearch',
    to: { name: 'welcome' },
  },
]

const useTranslation = inject(keyUseTranslation) as IProvidedTranslation
const { setNewTranslationLocale, getLocale } = useTranslation()

const changeLanguage = (event: Event) => {
  const { id } = event.target as HTMLDetailsElement
  setNewTranslationLocale(id)
}
</script>
<style src="./SectionHeader.scss" lang="scss" scoped></style>
