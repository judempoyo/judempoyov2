export const sharedData = {
  personal: {
    name: "Jude Mpoyo",
    title: "Backend Developer",
    specialties: ["Laravel", "PHP", "VueJS", "Cloud Architecture"],
    shortBio: `
    Passionate about creating dynamic and responsive
      applications. Let's build
      something amazing together!.`,
    location: "Kolwezi, DRC",
    email: "mpoyojude0@gmail.com",
    phone: "+243975889135",
    website: "https://judempoyo.dev",
    github: "github.com/judempoyo",
    linkedin: "linkedin.com/in/judempoyo",
    bio: `
    
Passionate developer with 7 years of experience in building complex web applications.
Expert in problem solving and performance optimization.
Philosophy: "Code is logical poetry".`,
    languages: [
      { name: "French", level: "Native" },
      { name: "English", level: "Intermediate" },
    ]
  },

  skills: {
    frontend: {
      title: "Frontend",
      items: [
        { name: "Vue.js", level: 3, years: 0 },
        { name: "TailwindCSS", level: 4, years: 2 },
        { name: "Livewire", level: 3, years: 1 },
        { name: "Flutter", level: 2, years: 1 }
      ]
    },
    backend: {
      title: "Backend",
      items: [
        { name: "PHP", level: 5, years: 3 },
        { name: "Laravel", level: 4, years: 2 },
        { name: "C++", level: 3, years: 1 },
        { name: "REST API", level: 3, years: 1 },
        { name: "Filament", level: 3, years: 1 },
        { name: "Firebase", level: 2, years: 1 },
        { name: "Supabase", level: 1, years: 0 },
      ]
    },
    devops: {
      title: "DevOps & Tools",
      items: [
        { name: "Docker", level: 1, years: 0 },
        { name: "GIT", level: 4, years: 3 },
        { name: "GitHub", level: 3, years: 2 },
        { name: "Postman", level: 2, years: 0 },
        { name: "Trello", level: 2, years: 0 },
        { name: "VS Code", level: 4, years: 5 },
      ]
    }
  },
  
  tools: [
    {
      category: "Editors & IDE",
      items: ["VS Code", "WebStorm", "Android Studio"]
    },
    {
      category: "Collaboration",
      items: ["Git/GitHub", "Figma"]
    },
    {
      category: "Environment",
      items: ["Linux (Ubuntu)", "Windows"]
    },
    {
      category: "Productivity",
      items: ["Notion", "Trello"]
    }
  ],
  
  experience: [
    {
      position: "Lead Developer",
      company: "TechInnovation",
      period: "2021 - Present",
      achievements: [
        "Leading a team of 8 developers",
        "Designed architecture for a SaaS platform",
        "Performance optimization (40% load time reduction)"
      ],
      stack: ["Vue 3", "Node.js", "AWS", "Microservices"]
    },
    {
      position: "Full-Stack Developer",
      company: "WebAgency",
      period: "2018 - 2021",
      achievements: [
        "Developed 15+ client applications",
        "Implemented CI/CD practices",
        "Trained junior developers in best practices"
      ],
      stack: ["React", "Express.js", "MongoDB"]
    }
  ],

  projects: {
    portfolio: {
      name: "Terminal Portfolio",
      description: "Interactive portfolio with custom terminal",
      technologies: ["Vue 3", "Tailwind", "GSAP", "JS ES6+"],
      link: "https://github.com/judempoyo/terminal-portfolio",
      year: 2023,
      features: [
        "Custom command system",
        "Smooth animations with GSAP",
        "Interactive light/dark theme",
        "Timeline presentation"
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    ecommerce: {
      name: "E-commerce Platform",
      description: "Complete solution with inventory and payment management",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com/judempoyo/ecommerce-platform",
      year: 2022,
      features: [
        "Custom order system",
        "Smooth animations with GSAP",
        "Interactive light/dark theme",
        "Timeline presentation"
      ],
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    dashboard: {
      name: "Analytics Dashboard",
      description: "Comprehensive data visualization and reporting tool",
      technologies: ["PHP", "Laravel", "Vue.js"],
      link: "https://github.com/judempoyo/analytics-dashboard",
      year: 2022,
      features: [
        "Custom command system",
        "Smooth animations with GSAP",
        "Interactive light/dark theme",
        "Timeline presentation"
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
  },

  timeline: [
    {
      title: "🎓 Education",
      content: "Master's in Software Engineering - Polytechnic School (2015-2018)\nSpecialization in distributed architectures and UX design"
    },
    {
      title: "💼 Career Start",
      content: "Frontend Developer at WebSolutions (2018-2020)\n• Admin interface redesign\n• Migration to Vue.js\n• Team training"
    },
    {
      title: "🚀 Key Project",
      content: "Lead Developer on BankApp (2020-2022)\n• Microservices architecture\n• Financial security\n• Team of 6 developers"
    },
    {
      title: "🏆 Recognition",
      content: "Technical Innovation Award 2022\nOpen Source Contributor of the Year 2021"
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
      description: "Contact me directly on WhatsApp",
      action: "link",
      link: "https://wa.me/243975889135"
    },
    github: {
      name: "GitHub",
      description: "See my projects on GitHub",
      action: "link",
      link: "https://github.com/judempoyo"
    },
    linkedin: {
      name: "LinkedIn",
      description: "Contact me on LinkedIn",
      action: "link",
      link: "https://linkedin.com/in/judempoyo"
    },
    email: {
      name: "Email",
      description: "Copy my email address",
      action: "copy",
      value: "mpoyojude0@gmail.com"
    }
  },
  
  navLinks: [
    { id: 'home', text: 'Home' },
    { id: 'projects', text: 'Projects' },
    { id: 'about', text: 'About' },
    { id: 'contact', text: 'Contact' },
  ]
};