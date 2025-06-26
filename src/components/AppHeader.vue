<script setup lang="ts">
import { Button } from '@/components/ui/button';
import ToggleTheme from './ToggleTheme.vue';
import StyleSwitcher from './StyleSwitcher.vue';
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, ChevronRight, Circle } from 'lucide-vue-next';
import { ref } from 'vue';

const navLinks = [
  { id: 'home', text: 'Accueil' },
  { id: 'projects', text: 'Projets' },
  { id: 'about', text: 'À propos' },
  { id: 'contact', text: 'Contact' },
];

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
      <!-- Animated Logo -->
      <div class="flex items-center mr-4 group">
        <div class="relative overflow-hidden h-8 w-8 rounded-lg mr-2 flex items-center justify-center bg-gradient-to-tr from-teal-400 to-emerald-500">
          <Circle class="h-5 w-5 text-white animate-ping absolute opacity-75" />
          <Circle class="h-5 w-5 text-white" fill="currentColor" />
        </div>
        <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500 group-hover:bg-gradient-to-l transition-all duration-500">
          MON LOGO
        </span>
      </div>

      <!-- Mobile Menu Button with Morphing Animation -->
      <div class="md:hidden ml-auto">
        <Sheet v-model:open="isSheetOpen">
          <SheetTrigger as-child>
            <Button variant="ghost" size="icon" class="h-10 w-10 relative group">
              <Menu class="h-5 w-5 absolute transition-all duration-300" :class="{'opacity-0 rotate-90': isSheetOpen}" />
              <X class="h-5 w-5 absolute transition-all duration-300" :class="{'opacity-0 -rotate-90': !isSheetOpen}" />
              <span class="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-teal-400/30 transition-all duration-500"></span>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="left" 
            class="w-[85vw] max-w-sm !h-auto !top-6 !left-4 !right-auto !bottom-6 rounded-2xl bg-white/95 dark:bg-[#0d0d0d]/95 backdrop-blur-3xl border border-zinc-200/30 dark:border-zinc-800/30 shadow-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            :style="{
              transform: isSheetOpen ? 'translateX(0)' : 'translateX(-120%)',
              opacity: isSheetOpen ? 1 : 0,
              'border-radius': isSheetOpen ? '1rem' : '50%'
            }"
          >
            <!-- Animated Border Top -->
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-emerald-500 via-purple-500 animate-gradient-x"></div>
            
            <!-- Floating Bubbles Background -->
            <div class="absolute inset-0 overflow-hidden opacity-10">
              <div v-for="i in 8" :key="i" 
                   class="absolute rounded-full bg-teal-400 animate-float"
                   :style="{
                     width: `${Math.random() * 6 + 4}rem`,
                     height: `${Math.random() * 6 + 4}rem`,
                     left: `${Math.random() * 80}%`,
                     top: `${Math.random() * 80}%`,
                     animationDelay: `${i * 2}s`,
                     animationDuration: `${Math.random() * 15 + 15}s`
                   }"></div>
            </div>

            <SheetHeader class="text-left mt-6 relative z-10">
              <SheetTitle class="text-3xl font-bold flex items-center gap-3">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-500 to-purple-500 animate-gradient-x bg-300%">Menu</span>
                <ChevronRight class="h-6 w-6 text-emerald-400 animate-bounce-right delay-100" />
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col space-y-4 py-8 relative z-10">
              <a
                v-for="(link, index) in navLinks"
                :key="link.id"
                :href="'#' + link.id"
                class="group relative overflow-hidden px-5 py-4 rounded-xl transition-all duration-500 hover:bg-white/10 dark:hover:bg-black/10"
                @click="scrollToSection(link.id)"
                :style="{
                  transitionDelay: `${index * 100 + 300}ms`,
                  transform: isSheetOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isSheetOpen ? 1 : 0
                }"
              >
                <span class="relative z-10 flex items-center gap-4 text-zinc-800 dark:text-zinc-100 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                  <span class="w-3 h-3 rounded-full bg-emerald-500 transform transition-all duration-500 group-hover:scale-150 group-hover:bg-teal-400 shadow-lg group-hover:shadow-teal-400/30"></span>
                  <span class="font-medium tracking-wide text-lg">{{ link.text }}</span>
                </span>
                <span class="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></span>
                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
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
                class="relative px-5 py-2.5 text-sm font-medium group overflow-hidden"
              >
                <span class="relative z-10 text-zinc-700 dark:text-zinc-300 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300">
                  {{ link.text }}
                </span>
                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 ease-out"></span>
                <span class="absolute inset-0 bg-gradient-to-r from-teal-400/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <!-- Desktop Controls -->
      <div class="hidden md:flex items-center gap-4 ml-auto">
        <StyleSwitcher />
        <ToggleTheme />
        <Button variant="outline" class="relative overflow-hidden group group-hover:shadow-lg group-hover:shadow-teal-400/20 transition-all duration-500">
          <span class="relative z-10">Contact</span>
          <span class="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </Button>
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

@keyframes bounce-right {
  0%, 100% { transform: translateX(0) }
  50% { transform: translateX(5px) }
}

.animate-gradient-x {
  animation: gradient-x 6s ease infinite;
  background-size: 300% 300%;
}

.animate-float {
  animation: float linear infinite;
}

.animate-bounce-right {
  animation: bounce-right 2s ease infinite;
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