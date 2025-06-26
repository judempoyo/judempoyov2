export const sharedData = {
  personal: {
        name: "Jude mpoyo",
        title: "Architecte Logiciel Full-Stack",
        specialties: ["Vue.js/React", "Node.js", "UX Design", "Cloud Architecture"],
        shortBio: "Je crée des solutions web innovantes et performantes.",
        location: "Lyon, France",
        email: "alex.martin@protonmail.com",
        website: "https://alexmartin.dev",
        github: "github.com/alex-martin-dev",
        linkedin: "linkedin.com/in/alexmartin-dev",
        bio: `
Développeur passionné avec 7 ans d'expérience dans la création d'applications web complexes.
Expert en résolution de problèmes et en optimisation des performances.
Philosophie : "Le code est de la poésie logique".`,
        languages: [
          { name: "Français", level: "Natif" },
          { name: "Anglais", level: "Courant (TOEFL 950)" },
          { name: "Espagnol", level: "Intermediaire" }
        ]
      },

  skills:{
        frontend: {
          title: "Frontend",
          items: [
            { name: "Vue.js", level: 5, years: 5 },
            { name: "React", level: 4, years: 3 },
            { name: "TypeScript", level: 5, years: 4 },
            { name: "TailwindCSS", level: 4, years: 3 },
            { name: "GSAP", level: 3, years: 2 }
          ]
        },
        backend: {
          title: "Backend",
          items: [
            { name: "Node.js", level: 5, years: 6 },
            { name: "Python", level: 4, years: 3 },
            { name: "GraphQL", level: 4, years: 3 },
            { name: "REST API", level: 5, years: 5 }
          ]
        },
        devops: {
          title: "DevOps & Cloud",
          items: [
            { name: "Docker", level: 4, years: 3 },
            { name: "AWS", level: 3, years: 2 },
            { name: "CI/CD Pipelines", level: 4, years: 3 }
          ]
        },
        design: {
          title: "UI/UX Design",
          items: [
            { name: "Figma", level: 4, years: 3 },
            { name: "Adobe XD", level: 3, years: 2 },
            { name: "Prototypage", level: 4, years: 3 }
          ]
        }
      },
       tools: [
        {
          category: "Éditeurs & IDE",
          items: ["VS Code", "WebStorm", "Vim"]
        },
        {
          category: "Collaboration",
          items: ["Git/GitHub", "Jira", "Slack", "Figma"]
        },
        {
          category: "Environnement",
          items: ["MacOS (zsh)", "Linux (Ubuntu)", "Windows (WSL2)"]
        },
        {
          category: "Productivité",
          items: ["Notion", "Trello", "Obsidian"]
        }
      ],
      experience: [
        {
          position: "Lead Developer",
          company: "TechInnovation",
          period: "2021 - Présent",
          achievements: [
            "Dirige une équipe de 8 développeurs",
            "Conçu l'architecture d'une plateforme SaaS",
            "Optimisation des performances (réduction de 40% du temps de chargement)"
          ],
          stack: ["Vue 3", "Node.js", "AWS", "Microservices"]
        },
        {
          position: "Développeur Full-Stack",
          company: "WebAgency",
          period: "2018 - 2021",
          achievements: [
            "Développement de 15+ applications client",
            "Mise en place de pratiques CI/CD",
            "Formation des juniors aux bonnes pratiques"
          ],
          stack: ["React", "Express.js", "MongoDB"]
        }
      ],

  projects: {
  portfolio: {
    name: "Terminal Portfolio",
    description: "Portfolio interactif avec terminal personnalisé ",
    technologies: ["Vue 3", "Tailwind", "GSAP", "JS ES6+"],
    link: "https://github.com/votreprofil/terminal-portfolio",
    year: 2023,
    features: [
      "Système de commandes personnalisables",
      "Animations fluides avec GSAP",
      "Thème clair/sombre interactif",
      "Présentation chronologique"
    ],
   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  ecommerce: {
    name: "Plateforme E-commerce",
    description: "Solution complète avec gestion de stocks et paiements",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://github.com/votreprofil/ecommerce-platform",
    year: 2022,
      features: [
      "Système de commandes personnalisables",
      "Animations fluides avec GSAP",
      "Thème clair/sombre interactif",
      "Présentation chronologique"
    ],
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
    dashboard: {
    name: "Dashboard Analytique",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quis quas adipisci molestiae officiis numquam soluta deleniti commodi sequi ipsum, a incidunt voluptatibus quae. Excepturi est at unde nobis minima.",
    technologies: ["PHP", "Laravel", "vuejs"],
    link: "https://github.com/votreprofil/ecommerce-platform",
    year: 2022,
      features: [
      "Système de commandes personnalisables",
      "Animations fluides avec GSAP",
      "Thème clair/sombre interactif",
      "Présentation chronologique"
    ],
   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  
  								

},




  timeline:  [
  {
    title: "🎓 Formation Initiale",
    content: "Master en Ingénierie Logicielle - École Polytechnique (2015-2018)\nSpécialisation en architectures distribuées et UX design"
  },
  {
    title: "💼 Début de Carrière",
    content: "Développeur Frontend chez WebSolutions (2018-2020)\n• Refonte de l'interface admin\n• Migration vers Vue.js\n• Formation des équipes"
  },
  {
    title: "🚀 Projet Phare",
    content: "Lead Developer sur l'application BankApp (2020-2022)\n• Architecture microservices\n• Sécurité financière\n• Équipe de 6 développeurs"
  },
  {
    title: "🏆 Reconnaissance",
    content: "Prix de l'innovation technique 2022\nOpen Source Contributor of the Year 2021"
  }
],

  socialLinks: [
    { 
      icon: "GithubIcon", 
      link: "https://github.com/judempoyo",
      name: "GitHub"
    },
    { 
      icon: "LinkedinIcon", 
      link: "https://linkedin.com/in/judempoyo",
      name: "LinkedIn"
    },
   
  ],
  contactMethods: {
    whatsapp: {
      name: "WhatsApp",
      description: "Me contacter directement sur WhatsApp",
      action: "link",
      link: "https://wa.me/243975889135"
    },
    github: {
      name: "GitHub",
      description: "Voir mes projets sur GitHub",
      action: "link",
      link: "https://github.com/judempoyo"
    },
    linkedin: {
      name: "LinkedIn",
      description: "Me contacter sur LinkedIn",
      action: "link",
      link: "https://linkedin.com/in/judempoyo"
    },
    email: {
      name: "Email",
      description: "Copier mon adresse email",
      action: "copy",
      value: "mpoyojude0@gmail.com"
    }
  }
};