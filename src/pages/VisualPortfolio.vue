<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
	CodeIcon,
	TerminalIcon,
	PaletteIcon,
	MailIcon,
	ServerIcon,
	PhoneIcon,
	MapPinIcon,
	DatabaseIcon,
	TwitterIcon,
	GithubIcon,
	LinkedinIcon,
	InstagramIcon,
	AwardIcon,
	BriefcaseIcon,
	SchoolIcon,
	UsersIcon,
	GlobeIcon,
type LucideIcon
} from 'lucide-vue-next'
import { sharedData } from '@/data/shared-data'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useMetadata } from '@/composables/useMetadata'
import type { Ref } from 'vue';


const iconComponents: Record<string, any> = {
	CodeIcon,
	TerminalIcon,
	PaletteIcon,
	MailIcon,
	ServerIcon,
	PhoneIcon,
	MapPinIcon,
	DatabaseIcon,
	TwitterIcon,
	GithubIcon,
	LinkedinIcon,
	InstagramIcon,
	AwardIcon,
	BriefcaseIcon,
	SchoolIcon,
	UsersIcon,
	GlobeIcon
};
gsap.registerPlugin(ScrollTrigger)


type HTMLElementRef = HTMLElement | null;

const hero = ref<HTMLElementRef>(null);
const heroTitle = ref<HTMLElementRef>(null);
const heroText = ref<HTMLElementRef>(null);
const heroButtons: Ref<HTMLElement | null> = ref(null);

const heroVisual = ref<HTMLElementRef>(null);

const aboutCards = sharedData.aboutCards
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
// Animation setup
const setupAnimations = () => {
	// Hero section animations
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

	if (heroButtons.value) {
		const children = heroButtons.value.children;
		if (children && children.length > 0) {
			gsap.from(Array.from(children), {
				opacity: 0,
				y: 40,
				duration: 1,
				delay: 0.2,
				ease: 'power3.out',
			});
		}
	}


	gsap.from(heroVisual.value, {
		opacity: 0,
		x: 100,
		duration: 1,
		delay: 0.6,
		ease: 'power3.out'
	})

	// About section animations
	gsap.from(aboutTitle.value, {
		scrollTrigger: {
			trigger: about.value,
			start: 'top 80%'
		},
		opacity: 0,
		y: 50,
		duration: 0.8
	})

	gsap.from(aboutText.value, {
		scrollTrigger: {
			trigger: about.value,
			start: 'top 70%'
		},
		opacity: 0,
		y: 30,
		duration: 0.6
	})

	// Experience timeline animations
	gsap.from('.timeline-item', {
		scrollTrigger: {
			trigger: experience.value,
			start: 'top 70%'
		},
		opacity: 0,
		y: 50,
		stagger: 0.2,
		duration: 0.8
	})

	// Projects animations
	gsap.from(projectsTitle.value, {
		scrollTrigger: {
			trigger: projectsSection.value,
			start: 'top 80%'
		},
		opacity: 0,
		y: 50,
		duration: 0.8
	})

	// Testimonials animations
	gsap.from('.testimonial-card', {
		scrollTrigger: {
			trigger: testimonials.value,
			start: 'top 70%'
		},
		opacity: 0,
		y: 50,
		stagger: 0.2,
		duration: 0.8
	})

	// Contact animations
	gsap.from(contactTitle.value, {
		scrollTrigger: {
			trigger: contact.value,
			start: 'top 80%'
		},
		opacity: 0,
		y: 50,
		duration: 0.8
	})
}


function showMore() {
	visibleProjects.value = Math.min(
		visibleProjects.value + 3,
		projects.value.length
	)
}

const scrollToSection = (id: string) => {
	const element = document.getElementById(id)
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' })
	}
}


onMounted(() => {
	setupAnimations()
	useMetadata().setMetadata({
		projects: true,
		image: '/preview.jpg'
	})
})
</script>

<template>
	<div class="visual-portfolio min-h-screen overflow-hidden bg-white dark:bg-zinc-900 transition-colors duration-300">
		<AppHeader />

		<!-- Hero Section -->
		<section id="home" class="min-h-screen flex items-center justify-center pt-16 pb-12 px-4 sm:px-6" ref="hero"
			itemscope itemtype="https://schema.org/Person">
			<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
				<div class="relative z-10 order-2 md:order-1 text-center md:text-left">
					<div class="hidden md:block absolute -top-6 -left-6 w-24 h-24 bg-teal-400/10 rounded-full blur-xl"></div>

					<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 dark:text-white leading-tight"
						ref="heroTitle" itemprop="name">
						Hi, I'm <span
							class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-zinc-600 dark:from-teal-400 dark:to-zinc-500">Jude
							Mpoyo</span>
					</h1>

					<p class="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 mb-6 md:mb-8 max-w-md mx-auto md:mx-0 leading-relaxed"
						ref="heroText" itemprop="description">
						{{ sharedData.personal.shortBio }}
					</p>

					<div class="flex flex-col sm:flex-row gap-3 justify-center md:justify-start" ref="heroButtons">
						<a href="#projects"
							class="px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-teal-600 to-zinc-600 dark:from-teal-700 dark:to-zinc-700 text-white rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
							@click="scrollToSection('projects')">
							<span>My projects</span>
							<svg xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" fill="none"
								viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</a>
						<a href="#contact"
							class="px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg sm:rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-300 flex items-center justify-center gap-2 group">
							<span>Contact me</span>
							<svg xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" fill="none"
								viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</a>
					</div>
				</div>

				<div class="relative order-1 md:order-2 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-none" ref="heroVisual">
					<div class="hidden md:block absolute -top-8 -left-8 w-40 h-40 bg-teal-400/20 rounded-full blur-xl"></div>

					<div
						class="md:absolute inset-0 bg-gradient-to-br from-teal-100 to-zinc-100 dark:from-teal-900/50 dark:to-zinc-900/50 rounded-2xl md:rounded-3xl transform md:rotate-6">
					</div>

					<div
						class="relative bg-white dark:bg-zinc-800 p-1 sm:p-1.5 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden border-4 md:border-8 border-white dark:border-zinc-800 transition-all duration-300 hover:shadow-teal-500/20 hover:-translate-y-1 md:hover:-translate-y-2">
						<img src="/judepic.png" alt="Jude Mpoyo"
						 class="rounded-xl md:rounded-2xl w-full h-auto object-cover aspect-square grayscale-[25%] hover:grayscale-0 transition-all duration-300">

						<div
							class="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md border border-white/20">
							<div class="flex gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
								<span class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse"></span>
								<span class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
								<span class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
							</div>
							<h3
								class="font-extrabold text-center text-xl sm:text-2xl md:text-3xl uppercase bg-gradient-to-br from-teal-600 to-zinc-600 dark:from-teal-400 dark:to-zinc-300 bg-clip-text text-transparent">
								{{ sharedData.personal.name }}
							</h3>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- About Section -->
		<section id="about"
			class="py-24 px-6 md:px-12 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-800/30 dark:to-zinc-900"
			ref="about">
			<div class="max-w-7xl mx-auto">
				<div class="text-center mb-16">
					<span
						class="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase rounded-full bg-teal-100/50 dark:bg-teal-900/50 mb-4">
						About me
					</span>
					<h2 class="text-4xl md:text-5xl font-bold dark:text-white max-w-2xl mx-auto" ref="aboutTitle">
						Crafting <span class="text-teal-600 dark:text-teal-400">digital experiences</span> with passion
					</h2>
				</div>

				<div class="grid md:grid-cols-2 gap-16 items-center">
					<div class="space-y-8" ref="aboutText" itemprop="knowsAbout" itemscope itemtype="https://schema.org/ItemList">

						<div  class="space-y-2 "itemprop="description" v-html="sharedData.personal.bio ">
						
						</div>

						<!-- Skills Section -->
						<div>
							<h3 class="text-2xl font-semibold mb-6 dark:text-white">My Skills</h3>
							<div class="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-4">
								<div v-for="(category, key) in sharedData.skills" :key="key"
									class="bg-white dark:bg-zinc-800 p-5 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700/50 hover:shadow-md transition-all">
									<h4 class="font-medium text-lg text-teal-600 dark:text-teal-400 mb-3 flex items-center gap-2">
										<component :is="iconComponents[category.icon] || CodeIcon" class="w-5 h-5" />
										{{ category.title }}
									</h4>
									<div class="space-y-3">
										<div v-for="(skill, index) in category.items" :key="index"
											class="text-sm p-3 rounded-lg bg-zinc-50 dark:bg-zinc-700/50 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all cursor-pointer">
											<div class="flex justify-between items-center">
												<span class="dark:text-zinc-300 font-medium">{{ skill.name }}</span>
												<span
													class="text-zinc-500 dark:text-zinc-400 text-xs bg-zinc-200 dark:bg-zinc-600 px-2 py-1 rounded-full">
													{{ skill.years }} year{{ skill.years > 1 ? 's' : '' }}
												</span>
											</div>
											<div class="flex items-center mt-2">
												<div class="flex mr-2">
													<span v-for="i in 5" :key="i" class="text-sm" :class="{
														'text-yellow-500': i <= skill.level,
														'text-zinc-300 dark:text-zinc-600': i > skill.level
													}">
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

						<template v-for="(card, index) in aboutCards" :key="index">
							<div
								class="absolute bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
								:class="card.class" :style="{ opacity: 1 }">
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

		<!-- Experience Section -->
		<section id="experience" class="py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-800/30" ref="experience">
			<div class="max-w-7xl mx-auto">
				<div class="text-center mb-16">
					<span
						class="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase rounded-full bg-teal-100/50 dark:bg-teal-900/50 mb-4">
						My Journey
					</span>
					<h2 class="text-4xl md:text-5xl font-bold dark:text-white max-w-2xl mx-auto">
						Work <span class="text-teal-600 dark:text-teal-400">Experience</span>
					</h2>
					<p class="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mt-4">
						My professional career and achievements
					</p>
				</div>

				<div class="relative max-w-3xl mx-auto">
					<!-- Timeline line -->
					<div class="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-zinc-200 dark:bg-zinc-700"></div>

					<!-- Timeline items -->
					<div v-for="(exp, index) in sharedData.experience" :key="index" class="mb-12 timeline-item">
						<div class="relative flex items-center justify-between">
							<!-- Left side -->
							<div class="w-5/12 pr-8 text-right" :class="{ 'order-last pl-8 text-left': index % 2 !== 0 }">
								<div class="text-sm text-teal-600 dark:text-teal-400 font-medium">{{ exp.duration }}</div>
								<h3 class="text-xl font-bold dark:text-white">{{ exp.position }}</h3>
								<div class="text-zinc-500 dark:text-zinc-400">{{ exp.company }}</div>
							</div>

							<!-- Middle dot -->
							<div
								class="w-8 h-8 rounded-full bg-teal-500 border-4 border-white dark:border-zinc-800 z-10 flex items-center justify-center">
								<BriefcaseIcon class="w-4 h-4 text-white" />
							</div>

							<!-- Right side -->
							<div class="w-5/12 pl-8" :class="{ 'pr-8 text-right': index % 2 !== 0 }">
								<p class="text-zinc-600 dark:text-zinc-300">{{ exp.description }}</p>
								<div class="mt-2 flex flex-wrap gap-2" :class="{ 'justify-end': index % 2 !== 0 }">
									<span v-for="(tech, i) in exp.technologies" :key="i"
										class="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-700 rounded-full">
										{{ tech }}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Education Section -->
		<section id="education" class="py-24 px-6 md:px-12 bg-white dark:bg-zinc-900" ref="education">
			<div class="max-w-7xl mx-auto">
				<div class="text-center mb-16">
					<span
						class="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase rounded-full bg-teal-100/50 dark:bg-teal-900/50 mb-4">
						Learning Path
					</span>
					<h2 class="text-4xl md:text-5xl font-bold dark:text-white max-w-2xl mx-auto">
						Education & <span class="text-teal-600 dark:text-teal-400">Certifications</span>
					</h2>
				</div>

				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div v-for="(edu, index) in sharedData.education" :key="index"
						class="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700/50 hover:shadow-md transition-all hover:-translate-y-1">
						<div class="w-12 h-12 mb-4 rounded-lg bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
							<SchoolIcon class="w-6 h-6 text-teal-600 dark:text-teal-400" />
						</div>
						<h3 class="text-xl font-bold dark:text-white mb-2">{{ edu.degree }}</h3>
						<div class="text-teal-600 dark:text-teal-400 font-medium mb-1">{{ edu.institution }}</div>
						<div class="text-sm text-zinc-500 dark:text-zinc-400 mb-3">{{ edu.duration }}</div>
						<p class="text-zinc-600 dark:text-zinc-300 text-sm">{{ edu.description }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Projects Section -->
		<section id="projects" class="py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-800/30" ref="projectsSection" itemscope
			itemtype="https://schema.org/ItemList">
			<div class="max-w-7xl mx-auto">
				<div class="text-center mb-16">
					<span
						class="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase rounded-full bg-teal-100/50 dark:bg-teal-900/50 mb-4">
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
					<div v-for="(project, index) in projects.slice(0, visibleProjects)" :key="project.name"
						class="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
						ref="projectCards" itemprop="itemListElement" itemscope itemtype="https://schema.org/CreativeWork">
						<div class="relative overflow-hidden h-60">
							<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
							<img :src="project.image" :alt="project.name"
								class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
								itemprop="image">
							<div class="absolute bottom-0 left-0 right-0 p-6 z-20">
								<h3 class="text-xl font-bold text-white" itemprop="name">{{ project.name }}</h3>
								<div class="flex flex-wrap gap-2 mt-2">
									<span v-for="(tag, i) in project.technologies.slice(0, 3)" :key="i"
										class="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white">
										{{ tag }}
									</span>
									<span v-if="project.technologies.length > 3"
										class="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white">
										+{{ project.technologies.length - 3 }}
									</span>
								</div>
							</div>
						</div>
						<div class="p-6">
							<p class="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2" itemprop="description">{{
								project.description }}
							</p>
							<div class="flex justify-between items-center">
								<span class="text-xs text-zinc-500 dark:text-zinc-400" itemprop="dateCreated">
									{{ project.year }}
								</span>
								<a :href="project.link || '#'"
									class="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 flex items-center gap-1 text-sm font-medium group/link"
									itemprop="url">
									View project
									<svg xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24"
										stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
											d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="text-center" v-if="visibleProjects < projects.length">
					<button @click="showMore"
						class="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-zinc-600 dark:from-teal-700 dark:to-zinc-700 text-white rounded-xl hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 shadow-md flex items-center gap-2 mx-auto group">
						Show more projects
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-y-1 transition-transform"
							fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
						</svg>
					</button>
				</div>
			</div>
		</section>

		<!-- Testimonials Section -->
		<section id="testimonials" class="py-24 px-6 md:px-12 bg-white dark:bg-zinc-900" ref="testimonials">
			<div class="max-w-7xl mx-auto">
				<div class="text-center mb-16">
					<span
						class="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase rounded-full bg-teal-100/50 dark:bg-teal-900/50 mb-4">
						Client Feedback
					</span>
					<h2 class="text-4xl md:text-5xl font-bold dark:text-white max-w-2xl mx-auto">
						What People <span class="text-teal-600 dark:text-teal-400">Say</span>
					</h2>
				</div>

				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div v-for="(testimonial, index) in sharedData.testimonials" :key="index"
						class="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700/50 hover:shadow-md transition-all hover:-translate-y-1 testimonial-card">
						<div class="flex items-center mb-4">
							<div class="w-12 h-12 rounded-full overflow-hidden mr-4">
								<img :src="testimonial.avatar" :alt="testimonial.name" class="w-full h-full object-cover">
							</div>
							<div>
								<h4 class="font-bold dark:text-white">{{ testimonial.name }}</h4>
								<div class="text-sm text-zinc-500 dark:text-zinc-400">{{ testimonial.position }}</div>
							</div>
						</div>
						<p class="text-zinc-600 dark:text-zinc-300 mb-4 italic">"{{ testimonial.quote }}"</p>
						<div class="flex">
							<span v-for="i in 5" :key="i" class="text-yellow-500">
								★
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>


		<AppFooter />
	</div>
</template>

<style>
::-webkit-scrollbar {
	width: 10px;
	height: 10px;
}

::-webkit-scrollbar-track {
	background: #f1f1f1;
	border-radius: 10px;
}

::-webkit-scrollbar-thumb {
	background: linear-gradient(to bottom, #0d9488, #0891b2);
	border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
	background: linear-gradient(to bottom, #0f766e, #0e7490);
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s, transform 0.5s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: translateY(20px);
}

.stagger-move {
	transition: transform 0.5s;
}

.hover-card {
	transition: transform 0.3s, box-shadow 0.3s;
}

.hover-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.gradient-text {
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

@media (max-width: 768px) {
	.visual-portfolio {
		overflow-x: hidden;
	}

	section {
		padding: 80px 24px;
	}

	.hero-title {
		font-size: 2.5rem;
	}

	/* Timeline adjustments */
	.timeline-item .w-5\/12 {
		width: 100%;
		padding: 0;
		text-align: left !important;
	}

	.timeline-item .w-8 {
		display: none;
	}

	/* About cards adjustments */
	.about-cards-container {
		height: auto !important;
		min-height: 400px;
		position: relative;
		margin-bottom: 2rem;
	}

	.about-card {
		position: relative !important;
		top: auto !important;
		left: auto !important;
		right: auto !important;
		bottom: auto !important;
		width: 100% !important;
		margin-bottom: 1rem;
	}

	.skills-grid {
		grid-template-columns: 1fr !important;
	}

	.hero-section {
		padding-top: 4rem;
		padding-bottom: 4rem;
	}

	.hero-content {
		order: 2;
		text-align: center;
	}

	.hero-image {
		order: 1;
		margin-bottom: 2rem;
	}
}

@media (max-width: 640px) {
	.projects-grid {
		grid-template-columns: 1fr !important;
	}

	.contact-grid {
		grid-template-columns: 1fr !important;
	}
}

.dark-transition * {
	transition: background-color 0.3s ease, border-color 0.3s ease;
}
</style>