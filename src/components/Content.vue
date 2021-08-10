<template>
  <n-config-provider id="content" :theme="getTheme">
    <grid-layout
      :layout="layout"
      :col-num="10"
      :col-size="20"
      :is-resizable="true"
      :use-css-transforms="true"
      :auto-size="false"
      :row-height="rowHeight"
      :vertical-compact="false"
      :prevent-collision="true"
      :margin="margin"
      class="content-grid"
    >
      <editor
        :layout="layout[0]"
      />
      <grid-item
        :i="layout[1].i"
        :x="layout[1].x"
        :y="layout[1].y"
        :w="layout[1].w"
        :h="layout[1].h"
        :min-w="2"
        :max-w="10"
        :max-h="10"
        drag-allow-from=".drag-handle"
        drag-ignore-from=".no-drag"
      >
        <div class="drag-handle" />
        <side-panel class="no-drag"/>
      </grid-item>
    </grid-layout>
  </n-config-provider>
</template>

<script lang="ts">
import { NConfigProvider, darkTheme} from 'naive-ui'
import { mapGetters } from 'vuex'

import Editor from './Editor.vue'
import SidePanel from './SidePanel.vue'
export default {
  components: {
    Editor,
    SidePanel,
    NConfigProvider
  },
  data () {
    return {
      layout: [
        {"x":0,"y":0,"w":7,"h":10,"i":"0"},
        {"x":7,"y":0,"w":3,"h":10,"i":"1"},
      ],
      margin: [5, 5]
    }
  },
  computed: {
    getTheme(): typeof darkTheme | null {
      return this.theme == 'dark' ? darkTheme : null
    },
    ...mapGetters('theme', ['theme'])
  }
}
</script>

<style lang="scss">
#content {
  background: #e5e6eb;
  border-radius: 0 0 5px 5px;
}
.content-grid {
  height: 100%;
}
.vue-grid-item {
  max-height: calc(100% - 10px);
  min-height: calc(100% - 10px);
}
.drag-handle {
  position: absolute;
  top: 2px;
  left: 2px;
  height: 5px;
  width: 5px;
  border: 2px solid #0008;
  border-right: 0px;
  border-bottom: 0px;
  z-index: 3000;
}
.relative {
  position: relative;
}
</style>