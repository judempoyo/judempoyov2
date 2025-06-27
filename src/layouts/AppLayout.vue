<template>
  <div :class="{'terminal-mode': currentStyle === 'terminal'}">
    <header class="fixed top-0 left-0 right-0 z-50 p-4 flex justify-end">
      <StyleSwitcher />
    </header>
    
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import { inject } from 'vue'
import StyleSwitcher from './StyleSwitcher.vue'

export default {
  components: { StyleSwitcher },
  setup() {
    const currentStyle = inject('currentStyle')
    
    return {
      currentStyle
    }
  }
}
</script>