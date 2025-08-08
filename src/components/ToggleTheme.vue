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
      class="rounded-full h-10 w-10 relative hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
      aria-label="Toggle theme"
    >
      <transition name="fade" mode="out-in">
        <Sun
          v-if="mode === 'light'"
          key="sun"
          class="h-5 w-5 text-yellow-500"
        />
        <Moon
          v-else
          key="moon"
          class="h-5 w-5 text-blue-400"
        />
      </transition>
      
      <span class="sr-only">Toggle theme</span>
    </Button>


   <!--  <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button 
          variant="ghost"
          size="sm"
          class="ml-2 hidden sm:inline-flex"
          aria-label="Theme options"
        >
          <span class="capitalize">{{ mode }}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" class="w-32">
        <DropdownMenuItem 
          @click="mode = 'light'"
          class="cursor-pointer flex items-center gap-2"
          :class="{ 'bg-gray-100 dark:bg-zinc-700': mode === 'light' }"
        >
          <Sun class="h-4 w-4 text-yellow-500" />
        </DropdownMenuItem>
        <DropdownMenuItem 
          @click="mode = 'dark'"
          class="cursor-pointer flex items-center gap-2"
          :class="{ 'bg-gray-100 dark:bg-zinc-700': mode === 'dark' }"
        >
          <Moon class="h-4 w-4 text-blue-400" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu> -->
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