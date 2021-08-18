<template>
  <div id="side-panel">
    <navbar />
    <n-divider> Terminal </n-divider>
  </div>
</template>

<script lang="ts">
import { NDivider } from 'naive-ui'
import navbar from './sidepanel/navbar.vue'

export default {
  components: {
    NDivider,
    navbar
  }
}

</script>

<style scoped>
#side-panel {
  height: 100%;
  position: relative;
  padding: 1em;
}
</style>