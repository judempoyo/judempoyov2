<template>
  <div class="terminal-container">
    <div class="terminal-header">
      <h1>Mon Portfolio - Mode Terminal</h1>
              <StyleSwitcher />

    </div>


		  <div ref="terminalContainer" class="terminal-container"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Terminal } from '@xterm/xterm';
import StyleSwitcher from '@/components/StyleSwitcher.vue'

const terminalContainer = ref<HTMLElement | null>(null)
let term: Terminal

onMounted(() => {
  if (terminalContainer.value) {
    term = new Terminal()
    term.open(terminalContainer.value)
    term.write('Bienvenue dans le terminal !\r\n')

    // Gestion de l'entrée utilisateur
    let input = ''
    term.onData((data) => {
      const char = data.charCodeAt(0)
      if (char === 13) {
        // Entrée
        term.write(`\r\n> Commande entrée : ${input}\r\n`)
        input = ''
      } else {
        input += data
        term.write(data)
      }
    })
  }
})
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