<template>
  <n-config-provider id="content" :class="theme" :theme="getTheme">
    <grid-layout
      v-model:layout="layout"
      :col-num="10"
      :col-size="20"
      :is-resizable="true"
      :use-css-transforms="true"
      :auto-size="false"
      :row-height="10"
      :vertical-compact="false"
      :prevent-collision="true"
      :margin="margin"
      @layout-updated="updateLayout"
      class="content-grid"
    >
      <editor
        :layout="layout[0]"
        :theme="theme"
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
import { preference } from 'vue-preferences'

import Editor from './Editor.vue'
import SidePanel from './SidePanel.vue'

interface ILayout {
  x: number;
  y: number;
  w: number;
  h: number;
  i: number;
}

const layoutStorage = preference<ILayout[]>('paneLayout',
  { 
    defaultValue: [
      {x: 0, y: 0, w: 7, h: 10, i: 0},
      {x: 7, y: 0, w: 3, h: 10, i: 1},
    ],
    reactive: false
  }
);

export default {
  components: {
    Editor,
    SidePanel,
    NConfigProvider
  },
  data () {
    return {
      margin: [3, 3],
      layout: layoutStorage.get()
    }
  },
  computed: {
    theme: preference('activeTheme', { defaultValue: 'dark' }),
    getTheme(): typeof darkTheme | null {
      return this.theme === 'dark' ? darkTheme : null
    }
  },
  methods: {
    updateLayout(newLayout: ILayout[]): void {
      layoutStorage.set(newLayout)
    }
  }
}
</script>

<style lang="scss">
#content {
  border-radius: 0 0 5px 5px;
  &.dark {
    background: #101014;
  }
  &.light {
    background: #e5e6eb;
  }
}
.content-grid {
  height: 100%;
}
.vue-grid-item {
  max-height: calc(100% - 6px);
  min-height: calc(100% - 6px);
}
.drag-handle {
  position: absolute;
  top: 2px;
  left: 2px;
  height: 5px;
  width: 5px;
  border: 2px solid #fff8;
  border-right: 0px;
  border-bottom: 0px;
  z-index: 3000;
}
.light .drag-handle {
  border-color: #0008;
}
.dark .vue-resizable-handle {
  filter: invert(1);
}
.relative {
  position: relative;
}
</style>