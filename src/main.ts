import { createApp, defineAsyncComponent } from 'vue'
import router from '@router/index'
import pinia from '@shared/stores'
import { i18n } from '@app/translations'
import '@assets/index.scss'

// create lazy APP
const app = createApp(defineAsyncComponent(() => import('@app/ui/layouts/App.vue')))
app.use(router).use(i18n)
app.config.warnHandler = () => null

router.isReady().then(() => {
  // router.addRoute('app', recruitment)
  app.use(pinia).mount('#app')
})
