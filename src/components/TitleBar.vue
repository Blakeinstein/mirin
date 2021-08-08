<template>
  <div class="titlebar titlebar-style-dark" data-tauri-drag-region>
    <div class="titlebar-buttons">
      <div class="macButton macButtonClose" @click="close">
        <svg name="TitleBarCloseMac" width="12" height="12" viewBox="0 0 12 12">
          <path stroke="#4c0000" fill="none" d="M8.5,3.5 L6,6 L3.5,3.5 L6,6 L3.5,8.5 L6,6 L8.5,8.5 L6,6 L8.5,3.5 Z"></path>
        </svg>
      </div>
      <div class="macButton macButtonMinimize" @click="minimize">
        <svg name="TitleBarMinimizeMac" width="12" height="12" viewBox="0 0 12 12">
          <rect fill="#975500" width="8" height="2" x="2" y="5" fill-rule="evenodd"></rect>
        </svg>
      </div>
      <div class="macButton macButtonMaximize" @click="maximize">
        <svg name="TitleBarMaximizeMac" width="12" height="12" viewBox="0 0 12 12">
          <g fill="#006500" fill-rule="evenodd">
            <path d="M5,3 C5,3 5,6.1325704 5,6.48601043 C5,6.83945045 5.18485201,7 5.49021559,7 L9,7 L9,6 L8,6 L8,5 L7,5 L7,4 L6,4 L6,3 L5,3 Z" transform="rotate(180 7 5)"></path>
            <path d="M3,5 C3,5 3,8.1325704 3,8.48601043 C3,8.83945045 3.18485201,9 3.49021559,9 L7,9 L7,8 L6,8 L6,7 L5,7 L5,6 L4,6 L4,5 L3,5 Z"></path>
          </g>
        </svg>
      </div>
    </div>
    <div class="titlebar-header">
        <div class="titlebar-icon">
            <slot name="icon"></slot>
        </div>
  
        <div class="titlebar-name">
            <slot name="title"></slot>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { appWindow } from '@tauri-apps/api/window'

export default defineComponent({
  name: 'TitleBar',
  methods: {
    close() {
      appWindow.close()
    },
    minimize() {
      appWindow.minimize()
    },
    async maximize() {
      await appWindow.isMaximized() ? appWindow.unmaximize() : appWindow.maximize()
    }
  }
})
</script>

<style lang="scss" scoped>
.titlebar {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 28px;
  justify-content: space-between;
  &.titlebar-style-dark {
    color: #fff;
    background: #2d3135;
  }
  &.titlebar-style-light {
    color: #2c2c2c;
    background: #f6f6f6;
  }
  .titlebar-header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  .titlebar-icon, .titlebar-name {
    display: flex;
    align-content: center;
    align-self: center;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 14px;
    line-height: 28px;
    padding: 0 12px;
    height: 28px;
    > svg, > img {
      display: block;
      align-content: center;
      align-self: center;
      width: auto;
      height: 16px;
    }
  }
  .titlebar-icon ~ .titlebar-name {
    padding-left: 0;
  }
  .titlebar-menu {
    display: flex;
  }
  .titlebar-buttons {
    display: flex;
    flex-direction: row;
    flex-grow: 0;
    flex-shrink: 0;
    height: 28px;
    padding: 10px;
    width: 70px;
    justify-content: space-between;
    align-items: center;
    float: left;
    position: absolute;
    .macButton {
      border-radius: 50%;
      box-sizing: border-box;
      height: 12px;
      width: 12px;
      background-color: #dcdcdc;
      border-color: #d1d1d1;
      &.macButtonClose {
        background-color: #fc615d;
      }
      &.macButtonMinimize {
        background-color: #fdbc40;
      }
      &.macButtonMaximize {
        background-color: #34c749;
      }
      svg {
        display: block;
        visibility: hidden;
      }
    }
    &:hover {
      .macButton {
        svg {
          visibility: visible;
        }
      }
    }
    &:active {
      .macButton {
        svg {
          filter: grayscale(0.6);
        }
      }
    }
  }
}
</style>