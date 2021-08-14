import { createApp } from 'vue'
import App from './App.vue'
import VueGridLayout from 'vue-grid-layout'
import VuePreferences from 'vue-preferences';

createApp(App)
  .use(VuePreferences)
  .use(VueGridLayout)
  .mount('body')
