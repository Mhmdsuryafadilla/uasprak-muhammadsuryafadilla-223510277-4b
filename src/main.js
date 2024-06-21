import { createApp } from 'vue'
import { Quasar, QIcon } from 'quasar'
import quasarLang from 'quasar/lang/id' // Bahasa Indonesia
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import router from './router'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {},
  lang: quasarLang, // Menetapkan bahasa
  iconSet: 'material-icons' // Menetapkan ikon
})

myApp.use(router)

myApp.mount('#app')
