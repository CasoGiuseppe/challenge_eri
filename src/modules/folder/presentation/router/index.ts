import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'folders',
  name: 'Folders',
  components: {
    default: () =>
      import(
        /* webpackChunkName: "FoldersBoard" */ '@modules/folder/presentation/ui/folder-board/FolderBoard.vue'
      ),
  },
} as RouteRecordRaw
