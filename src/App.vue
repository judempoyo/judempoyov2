<template>
  <div :class="{'terminal-mode': currentStyle === 'terminal'}">
    <header v-if="currentStyle" class="fixed top-0 right-0 p-4 z-50">
      <button
        @click="showStyleSelector = true"
        class="flex items-center gap-2 px-4 py-2 rounded-full transition-all"
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
			<Toogletheme/>
    </header>

    <StyleSelector 
      v-if="showStyleSelector" 
      @style-selected="handleStyleSelection"
      @close="showStyleSelector = false"
    />

    <TerminalPortfolio v-else-if="currentStyle === 'terminal'" />
    <VisualPortfolio v-else-if="currentStyle === 'visual'" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import StyleSelector from './components/StyleSelector.vue'
import TerminalPortfolio from './components/TerminalPortfolio.vue'
import VisualPortfolio from './components/VisualPortfolio.vue'
import Toogletheme from './components/toogletheme.vue'

export default {
  components: { StyleSelector, TerminalPortfolio, VisualPortfolio },
  setup() {
    const currentStyle = ref(null)
    const showStyleSelector = ref(false)

    const handleStyleSelection = (style) => {
      currentStyle.value = style
      showStyleSelector.value = false
      localStorage.setItem('portfolioStyle', style)
    }

    onMounted(() => {
      currentStyle.value = localStorage.getItem('portfolioStyle') || null
      showStyleSelector.value = !currentStyle.value
    })

    return { currentStyle, showStyleSelector, handleStyleSelection }
  }
}
</script>

<style>

</style>