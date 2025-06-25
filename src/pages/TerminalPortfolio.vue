<template>
  <div class="terminal-container">
    <div class="terminal-header">
      <h1>Mon Portfolio - Mode Terminal</h1>
              <StyleSwitcher />

    </div>
    
    <div class="terminal-content">
      <!-- Votre contenu en style terminal ici -->
      <p>$ Bienvenue dans mon portfolio</p>
      <p>$ Tapez "help" pour voir les commandes disponibles</p>
    </div>
  </div>
</template>

<script>
import StyleSwitcher from '@/components/StyleSwitcher.vue'

export default {
  components: {
	StyleSwitcher
  }
}
</script>

<style scoped>
.terminal-container {
  background: #000;
  color: #0f0;
  padding: 20px;
  font-family: monospace;
  min-height: 100vh;
}
</style>