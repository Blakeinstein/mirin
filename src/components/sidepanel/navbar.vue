<template>
  <n-space align="center" justify="center">
    <n-button-group>
      <n-button color="#8a2be2">
        <template #icon>
          <n-icon>
            <play-outline />
          </n-icon>
        </template>
        Run
      </n-button>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button round>
            <template #icon>
              <n-icon><refresh-outline /></n-icon>
            </template>
          </n-button>
        </template>
        Reload
      </n-tooltip>
    </n-button-group>
    
    <n-button-group>
      <n-tooltip>
        <template #trigger>
          <n-button round>
            <template #icon>
              <n-icon><code-working-outline /></n-icon>
            </template>
          </n-button>
        </template>
        Format
      </n-tooltip>
      <n-tooltip>
        <template #trigger>
          <n-button round>
            <template #icon>
              <n-icon><copy-outline /></n-icon>
            </template>
          </n-button>
        </template>
        Copy
      </n-tooltip>
    </n-button-group>

    <n-button-group>
      <n-tooltip>
        <template #trigger>
          <n-button round>
            <template #icon>
              <n-icon><add-circle-outline /></n-icon>
            </template>
          </n-button>
        </template>
        Add test case
      </n-tooltip>
      <n-tooltip>
        <template #trigger>
          <n-button round>
            <template #icon>
              <n-icon><bookmark-outline /></n-icon>
            </template>
          </n-button>
        </template>
        Save test case
      </n-tooltip>
      <n-tooltip>
        <template #trigger>
          <n-button round>
            <template #icon>
              <n-icon><log-out-outline /></n-icon>
            </template>
          </n-button>
        </template>
        Load test case
      </n-tooltip>
    </n-button-group>
    <n-tooltip>
      <template #trigger>
        <n-button round>
          <template #icon>
            <n-icon><receipt-outline /></n-icon>
          </template>
        </n-button>
      </template>
      Custom IO
    </n-tooltip>
    <n-tooltip>
      <template #trigger>
        <n-button round @click="theme = theme == 'dark' ? 'light' : 'dark'">
          <template #icon>
            <n-icon><contrast-outline /></n-icon>
          </template>
        </n-button>
      </template>
      <span style="text-transform: capitalize">{{ theme == 'dark' ? 'light' : 'dark' }} Mode</span>
    </n-tooltip>
  </n-space>
</template>

<script lang="ts">
import { NSpace , NIcon, NButton, NButtonGroup, NTooltip } from 'naive-ui'
import { 
  PlayOutline,
  RefreshOutline,
  CodeWorkingOutline,
  CopyOutline,
  AddCircleOutline,
  BookmarkOutline,
  LogOutOutline,
  ReceiptOutline,
  ContrastOutline
} from '@vicons/ionicons5'
import { preference } from 'vue-preferences'

export default {
  components: {
    NSpace,
    NButton,
    NIcon,
    NButtonGroup,
    NTooltip,
    PlayOutline,
    RefreshOutline,
    CodeWorkingOutline,
    CopyOutline,
    AddCircleOutline,
    BookmarkOutline,
    LogOutOutline,
    ReceiptOutline,
    ContrastOutline
  },
  computed: {
    theme: preference('activeTheme', { defaultValue: 'dark' })
  },
  methods: {
    changeTheme() {
      preference('activeTheme', { defaultValue: 'dark' }).set(this.theme == 'dark' ? 'light' : 'dark')
    }
  }
}
</script>

<style>

</style>