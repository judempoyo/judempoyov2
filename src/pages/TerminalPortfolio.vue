
<script >
import StyleSwitcher from '@/components/StyleSwitcher.vue'
import Terminal from '@/components/Terminal.vue'
import { ref, onMounted } from 'vue'
import { sharedData } from '@/data/shared-data'
import { useMetadata } from '@/composables/useMetadata';



export default {
  components: { Terminal, StyleSwitcher},
	data() {
    return {
      sharedData
    }},
		setup() {
    const { setMetadata } = useMetadata();

    onMounted(() => {
      setMetadata({
        title: `${sharedData.personal.name} | Terminal Portfolio`,
        description: 'Interactive terminal-style developer portfolio'
      });
    });
  }
}

</script>
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

<style scoped>
.terminal-container {
  padding: 20px;
  font-family: monospace;
  min-height: 100vh;
}

</style>