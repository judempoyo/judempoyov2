<template>
  <div 
    class="font-mono text-gray-100 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto min-h-100 flex flex-col cursor-text transition-colors duration-300"
    :class="currentTheme"
    @click="focusInput"
    ref="terminalContainer"
  >
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
    <div 
      class="flex-1 p-4 overflow-y-auto text-sm leading-relaxed"
      ref="terminalContent"
      :class="contentClass"
    >
      <div v-for="(line, index) in output" :key="index" class="mb-1 break-words" ref="outputLines">
        <span v-if="line.type === 'command'" class="text-green-400 mr-2">$ {{ line.text }}</span>
        <span v-else class="whitespace-pre-wrap" :class="line.color || textColor">{{ line.text }}</span>
      </div>
      <div class="flex items-center">
        <span class="text-green-400 mr-2">$</span>
        <input
          v-model="currentCommand"
          @keyup.enter="executeCommand"
          @keyup.up="historyUp"
          @keyup.down="historyDown"
          ref="commandInput"
          class="flex-1 bg-transparent border-none outline-none caret-gray-100"
          :class="textColor"
          spellcheck="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { sharedData } from '@/data/shared-data.js';



export default {
  data() {
    return {
      currentCommand: '',
      output: [
        { type: 'output', text: 'Bienvenue dans mon portfolio interactif.' },
        { type: 'output', text: 'Tapez "help" pour explorer mes commandes.', color: 'text-blue-400' }
      ],
      commandHistory: [],
      historyIndex: -1,
      currentTheme: 'bg-gray-900',
      textColor: 'text-gray-100',
      headerClass: 'bg-gray-800',
      titleClass: 'text-gray-400',
      contentClass: 'bg-gray-900',
      isTimelineActive: false,
      currentTimelineStep: 0,
      commands: {
        help: {
          description: 'Affiche toutes les commandes disponibles',
          usage: 'help [command]',
          execute: (args) => this.showHelp(args[0])
        },
        about: {
          description: 'Présentation détaillée et compétences',
          usage: 'about',
          execute: () => this.showDetailedAbout()
        },
        skills: {
          description: 'Mes compétences techniques par catégorie',
          usage: 'skills [frontend|backend|devops|design]',
          execute: (args) => this.showSkills(args[0])
        },
        tools: {
          description: 'Mes outils et environnement de travail',
          usage: 'tools',
          execute: () => this.showTools()
        },
        projects: {
          description: 'Liste de mes projets principaux',
          usage: 'projects',
          execute: () => this.listProjects()
        },
        show: {
          description: 'Détails d\'un projet spécifique',
          usage: 'show <project_name>',
          execute: (args) => this.showProjectDetails(args[0])
        },
        random: {
          description: 'Affiche un projet aléatoire',
          usage: 'random',
          execute: () => this.showRandomProject()
        },
        timeline: {
          description: 'Mon parcours chronologique interactif',
          usage: 'timeline',
          execute: () => this.startInteractiveTimeline()
        },
        experience: {
          description: 'Mes expériences professionnelles',
          usage: 'experience',
          execute: () => this.showProfessionalExperience()
        },
        contact: {
          description: 'Mes coordonnées professionnelles',
          usage: 'contact',
          execute: () => this.showContactDetails()
        },
        theme: {
          description: 'Change le thème (dark/light)',
          usage: 'theme <dark|light>',
          execute: (args) => this.changeTheme(args[0])
        },
        clear: {
          description: 'Efface le terminal',
          usage: 'clear',
          execute: () => this.clearTerminal()
        },
				 connect: {
          description: 'Me contacter directement sur une plateforme',
          usage: 'connect <whatsapp|github|linkedin|email>',
          execute: (args) => this.connectPlatform(args[0])
        },
      },
			 personalData: sharedData.personal,
      skillsData: sharedData.skills,
      toolsData: sharedData.tools,
      projects: sharedData.projects,
      timelineSections: sharedData.timeline,
      experienceData: sharedData.experience,
      contactMethods: sharedData.contactMethods,
     
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
        this.showError(`Commande inconnue: ${command}. Tapez "help" pour la liste.`);
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
            text: `Aide pour ${commandName}:\nDescription: ${cmd.description}\nUsage: ${cmd.usage}`,
            color: 'text-yellow-400'
          });
          return;
        }
        this.showError(`Commande "${commandName}" introuvable.`);
        return;
      }

      const helpText = [
        'Commandes disponibles:',
        ...Object.entries(this.commands).map(
          ([name, cmd]) => `  ${name.padEnd(12)} - ${cmd.description}`
        ),
        '',
        'Pour plus d\'aide: help <command>'
      ];
      
      this.showFormattedText(helpText, 'text-cyan-400');
    },
    showDetailedAbout() {
      const { name, title, specialties, bio, languages } = this.personalData;
      
      const aboutText = [
        `=== ${name.toUpperCase()} ===`,
        `Titre: ${title}`,
        `Spécialités: ${specialties.join(', ')}`,
        '',
        `BIO:`,
        bio,
        '',
        `Langues:`,
        ...languages.map(lang => `  ${lang.name}: ${lang.level}`),
        '',
        `Explorez mes compétences avec:`,
        `- skills - Mes compétences techniques`,
        `- tools - Mon environnement de travail`,
        `- timeline - Mon parcours professionnel`
      ];
      
      this.showFormattedText(aboutText, 'text-purple-400');
    },
    showSkills(category) {
      if (!category) {
        const categories = Object.keys(this.skillsData);
        this.showFormattedText(
          [
            'Catégories de compétences disponibles:',
            ...categories.map(cat => `  - ${cat}`),
            '',
            'Usage: skills <category> pour les détails'
          ],
          'text-blue-400'
        );
        return;
      }
      
      const categoryData = this.skillsData[category.toLowerCase()];
      if (!categoryData) {
        this.showError(`Catégorie "${category}" introuvable.`);
        return;
      }
      
      const skillsText = [
        `=== ${categoryData.title.toUpperCase()} ===`,
        ...categoryData.items.map(item => {
          const stars = '★'.repeat(item.level) + '☆'.repeat(5 - item.level);
          return `${item.name.padEnd(15)} ${stars} (${item.years} an(s))`;
        })
      ];
      
      this.showFormattedText(skillsText, 'text-green-400');
    },
    showTools() {
      const toolsText = ['=== MES OUTILS ==='];
      
      this.toolsData.forEach(group => {
        toolsText.push(`\n${group.category}:`);
        toolsText.push(...group.items.map(item => `  - ${item}`));
      });
      
      this.showFormattedText(toolsText, 'text-orange-400');
    },
    showProfessionalExperience() {
      const expText = ['=== EXPÉRIENCE PROFESSIONNELLE ==='];
      
      this.experienceData.forEach((exp, index) => {
        expText.push(
          `\n${index + 1}. ${exp.position} @ ${exp.company} (${exp.period})`,
          `Technologies: ${exp.stack.join(', ')}`,
          `Réalisations:`,
          ...exp.achievements.map(ach => `  • ${ach}`)
        );
      });
      
      this.showFormattedText(expText, 'text-blue-400');
    },
    listProjects() {
      const projectList = [
        'Mes projets principaux:',
        ...Object.keys(projects).map(
          key => `  ${key.padEnd(12)} - ${projects[key].name}`
        ),
        '',
        'Pour les détails: show <project_name>'
      ];
      
      this.showFormattedText(projectList, 'text-purple-400');
    },
    showProjectDetails(projectKey) {
      if (!projectKey) {
        this.showError('Usage: show <project_name>');
        return;
      }
      
      const project = projects[projectKey];
      if (!project) {
        this.showError(`Projet "${projectKey}" introuvable. Tapez "projects" pour la liste.`);
        return;
      }
      
      const projectText = [
        `=== ${project.name.toUpperCase()} ===`,
        `Année: ${project.year}`,
        `Description: ${project.description}`,
        '',
        `Technologies:`,
        `  ${project.technologies.join(', ')}`,
        '',
        `Fonctionnalités:`,
        ...project.features?.map(feat => `  • ${feat}`) || ['  Aucune information supplémentaire'],
        '',
        `Lien: ${project.link}`
      ];
      
      this.showFormattedText(projectText, 'text-green-400');
    },
    showRandomProject() {
      const keys = Object.keys(projects);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      
      this.output.push({
        type: 'output',
        text: 'Projet aléatoire sélectionné:',
        color: 'text-yellow-400'
      });
      
      this.showProjectDetails(randomKey);
    },
    startInteractiveTimeline() {
      this.isTimelineActive = true;
      this.currentTimelineStep = 0;
      
      this.showFormattedText(
        ['=== PARCOURS INTERACTIF ===', 'Appuyez sur une touche pour continuer...'],
        'text-cyan-400'
      );
      
      this.showNextTimelineStep();
    },
    showNextTimelineStep() {
      if (this.currentTimelineStep >= timelineSections.length) {
        this.isTimelineActive = false;
        this.showFormattedText(
          ['Fin de la chronologie.', 'Tapez "help" pour voir les commandes disponibles.'],
          'text-blue-400'
        );
        return;
      }
      
      const section = timelineSections[this.currentTimelineStep];
      this.showFormattedText(
        [`\n${section.title}`, section.content],
        'text-purple-400'
      );
      
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
        '=== COORDONNÉES ===',
        `Email: ${email}`,
        `Portfolio: ${website}`,
        `GitHub: ${github}`,
        `LinkedIn: ${linkedin}`
      ];
      
      this.showFormattedText(contactText, 'text-blue-400');
    },
    changeTheme(theme) {
      const themes = {
        dark: {
          bg: 'bg-gray-900',
          text: 'text-gray-100',
          header: 'bg-gray-800',
          title: 'text-gray-400'
        },
        light: {
          bg: 'bg-gray-100',
          text: 'text-gray-900',
          header: 'bg-gray-200',
          title: 'text-gray-600'
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
            `Thème ${theme} activé`,
            theme === 'dark' ? 'text-green-400' : 'text-blue-600'
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
    showFormattedText(lines, color = 'text-gray-100') {
      const text = Array.isArray(lines) ? lines.join('\n') : lines;
      this.output.push({ type: 'output', text, color });
      this.scrollToBottom();
    },
    showError(message) {
      this.showFormattedText(message, 'text-red-400');
    },
		connectPlatform(platform) {
      if (!platform) {
        this.showFormattedText(
          ['Plateformes disponibles:', ...Object.keys(this.contactMethods).map(
            p => `  ${p.padEnd(10)} - ${this.contactMethods[p].description}`
          )],
          'text-yellow-400'
        );
        return;
      }

      const method = this.contactMethods[platform.toLowerCase()];
      if (!method) {
        this.showError(`Plateforme "${platform}" non supportée.`);
        return;
      }

      if (method.action === 'link') {
        this.showFormattedText(
          `Ouverture de ${method.name}... ${method.link}`,
          'text-green-400'
        );
        window.open(method.link, '_blank');
      } else if (method.action === 'copy') {
        navigator.clipboard.writeText(method.value);
        this.showFormattedText(
          `${method.value} copié dans le presse-papiers`,
          'text-green-400'
        );
      }
    },
  }
};
</script>

<style>
/* Barre de défilement personnalisée */
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

/* Styles spécifiques au thème clair */
.bg-gray-100 ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
}

.bg-gray-100 ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
}

.bg-gray-100 ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

/* Animation d'entrée pour les nouvelles lignes */
.terminal-line {
  will-change: transform, opacity;
}
</style>