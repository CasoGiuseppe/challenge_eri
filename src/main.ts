import { createApp, defineAsyncComponent } from 'vue'
import router from '@router/index'
import pinia from '@shared/stores'
import { i18n } from '@app/translations'
import customer from '@modules/customer/presentation/router'
import administration from '@modules/administration/presentation/router'
import folder from '@modules/folder/presentation/router/index'
import '@assets/index.scss'

// create lazy APP
const app = createApp(defineAsyncComponent(() => import('@app/ui/layouts/App.vue')))
app.use(router).use(i18n)
app.config.warnHandler = () => null

router.isReady().then(() => {
  router.addRoute('app', customer)
  router.addRoute('app', administration)
  router.addRoute('app', folder)
  app.use(pinia).mount('#app')
})
