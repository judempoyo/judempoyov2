<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
import { useColorMode } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'

const mode = useColorMode()

const toggleMode = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="flex items-center">
    <Button
      @click="toggleMode"
      variant="ghost"
      size="icon"
      class="rounded-full h-10 w-10 relative bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
      aria-label="Toggle theme"
    >
      <transition name="fade" mode="out-in">
        <Sun
          v-if="mode === 'light'"
          key="sun"
          class="h-5 w-5 text-yellow-600"
        />
        <Moon
          v-else
          key="moon"
          class="h-5 w-5  text-zinc-100"
        />
      </transition>
      
      <span class="sr-only">Toggle theme</span>
    </Button>

  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>