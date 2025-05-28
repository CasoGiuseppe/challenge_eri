import { createApp } from 'vue'
import router from '@router/index'
import pinia from '@shared/stores'
import { i18n } from '@app/translations'
import customer from '@modules/customer/presentation/router'
import administration from '@modules/administration/presentation/router'
import folder from '@/modules/account/presentation/router/index'
import App from '@app/ui/layouts/App.vue'
import '@assets/index.scss'

// create lazy APP
const app = createApp(App)
app.use(router)
app.config.warnHandler = () => null

router.isReady().then(() => {
  router.addRoute('app', customer)
  router.addRoute('app', administration)
  router.addRoute('app', folder)
  app.use(pinia).use(i18n).mount('#app')
})
