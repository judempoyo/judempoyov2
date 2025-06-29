<template>
  <button
    @click="openStyleSelector"
    class="fixed top-4 right-4 z-50 flex items-center gap-2 px-2 py-2 rounded-full transition-all"
    :class="{
      'bg-zinc-800 text-white hover:bg-zinc-700': currentStyle === 'terminal',
      'bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 shadow-md hover:bg-zinc-100': currentStyle === 'visual'
    }"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue'

export default {
  setup() {
    const currentStyle = inject('currentStyle')
    const openStyleSelector = inject('openStyleSelector')

    return {
      currentStyle,
      openStyleSelector
    }
  }
}
</script>