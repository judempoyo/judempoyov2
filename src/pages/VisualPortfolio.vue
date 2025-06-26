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
import StyleSwitcher from '@/components/StyleSwitcher.vue'


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
		StyleSwitcher
  },
  emits: ['change-style'],
  setup(props, { emit }) {
    const navLinks = ref([
      { id: 'home', text: 'Accueil' },
      { id: 'about', text: 'À propos' },
      { id: 'projects', text: 'Projets' },
      { id: 'contact', text: 'Contact' }
    ])

    const skills = ref([
      'Vue.js', 'React', 'JavaScript', 'TypeScript', 
      'Tailwind CSS', 'GSAP', 'Node.js', 'UI/UX Design'
    ])

    const projects = ref([
      {
        title: 'Application E-commerce',
        description: 'Plateforme de vente en ligne avec paiement sécurisé et gestion de stock.',
        tags: ['Vue.js', 'Node.js', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
      },
      {
        title: 'Dashboard Analytique',
        description: 'Tableau de bord de données en temps réel avec visualisations interactives.',
        tags: ['React', 'D3.js', 'Firebase'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
      },
      {
        title: 'Réseau Social',
        description: 'Application mobile de réseau social avec messagerie instantanée.',
        tags: ['React Native', 'GraphQL', 'AWS'],
        image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
      }
    ])

    const socialLinks = ref([
      { icon: 'TwitterIcon', link: '#' },
      { icon: 'GithubIcon', link: '#' },
      { icon: 'LinkedinIcon', link: '#' },
      { icon: 'InstagramIcon', link: '#' }
    ])

    const aboutCards = ref([
      {
        title: 'Développement Frontend',
        text: 'Création d\'interfaces utilisateur réactives et accessibles',
        icon: 'CodeIcon',
        bg: 'bg-teal-100',
        color: 'text-teal-600',
        class: 'top-0 left-0 w-48'
      },
      {
        title: 'Design UI/UX',
        text: 'Conception d\'expériences utilisateur intuitives et esthétiques',
        icon: 'PaletteIcon',
        bg: 'bg-indigo-100',
        color: 'text-indigo-600',
        class: 'top-12 right-0 w-56'
      },
      {
        title: 'Optimisation',
        text: 'Performances et SEO pour un meilleur référencement',
        icon: 'TerminalIcon',
        bg: 'bg-blue-100',
        color: 'text-blue-600',
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

    const changeStyle = () => {
      emit('change-style')
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
      navLinks,
      skills,
      projects,
      socialLinks,
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
      scrollToSection,
      changeStyle
    }
  }
}
</script>
<template>
  <div class="visual-portfolio min-h-screen bg-gradient-to-br from-zinc-50 to-white">
    <!-- Navigation -->
    <nav class="fixed w-full z-50 backdrop-blur-md bg-white/80 shadow-sm">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <StyleSwitcher />
        <div class="hidden md:flex gap-6">
          <a 
            v-for="link in navLinks" 
            :key="link.id" 
            :href="'#' + link.id"
            class="text-zinc-700 hover:text-teal-600 transition-colors"
            @click="scrollToSection(link.id)"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section 
      id="home" 
      class="min-h-screen flex items-center justify-center pt-20 px-6"
      ref="hero"
    >
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6" ref="heroTitle">
            Bonjour, je suis <span class="text-teal-600">Développeur</span>
          </h1>
          <p class="text-xl text-zinc-600 mb-8" ref="heroText">
            Je crée des expériences web modernes et interactives avec des technologies innovantes.
          </p>
          <div class="flex gap-4" ref="heroButtons">
            <a 
              href="#projects" 
              class="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-lg"
              @click="scrollToSection('projects')"
            >
              Voir mes projets
            </a>
            <a 
              href="#contact" 
              class="px-8 py-3 border-2 border-zinc-300 text-zinc-700 rounded-lg hover:bg-zinc-50 transition-colors"
              @click="scrollToSection('contact')"
            >
              Me contacter
            </a>
          </div>
        </div>
        <div class="relative" ref="heroVisual">
          <div class="absolute inset-0 bg-teal-100 rounded-3xl transform rotate-6"></div>
          <div class="relative bg-white p-2 rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
            <img 
              src="/public/judepic.png" 
              alt="Projet web" 
              class="rounded-2xl w-full h-auto"
            >
            <div class="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-md">
              <div class="flex gap-2 mb-2">
                <span class="w-3 h-3 rounded-full bg-red-500"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span class="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <h3 class="font-extrabold text-center  md:text-5xl uppercase bg-gradient-to-br from-teal-600 to-zinc-1 bg-clip-text text-transparent">Jude Mpoyo</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section 
      id="about" 
      class="py-20 px-6 bg-gradient-to-br from-white to-zinc-50"
      ref="about"
    >
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center" ref="aboutTitle">
          À <span class="text-teal-600">propos</span> de moi
        </h2>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6" ref="aboutText">
            <p class="text-lg text-zinc-700">
              Passionné par le développement web depuis plus de 5 ans, je me spécialise dans la création d'interfaces utilisateur modernes et performantes.
            </p>
            <p class="text-lg text-zinc-700">
              Mon approche combine design minutieux et code optimisé pour offrir des expériences fluides et mémorables.
            </p>
            <div class="pt-4">
              <h3 class="text-xl font-semibold mb-4">Compétences</h3>
              <div class="flex flex-wrap gap-3">
                <span 
                  v-for="(skill, index) in skills" 
                  :key="index"
                  class="px-4 py-2 bg-white rounded-full shadow-sm border border-zinc-200"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
          
          <div class="relative h-80" ref="aboutVisual">
            <div 
              v-for="(card, index) in aboutCards" 
              :key="index"
              class="absolute bg-white p-6 rounded-xl shadow-lg border border-zinc-100"
              :class="card.class"
            >
              <div class="w-10 h-10 mb-4 rounded-full flex items-center justify-center" :class="card.bg">
                <component :is="card.icon" class="w-6 h-6" :class="card.color" />
              </div>
              <h3 class="font-semibold mb-2">{{ card.title }}</h3>
              <p class="text-zinc-600 text-sm">{{ card.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
     <section id="projects" class="py-20 px-6 bg-white" ref="projectsSection">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center" ref="projectsTitle">
        Mes <span class="text-teal-600">projets</span> récents
      </h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          :ref="el => { if (el) projectCards[index] = el }"
        >
            <div class="relative overflow-hidden h-60">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 class="text-xl font-semibold text-white">{{ project.title }}</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-zinc-600 mb-4">{{ project.description }}</p>
              <div class="flex justify-between items-center">
                <div class="flex gap-2">
                  <span 
                    v-for="(tag, i) in project.tags" 
                    :key="i"
                    class="text-xs px-2 py-1 bg-zinc-100 rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>
                <a 
                  href="#" 
                  class="text-teal-600 hover:text-teal-800 flex items-center gap-1"
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
      class="py-20 px-6 bg-gradient-to-br from-teal-50 to-indigo-50"
      ref="contact"
    >
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center" ref="contactTitle">
          Travaillons <span class="text-teal-600">ensemble</span>
        </h2>
        
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="grid md:grid-cols-2">
            <div class="p-8 md:p-12">
              <form class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-zinc-700 mb-1">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    class="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  >
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-zinc-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    class="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  >
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-zinc-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4"
                    class="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  class="w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-md"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
            <div class="bg-teal-600 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 class="text-xl font-semibold text-white mb-4">Coordonnées</h3>
                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span class="text-teal-100">contact@monportfolio.com</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span class="text-teal-100">+33 6 12 34 56 78</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span class="text-teal-100">Paris, France</span>
                  </div>
                </div>
              </div>
              <div class="flex gap-4 mt-8">
                <a 
                  v-for="(social, index) in socialLinks" 
                  :key="index"
                  :href="social.link" 
                  class="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center text-white hover:bg-teal-800 transition-colors"
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
          <h3 class="text-xl font-semibold mb-4">Mon Portfolio</h3>
          <p class="text-zinc-400">Création d'expériences web modernes et performantes.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li v-for="link in navLinks" :key="link.id">
              <a 
                :href="'#' + link.id" 
                class="text-zinc-400 hover:text-white transition-colors"
                @click="scrollToSection(link.id)"
              >
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Réseaux sociaux</h3>
          <div class="flex gap-4">
            <a 
              v-for="(social, index) in socialLinks" 
              :key="index"
              :href="social.link" 
              class="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-teal-600 transition-colors"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto pt-8 mt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        &copy; {{ new Date().getFullYear() }} Mon Portfolio. Tous droits réservés.
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