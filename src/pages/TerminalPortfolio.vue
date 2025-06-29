<template>
  <div class="bg-zinc-800 terminal-container">
    <div class="terminal-header">
  
              <StyleSwitcher />

    </div>

  <Terminal />
	  <footer class="terminal-footer" aria-hidden="true">
      <p class="text-xs text-zinc-400 text-center py-2">
        &copy; {{ new Date().getFullYear() }} {{ sharedData.personal.name }} - Terminal Portfolio
      </p>
    </footer>
  </div>
</template>

<script >
import StyleSwitcher from '@/components/StyleSwitcher.vue'
import Terminal from '@/components/Terminal.vue'
import { ref, onMounted } from 'vue'
import { sharedData } from '@/data/shared-data'

onMounted(() =>   {
    document.title = `${sharedData.personal.name} | Terminal Portfolio`
     
    const metaDescription = document.createElement('meta')
    metaDescription.name = 'description'
    metaDescription.content = 'Interactive terminal-style developer portfolio showcasing skills and projects'
    document.head.appendChild(metaDescription)
  })
export default {
  components: { Terminal, StyleSwitcher},
	data() {
    return {
      sharedData
    }}
}

</script>

<style scoped>
.terminal-container {
  padding: 20px;
  font-family: monospace;
  min-height: 100vh;
}

</style>