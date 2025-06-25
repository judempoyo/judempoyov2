<script>
import { ref, onMounted, provide } from 'vue'
import StyleSelector from '@/components/StyleSelector.vue'
import TerminalPortfolio from '@/pages/TerminalPortfolio.vue'
import VisualPortfolio from '@/pages/VisualPortfolio.vue'
import StyleSwitcher from './components/StyleSwitcher.vue'

export default {
  components: { StyleSelector, TerminalPortfolio, VisualPortfolio, StyleSwitcher },
  setup() {
    const currentStyle = ref(null)
    const showStyleSelector = ref(false)

    const handleStyleSelection = (style) => {
      currentStyle.value = style
      showStyleSelector.value = false
      localStorage.setItem('portfolioStyle', style)
    }

    const openStyleSelector = () => {
      showStyleSelector.value = true
    }

    onMounted(() => {
      currentStyle.value = localStorage.getItem('portfolioStyle') || null
      showStyleSelector.value = !currentStyle.value
    })

    // Fournir les valeurs aux composants enfants
    provide('currentStyle', currentStyle)
    provide('handleStyleSelection', handleStyleSelection)
    provide('openStyleSelector', openStyleSelector)

    return { 
      currentStyle, 
      showStyleSelector, 
      handleStyleSelection,
      openStyleSelector
    }
  }
}
</script>

<template>
  <div :class="{'terminal-mode': currentStyle === 'terminal'}">
    <StyleSwitcher v-if="currentStyle" />
    
    <StyleSelector 
      v-if="showStyleSelector" 
      @style-selected="handleStyleSelection"
      @close="showStyleSelector = false"
    />

    <TerminalPortfolio v-else-if="currentStyle === 'terminal'" />
    <VisualPortfolio v-else-if="currentStyle === 'visual'" />
  </div>
</template>



	<style scoped>
	
	</style>