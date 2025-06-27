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
import AppFooter from '@/components/AppFooter.vue'

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
		AppHeader,
		AppFooter
	},
	emits: ['change-style'],
	setup(props, { emit }) {
		const aboutCards = ref([
			{
				title: 'Frontend Development',
				text: 'Creating reactive and accessible user interfaces',
				icon: 'CodeIcon',
				bg: 'bg-teal-100 dark:bg-teal-900/50',
				color: 'text-teal-600 dark:text-teal-400',
				class: 'top-0 left-0 w-48'
			},
			{
				title: 'UI/UX Design',
				text: 'Designing intuitive and aesthetic user experiences',
				icon: 'PaletteIcon',
				bg: 'bg-indigo-100 dark:bg-indigo-900/50',
				color: 'text-indigo-600 dark:text-indigo-400',
				class: 'top-12 right-0 w-56'
			},
			{
				title: 'Optimization',
				text: 'Performance and SEO for better ranking',
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

		const visibleProjects = ref(3)
		const projects = ref(Object.values(sharedData.projects))

		const projectsSection = ref(null)
		const projectsTitle = ref(null)
		const projectCards = ref([])

		const contact = ref(null)
		const contactTitle = ref(null)

		function showMore() {
			visibleProjects.value = Math.min(
				visibleProjects.value + 3,
				projects.value.length
			)
		}

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

			if (heroButtons.value) {
				gsap.from(heroButtons.value.children, {
					opacity: 1,
					y: 0,
					duration: 0.8,
					stagger: 0.1,
					delay: 0.4,
					ease: 'power3.out'
				});
			}

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

			gsap.from(aboutVisual.value.querySelectorAll('div[class*="absolute"]'), {
				scrollTrigger: {
					trigger: about.value,
					start: 'top 70%'
				},
				opacity: 0,
				y: 50,
				stagger: 0.2,
				duration: 0.8,
				ease: 'power2.out'
			});

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
			projects,
			visibleProjects,
			showMore
		}
	}
}
</script>
<template>
	<div class="visual-portfolio min-h-screen overflow-x-hidden bg-white dark:bg-zinc-900 transition-colors duration-500">
		<AppHeader />

		<!-- Hero Section -->
		<section id="home" class="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12" ref="hero">
			<div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
				<div class="relative z-10">
					<div class="absolute -top-8 -left-8 w-32 h-32 bg-teal-400/10 rounded-full blur-3xl"></div>
					<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 dark:text-white leading-tight" ref="heroTitle">
						Hi, I'm <span
							class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500">Jude
							Mpoyo</span>
					</h1>
					<p class="text-xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-lg leading-relaxed" ref="heroText">
						{{ sharedData.personal.shortBio }}
					</p>
					<div class="flex gap-4 flex-wrap" ref="heroButtons">
						<a href="#projects"
							class="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-teal-500 dark:from-teal-700 dark:to-teal-600 text-white rounded-xl hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 shadow-md flex items-center gap-2 group"
							@click="scrollToSection('projects')">
							<span>My projects</span>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform"
								fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</a>
						<a href="#contact"
							class="px-8 py-3.5 border-2 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-300 flex items-center gap-2 group">
							<span>Contact me</span>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform"
								fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</a>
					</div>
				</div>
				<div class="relative" ref="heroVisual">
					<div class="absolute -top-12 -left-12 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl"></div>
					<div
						class="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/50 dark:to-blue-900/50 rounded-3xl transform rotate-6">
					</div>
					<div
						class="relative bg-white dark:bg-zinc-800 p-1.5 rounded-3xl shadow-2xl overflow-hidden border-8 border-white dark:border-zinc-800 transition-all duration-500 hover:shadow-teal-500/20 hover:-translate-y-2">
						<img src="/judepic.png" alt="Jude Mpoyo"
							class="rounded-2xl w-full h-auto object-cover aspect-square grayscale-[25%] hover:grayscale-0 transition-all duration-500">
						<div
							class="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm p-4 rounded-xl shadow-md border border-white/20">
							<div class="flex gap-2 mb-2">
								<span class="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
								<span class="w-3 h-3 rounded-full bg-yellow-500"></span>
								<span class="w-3 h-3 rounded-full bg-green-500"></span>
							</div>
							<h3
								class="font-extrabold text-center text-2xl md:text-3xl uppercase bg-gradient-to-br from-teal-600 to-zinc-600 dark:from-teal-400 dark:to-zinc-300 bg-clip-text text-transparent">
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
					<div class="space-y-8" ref="aboutText">
						<p class="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
							{{ sharedData.personal.bio }}
						</p>

						<!-- Skills Section -->
						<div>
							<h3 class="text-2xl font-semibold mb-6 dark:text-white">My Skills</h3>
							<div class="grid grid-cols-2 gap-4">
								<div v-for="(category, key) in sharedData.skills" :key="key"
									class="bg-white dark:bg-zinc-800 p-5 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700/50 hover:shadow-md transition-all">
									<h4 class="font-medium text-lg text-teal-600 dark:text-teal-400 mb-3 flex items-center gap-2">
										<component :is="category.icon || 'CodeIcon'" class="w-5 h-5" />
										{{ category.title }}
									</h4>
									<div class="space-y-3">
										<div v-for="(skill, index) in category.items" :key="index"
											class="text-sm p-3 rounded-lg bg-zinc-50 dark:bg-zinc-700/50 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all">
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

					<div class="relative h-[480px]" ref="aboutVisual">
						<div class="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-2xl blur-xl"></div>

						<template v-for="(card, index) in aboutCards" :key="index">
							<div
								class="absolute bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
								:class="card.class" :style="{ opacity: 1 }">
								<div class="w-12 h-12 mb-4 rounded-xl flex items-center justify-center shadow-inner" :class="card.bg">
									<component :is="card.icon" class="w-6 h-6" :class="card.color" />
								</div>
								<h3 class="font-semibold text-lg mb-2 dark:text-white">{{ card.title }}</h3>
								<p class="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{{ card.text }}</p>
							</div>
						</template>
					</div>
				</div>
			</div>
		</section>

		<!-- Projects Section -->
		<section id="projects" class="py-24 px-6 md:px-12 bg-white dark:bg-zinc-900" ref="projectsSection">
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

				<transition-group name="stagger" tag="div" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					<div v-for="(project, index) in projects.slice(0, visibleProjects)" :key="project.name"
						class="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
						ref="projectCards">
						<div class="relative overflow-hidden h-60">
							<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
							<img :src="project.image" :alt="project.name"
								class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
							<div class="absolute bottom-0 left-0 right-0 p-6 z-20">
								<h3 class="text-xl font-bold text-white">{{ project.name }}</h3>
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
							<p class="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">{{ project.description }}</p>
							<div class="flex justify-between items-center">
								<span class="text-xs text-zinc-500 dark:text-zinc-400">
									{{ project.year }}
								</span>
								<a :href="project.link || '#'"
									class="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 flex items-center gap-1 text-sm font-medium group/link">
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
				</transition-group>

				<div class="text-center" v-if="visibleProjects < projects.length">
					<button @click="showMore"
						class="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-teal-500 dark:from-teal-700 dark:to-teal-600 text-white rounded-xl hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 shadow-md flex items-center gap-2 mx-auto group">
						Show more projects
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-y-1 transition-transform"
							fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
						</svg>
					</button>
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
}

.dark-transition * {
	transition: background-color 0.5s ease, border-color 0.5s ease;
}
</style>