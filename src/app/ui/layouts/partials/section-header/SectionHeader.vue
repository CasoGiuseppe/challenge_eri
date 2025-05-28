<template>
  <section class="section-header">
    <UserInfoMenu id="user-menu" :items="DEFATULT_LOCALES">
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
import UserInfoMenu from '@components/tools/user-info-menu/UserInfoMenu.vue'
import { keyUseTranslation } from '@shared/types/symbols'
import type { IProvidedTranslation } from '@composables/useTranslations/interfaces'
import { useLocalesStore } from '@shared/stores/configuration/locales/localeHandle'
import { storeToRefs } from 'pinia'

const useTranslation = inject(keyUseTranslation) as IProvidedTranslation
const { setNewTranslationLocale, getLocale } = useTranslation()
const { localesLanguages: DEFATULT_LOCALES } = storeToRefs(useLocalesStore)

const changeLanguage = async (event: Event) => {
  const { id } = event.target as HTMLDetailsElement
  await setNewTranslationLocale(id)
}
</script>
<style src="./SectionHeader.scss" lang="scss" scoped></style>
