<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from '@/components/ui/carousel'
import { sharedData } from '@/data/shared-data'

gsap.registerPlugin(ScrollTrigger)

const api = ref<CarouselApi>()
const current = ref(0)
const autoplayInterval = ref<number>()
const testimonialsRef = ref<HTMLElement | null>(null)

const initCarousel = () => {
	if (!api.value) return

	api.value.on('select', () => {
		current.value = api.value?.selectedScrollSnap() || 0
	})

	autoplayInterval.value = window.setInterval(() => {
		if (api.value) {
			const nextSlide = (current.value + 1) % sharedData.testimonials.length
			api.value.scrollTo(nextSlide)
		}
	}, 5000)
}

const resetAutoplay = () => {
	if (autoplayInterval.value) {
		clearInterval(autoplayInterval.value)
	}
	initCarousel()
}

const goToSlide = (index: number) => {
	if (api.value) {
		api.value.scrollTo(index)
		resetAutoplay()
	}
}

const setupAnimations = () => {
	gsap.fromTo('.testimonials',
		{ opacity: 0, x: 50 },
		{
			opacity: 1,
			x: 0,
			duration: 0.8,
			scrollTrigger: {
				trigger: testimonialsRef.value,
				start: 'top 70%',
				toggleActions: 'play none none none'
			}
		}
	)
}

onMounted(() => {
	initCarousel()
	setupAnimations()
})

onUnmounted(() => {
	if (autoplayInterval.value) {
		clearInterval(autoplayInterval.value)
	}
})
</script>
<template>
	<section id="testimonials" class="py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-800/30" ref="testimonials">
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

			<div class="relative px-12">
				<Carousel class="w-full px-8" :opts="{ loop: true }" @init-api="(val) => { api = val }">
					<CarouselContent>
						<CarouselItem v-for="(testimonial, index) in sharedData.testimonials" :key="index"
							class="md:basis-1/2 lg:basis-1/3">
							<div
								class="h-full flex flex-col items-center text-center p-8 bg-background rounded-2xl border shadow-sm hover:shadow-xl transition-all dark:bg-zinc-900 dark:border-zinc-800">
								<div class="mb-6 flex justify-center">
									<img :src="testimonial.avatar" :alt="testimonial.name"
										class="w-24 h-24 rounded-full shadow-lg object-cover border-2 border-teal-500 dark:border-teal-400" />
								</div>

								<h5 class="mb-1 text-xl font-semibold text-zinc-900 dark:text-white">
									{{ testimonial.name }}
								</h5>
								<h6 class="mb-4 text-sm font-medium text-teal-600 dark:text-teal-400">
									{{ testimonial.position }} • {{ testimonial.company }}
								</h6>

								<p class="mb-6 text-neutral-600 dark:text-neutral-300 italic relative">
									<span class="inline-block mr-2 text-teal-500">&ldquo;</span>
									{{ testimonial.quote }}
									<span class="inline-block ml-2 text-teal-500">&rdquo;</span>
								</p>

								
							</div>
						</CarouselItem>

					</CarouselContent>

					<CarouselPrevious
						class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background p-3 rounded-full shadow-lg border hover:bg-primary/10 hover:border-primary/30 transition-all dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-yellow-500/30"
						@click="resetAutoplay" />
					<CarouselNext
						class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background p-3 rounded-full shadow-lg border hover:bg-primary/10 hover:border-primary/30 transition-all dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-yellow-500/30"
						@click="resetAutoplay" />

					<div class="flex justify-center gap-2 mt-8">
						<button v-for="(_, index) in sharedData.testimonials" :key="index" @click="goToSlide(index)"
							class="h-2 w-2 rounded-full bg-primary/30 transition-all duration-300 hover:bg-primary/50"
							:class="{ '!w-6 !bg-primary': current === index }" />
					</div>
				</Carousel>
			</div>
		</div>
	</section>
</template>

<style scoped>
.timeline-item,
.testimonial-content,
.project-card {
	opacity: 1;
	transform: none;
}


.testimonial-content {
	position: relative;
	min-height: 300px;
}

.testimonial-content>div {
	transition: opacity 0.5s ease-in-out;
}
</style>