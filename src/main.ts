import { createApp } from 'vue'
import App from './App.vue'
import VueGridLayout from 'vue-grid-layout'
import store from './store'

createApp(App)
  .use(store)
  .use(VueGridLayout)
  .mount('body')
