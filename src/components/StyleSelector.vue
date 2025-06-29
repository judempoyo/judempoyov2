<template>
  <div class="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
    <div class="bg-white dark:bg-zinc-900 rounded-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto shadow-xl">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Choose an Interface Style</h2>
        <button 
          @click="$emit('close')" 
          class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-700"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <p class="text-gray-600 dark:text-gray-300 mb-6 text-center">
        Select the interface that best suits your workflow. You can change this later in settings.
      </p>

      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <!-- Terminal Option -->
        <div 
          @click="selectedStyle = 'terminal'"
          class="border rounded-xl p-5 cursor-pointer transition-all duration-200 group"
          :class="{
            'border-zinc-500 dark:border-zinc-400 bg-zinc-50/50 dark:bg-zinc-900/20 ring-2 ring-zinc-200 dark:ring-zinc-800/50': selectedStyle === 'terminal', 
            'border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600 bg-gray-50 dark:bg-zinc-800': selectedStyle !== 'terminal'
          }"
          role="button"
          aria-pressed="false"
          tabindex="0"
          @keydown.enter="selectedStyle = 'terminal'"
        >
          <div class="flex flex-col items-center text-center">
            <div 
              class="w-12 h-12 mb-4 flex items-center justify-center rounded-full transition-colors"
              :class="{
                'bg-zinc-100 text-zinc-600 dark:bg-zinc-900/50 dark:text-zinc-300': selectedStyle === 'terminal',
                'bg-gray-100 text-gray-600 dark:bg-zinc-700 dark:text-gray-300': selectedStyle !== 'terminal'
              }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Terminal Mode</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">Minimalist command-line interface for keyboard lovers</p>
            <div class="w-full p-3 rounded-lg bg-gray-900 text-green-400 font-mono text-xs text-left">
              <div class="text-teal-300">$ whoami</div>
              <div>Jude mpoyo</div>
              <div class="mt-2 text-teal-300">$ projects</div>
              <div>JumpDatatable</div>
            </div>
          </div>
        </div>

        <!-- Visual Option -->
        <div 
          @click="selectedStyle = 'visual'"
          class="border rounded-xl p-5 cursor-pointer transition-all duration-200 group"
          :class="{
            'border-teal-500 dark:border-teal-400 bg-teal-50/50 dark:bg-teal-900/20 ring-2 ring-teal-200 dark:ring-teal-800/50': selectedStyle === 'visual', 
            'border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600 bg-gray-50 dark:bg-zinc-800': selectedStyle !== 'visual'
          }"
          role="button"
          aria-pressed="false"
          tabindex="0"
          @keydown.enter="selectedStyle = 'visual'"
        >
          <div class="flex flex-col items-center text-center">
            <div 
              class="w-12 h-12 mb-4 flex items-center justify-center rounded-full transition-colors"
              :class="{
                'bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-300': selectedStyle === 'visual',
                'bg-gray-100 text-gray-600 dark:bg-zinc-700 dark:text-gray-300': selectedStyle !== 'visual'
              }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Visual Mode</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">Modern graphical interface with animations</p>
            <div class="w-full grid grid-cols-2 gap-2">
              <div 
                v-for="i in 4" 
                :key="i"
                class="h-12 rounded-lg flex items-center justify-center transition-all group-hover:scale-[1.02]"
                :class="{
                  'bg-gradient-to-br from-teal-100 to-gray-100 dark:from-teal-900/50 dark:to-zinc-700': selectedStyle !== 'visual',
                  'bg-gradient-to-br from-teal-50 to-white dark:from-teal-900/30 dark:to-zinc-800': selectedStyle === 'visual'
                }"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  :class="{
                    'text-teal-500 dark:text-teal-400': selectedStyle === 'visual',
                    'text-gray-400 dark:text-gray-500': selectedStyle !== 'visual'
                  }">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-3">
        
        <button
          @click="confirmSelection"
          :disabled="!selectedStyle"
          class="px-4 py-3 rounded-lg font-medium transition-colors flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
          :class="{
            'bg-zinc-600 hover:bg-zinc-700 text-white': selectedStyle === 'terminal',
            'bg-teal-600 hover:bg-teal-700 text-white': selectedStyle === 'visual',
            'bg-gray-200 text-gray-500 dark:bg-zinc-700 dark:text-zinc-400': !selectedStyle
          }"
        >
          Confirm Selection
          <span v-if="selectedStyle === 'terminal'" class="ml-2 text-sm opacity-80">(Enter)</span>
          <span v-if="selectedStyle === 'visual'" class="ml-2 text-sm opacity-80">(Click)</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  emits: ['style-selected', 'close'],
  setup(props, { emit }) {
    const selectedStyle = ref(null)

    const confirmSelection = () => {
      if (selectedStyle.value) {
        emit('style-selected', selectedStyle.value)
      }
    }

    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        emit('close')
      } else if (e.key === 'Enter' && selectedStyle.value) {
        confirmSelection()
      }
    }

    onMounted(() => {
      window.addEventListener('keydown', handleKeyDown)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('keydown', handleKeyDown)
    })

    return { selectedStyle, confirmSelection }
  }
}
</script>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

[role="button"]:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>