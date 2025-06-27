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
        { name: "Angular", level: 2, years: 0 },
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
        { name: "TypeScript", level: 2, years: 0 },
        { name: "C++", level: 3, years: 1 },
        { name: "REST API", level: 3, years: 1 },
        { name: "Filament", level: 3, years: 1 },
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

        { name: "Firebase", level: 2, years: 1 },
        { name: "Supabase", level: 1, years: 0 },
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
      "name": "Terminal/Graphical Portfolio",
      "description": "Portfolio with selectable visual style (terminal or graphical)",
      "technologies": ["Vue 3", "Tailwind CSS"],
      "link": "",
      "year": 2025,
      "features": [
        "Terminal and graphical modes",
        "Customizable visual theme",
        "Modern responsive design"
      ],
      "image": ""
    },
    phpmvstarter: {
      "name": "PHP MV Starter",
      "description": "Starter kit with ready-to-use authentication system",
      "technologies": ["PHP 8.2+", "Eloquent", "Dotenv", "Tailwind CSS v4", "PostCSS"],
      "link": "",
      "year": 2025,
      "features": [
        "Authentication system",
        "Clean MVC structure",
        "Tailwind CSS integration"
      ],
      "image": ""
    },
    ecom: {
      "name": "Ecom Platform",
      "description": "E-commerce platform for selling products (work in progress)",
      "technologies": ["Laravel", "Livewire", "Filament"],
      "link": "",
      "year": 2025,
      "features": [
        "Product management",
        "Admin dashboard (Filament)",
        "Planned payment integration"
      ],
      "image": ""
    },
    jumpdatatable: {
      "name": "Jump Datatable",
      "description": "Composer package to easily add dynamic tables in PHP projects",
      "technologies": ["PHP", "Tailwind CSS", "Bootstrap", "JavaScript"],
      "link": "https://github.com/judempoyo/jumpDatatable",
      "year": 2024,
      "features": [
        "Quick integration",
        "Auto-pagination",
        "Column sorting",
        "Data search",
        "Responsive design",
        "Easy customization"
      ],
      "image": ""
    },
    gestion_pharmacie: {
      "name": "Pharmacy Management",
      "description": "Pharmacy management app using PHP MVC architecture",
      "technologies": ["PHP", "Tailwind CSS"],
      "link": "",
      "year": 2024,
      "features": [
        "Product and stock management",
        "Sales tracking",
        "Clean MVC structure"
      ],
      "image": ""
    },
    jumptodo: {
      "name": "Jump Todo",
      "description": "Task management app with Pomodoro timer",
      "technologies": ["Angular", "TypeScript", "Tailwind CSS"],
      "link": "",
      "year": 2025,
      "features": [
        "Task lists",
        "Pomodoro integration",
        "Responsive UI"
      ],
      "image": ""
    },
    jumpmanagment: {
      "name": "Jump Management",
      "description": "Full management app for hardware stores or similar businesses",
      "technologies": ["Laravel", "Livewire", "Filament"],
      "link": "",
      "year": 2025,
      "features": [
        "Inventory management",
        "Sales dashboard",
        "User roles and permissions"
      ],
      "image": ""
    },
    trelloboardclone: {
      "name": "Trello Board Clone",
      "description": "Task management board inspired by Trello",
      "technologies": ["Angular", "Angular Material", "Tailwind CSS"],
      "link": "",
      "year": 2025,
      "features": [
        "Board and task management",
        "Task filters",
        "Favorite boards",
        "Planned animations",
        "Planned authentication"
      ],
      "image": ""
    },
    jumpapi: {
      "name": "Jump API",
      "description": "REST API for user and product management with CRUD operations",
      "technologies": ["PHP", "MySQL", "PDO"],
      "link": "",
      "year": 2025,
      "features": [
        "User and product CRUD",
        "Pagination support",
        "Dynamic model creation",
        "JSON request/response"
      ],
      "image": ""
    },
    appimmo: {
      "name": "App Immo",
      "description": "Mobile app for a fictional real estate agency",
      "technologies": ["Flutter"],
      "link": "",
      "year": 2025,
      "features": [
        "Property listings",
        "Contact management",
        "Mobile optimized UI"
      ],
      "image": ""
    },
    learn2code: {
      "name": "Learn2Code",
      "description": "Mobile app to help beginners learn programming",
      "technologies": ["Flutter"],
      "link": "",
      "year": 2025,
      "features": [
        "Beginner-friendly lessons",
        "Interactive quizzes",
        "Progress tracking"
      ],
      "image": ""
    },
    laravel12angular19starter: {
      "name": "Laravel + Angular Starter",
      "description": "Starter kit combining Laravel and Angular 19 (in progress)",
      "technologies": ["Laravel", "Angular 19"],
      "link": "",
      "year": 2025,
      "features": [
        "Basic authentication (planned)",
        "REST API structure",
        "Angular frontend setup"
      ],
      "image": ""
    },
    agriproject: {
      "name": "Agri Project",
      "description": "Online sales platform for agricultural products with stock management",
      "technologies": ["Laravel"],
      "link": "",
      "year": 2025,
      "features": [
        "Stock management for farmers",
        "Online product sales",
        "Admin interface"
      ],
      "image": ""
    }
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