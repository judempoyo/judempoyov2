<template>
  <div class="terminal-container" @click="focusInput">
    <div class="terminal-header">
      <div class="header-buttons">
        <span class="close-btn"></span>
        <span class="minimize-btn"></span>
        <span class="maximize-btn"></span>
      </div>
      <div class="header-title">Terminal</div>
    </div>
    
    <div class="terminal-content" ref="terminalContent">
      <div v-for="(line, index) in output" :key="index" class="terminal-line">
        <span v-if="line.type === 'command'" class="prompt">$ {{ line.text }}</span>
        <span v-else class="output">{{ line.text }}</span>
      </div>
      <div class="terminal-input">
        <span class="prompt">$</span>
        <input
          v-model="currentCommand"
          @keyup.enter="executeCommand"
          @keyup.up="historyUp"
          @keyup.down="historyDown"
          ref="commandInput"
          class="command-input"
          spellcheck="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
		
    return {
      currentCommand: '',
      output: [
        { type: 'output', text: 'Bienvenue dans le terminal de mon portfolio.' },
        { type: 'output', text: 'Tapez "help" pour voir les commandes disponibles.' }
      ],
      commandHistory: [],
      historyIndex: -1,
      commands: {
        help: {
          description: 'Affiche toutes les commandes disponibles',
          execute: () => this.showHelp()
        },
        about: {
          description: 'Affiche des informations sur moi',
          execute: () => this.showAbout()
        },
        projects: {
          description: 'Liste mes projets',
          execute: () => this.showProjects()
        },
        clear: {
          description: 'Efface le terminal',
          execute: () => this.clearTerminal()
        },
        contact: {
          description: 'Affiche mes informations de contact',
          execute: () => this.showContact()
        }
      }
    }
  },
  mounted() {
    this.focusInput()
  },
  methods: {
    focusInput() {
      this.$refs.commandInput.focus()
    },
    executeCommand() {
			
      const cmd = this.currentCommand.trim()
      if (!cmd) return
      
      // Ajouter la commande à l'historique
      this.commandHistory.push(cmd)
      this.historyIndex = this.commandHistory.length
      
      // Afficher la commande
      this.output.push({ type: 'command', text: cmd })
      
      // Exécuter la commande
      const [command, ...args] = cmd.split(' ')
      this.processCommand(command.toLowerCase(), args)
      
      // Réinitialiser l'entrée
      this.currentCommand = ''
      
      // Faire défiler vers le bas
      this.$nextTick(() => {
        this.$refs.terminalContent.scrollTop = this.$refs.terminalContent.scrollHeight
      })
    },
    processCommand(command, args) {
      if (this.commands[command]) {
        this.commands[command].execute(args)
      } else {
        this.output.push({ 
          type: 'output', 
          text: `Commande non reconnue: ${command}. Tapez "help" pour la liste des commandes.`
        })
      }
    },
    historyUp() {
      if (this.commandHistory.length === 0) return
      
      if (this.historyIndex > 0) {
        this.historyIndex--
        this.currentCommand = this.commandHistory[this.historyIndex]
      }
    },
    historyDown() {
      if (this.historyIndex < this.commandHistory.length - 1) {
        this.historyIndex++
        this.currentCommand = this.commandHistory[this.historyIndex]
      } else {
        this.historyIndex = this.commandHistory.length
        this.currentCommand = ''
      }
    },
    showHelp() {
      const helpText = ['Commandes disponibles:', ...Object.keys(this.commands).map(
        cmd => `  ${cmd.padEnd(10)} - ${this.commands[cmd].description}`
      )]
      this.output.push({ type: 'output', text: helpText.join('\n') })
    },
    showAbout() {
      const aboutText = [
        'À propos de moi:',
        '  Nom: Votre Nom',
        '  Rôle: Développeur Full Stack',
        '  Spécialités: Vue.js, Node.js, UI/UX',
        '  Passion: Créer des expériences utilisateur exceptionnelles'
      ]
      this.output.push({ type: 'output', text: aboutText.join('\n') })
    },
    showProjects() {
      const projects = [
        'Mes projets:',
        '  1. Application E-commerce - Vue.js, Node.js',
        '  2. Dashboard Analytique - React, D3.js',
        '  3. Réseau Social - React Native, GraphQL'
      ]
      this.output.push({ type: 'output', text: projects.join('\n') })
    },
    clearTerminal() {
      this.output = []
    },
    showContact() {
      const contact = [
        'Contact:',
        '  Email: contact@example.com',
        '  GitHub: github.com/votreprofil',
        '  LinkedIn: linkedin.com/in/votreprofil'
      ]
      this.output.push({ type: 'output', text: contact.join('\n') })
    }
  }
}
</script>

<style scoped>
.terminal-container {
  font-family: 'Courier New', monospace;
  background-color: #1e1e1e;
  color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  max-width: 1000px;
  margin: 0 auto;
  height: 500px;
  display: flex;
  flex-direction: column;
}

.terminal-header {
  background-color: #3a3a3a;
  padding: 8px 12px;
  display: flex;
  align-items: center;
}

.header-buttons {
  display: flex;
  gap: 8px;
}

.header-buttons span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.close-btn { background-color: #ff5f56; }
.minimize-btn { background-color: #ffbd2e; }
.maximize-btn { background-color: #27c93f; }

.header-title {
  flex-grow: 1;
  text-align: center;
  font-size: 14px;
  color: #b3b3b3;
}

.terminal-content {
  flex-grow: 1;
  padding: 15px;
  overflow-y: auto;
  font-size: 14px;
  line-height: 1.5;
}

.terminal-line {
  margin-bottom: 5px;
  word-break: break-word;
}

.prompt {
  color: #5ff967;
  margin-right: 8px;
}

.output {
  white-space: pre-wrap;
}

.terminal-input {
  display: flex;
  align-items: center;
}

.command-input {
  flex-grow: 1;
  background: transparent;
  border: none;
  color: #f0f0f0;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  outline: none;
  caret-color: #f0f0f0;
}

/* Barre de défilement */
.terminal-content::-webkit-scrollbar {
  width: 8px;
}

.terminal-content::-webkit-scrollbar-track {
  background: #2a2a2a;
}

.terminal-content::-webkit-scrollbar-thumb {
  background: #5a5a5a;
  border-radius: 4px;
}

.terminal-content::-webkit-scrollbar-thumb:hover {
  background: #7a7a7a;
}
</style>