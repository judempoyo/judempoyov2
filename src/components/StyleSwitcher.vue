<template>
  <button
    @click="openStyleSelector"
    class="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full transition-all"
    :class="{
      'bg-gray-800 text-white hover:bg-gray-700': currentStyle === 'terminal',
      'bg-white text-gray-800 shadow-md hover:bg-gray-100': currentStyle === 'visual'
    }"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
    Changer de style
  </button>
</template>

<script>
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