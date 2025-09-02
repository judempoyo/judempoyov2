<script setup lang="ts">
import { 
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  PhoneIcon,
  MailIcon,
  GlobeIcon,
  MapPinIcon,
  CodeIcon,
  HeartIcon
} from 'lucide-vue-next'
import { sharedData } from '@/data/shared-data'

const navLinks = sharedData.navLinks;

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

type SocialIconKey = 'twitter' | 'github' | 'linkedin' | 'instagram' | 'email' | 'website'

const socialIcons: Record<SocialIconKey, any> = {
  twitter: TwitterIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  email: MailIcon,
  website: GlobeIcon
}
</script>

<template>
  <footer class="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 px-6 relative overflow-hidden border-t border-zinc-800/50">
	   
    <div class="absolute inset-0 opacity-10">
      <div class="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-teal-500/20 blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-emerald-500/20 blur-3xl animate-pulse animation-delay-2000"></div>
      
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwZGRjZDgiIHN0cm9rZS13aWR0aD0iMC4zIiBzdHJva2Utb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNIDAgMCBMIDYwIDYwIE0gNjAgMCBMIDAgNjAiLz48L2c+PC9zdmc+')]"></div>
    </div>

    <div class="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 relative z-10">
      <div class="space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg">
            <CodeIcon class="w-5 h-5 text-white" />
          </div>
          <h3 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
            {{ sharedData.personal.name }}
          </h3>
        </div>
        <p class="text-zinc-400 leading-relaxed text-sm">
          {{ sharedData.personal.shortBio }}
        </p>
        <div class="flex items-center gap-2 text-zinc-500 text-sm">
          <HeartIcon class="w-4 h-4 text-rose-500" />
          <span>Crafting digital excellence</span>
        </div>
      </div>

      <div class="space-y-6">
        <h3 class="text-lg font-bold text-white">Navigation</h3>
        <ul class="space-y-3">
          <li v-for="link in navLinks" :key="link.id">
            <a 
              :href="'#' + link.id" 
              class="flex items-center gap-3 text-zinc-400 hover:text-teal-400 transition-colors duration-300 group text-sm"
              @click="scrollToSection(link.id)"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span class="group-hover:translate-x-1 transition-transform duration-300">{{ link.text }}</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="space-y-6" id="contact">
        <h3 class="text-lg font-bold text-white">Contact</h3>
        <div class="space-y-3">
          <a 
            :href="`mailto:${sharedData.personal.email}`" 
            class="flex items-center gap-3 text-zinc-400 hover:text-teal-400 transition-colors duration-300 text-sm"
          >
            <MailIcon class="w-4 h-4 flex-shrink-0" />
            <span>{{ sharedData.personal.email }}</span>
          </a>
          <a 
            v-if="sharedData.personal.phone" 
            :href="`tel:${sharedData.personal.phone}`" 
            class="flex items-center gap-3 text-zinc-400 hover:text-teal-400 transition-colors duration-300 text-sm"
          >
            <PhoneIcon class="w-4 h-4 flex-shrink-0" />
            <span>{{ sharedData.personal.phone }}</span>
          </a>
          <div 
            v-if="sharedData.personal.location" 
            class="flex items-center gap-3 text-zinc-400 text-sm"
          >
            <MapPinIcon class="w-4 h-4 flex-shrink-0" />
            <span>{{ sharedData.personal.location }}</span>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <h3 class="text-lg font-bold text-white">Connect</h3>
        <div class="flex flex-wrap gap-2">
          <a 
            v-for="(social, index) in sharedData.socialLinks" 
            :key="index"
            :href="social.link" 
            class="w-9 h-9 rounded-lg bg-zinc-800/50 flex items-center justify-center text-white hover:bg-gradient-to-br from-teal-500 to-emerald-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/20 border border-zinc-700/50"
            target="_blank"
            :aria-label="social.name"
          >
            <component 
              :is="socialIcons[social.icon as SocialIconKey]"
              class="w-4 h-4" 
            />
          </a>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto pt-12 mt-12 border-t border-zinc-800/50 text-center text-zinc-500 text-sm relative z-10">
      <div class="flex items-center justify-center gap-1">
        <span>&copy; {{ new Date().getFullYear() }} {{ sharedData.personal.name }}</span>
        <span class="text-teal-400">•</span>
        <span>Built with passion</span>
      </div>
    </div>
		
  </footer>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.4; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>