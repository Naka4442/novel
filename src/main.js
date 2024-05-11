import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

createApp(App).use(router).use(store).mount('#app')
// приложение, роуте это имитатор перелистования, сторе это менеджер состояний, моунт это собирает приложение и вставляет его на хтмл страницу
