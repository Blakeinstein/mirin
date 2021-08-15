import { createApp } from 'vue'
import App from './App.vue'
import VueGridLayout from 'vue-grid-layout'
import VuePreferences, { preference } from 'vue-preferences'
import { appWindow, PhysicalSize, PhysicalPosition } from '@tauri-apps/api/window'

const appSize = preference('size', { defaultValue: [1200, 900] as coords})
const appPosition = preference<coords>('position')

try {
  appWindow.setSize(new PhysicalSize(...appSize.get()))
  
  let currPosition = appPosition.get();
  if (currPosition)
    appWindow.setPosition(new PhysicalPosition(...currPosition))
  else
    appWindow.center()
} catch(err) {
  console.log(err)
}

window.addEventListener("beforeunload", async () => {
  let currSize = await appWindow.innerSize()
  let currPosition = await appWindow.innerPosition()
  appSize.set([currSize.width, currSize.height])
  appPosition.set([currPosition.x, currPosition.y])
});

createApp(App)
  .use(VuePreferences)
  .use(VueGridLayout)
  .mount('body')
