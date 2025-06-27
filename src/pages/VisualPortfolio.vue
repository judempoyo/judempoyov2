<script>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  CodeIcon,
  TerminalIcon,
  PaletteIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon
} from 'lucide-vue-next'
import { sharedData } from '@/data/shared-data'
import AppHeader from '@/components/AppHeader.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    CodeIcon,
    TerminalIcon,
    PaletteIcon,
    MailIcon,
    PhoneIcon,
    MapPinIcon,
    TwitterIcon,
    GithubIcon,
    LinkedinIcon,
    InstagramIcon,
		AppHeader
  },
  emits: ['change-style'],
  setup(props, { emit }) {
    const navLinks = ref([
      { id: 'home', text: 'Accueil' },
      { id: 'about', text: 'À propos' },
      { id: 'projects', text: 'Projets' },
      { id: 'contact', text: 'Contact' }
    ])

    const aboutCards = ref([
      {
        title: 'Développement Frontend',
        text: 'Création d\'interfaces utilisateur réactives et accessibles',
        icon: 'CodeIcon',
        bg: 'bg-teal-100 dark:bg-teal-900/50',
        color: 'text-teal-600 dark:text-teal-400',
        class: 'top-0 left-0 w-48'
      },
      {
        title: 'Design UI/UX',
        text: 'Conception d\'expériences utilisateur intuitives et esthétiques',
        icon: 'PaletteIcon',
        bg: 'bg-indigo-100 dark:bg-indigo-900/50',
        color: 'text-indigo-600 dark:text-indigo-400',
        class: 'top-12 right-0 w-56'
      },
      {
        title: 'Optimisation',
        text: 'Performances et SEO pour un meilleur référencement',
        icon: 'TerminalIcon',
        bg: 'bg-blue-100 dark:bg-blue-900/50',
        color: 'text-blue-600 dark:text-blue-400',
        class: 'bottom-0 left-1/4 w-52'
      }
    ])

    const hero = ref(null)
    const heroTitle = ref(null)
    const heroText = ref(null)
    const heroButtons = ref(null)
    const heroVisual = ref(null)

    const about = ref(null)
    const aboutTitle = ref(null)
    const aboutText = ref(null)
    const aboutVisual = ref(null)

    const projectsSection = ref(null)
    const projectsTitle = ref(null)
    const projectCards = ref([])

    const contact = ref(null)
    const contactTitle = ref(null)

    const scrollToSection = (id) => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

      onMounted(() => {
      gsap.from(heroTitle.value, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      })

      gsap.from(heroText.value, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      })

      gsap.from(heroButtons.value.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.4,
        ease: 'power3.out'
      })

      gsap.from(heroVisual.value, {
        opacity: 0,
        x: 100,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
      })

      gsap.from(aboutTitle.value, {
        scrollTrigger: {
          trigger: about.value,
          start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
      })

      gsap.from(aboutText.value.children, {
        scrollTrigger: {
          trigger: about.value,
          start: 'top 70%'
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6
      })

      gsap.from(aboutVisual.value.children, {
        scrollTrigger: {
          trigger: about.value,
          start: 'top 70%'
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8
      })

     
      gsap.from(projectsTitle.value, {
        scrollTrigger: {
          trigger: projectsSection.value,
          start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
      })

       projectCards.value.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card.parentElement,
            start: "top 80%"
          },
          opacity: 0,
          y: 50,
          duration: 0.6,
          delay: index * 0.1
        })
      })
  

      gsap.from(contactTitle.value, {
        scrollTrigger: {
          trigger: contact.value,
          start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
      })
    })

    return {
      sharedData,
      navLinks,
      aboutCards,
      hero,
      heroTitle,
      heroText,
      heroButtons,
      heroVisual,
      about,
      aboutTitle,
      aboutText,
      aboutVisual,
      projectsSection,
      projectsTitle,
      projectCards,
      contact,
      contactTitle,
      scrollToSection
    }
  }
}
</script>

<template>
  <div class="visual-portfolio min-h-screen overflow-x-hidden bg-white dark:bg-zinc-900 transition-colors duration-300">
    <!-- Navigation -->

 <AppHeader />
    <!-- Hero Section -->
    <section 
      id="home" 
      class="min-h-screen flex items-center justify-center pt-20 px-6"
      ref="hero"
    >
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6 dark:text-white" ref="heroTitle">
            HI, I'm <span class="text-teal-600 dark:text-teal-400">Jude Mpoyo</span>
          </h1>
          <p class="text-xl text-zinc-600 dark:text-zinc-400 mb-8" ref="heroText">
            {{ sharedData.personal.shortBio }}
          </p>
          <div class="flex gap-4" ref="heroButtons">
            <a 
              href="#projects" 
              class="px-8 py-3 bg-teal-600 dark:bg-teal-700 text-white rounded-lg hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors shadow-lg"
              @click="scrollToSection('projects')"
            >
              My projects
            </a>
            <a 
              href="#contact" 
              class="px-8 py-3 border-2 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              @click="scrollToSection('contact')"
            >
              Contact
            </a>
          </div>
        </div>
        <div class="relative" ref="heroVisual">
          <div class="absolute inset-0 bg-teal-100 dark:bg-teal-900 rounded-3xl transform rotate-6"></div>
          <div class="relative bg-white dark:bg-zinc-800 p-2 rounded-3xl shadow-2xl overflow-hidden border-8 border-white dark:border-zinc-800">
            <img 
              src="/judepic.png" 
              alt="Jude Mpoyo" 
              class="rounded-2xl w-full h-auto object-cover aspect-square"
            >
            <div class="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm p-4 rounded-xl shadow-md">
              <div class="flex gap-2 mb-2">
                <span class="w-3 h-3 rounded-full bg-red-500"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span class="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <h3 class="font-extrabold text-center text-2xl md:text-3xl uppercase bg-gradient-to-br from-teal-600 to-zinc-600 dark:from-teal-400 dark:to-zinc-300 bg-clip-text text-transparent">
                {{ sharedData.personal.name }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
<section id="about" class="py-20 px-6 bg-zinc-50 dark:bg-zinc-800/30" ref="about">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white" ref="aboutTitle">
      <span class="text-teal-600 dark:text-teal-400">About</span> me
    </h2>
    
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="space-y-6" ref="aboutText">
        <p class="text-lg text-zinc-700 dark:text-zinc-300" >
          {{ sharedData.personal.bio }}
        </p>
        
        <!-- Section Compétences intégrée -->
        <div>
          <h3 class="text-xl font-semibold mb-4 dark:text-white">Mes Compétences</h3>
          <div class="grid grid-cols-2 gap-4">
            <div 
              v-for="(category, key) in sharedData.skills" 
              :key="key"
              class="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm"
            >
              <h4 class="font-medium text-teal-600 dark:text-teal-400 mb-2">
                {{ category.title }}
              </h4>
              <div class="space-y-2">
                <div 
                  v-for="(skill, index) in category.items" 
                  :key="index"
                  class="text-sm  p-3 rounded-lg bg-zinc-50 dark:bg-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-600 transition-colors"
                >
                  <div class="flex justify-between">
                    <span class="dark:text-zinc-300">{{ skill.name }}</span>
                    <span class="text-zinc-500 dark:text-zinc-400 text-xs">
                      {{ skill.years }} an{{ skill.years > 1 ? 's' : '' }}
                    </span>
                  </div>
                  <div class="flex items-center mt-1">
                    <div class="flex mr-2">
                      <span 
                        v-for="i in 5" 
                        :key="i"
                        class="text-sm"
                        :class="{
                          'text-yellow-500': i <= skill.level,
                          'text-zinc-300 dark:text-zinc-600': i > skill.level
                        }"
                      >
                        ★
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="relative h-80" ref="aboutVisual">
        <div 
          v-for="(card, index) in aboutCards" 
          :key="index"
          class="absolute bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700"
          :class="card.class"
        >
          <div class="w-10 h-10 mb-4 rounded-full flex items-center justify-center" :class="card.bg">
            <component :is="card.icon" class="w-6 h-6" :class="card.color" />
          </div>
          <h3 class="font-semibold mb-2 dark:text-white">{{ card.title }}</h3>
          <p class="text-zinc-600 dark:text-zinc-400 text-sm">{{ card.text }}</p>
        </div>
      </div>
    </div>
  </div>
</section>
    <!-- Projects Section -->
    <section id="projects" class="py-20 px-6 bg-white dark:bg-zinc-900" ref="projectsSection">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white" ref="projectsTitle">
          Mes <span class="text-teal-600 dark:text-teal-400">projets</span> récents
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(project, index) in sharedData.projects" 
            :key="index"
            class="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            :ref="el => { if (el) projectCards[index] = el }"
          >
            <div class="relative overflow-hidden h-60">
              <img 
                :src="project.image" 
                :alt="project.name" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 class="text-xl font-semibold text-white">{{ project.name }}</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-zinc-600 dark:text-zinc-400 mb-4">{{ project.description }}</p>
              <div class="flex justify-between items-center">
                <div class="flex gap-2">
                  <span 
                    v-for="(tag, i) in project.technologies" 
                    :key="i"
                    class="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-700 rounded-full dark:text-white"
                  >
                    {{ tag }}
                  </span>
                </div>
                <a 
                  :href="project.link || '#'" 
                  class="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 flex items-center gap-1"
                >
                  Voir plus
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section 
      id="contact" 
      class="py-20 px-6 bg-teal-50 dark:bg-zinc-800/50"
      ref="contact"
    >
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white" ref="contactTitle">
          Travaillons <span class="text-teal-600 dark:text-teal-400">ensemble</span>
        </h2>
        
        <div class="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl overflow-hidden">
          <div class="grid md:grid-cols-2">
            <div class="p-8 md:p-12">
              <form class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    class="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-teal-600 focus:border-transparent dark:bg-zinc-900 dark:text-white"
                  >
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    class="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-teal-600 focus:border-transparent dark:bg-zinc-900 dark:text-white"
                  >
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4"
                    class="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-teal-600 focus:border-transparent dark:bg-zinc-900 dark:text-white"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  class="w-full px-6 py-3 bg-teal-600 dark:bg-teal-700 text-white rounded-lg hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors shadow-md"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
            <div class="bg-teal-600 dark:bg-teal-800 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 class="text-xl font-semibold text-white mb-4">Coordonnées</h3>
                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <MailIcon class="h-6 w-6 text-teal-200" />
                    <span class="text-teal-100">{{ sharedData.personal.email }}</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <PhoneIcon class="h-6 w-6 text-teal-200" />
                    <span class="text-teal-100">{{ sharedData.personal.phone }}</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <MapPinIcon class="h-6 w-6 text-teal-200" />
                    <span class="text-teal-100">{{ sharedData.personal.location }}</span>
                  </div>
                </div>
              </div>
              <div class="flex gap-4 mt-8">
                <a 
                  v-for="(social, index) in sharedData.socialLinks" 
                  :key="index"
                  :href="social.link" 
                  class="w-10 h-10 rounded-full bg-teal-700 dark:bg-teal-900 flex items-center justify-center text-white hover:bg-teal-800 dark:hover:bg-teal-700 transition-colors"
                  target="_blank"
                >
                  <component :is="social.icon" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-zinc-900 text-white py-12 px-6">
      <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">Jude's portfolio</h3>
          <p class="text-zinc-400">{{ sharedData.personal.shortBio }}</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Project</h3>
          <ul class="space-y-2">
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
				 <div>
          <h3 class="text-xl font-semibold mb-4">Navigation</h3>
          <ul class="space-y-2">
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
        <div>
          <h3 class="text-xl font-semibold mb-4">Réseaux sociaux</h3>
          <div class="flex gap-4">
            <a 
              v-for="(social, index) in sharedData.socialLinks" 
              :key="index"
              :href="social.link" 
               class="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-gradient-to-br from-teal-500 to-emerald-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/20"
            target="_blank"

            :aria-label="social.name"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto pt-8 mt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        &copy; {{ new Date().getFullYear() }} {{ sharedData.personal.name }}. Tous droits réservés.
      </div>
    </footer>
  </div>
</template>




<style>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #008080;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #078088;
}
</style>