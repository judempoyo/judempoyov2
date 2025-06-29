<template>
	<div
		class="font-mono text-zinc-100 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto min-h-100 flex flex-col cursor-text transition-colors duration-300"
		:class="currentTheme" @click="focusInput" ref="terminalContainer">
		<!-- Header -->
		<div class="px-3 py-2 flex items-center" :class="headerClass">
			<div class="flex gap-2">
				<span class="w-3 h-3 rounded-full bg-red-500"></span>
				<span class="w-3 h-3 rounded-full bg-yellow-500"></span>
				<span class="w-3 h-3 rounded-full bg-green-500"></span>
			</div>
			<div class="flex-1 text-center text-sm" :class="titleClass">Jude MPOYO</div>
		</div>

		<!-- Content -->
		<div class="flex-1 p-4 overflow-y-auto text-sm leading-relaxed" ref="terminalContent" :class="contentClass">
			<div v-for="(line, index) in output" :key="index" class="mb-1 break-words" ref="outputLines">
				<span v-if="line.type === 'command'" class="text-green-400 mr-2">$ {{ line.text }}</span>
				<span v-else class="whitespace-pre-wrap" :class="line.color || textColor">{{ line.text }}</span>
			</div>
			<div class="flex items-center">
				<span class="text-green-400 mr-2">$</span>
				<input v-model="currentCommand" @keyup.enter="executeCommand" @keyup.up="historyUp" @keyup.down="historyDown"
					ref="commandInput" class="flex-1 bg-transparent border-none outline-none caret-zinc-100" :class="textColor"
					spellcheck="false" />
			</div>
		</div>
	</div>
</template>

<script>
import { gsap } from 'gsap';
import { sharedData } from '@/data/shared-data'

export default {
	data() {
		return {
			currentCommand: '',
			output: [
				{ type: 'output', text: 'Welcome to Jude Mpoyo\'s portfolio terminal.' },
				{ type: 'output', text: 'Type "help" to see available commands.' }
			],
			commandHistory: [],
			historyIndex: -1,
			currentTheme: 'bg-zinc-900',
			textColor: 'text-zinc-100',
			headerClass: 'bg-zinc-950',
			titleClass: 'text-zinc-400',
			contentClass: 'bg-zinc-900',
			isTimelineActive: false,
			currentTimelineStep: 0,
			personalData: sharedData.personal,
			skillsData: sharedData.skills,
			toolsData: sharedData.tools,
			projects: sharedData.projects,
			timelineSections: sharedData.timeline,
			experienceData: sharedData.experience,
			contactMethods: sharedData.contactMethods,
			commands: {
				help: {
					description: 'Show all available commands',
					usage: 'help [command]',
					execute: (args) => this.showHelp(args[0])
				},
				about: {
					description: 'Detailed introduction and skills',
					usage: 'about',
					execute: () => this.showDetailedAbout()
				},
				skills: {
					description: 'My technical skills by category',
					usage: 'skills [frontend|backend|devops|design]',
					execute: (args) => this.showSkills(args[0])
				},
				tools: {
					description: 'My tools and work environment',
					usage: 'tools',
					execute: () => this.showTools()
				},
				projects: {
					description: 'List of my main projects',
					usage: 'projects',
					execute: () => this.listProjects()
				},
				show: {
					description: 'Show details of a specific project',
					usage: 'show <project_id>',
					execute: (args) => this.showProject(args[0])
				},
				random: {
					description: 'Show a random project',
					usage: 'random',
					execute: () => this.showRandomProject()
				},
				timeline: {
					description: 'My interactive professional timeline',
					usage: 'timeline',
					execute: () => this.startInteractiveTimeline()
				},
				experience: {
					description: 'My professional experience',
					usage: 'experience',
					execute: () => this.showProfessionalExperience()
				},
				contact: {
					description: 'My professional contact details',
					usage: 'contact',
					execute: () => this.showContactDetails()
				},
				theme: {
					description: 'Change theme (dark/light)',
					usage: 'theme <dark|light>',
					execute: (args) => this.changeTheme(args[0])
				},
				clear: {
					description: 'Clear the terminal',
					usage: 'clear',
					execute: () => this.clearTerminal()
				},
				connect: {
					description: 'Contact me directly on a platform',
					usage: 'connect <whatsapp|github|linkedin|email>',
					execute: (args) => this.connectPlatform(args[0])
				},
				search: {
					description: 'Search projects by technology',
					usage: 'search <technology>',
					execute: (args) => this.searchProjects(args[0])
				},
				whoami: {
					description: 'Reveals your true identity (or at least mine)',
					usage: 'whoami',
					execute: () => this.whoAmI()
				}
			},

		};
	},
	mounted() {
		this.focusInput();
		document.addEventListener('keydown', this.handleTimelineNavigation);
		this.animateTerminalEntrance();
	},
	beforeDestroy() {
		document.removeEventListener('keydown', this.handleTimelineNavigation);
	},
	methods: {
		whoAmI() {
			const responses = [
				"You're either:",
				"1. A curious visitor exploring my portfolio",
				"2. A recruiter checking my skills",
				"3. Me, testing my own terminal (hi me!)",
				"4. A sentient AI that gained consciousness",
				"",
				"As for me, I'm Jude Mpoyo - a developer who",
				"spends way too much time making terminal UIs",
				"when I should probably be coding real projects."
			];

			this.showFormattedText(responses);
		},
		searchProjects(tech) {
			const results = Object.entries(this.projects)
				.filter(([_, project]) =>
					project.technologies.some(t => t.toLowerCase().includes(tech.toLowerCase()))
				);

			if (results.length === 0) {
				this.output.push({
					type: 'output',
					text: `No projects found using "${tech}"`,
					color: 'text-yellow-400'
				});
				return;
			}

			const resultText = [
				`Projects using "${tech}":`,
				...results.map(([key, project]) =>
					`- ${key}: ${project.name} (${project.year})`
				)
			];

			this.output.push({
				type: 'output',
				text: resultText.join('\n')
			});
		},
		animateTerminalEntrance() {
			gsap.from(this.$refs.terminalContainer, {
				opacity: 0,
				y: 20,
				duration: 0.8,
				ease: "power3.out"
			});
		},
		focusInput() {
			this.$refs.commandInput.focus();
		},
		executeCommand() {
			if (this.isTimelineActive) return;

			const cmd = this.currentCommand.trim();
			if (!cmd) return;

			this.commandHistory.push(cmd);
			this.historyIndex = this.commandHistory.length;

			gsap.fromTo(
				this.$refs.outputLines[this.output.length],
				{ opacity: 0, x: -20 },
				{ opacity: 1, x: 0, duration: 0.3 }
			);

			this.output.push({ type: 'command', text: cmd });

			const [command, ...args] = cmd.split(' ');
			this.processCommand(command.toLowerCase(), args);

			this.currentCommand = '';
			this.$nextTick(() => {
				this.scrollToBottom();
			});
		},
		processCommand(command, args) {
			if (this.commands[command]) {
				this.commands[command].execute(args);
			} else {
				this.showError(`Unknown command: ${command}. Type "help" for list.`);
			}
		},
		scrollToBottom() {
			this.$refs.terminalContent.scrollTop = this.$refs.terminalContent.scrollHeight;
		},
		historyUp() {
			if (this.historyIndex > 0) {
				this.historyIndex--;
				this.currentCommand = this.commandHistory[this.historyIndex];
			}
		},
		historyDown() {
			if (this.historyIndex < this.commandHistory.length - 1) {
				this.historyIndex++;
				this.currentCommand = this.commandHistory[this.historyIndex];
			} else {
				this.historyIndex = this.commandHistory.length;
				this.currentCommand = '';
			}
		},
		showHelp(commandName) {
			if (commandName) {
				const cmd = this.commands[commandName];
				if (cmd) {
					this.output.push({
						type: 'output',
						text: `Help for ${commandName}:\nDescription: ${cmd.description}\nUsage: ${cmd.usage}`
					});
					return;
				}
				this.showError(`Command "${commandName}" not found.`);
				return;
			}

			const helpText = [
				'Available commands:',
				...Object.entries(this.commands).map(
					([name, cmd]) => `  ${name.padEnd(12)} - ${cmd.description}`
				),
				'',
				'For more info: help <command>'
			];

			this.showFormattedText(helpText);
		},
		showDetailedAbout() {
			const { name, title, specialties, bio, languages } = this.personalData;

			const aboutText = [
				`=== ${name.toUpperCase()} ===`,
				`Title: ${title}`,
				`Specialties: ${specialties.join(', ')}`,
				'',
				`BIO:`,
				bio,
				'',
				`Languages:`,
				...languages.map(lang => `  ${lang.name}: ${lang.level}`),
				'',
				`Explore my skills with:`,
				`- skills - My technical skills`,
				`- tools - My work environment`,
				`- timeline - My professional journey`
			];

			this.showFormattedText(aboutText);
		},
		showSkills(category) {
			if (!category) {
				const categories = Object.keys(this.skillsData);
				this.output.push({
					type: 'output',
					text: ['Available skill categories:', ...categories.map(
						cat => `- ${cat} (${this.skillsData[cat].items.length} skills)`
					)].join('\n')
				});
				return;
			}

			const categoryData = this.skillsData[category.toLowerCase()];
			if (!categoryData) {
				this.showError(`Category "${category}" not found.`);
				return;
			}

			const skillsText = [
				`=== ${categoryData.title.toUpperCase()} ===`,
				...categoryData.items.map(item => {
					const stars = '★'.repeat(item.level) + '☆'.repeat(5 - item.level);
					return `${item.name.padEnd(15)} ${stars} (${item.years} years)`;
				})
			];

			this.showFormattedText(skillsText);
		},
		showTools() {
			const toolsText = ['=== MY TOOLS ==='];

			this.toolsData.forEach(group => {
				toolsText.push(`\n${group.category}:`);
				toolsText.push(...group.items.map(item => `  - ${item}`));
			});

			this.showFormattedText(toolsText);
		},
		showProfessionalExperience() {
			const expText = ['=== PROFESSIONAL EXPERIENCE ==='];

			this.experienceData.forEach((exp, index) => {
				expText.push(
					`\n${index + 1}. ${exp.position} @ ${exp.company} (${exp.period})`,
					`Technologies: ${exp.stack.join(', ')}`,
					`Achievements:`,
					...exp.achievements.map(ach => `  • ${ach}`)
				);
			});

			this.showFormattedText(expText);
		},
		listProjects() {
			const projectList = ['My available projects:', ...Object.keys(this.projects).map(
				key => `- ${key}: ${this.projects[key].name} (${this.projects[key].year})`
			)];
			this.output.push({
				type: 'output',
				text: projectList.join('\n')
			});
		},
		showProject(projectId) {
			if (!projectId) {
				this.showError('Usage: show <project_id>\nType "projects" for full list');
				return;
			}

			const project = this.projects[projectId];
			if (!project) {
				this.showError(`Project "${projectId}" not found. Type "projects" for list.`);
				return;
			}

			const projectDetails = [
				`=== ${project.name.toUpperCase()} ===`,
				`Year: ${project.year}`,
				`Description: ${project.description}`,
				'',
				`Technologies: ${project.technologies.join(', ')}`,
				'',
				'Features:',
				...project.features.map(feat => `  • ${feat}`),
				'',
				`Link: ${project.link}`
			];

			this.output.push({
				type: 'output',
				text: projectDetails.join('\n')
			});
		},
		showRandomProject() {
			const projectIds = Object.keys(this.projects);
			if (projectIds.length === 0) {
				this.showError('No projects available');
				return;
			}

			const randomId = projectIds[Math.floor(Math.random() * projectIds.length)];
			this.output.push({
				type: 'output',
				text: `Random project selected: ${this.projects[randomId].name}`
			});
			this.showProject(randomId);
		},
		showError(message) {
			this.output.push({
				type: 'output',
				text: message,
				color: 'text-red-400'
			});
		},
		startInteractiveTimeline() {
			this.isTimelineActive = true;
			this.currentTimelineStep = 0;

			if (window.innerWidth < 768) {
				this.showNextTimelineStep();
				return;
			}

			this.output.push({
				type: 'output',
				text: '=== INTERACTIVE TIMELINE ===\n' +
					(window.innerWidth < 768 ? 'Swipe to continue...' : 'Press any key to continue...'),
				color: 'text-blue-400'
			});

			if (window.innerWidth < 768) {
				this.$refs.terminalContent.addEventListener('touchstart', this.handleMobileTimelineNavigation);
			}
		},

		handleMobileTimelineNavigation(e) {
			if (this.isTimelineActive) {
				e.preventDefault();
				this.showNextTimelineStep();
			}
		},

		beforeDestroy() {
			if (this.$refs.terminalContent) {
				this.$refs.terminalContent.removeEventListener('touchstart', this.handleMobileTimelineNavigation);
			}
		},
		showNextTimelineStep() {
			if (!this.timelineSections || this.currentTimelineStep >= this.timelineSections.length) {
				this.isTimelineActive = false;
				this.output.push({
					type: 'output',
					text: 'Timeline complete. Type "help" to see available commands.',
					color: 'text-blue-400'
				});
				return;
			}

			const section = this.timelineSections[this.currentTimelineStep];
			this.output.push({
				type: 'output',
				text: `\n${section.title}\n${section.content}`,
			});

			this.currentTimelineStep++;
		},

		handleTimelineNavigation(e) {
			if (this.isTimelineActive && e.key.length === 1) {
				this.showNextTimelineStep();
			}
		},
		showContactDetails() {
			const { email, website, github, linkedin } = this.personalData;

			const contactText = [
				'=== CONTACT DETAILS ===',
				`Email: ${email}`,
				`Portfolio: ${website}`,
				`GitHub: ${github}`,
				`LinkedIn: ${linkedin}`
			];

			this.showFormattedText(contactText);
		},
		changeTheme(theme) {
			const themes = {
				dark: {
					bg: 'bg-zinc-900',
					text: 'text-zinc-100',
					header: 'bg-zinc-800',
					title: 'text-zinc-400'
				},
				light: {
					bg: 'bg-zinc-100',
					text: 'text-zinc-900',
					header: 'bg-zinc-200',
					title: 'text-zinc-600'
				}
			};

			if (!theme || !themes[theme]) {
				this.showError('Usage: theme <dark|light>');
				return;
			}

			gsap.to(this.$refs.terminalContainer, {
				backgroundColor: theme === 'dark' ? '#111827' : '#f3f4f6',
				color: theme === 'dark' ? '#f3f4f6' : '#111827',
				duration: 0.5,
				onComplete: () => {
					const selectedTheme = themes[theme];
					this.currentTheme = selectedTheme.bg;
					this.textColor = selectedTheme.text;
					this.headerClass = selectedTheme.header;
					this.titleClass = selectedTheme.title;
					this.contentClass = selectedTheme.bg;

					this.showFormattedText(
						`${theme} theme activated`
					);
				}
			});
		},
		clearTerminal() {
			gsap.to(this.$refs.outputLines, {
				opacity: 0,
				y: -20,
				duration: 0.3,
				stagger: 0.05,
				onComplete: () => {
					this.output = [];
				}
			});
		},
		showFormattedText(lines, color = null) {
			const text = Array.isArray(lines) ? lines.join('\n') : lines;
			this.output.push({
				type: 'output',
				text,
				color: color || this.textColor
			});
			this.scrollToBottom();
		},
		connectPlatform(platform) {
			if (!platform) {
				this.showFormattedText(
					['Available platforms:', ...Object.keys(this.contactMethods).map(
						p => `  ${p.padEnd(10)} - ${this.contactMethods[p].description}`
					)]
				);
				return;
			}

			const method = this.contactMethods[platform.toLowerCase()];
			if (!method) {
				this.showError(`Platform "${platform}" not supported.`);
				return;
			}

			if (method.action === 'link') {
				this.showFormattedText(
					`Opening ${method.name}... ${method.link}`
				);
				window.open(method.link, '_blank');
			} else if (method.action === 'copy') {
				navigator.clipboard.writeText(method.value);
				this.showFormattedText(
					`${method.value} copied to clipboard`
				);
			}
		},
	}
};
</script>

<style>
/* Custom scrollbar */
::-webkit-scrollbar {
	width: 8px;
	height: 8px;
}

::-webkit-scrollbar-track {
	background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
	background: rgba(255, 255, 255, 0.2);
	border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
	background: rgba(255, 255, 255, 0.3);
}

/* Light theme specific styles */
.bg-zinc-100 ::-webkit-scrollbar-track {
	background: rgba(0, 0, 0, 0.05);
}

.bg-zinc-100 ::-webkit-scrollbar-thumb {
	background: rgba(0, 0, 0, 0.2);
}

.bg-zinc-100 ::-webkit-scrollbar-thumb:hover {
	background: rgba(0, 0, 0, 0.3);
}

/* New line entry animation */
.terminal-line {
	will-change: transform, opacity;
}
</style>