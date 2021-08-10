import { Module } from "vuex"
import { rootState, themeState, Theme } from "../types"

const themeModule: Module<themeState, rootState> = {
  namespaced: true,
  state: {
    theme: 'dark'
  },
  getters: {
    theme: (state: themeState) => {
      return state.theme 
    }
  },
  mutations: {
    UPDATE_THEME (state: themeState, payload: Theme) {
      state.theme = payload
    }
  },
  actions: {
    setTheme({ commit }, theme: Theme) {
      commit('UPDATE_THEME', theme)
    }
  }
}


export default themeModule