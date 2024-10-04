import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import elementPlus from './plugins/element-plus'

const app = createApp(App)

app.use(router)
app.use(elementPlus)

app.mount('#app')
