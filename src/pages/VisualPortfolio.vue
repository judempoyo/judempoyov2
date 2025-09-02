<script setup lang="ts">
import { ref, onMounted, nextTick, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  CodeIcon, TerminalIcon, PaletteIcon, MailIcon, 
  ServerIcon, PhoneIcon, MapPinIcon, DatabaseIcon, 
  TwitterIcon, GithubIcon, LinkedinIcon, InstagramIcon, 
  AwardIcon, BriefcaseIcon, SchoolIcon, UsersIcon, 
  GlobeIcon, ArrowRightIcon, ChevronDownIcon,
  ExternalLinkIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon
} from 'lucide-vue-next'
import { sharedData } from '@/data/shared-data'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useMetadata } from '@/composables/useMetadata'
import type { Ref } from 'vue';

const iconComponents: Record<string, any> = {
  CodeIcon, TerminalIcon, PaletteIcon, MailIcon, 
  ServerIcon, PhoneIcon, MapPinIcon, DatabaseIcon, 
  TwitterIcon, GithubIcon, LinkedinIcon, InstagramIcon, 
  AwardIcon, BriefcaseIcon, SchoolIcon, UsersIcon, GlobeIcon,
  ArrowRightIcon, ChevronDownIcon, ExternalLinkIcon, StarIcon,
  ChevronLeftIcon, ChevronRightIcon
};

gsap.registerPlugin(ScrollTrigger)

type HTMLElementRef = HTMLElement | null;

const hero = ref<HTMLElementRef>(null);
const heroTitle = ref<HTMLElementRef>(null);
const heroText = ref<HTMLElementRef>(null);
const heroButtons: Ref<HTMLElement | null> = ref(null);
const heroVisual = ref<HTMLElementRef>(null);

const about = ref<HTMLElementRef>(null);
const aboutTitle = ref<HTMLElementRef>(null);
const aboutText = ref<HTMLElementRef>(null);
const aboutVisual = ref<HTMLElementRef>(null);

const experience = ref<HTMLElementRef>(null);
const education = ref<HTMLElementRef>(null);
const testimonials = ref<HTMLElementRef>(null);

const visibleProjects = ref(3)
const projects = ref(Object.values(sharedData.projects))
const projectsSection = ref<HTMLElementRef>(null);
const projectsTitle = ref<HTMLElementRef>(null);
const projectCards = ref<HTMLElement[]>([]);

const contact = ref<HTMLElementRef>(null);
const contactTitle = ref<HTMLElementRef>(null);

const currentTestimonial = ref(0)
const isAutoPlaying = ref(true)
let autoPlayInterval: number | null = null

const startAutoPlay = () => {
  if (autoPlayInterval) clearInterval(autoPlayInterval)
  autoPlayInterval = window.setInterval(() => {
    if (isAutoPlaying.value) {
      nextTestimonial()
    }
  }, 5000)
}

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % sharedData.testimonials.length
  resetAutoPlay()
}

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + sharedData.testimonials.length) % sharedData.testimonials.length
  resetAutoPlay()
}

const goToTestimonial = (index: number) => {
  currentTestimonial.value = index
  resetAutoPlay()
}

const resetAutoPlay = () => {
  isAutoPlaying.value = true
  startAutoPlay()
}

const setupAnimations = () => {
  gsap.fromTo(heroTitle.value, 
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
  )
  
  gsap.fromTo(heroText.value, 
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
  )
  
  if (heroButtons.value) {
    const children = heroButtons.value.children;
    if (children && children.length > 0) {
      gsap.fromTo(Array.from(children), 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
      );
    }
  }
  
  gsap.fromTo(heroVisual.value, 
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
  )
  
  gsap.fromTo(aboutTitle.value, 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      scrollTrigger: {
        trigger: about.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  )
  
  gsap.fromTo(aboutText.value, 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.6,
      scrollTrigger: {
        trigger: about.value,
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    }
  )
  
  gsap.fromTo('.timeline-item', 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      stagger: 0.2, 
      duration: 0.8,
      scrollTrigger: {
        trigger: experience.value,
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    }
  )
  
  gsap.fromTo(projectsTitle.value, 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      scrollTrigger: {
        trigger: projectsSection.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  )
  
  gsap.fromTo('.project-card', 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      stagger: 0.15, 
      duration: 0.8,
      scrollTrigger: {
        trigger: projectsSection.value,
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    }
  )
  
  gsap.fromTo('.testimonial-content', 
    { opacity: 0, x: 50 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 0.8,
      scrollTrigger: {
        trigger: testimonials.value,
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    }
  )
  
  gsap.fromTo(contactTitle.value, 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      scrollTrigger: {
        trigger: contact.value,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  )
}

function showMore() {
  visibleProjects.value = Math.min(
    visibleProjects.value + 3,
    projects.value.length
  )
  
  nextTick(() => {
    gsap.fromTo('.project-card:nth-child(n+' + (visibleProjects.value - 2) + ')', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.15, 
        duration: 0.8 
      }
    )
  })
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  setupAnimations()
  startAutoPlay()
  useMetadata().setMetadata({
    projects: true,
    image: '/preview.jpg'
  })
})

onUnmounted(() => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
})
</script>

<template>
  <div class="modern-portfolio min-h-screen overflow-hidden bg-white dark:bg-zinc-900 transition-colors duration-300">
    <AppHeader />
    
    <section id="home" class="min-h-screen flex items-center justify-center pt-16 pb-12 px-4 sm:px-6" ref="hero" itemscope itemtype="https://schema.org/Person">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div class="relative z-10 order-2 md:order-1 text-center md:text-left">
          <div class="hidden md:block absolute -top-6 -left-6 w-24 h-24 bg-teal-400/10 rounded-full blur-xl"></div>
          
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 dark:text-white leading-tight" ref="heroTitle" itemprop="name">
            Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700 dark:from-teal-400 dark:to-teal-600">Jude Mpoyo</span>
          </h1>
          
          <p class="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 mb-6 md:mb-8 max-w-md mx-auto md:mx-0 leading-relaxed" ref="heroText" itemprop="description">
            {{ sharedData.personal.shortBio }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-3 justify-center md:justify-start" ref="heroButtons">
            <a href="#projects" class="px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 shadow-md flex items-center justify-center gap-2 group" @click="scrollToSection('projects')">
              <span>View My Work</span>
              <ArrowRightIcon class="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="#contact" class="px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg sm:rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-300 flex items-center justify-center gap-2 group">
              <span>Contact Me</span>
              <MailIcon class="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        <div class="relative order-1 md:order-2 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-none" ref="heroVisual">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-teal-700/20 rounded-2xl transform rotate-6 -z-10"></div>
            
            <div class="relative bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 p-4 rounded-2xl shadow-xl border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden z-50">
              <div class="absolute inset-0 opacity-20">
                <div class="absolute top-4 left-4 text-xs font-mono text-teal-600 dark:text-teal-400 font-bold">{...}</div>
                <div class="absolute bottom-4 right-4 text-xs font-mono text-teal-600 dark:text-teal-400 font-bold">div</div>
                <div class="absolute top-12 left-8 text-xs font-mono text-teal-500 dark:text-teal-500">function()</div>
                <div class="absolute bottom-12 right-8 text-xs font-mono text-teal-500 dark:text-teal-500">return</div>
              </div>
              
              <div class="relative rounded-xl overflow-hidden border-4 border-white dark:border-zinc-800 shadow-inner">
                <img src="/judepic.jpeg" alt="Jude Mpoyo" class="w-full h-auto object-cover aspect-square grayscale-[15%] hover:grayscale-0 transition-all duration-500">
                
                <div class="absolute top-4 right-4 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  DEV
                </div>
              </div>
              
              <div class="absolute bottom-2 left-2 bg-white dark:bg-zinc-800 px-3 py-1.5 rounded-full shadow-md border border-zinc-200 dark:border-zinc-700 flex items-center">
                <CodeIcon class="h-4 w-4 text-teal-600 dark:text-teal-400 mr-1" />
                <span class="text-xs font-medium text-zinc-700 dark:text-zinc-300">Full Stack</span>
              </div>

              <div class="absolute bottom-2 right-2 bg-white dark:bg-zinc-800 px-3 py-1.5 rounded-full shadow-md border border-zinc-200 dark:border-zinc-700 flex items-center">
                <ServerIcon class="h-4 w-4 text-teal-600 dark:text-teal-400 mr-1" />
                <span class="text-xs font-medium text-zinc-700 dark:text-zinc-300">API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" @click="scrollToSection('about')" class="flex flex-col items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
          <span class="text-sm mb-1">Scroll to explore</span>
          <ChevronDownIcon class="h-6 w-6" />
        </a>
      </div>
    </section>
    
    <section id="about" class="py-24 px-6 md:px-12 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-800/30 dark:to-zinc-900" ref="about">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase rounded-full bg-teal-100/50 dark:bg-teal-900/50 mb-4">
            About me
          </span>
          
          <h2 class="text-4xl md:text-5xl font-bold dark:text-white max-w-2xl mx-auto" ref="aboutTitle">
            Crafting <span class="text-teal-600 dark:text-teal-400">digital experiences</span> with passion
          </h2>
        </div>
        
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="space-y-8" ref="aboutText" itemprop="knowsAbout" itemscope itemtype="https://schema.org/ItemList">
            <div class="space-y-6 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed" itemprop="description" v-html="sharedData.personal.bio">
            </div
            
             Skills Section -->
            <div>
              <h3 class="text-2xl font-semibold mb-6 dark:text-white">My Skills</h3>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                <div v-for="(category, key) in sharedData.skills" :key="key" class="bg-white dark:bg-zinc-800 p-5 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700/50 hover:shadow-md transition-all">
                  <h4 class="font-medium text-lg text-teal-600 dark:text-teal-400 mb-3 flex items-center gap-2">
                    <component :is="iconComponents[category.icon] || CodeIcon" class="w-5 h-5" />
                    {{ category.title }}
                  </h4>
                  
                  <div class="space-y-3">
                    <div v-for="(skill, index) in category.items" :key="index" class="text-sm p-3 rounded-lg bg-zinc-50 dark:bg-zinc-700/50 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all cursor-pointer">
                      <div class="flex justify-between items-center">
                        <span class="dark:text-zinc-300 font-medium">{{ skill.name }}</span>
                        <span class="text-zinc-500 dark:text-zinc-400 text-xs bg-zinc-200 dark:bg-zinc-600 px-2 py-1 rounded-full">
                          {{ skill.years }} year{{ skill.years > 1 ? 's' : '' }}
                        </span>
                      </div>
                      
                      <div class="flex items-center mt-2">
                        <div class="flex mr-2">
                          <span v-for="i in 5" :key="i" class="text-sm" :class="{ 'text-yellow-500': i <= skill.level, 'text-zinc-300 dark:text-zinc-600': i > skill.level }">
                            ★
                          </span>
                        </div>
                        <span class="text-xs text-zinc-500 dark:text-zinc-400">{{ skill.level }}/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative h-[600px] md:h-[500px]" ref="aboutVisual">
            <div class="absolute inset-0 bg-gradient-to-br from-zinc-500/5 to-zinc-500/5 rounded-2xl blur-xl"></div>
            
            <template v-for="(card, index) in sharedData.aboutCards" :key="index">
              <div class="absolute bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" :class="card.class" :style="{ opacity: 1 }">
                <div class="w-12 h-12 mb-4 rounded-xl flex items-center justify-center shadow-inner" :class="card.bg">
                  <component :is="iconComponents[card.icon] || CodeIcon" class="w-6 h-6" :class="card.color" />
                </div>
                
                <h3 class="font-semibold text-lg mb-2 dark:text-white">{{ card.title }}</h3>
                <p class="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{{ card.text }}</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
    
    <section id="experience" class="py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-800/30" ref="experience">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase rounded-full bg-teal-100/50 dark:bg-teal-900/50 mb-4">
            My Journey
          </span>
          
          <h2 class="text-4xl md:text-5xl font-bold dark:text-white max-w-2xl mx-auto">
            Work <span class="text-teal-600 dark:text-teal-400">Experience</span>
          </h2>
          
          <p class="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mt-4">
            My professional career and achievements
          </p>
        </div>
        
        <div class="relative max-w-4xl mx-auto">
          <div class="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-0.5 h-full bg-zinc-200 dark:bg-zinc-700"></div>
          
          <div v-for="(exp, index) in sharedData.experience" :key="index" class="mb-12 timeline-item pl-10 md:pl-0">
            <div class="relative flex flex-col md:flex-row items-start">
              <div class="absolute -left-7 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 border-4 border-white dark:border-zinc-800 z-10 flex items-center justify-center">
                <BriefcaseIcon class="w-4 h-4 text-white" />
              </div>
              
              <div class="md:w-5/12 md:pr-8 md:text-right" :class="{ 'md:order-last md:pl-8 md:text-left': index % 2 !== 0 }">
                <div class="text-sm text-teal-600 dark:text-teal-400 font-medium">{{ exp.duration }}</div>
                <h3 class="text-xl font-bold dark:text-white">{{ exp.position }}</h3>
                <div class="text-zinc-500 dark:text-zinc-400 mb-2">{{ exp.company }}</div>
              </div>
              
              <div class="md:w-7/12 mt-2 md:mt-0 md:pl-8" :class="{ 'md:pr-8 md:text-right': index % 2 !== 0 }">
                <p class="text-zinc-600 dark:text-zinc-300 mb-3">{{ exp.description }}</p>
                <div class="flex flex-wrap gap-2" :class="{ 'md:justify-end': index % 2 !== 0 }">
                  <span v-for="(tech, i) in exp.technologies" :key="i" class="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-700 rounded-full">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="projects" class="py-24 px-6 md:px-12 bg-white dark:bg-zinc-900" ref="projectsSection" itemscope itemtype="https://schema.org/ItemList">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase rounded-full bg-teal-100/50 dark:bg-teal-900/50 mb-4">
            My Work
          </span>
          
          <h2 class="text-4xl md:text-5xl font-bold dark:text-white max-w-2xl mx-auto" ref="projectsTitle">
            Featured <span class="text-teal-600 dark:text-teal-400">Projects</span>
          </h2>
          
          <p class="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mt-4">
            A selection of my recent work and side projects
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div v-for="(project, index) in projects.slice(0, visibleProjects)" :key="project.name" class="project-card bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group" ref="projectCards" itemprop="itemListElement" itemscope itemtype="https://schema.org/CreativeWork">
            <div class="relative overflow-hidden h-60">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
              
              <img :src="project.image" :alt="project.name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" itemprop="image">
              
              <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 class="text-xl font-bold text-white" itemprop="name">{{ project.name }}</h3>
                
                <div class="flex flex-wrap gap-2 mt-2">
                  <span v-for="(tag, i) in project.technologies.slice(0, 3)" :key="i" class="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white">
                    {{ tag }}
                  </span>
                  
                  <span v-if="project.technologies.length > 3" class="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white">
                    +{{ project.technologies.length - 3 }}
                  </span>
                </div>
              </div>
            </div>
            
            <div class="p-6">
              <p class="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2" itemprop="description">{{ project.description }}</p>
              
              <div class="flex justify-between items-center">
                <span class="text-xs text-zinc-500 dark:text-zinc-400" itemprop="dateCreated">
                  {{ project.year }}
                </span>
                
                <a :href="project.link || '#'" class="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 flex items-center gap-1 text-sm font-medium group/link" itemprop="url">
                  View project
                  <ExternalLinkIcon class="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center" v-if="visibleProjects < projects.length">
          <button @click="showMore" class="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-xl hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 shadow-md flex items-center gap-2 mx-auto group">
            Show more projects
            <ChevronDownIcon class="h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
    
    <section id="testimonials" class="py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-800/30" ref="testimonials">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase rounded-full bg-teal-100/50 dark:bg-teal-900/50 mb-4">
            Client Feedback
          </span>
          
          <h2 class="text-4xl md:text-5xl font-bold dark:text-white max-w-2xl mx-auto">
            What People <span class="text-teal-600 dark:text-teal-400">Say</span>
          </h2>
        </div>
        
        <div class="max-w-4xl mx-auto relative">
          <div class="relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-lg border border-zinc-200 dark:border-zinc-800">
            <div class="testimonial-content transition-all duration-500 ease-in-out">
              <div v-for="(testimonial, index) in sharedData.testimonials" :key="index" 
                   class="text-center px-4 md:px-12"
                   :class="{ 'absolute inset-0 opacity-0 pointer-events-none': currentTestimonial !== index }">
                
                <blockquote class="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 italic mb-8 leading-relaxed">
                  "{{ testimonial.quote }}"
                </blockquote>
                
                <div class="border-t pt-6 dark:border-zinc-700">
                  <div class="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-teal-500 dark:border-teal-400">
                    <img :src="testimonial.avatar" :alt="testimonial.name" class="w-full h-full object-cover">
                  </div>
                  <p class="font-semibold text-lg text-zinc-900 dark:text-white">{{ testimonial.name }}</p>
                  <p class="text-sm text-zinc-500 dark:text-zinc-500">{{ testimonial.position }} • {{ testimonial.company }}</p>
                </div>
              </div>
            </div>
            
            <button @click="prevTestimonial" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-zinc-800 p-3 rounded-full shadow-lg border border-zinc-200 dark:border-zinc-700 hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-all duration-300">
              <ChevronLeftIcon class="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </button>
            
            <button @click="nextTestimonial" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-zinc-800 p-3 rounded-full shadow-lg border border-zinc-200 dark:border-zinc-700 hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-all duration-300">
              <ChevronRightIcon class="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </button>
            
            <div class="flex justify-center gap-2 mt-8">
              <button v-for="(_, index) in sharedData.testimonials" :key="index" 
                      @click="goToTestimonial(index)"
                      class="h-2 w-2 rounded-full transition-all duration-300"
                      :class="currentTestimonial === index 
                        ? 'w-6 bg-teal-600 dark:bg-teal-400' 
                        : 'bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600'">
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
   <section id="cta" class="py-24 px-6 md:px-12 relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-teal-900 via-zinc-900 to-emerald-900 opacity-95"></div>
  
  <div class="absolute inset-0 opacity-10">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwZGRjZDgiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNIDAgMCBMIDYwIDYwIE0gNjAgMCBMIDAgNjAiLz48L2c+PC9zdmc+')]"></div>
    
    <div v-for="i in 15" :key="i" 
         class="absolute text-teal-400/20 font-mono text-xs"
         :class="['left-1/4', 'right-1/4', 'left-1/3', 'right-1/3', 'left-2/3', 'right-2/3'][i % 6]"
         :style="{
           top: `${10 + (i * 5)}%`,
           animationDelay: `${i * 0.5}s`,
           animationDuration: `${15 + (i * 2)}s`
         }">
      <span class="text-emerald-400/30">const</span> project{{i}} = "awesome";
    </div>
  </div>

  <div class="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-teal-500/10 blur-3xl animate-pulse"></div>
  <div class="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl animate-pulse animation-delay-2000"></div>

  <div class="max-w-4xl mx-auto text-center relative z-10">
    <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white" ref="ctaTitle">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 animate-gradient-x">
        Ready to Build Something Amazing?
      </span>
    </h2>
    
    <p class="text-xl text-teal-100 mb-10 max-w-2xl mx-auto leading-relaxed">
      Let's collaborate on your next project and turn ideas into exceptional digital experiences.
    </p>


    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a href="mailto:contact@judempoyo.com" 
         class="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-500 transform hover:-translate-y-1">
        
        <div class="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <span class="relative z-10 flex items-center gap-2">
          <MailIcon class="h-5 w-5" />
          Start a Project
        </span>
        
        <div class="absolute inset-0 rounded-xl border-2 border-teal-400/50 group-hover:border-teal-400 group-hover:animate-pulse transition-all duration-500"></div>
      </a>

      <a href="#projects" 
         class="group relative overflow-hidden px-8 py-4 bg-transparent text-white border-2 border-teal-500/30 rounded-xl font-semibold hover:border-teal-400 transition-all duration-500 transform hover:-translate-y-1">
        
        <div class="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <span class="relative z-10 flex items-center gap-2">
          <CodeIcon class="h-5 w-5" />
          View Portfolio
        </span>
      </a>
    </div>

    <p class="text-teal-300/60 text-sm mt-8">
      ⚡ Currently available for freelance projects & collaborations
    </p>
  </div>
</section>
    
    <AppFooter />
  </div>
</template>

<style scoped>
.timeline-item,
.testimonial-content,
.project-card {
  opacity: 1;
  transform: none;
}

.leading-relaxed {
  line-height: 1.7;
}

.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

a:focus,
button:focus {
  outline: 2px solid rgba(13, 148, 136, 0.5);
  outline-offset: 2px;
}

.testimonial-content {
  position: relative;
  min-height: 300px;
}

.testimonial-content > div {
  transition: opacity 0.5s ease-in-out;
}
@keyframes gradient-x {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) }
  50% { transform: translateY(-10px) }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

@keyframes float-code {
  0%, 100% { 
    transform: translateY(0) rotate(0deg);
    opacity: 0.2;
  }
  50% { 
    transform: translateY(-20px) rotate(5deg);
    opacity: 0.4;
  }
}


</style>