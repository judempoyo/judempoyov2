<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-2xl font-bold">Choisissez votre style</h2>
        <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Terminal Option -->
        <div 
          @click="selectedStyle = 'terminal'"
          class="border-2 rounded-xl p-6 cursor-pointer transition-all"
          :class="{
            'border-gray-800 bg-gray-50': selectedStyle === 'terminal', 
            'border-transparent hover:border-gray-300': selectedStyle !== 'terminal'
          }"
        >
          <div class="flex flex-col items-center text-center">
            <div class="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-gray-100 text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Mode Terminal</h3>
            <p class="text-gray-600 mb-4">Interface minimaliste style ligne de commande</p>
            <div class="w-full p-3 rounded-lg bg-gray-900 text-green-400 font-mono text-sm text-left">
              <div class="text-purple-300">$ whoami</div>
              <div>portfolio-dev</div>
              <div class="mt-2 text-purple-300">$ ls projects</div>
              <div>project-1 project-2 project-3</div>
            </div>
          </div>
        </div>

        <!-- Visual Option -->
        <div 
          @click="selectedStyle = 'visual'"
          class="border-2 rounded-xl p-6 cursor-pointer transition-all"
          :class="{
            'border-purple-500 bg-purple-50': selectedStyle === 'visual', 
            'border-transparent hover:border-gray-300': selectedStyle !== 'visual'
          }"
        >
          <div class="flex flex-col items-center text-center">
            <div class="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Mode Visuel</h3>
            <p class="text-gray-600 mb-4">Interface graphique moderne et animée</p>
            <div class="w-full grid grid-cols-2 gap-3">
              <div 
                v-for="i in 4" 
                :key="i"
                class="h-16 rounded-lg bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center"
                :class="'animate-fade-in delay-' + (i * 100)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        @click="confirmSelection"
        :disabled="!selectedStyle"
        class="mt-8 w-full py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        :class="{
          'bg-gray-800 text-white hover:bg-gray-700': selectedStyle === 'terminal',
          'bg-purple-600 text-white hover:bg-purple-700': selectedStyle === 'visual',
          'bg-gray-200 text-gray-500': !selectedStyle
        }"
      >
        Confirmer le choix
        <span v-if="selectedStyle === 'terminal'">(Entrée)</span>
        <span v-if="selectedStyle === 'visual'">(Cliquer)</span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  emits: ['style-selected', 'close'],
  setup(props, { emit }) {
    const selectedStyle = ref(null)

    const confirmSelection = () => {
      if (selectedStyle.value) {
        emit('style-selected', selectedStyle.value)
      }
    }

    return { selectedStyle, confirmSelection }
  }
}
</script>

<style>
.animate-fade-in {
  animation: fadeIn 0.5s forwards;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}
</style>