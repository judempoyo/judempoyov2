
<script setup lang="ts">
import { 
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
	
	PhoneIcon,
  MailIcon,
  GlobeIcon
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
const pageTitle = `${sharedData.personal.name} | Portfolio`;
const pageDescription = sharedData.personal.shortBio;
const canonicalUrl = 'https://yourportfolio.com';
</script>

<template>
  <footer class="bg-zinc-900 text-white py-16 px-6 relative overflow-hidden border-t border-zinc-800">
	    <Head>
      <title>{{ pageTitle }}</title>
      <meta name="description" :content="pageDescription">
      <link rel="canonical" :href="canonicalUrl" />
      
      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website">
      <meta property="og:url" :content="canonicalUrl">
      <meta property="og:title" :content="pageTitle">
      <meta property="og:description" :content="pageDescription">
      <meta property="og:image" content="/social-preview.jpg">
      
      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" :content="canonicalUrl">
      <meta property="twitter:title" :content="pageTitle">
      <meta property="twitter:description" :content="pageDescription">
      <meta property="twitter:image" content="/social-preview.jpg">
    </Head>
    <!-- Effets d'arrière-plan animés -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-teal-500 blur-3xl animate-float-slow"></div>
      <div class="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-emerald-500 blur-3xl animate-float-slow animation-delay-2000"></div>
    </div>

    <div class="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 relative z-10">
      <!-- Section À propos -->
      <div class="space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
            <GlobeIcon class="w-4 h-4 text-white" />
          </div>
          <h3 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
            {{ sharedData.personal.name }}
          </h3>
        </div>
        <p class="text-zinc-400 leading-relaxed">
          {{ sharedData.personal.shortBio }}
        </p>
      </div>

      <!-- Navigation -->
      <div class="space-y-6">
        <h3 class="text-xl font-bold text-white">Navigation</h3>
        <ul class="space-y-3">
          <li v-for="link in navLinks" :key="link.id">
            <a 
              :href="'#' + link.id" 
              class="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
              @click="scrollToSection(link.id)"
            >
              <span class="w-2 h-2 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span class="group-hover:translate-x-1 transition-transform duration-300">{{ link.text }}</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="space-y-6" id="contact">
        <h3 class="text-xl font-bold text-white">Contact</h3>
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
        </div>
      </div>

      <!-- Réseaux sociaux -->
      <div class="space-y-6">
        <h3 class="text-xl font-bold text-white">Réseaux</h3>
        <div class="flex flex-wrap gap-3">
          <a 
            v-for="(social, index) in sharedData.socialLinks" 
            :key="index"
            :href="social.link" 
            class="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-gradient-to-br from-teal-500 to-emerald-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/20"
            target="_blank"
            :aria-label="social.name"
          >
            <component 
              :is="socialIcons[social.icon as SocialIconKey]"
              class="w-5 h-5" 
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="max-w-7xl mx-auto pt-12 mt-12 border-t border-zinc-800 text-center text-zinc-500 text-sm relative z-10">
      &copy; {{ new Date().getFullYear() }} {{ sharedData.personal.name }}. All rights reserved
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