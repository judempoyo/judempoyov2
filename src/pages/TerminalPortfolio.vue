<template>
  <div class="bg-zinc-800 terminal-container">
    <div class="terminal-header">
  
              <StyleSwitcher />

    </div>

  <Terminal />
  </div>
</template>

<script >
import StyleSwitcher from '@/components/StyleSwitcher.vue'
import Terminal from '@/components/Terminal.vue'

export default {
  components: { Terminal, StyleSwitcher}
}

</script>

<style scoped>
.terminal-container {
  padding: 20px;
  font-family: monospace;
  min-height: 100vh;
}

</style>