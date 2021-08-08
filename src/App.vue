<template>
  <title-bar />
  <div id="content">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { appWindow } from '@tauri-apps/api/window'
import TitleBar from './components/TitleBar.vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    TitleBar
  },
  methods: {
  }
})
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  scrollbar-width: thin !important;
  scrollbar-color: #161616c2 #afafaf52 !important;
}

* {
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #161616c2;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #afafaf52;
    border-radius: 20px;
    border: 1px solid black;
  }
}

:root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: transparent;
  height: 100vh;
  width: 100vw;
  margin: 0px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid black;
}

#content {
  flex: 1 0;
  text-align: center;
  background: whitesmoke;
}
</style>
