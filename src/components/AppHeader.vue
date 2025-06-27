<script setup lang="ts">
import { Button } from '@/components/ui/button';
import ToggleTheme from './ToggleTheme.vue';
import StyleSwitcher from './StyleSwitcher.vue';
import { sharedData } from '@/data/shared-data.js';

import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Circle,
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Terminal,
  Palette,
  Smartphone,
	type LucideProps
} from 'lucide-vue-next';
import { ref, type FunctionalComponent } from 'vue';

// Associer chaque lien à une icône
const navLinks = sharedData.navLinks.map(link => {
   const icons = {
    'home': Home,
    'about': User,
    'skills': Terminal,
    'projects': Code,
    'design': Palette,
    'contact': Mail
  } as Record<string, FunctionalComponent<LucideProps>>;
  return {
    ...link,
    icon: icons[link.id] || ChevronRight
  };
});

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const isSheetOpen = ref(false);
</script>

<template>
  <nav class="fixed w-full z-50 backdrop-blur-2xl bg-white/90 dark:bg-[#0a0a0a]/90 border-b border-zinc-200/20 dark:border-zinc-800/20 shadow-lg shadow-zinc-200/10 dark:shadow-black/20">
    <div class="max-w-7xl mx-auto px-6 py-3 flex items-center">
  
      <div class="flex items-center mr-4 group">
        <div class="relative overflow-hidden h-8 w-8 rounded-lg mr-2 flex items-center justify-center bg-gradient-to-tr from-teal-400 to-teal-500">
          <Circle class="h-5 w-5 text-white animate-ping absolute opacity-75" />
          <Circle class="h-5 w-5 text-white" fill="currentColor" />
        </div>
        <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-500 group-hover:bg-gradient-to-l transition-all duration-500">
          JUMP
        </span>
      </div>

      <!-- Mobile Menu Button with Morphing Animation -->
      <div class="md:hidden ml-auto">
        <Sheet v-model:open="isSheetOpen">
          <SheetTrigger :as-child="true">
            <Button variant="ghost" size="icon" class="h-10 w-10 relative group">
              <Menu class="h-5 w-5 absolute transition-all duration-300" :class="{'opacity-0 rotate-90': isSheetOpen}" />
              <X class="h-5 w-5 absolute transition-all duration-300" :class="{'opacity-0 -rotate-90': !isSheetOpen}" />
              <span class="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-teal-400/30 transition-all duration-500"></span>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="left" 
            class="w-xs max-w-sm h-[55vh] !top-6 !left-4 !right-auto !bottom-6 rounded-circle bg-white/95 dark:bg-[#0d0d0d]/95 backdrop-blur-3xl border border-zinc-200/30 dark:border-zinc-800/30 drop-shadow-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            :style="{
              transform: isSheetOpen ? 'translateX(0)' : 'translateX(-120%)',
              opacity: isSheetOpen ? 1 : 0,
              'border-radius': isSheetOpen ? '2.5rem' : '50%'
            }"
          >
            <!-- Animated Border Top -->
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-500 via-zinc-500 animate-gradient-x"></div>
            
            <!-- Floating Bubbles Background -->
            <div class="absolute inset-0 overflow-hidden opacity-10">
              <div v-for="i in 8" :key="i" 
                   class="absolute rounded-full bg-teal-500 animate-float opacity-40 dark:opacity-20"
                   :style="{
                     width: `${Math.random() * 2 + 2}rem`,
                     height: `${Math.random() * 2 + 2}rem`,
                     left: `${Math.random() * 80}%`,
                     top: `${Math.random() * 80}%`,
                     animationDelay: `${i * 2}s`,
                     animationDuration: `${Math.random() * 15 + 15}s`
                   }"></div>
            </div>

            <SheetHeader class="text-left mt-6 relative z-10">
              <SheetTitle class="text-3xl font-bold flex items-center gap-3">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-teal-500 to-zinc-500 animate-gradient-x bg-300%">Menu</span>
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col space-y-2 py-2 relative z-10">
              <a
                v-for="link in navLinks"
                :key="link.id"
                :href="'#' + link.id"
                class="relative overflow-hidden px-4 py-3 rounded-xl transition-all duration-300 group hover:bg-teal-50 dark:hover:bg-zinc-800/50"
                @click="scrollToSection(link.id)"
              >
                <div class="flex items-center gap-4">
                  <div class="p-2 rounded-lg bg-teal-500/10 group-hover:bg-teal-500/20 transition-colors">
                    <component :is="link.icon" class="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <span class="font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {{ link.text }}
                  </span>
                </div>
                <ChevronRight class="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors opacity-0 group-hover:opacity-100" />
              </a>
            </div>

            <div class="absolute bottom-0 left-0 w-full p-5 border-t border-zinc-200/20 dark:border-zinc-800/20 bg-gradient-to-t from-white/30 dark:from-black/30 to-transparent relative z-10">
              <div class="flex justify-between items-center">
                <StyleSwitcher />
                <ToggleTheme />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex flex-1 ml-10">
        <NavigationMenu>
          <NavigationMenuList class="gap-1">
            <NavigationMenuItem v-for="link in navLinks" :key="link.id">
              <NavigationMenuLink
                :href="'#' + link.id"
                @click="scrollToSection(link.id)"
                class="relative  px-4 py-2.5 text-sm font-medium group overflow-hidden flex items-center gap-2"
              >
                <component :is="link.icon" class="h-4 w-4 flex-shrink-0 text-teal-600 dark:text-teal-400 opacity-80 group-hover:opacity-100 transition-opacity" />
                <span class="relative  z-10 text-zinc-700 dark:text-zinc-300 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300 whitespace-nowrap">
                  {{ link.text }}
                </span>
                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 ease-out"></span>
                <span class="absolute inset-0 bg-gradient-to-r from-teal-400/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <!-- Desktop Controls -->
      <div class="hidden md:flex items-center gap-4 ml-auto">
        <StyleSwitcher />
        <ToggleTheme />
      </div>
    </div>
  </nav>
</template>

<style scoped>
@keyframes gradient-x {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}

@keyframes float {
  0% { transform: translateY(0) rotate(0deg) }
  50% { transform: translateY(-20px) rotate(5deg) }
  100% { transform: translateY(0) rotate(0deg) }
}

.animate-gradient-x {
  animation: gradient-x 6s ease infinite;
  background-size: 300% 300%;
}

.animate-float {
  animation: float linear infinite;
}

/* Custom transition for sheet content */
:deep([data-state="open"] .sheet-overlay) {
  animation: fadeIn 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

:deep([data-state="closed"] .sheet-overlay) {
  animation: fadeOut 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
</style>