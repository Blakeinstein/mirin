import { createStore } from 'vuex'
import theme from './core/theme'
import { rootState } from './types'
import { getVersion } from '@tauri-apps/api/app'

const version = await getVersion()

export default createStore<rootState>({
  state: {
    version
  },
  modules: {
    theme
  }
})