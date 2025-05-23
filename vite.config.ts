import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  build: {
    target: 'esnext',
    minify: false,
    modulePreload: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5001,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@shared': fileURLToPath(new URL('./src/app/shared', import.meta.url)),
      '@router': fileURLToPath(new URL('./src/app/router', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/app/shared/composables', import.meta.url)),
      '@validators': fileURLToPath(new URL('./src/app/ui/validators', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/app/ui/components', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/app/ui/layouts', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
      '@tests': fileURLToPath(new URL('./src/app/shared/tests', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/assets/tools/size.scss' as useTools;
          @use '@/assets/_abstracts/_colors.scss' as useColors;
          @use '@/assets/_abstracts/_easing.scss' as useEasing;
          @use '@/assets/_abstracts/_fonts.scss' as useFonts;
          @use '@/assets/_abstracts/_spacing.scss' as useSpacing;
          @use '@/assets/_abstracts/_units.scss' as useUnits;
          @use '@/assets/mixins/tipographies.scss' as useTypographies;
        `,
      },
    },
  },
})
