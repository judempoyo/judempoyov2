<script setup lang="ts">
import { 
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  MailIcon,
  GlobeIcon
} from 'lucide-vue-next'
import { sharedData } from '@/data/shared-data.js';
import { Button } from '@/components/ui/button';


const navLinks = sharedData.navLinks;

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

type SocialIconKey = 'twitter' | 'github' | 'linkedin' | 'instagram' | 'email' | 'website';

const socialIcons: Record<SocialIconKey, any> = {
  twitter: TwitterIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  email: MailIcon,
  website: GlobeIcon
};
</script>

<template>
  <!-- Footer moderne avec animations -->
  <footer class="bg-zinc-900 text-white py-16 px-6 relative overflow-hidden">
    <!-- Effet de dégradé en arrière-plan -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-teal-500 blur-3xl animate-float-slow"></div>
      <div class="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-purple-500 blur-3xl animate-float-slow animation-delay-2000"></div>
    </div>

    <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 relative z-10">
      <!-- Section A propos -->
      <div class="space-y-6">
        <h3 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
          {{ sharedData.personal.name }}
        </h3>
        <p class="text-zinc-400 leading-relaxed">
          {{ sharedData.personal.shortBio }}
        </p>
        <div class="flex gap-4">
          <a 
            v-for="(social, index) in sharedData.socialLinks" 
            :key="index"
            :href="social.link" 
            class="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-gradient-to-br from-teal-500 to-emerald-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/20"
            target="_blank"
            :aria-label="social.name"
          >
            <component 
              :is="socialIcons[social.icon]" 
              class="w-5 h-5" 
              :class="{
                'text-blue-400': social.icon === 'twitter',
                'text-white': social.icon === 'github',
                'text-blue-300': social.icon === 'linkedin',
                'text-pink-500': social.icon === 'instagram',
                'text-teal-400': social.icon === 'email',
                'text-emerald-400': social.icon === 'website'
              }"
            />
          </a>
        </div>
      </div>

      <!-- Navigation -->
      <div class="space-y-6">
        <h3 class="text-2xl font-bold text-white">Navigation</h3>
        <ul class="space-y-3">
          <li v-for="link in navLinks" :key="link.id">
            <a 
              :href="'#' + link.id" 
              class="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
              @click="scrollToSection(link.id)"
            >
              <span class="w-2 h-2 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span class="group-hover:translate-x-1 transition-transform">{{ link.text }}</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="space-y-6">
        <h3 class="text-2xl font-bold text-white">Contact</h3>
        <div class="space-y-4">
          <a 
            :href="`mailto:${sharedData.personal.email}`" 
            class="flex items-center gap-3 text-zinc-400 hover:text-teal-400 transition-colors"
          >
            <MailIcon class="w-5 h-5 flex-shrink-0" />
            <span>{{ sharedData.personal.email }}</span>
          </a>
          <a 
            v-if="sharedData.personal.phone" 
            :href="`tel:${sharedData.personal.phone}`" 
            class="flex items-center gap-3 text-zinc-400 hover:text-teal-400 transition-colors"
          >
            <PhoneIcon class="w-5 h-5 flex-shrink-0" />
            <span>{{ sharedData.personal.phone }}</span>
          </a>
          <div class="pt-4">
            <Button 
              as-child
              class="relative overflow-hidden group bg-gradient-to-br from-teal-600 to-emerald-700 hover:from-teal-500 hover:to-emerald-600 transition-all duration-500 shadow-lg hover:shadow-teal-500/30"
            >
              <a href="#contact">
                <span class="relative z-10">Me contacter</span>
                <span class="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="max-w-7xl mx-auto pt-12 mt-12 border-t border-zinc-800 text-center text-zinc-500 text-sm relative z-10">
      &copy; {{ new Date().getFullYear() }} {{ sharedData.personal.name }}. Tous droits réservés.
    </div>
  </footer>
</template>

<style scoped>
@keyframes float-slow {
  0%, 100% { transform: translateY(0) }
  50% { transform: translateY(-20px) }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>