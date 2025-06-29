<script>
import { ref, onMounted, provide } from 'vue'
import StyleSelector from '@/components/StyleSelector.vue'
import TerminalPortfolio from '@/pages/TerminalPortfolio.vue'
import VisualPortfolio from '@/pages/VisualPortfolio.vue'
import StyleSwitcher from './components/StyleSwitcher.vue'
import ToogleTheme from './components/ToggleTheme.vue'
import { sharedData } from '@/data/shared-data'


export default {
	name: 'PortfolioApp', 
  components: { StyleSelector, TerminalPortfolio, VisualPortfolio, StyleSwitcher, ToogleTheme },
  setup() {
    const currentStyle = ref(null)
    const showStyleSelector = ref(false)

    const handleStyleSelection = (style) => {
      currentStyle.value = style
      showStyleSelector.value = false
      localStorage.setItem('portfolioStyle', style)
			 document.title = `Jude MPOYO | ${style === 'terminal' ? 'Terminal' : 'Visual'} Portfolio`
    
    }

    const openStyleSelector = () => {
      showStyleSelector.value = true
    }

    onMounted(() => {
      currentStyle.value = localStorage.getItem('portfolioStyle') || null
      showStyleSelector.value = !currentStyle.value
    })

const metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      metaDescription.content = currentStyle.value === 'terminal' 
        ? 'Interactive terminal-style portfolio showcasing developer skills' 
        : 'Visual portfolio with modern design showcasing projects'
      document.head.appendChild(metaDescription)
    
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
	 <header v-if="!showStyleSelector" aria-label="Portfolio navigation">
      <StyleSwitcher v-if="currentStyle" />
    </header>
    

    <StyleSelector 
      v-if="showStyleSelector" 
      @style-selected="handleStyleSelection"
      @close="showStyleSelector = false"
			  aria-label="Portfolio style selection"
    />
    <TerminalPortfolio v-else-if="currentStyle === 'terminal'" />
    <VisualPortfolio v-else-if="currentStyle === 'visual'" />
  </div>
	
</template>



	<style scoped>
	
	</style>