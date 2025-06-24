<script setup lang="ts">
import { Button } from '@/components/ui/button';
import Toogletheme from './toogletheme.vue';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Mail } from 'lucide-vue-next';
import type { NavItem } from '@/types';



const mainNavItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Services',
    href: '/services',
  },
  
  {
    title: 'Contact',
    href: '/contact',
    icon: Phone
  }
];


const isActive = (href: string) => {
  return route.path === href || 
         (href !== '/' && route.path.startsWith(href));
};
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-950/95 backdrop-blur md:px-12">
    <div class="flex h-16 items-center justify-between px-4">
      <!-- Mobile Menu -->
      <div class="flex items-center lg:hidden">
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="ghost" size="icon" class="mr-2">
              <Menu class="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="w-[300px] p-6">
            <SheetHeader class="mb-8">
              <AppLogoIcon class="size-6" />
            </SheetHeader>
            <nav class="flex flex-col space-y-4">
              <a 
                v-for="item in mainNavItems" 
                :key="item.title" 
                :href="item.href" 
                class="flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                :class="isActive(item.href) 
                  ? 'bg-accent text-primary' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
              >
                <component v-if="item.icon" :is="item.icon" class="h-5 w-5" />
                {{ item.title }}
              </a>
            </nav>
            
          </SheetContent>
        </Sheet>
        
      </div>

      <!-- Desktop Logo -->
      <RouterLink to="/" class="hidden items-center lg:flex">
        <AppLogo class="h-7" />
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex lg:items-center lg:space-x-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem v-for="(item, index) in mainNavItems" :key="index">
              <RouterLink :to="item.href" custom v-slot="{ navigate, isActive }">
                <NavigationMenuLink
                  @click="navigate"
                  class="text-sm cursor-pointer font-medium transition-colors px-3 py-2 rounded-md"
                  :class="isActive 
                    ? 'text-primary' 
                    : 'text-gray-900 hover:text-primary dark:text-gray-100 dark:hover:text-white'"
                >
                  {{ item.title }}
                </NavigationMenuLink>
              </RouterLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <div class="flex items-center gap-4">
     
        <Toogletheme />
      </div>
    </div>
  </header>
</template>