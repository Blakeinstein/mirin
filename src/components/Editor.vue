<template>
  <grid-item
    :i="layout.i"
    :x="layout.x"
    :y="layout.y"
    :w="layout.w"
    :h="layout.h"
    :min-w="2"
    :max-w="10"
    :max-h="10"
    drag-allow-from=".drag-handle"
    drag-ignore-from="#editor"
  >
    <div class="editor-container" >
      <div class="drag-handle" />
      <div ref="editor" id="editor" v-show="editorLoaded" />
      <n-skeleton height="100%" width="100%" round v-show="!editorLoaded" />
    </div>
  </grid-item>
</template>

<script lang="ts">
import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import { NSkeleton } from 'naive-ui'

// @ts-ignore
self.MonacoEnvironment = {
  // @ts-ignore
  getWorker(_, label) {
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
  }
}

interface EditorData {
  editor: monaco.editor.IStandaloneCodeEditor | null;
  editorOpts: monaco.editor.IStandaloneEditorConstructionOptions | monaco.editor.IEditorOptions;
  editorLoaded: boolean;
}

export default {
  components: {
    NSkeleton
  },
  props: {
    layout: {
      type: Object,
      required: true,
      default: {"x":0,"y":0,"w":7,"h":10,"i":"0"}
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  data (): EditorData {
    return {
      editor: null,
      editorOpts: {},
      editorLoaded: false
    }
  },
  watch: {
    editorOpts (newVal: monaco.editor.IEditorOptions) {
      this.editor?.updateOptions(newVal)
    },
    theme (val: string) {
      this.editor?.updateOptions({
        theme: val == 'dark' ? 'vs-dark' : ''
      })
    }
  },
  computed: {
    code(): string {
      return this.editor ? this.editor.getValue() : ''
    },
  },
  mounted () {
    this.editor = monaco.editor.create(this.$refs.editor as HTMLElement, 
      {
        value: "function hello() {\n\talert('Hello world!');\n}",
        language: 'javascript',
        minimap: {
          enabled: false,
        },
        readOnly: false,
        theme: this.theme == 'dark' ? 'vs-dark' : '',
        automaticLayout: true,
        scrollBeyondLastLine: false,
        wordWrap: 'bounded',
      }
    )
    let eventListner = this.editor.onDidScrollChange(() => {
      eventListner.dispose()
      this.editorLoaded = true
    })
  }
}
</script>

<style>
.editor-container {
  position: relative;
  height: 100%;
}
#editor {
  position: absolute;
  inset: 0;
}
.monaco-editor .parameter-hints-widget {
  border: 0px;
}
.monaco-editor .parameter-hints-widget .signature {
  padding: 0px;
}
.monaco-editor .suggest-widget {
  border: 0px;
}
.monaco-editor.vs-dark .suggest-widget {
  border: 0px;
}
.monaco-editor .rename-box {
  top: 0;
}
</style>