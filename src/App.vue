<template>
    <title-bar />
    <content />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TitleBar from './components/TitleBar.vue'
import Content from './components/Content.vue'
export default defineComponent({
  name: 'App',
  components: {
    Content,
    TitleBar,
  }
})
</script>

<style lang="scss">
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
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

html {
  overflow: hidden;
}

body {
  background-color: transparent;
  min-height: 100vh;
  display: grid;
  position: relative;
  grid-template-rows: 28px auto;
}
</style>
