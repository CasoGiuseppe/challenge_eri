<template>
  <section class="section-header">
    <UserInfoMenu id="user-menu" :items="DEFATULT_ITEMS">
      <template #action="{ property: { id, label, icon, to } }">
        <BaseButton
          :id="id"
          size="s"
          :isRounded="false"
          :unsetStyle="false"
          is="router-link"
          v-bind="{
            ...(icon && { hasIcon: icon }),
            ...(to && { to: to }),
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
import BaseButton from '@components/base/base-button/BaseButton.vue'
import type { IUserNavigationItem } from '@/app/ui/components/tools/user-info-menu/types'
import UserInfoMenu from '@components/tools/user-info-menu/UserInfoMenu.vue'
const DEFATULT_ITEMS: IUserNavigationItem[] = [
  {
    id: '1',
    label: 'it',
    to: { name: 'welcome' },
  },
  {
    id: '1',
    icon: 'iconSearch',
    to: { name: 'welcome' },
  },
]
</script>

<style src="./SectionHeader.scss" lang="scss" scoped></style>
