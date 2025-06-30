import type { SharedData } from '@/types';

export const sharedData: SharedData = {
  personal: {
    name: "Jude Mpoyo",
    initials: "JM",
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
  <p class="text-2xl text-zinc-700 dark:text-zinc-300 leading-relaxedc font-bold">
    Freelance Web Developer – PHP Laravel & Vue.js
  </p>

  <p class="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
    I am a freelance developer with 2 years of experience creating modern and intuitive web applications.
    Passionate about clean, well-structured code, I enjoy working on projects that bring real value to users.
  </p>

  <p class="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
    Today, I help businesses, startups, and entrepreneurs develop custom websites and tools tailored to their needs.
    My ambition is to keep growing every day, expand my skills, and contribute to innovative and meaningful projects.
  </p>

  <p class="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
    If you are looking for a dedicated, curious developer committed to bringing your ideas to life, I would be glad to connect with you.
  </p>

`,
    languages: [
      { name: "French", level: "Native" },
      { name: "English", level: "Intermediate" },
    ]
  },

  aboutCards: [
    {
      title: 'Backend Development',
      text: 'Building robust and scalable server-side applications',
      icon: 'TerminalIcon',
      bg: 'bg-blue-100 dark:bg-blue-900/50',
      color: 'text-blue-600 dark:text-blue-400',
      class: 'top-0 left-0 w-48'
    },
    {
      title: 'API Design',
      text: 'Creating efficient and well-documented RESTful/graphQL APIs',
      icon: 'CodeIcon',
      bg: 'bg-indigo-100 dark:bg-indigo-900/50',
      color: 'text-indigo-600 dark:text-indigo-400',
      class: 'top-12 right-0 w-56'
    },
    {
      title: 'Database Optimization',
      text: 'Designing and optimizing SQL/NoSQL database schemas',
      icon: 'DatabaseIcon',
      bg: 'bg-purple-100 dark:bg-purple-900/50',
      color: 'text-purple-600 dark:text-purple-400',
      class: 'bottom-0 left-1/4 w-52'
    },
    /* {
      title: 'DevOps & Deployment',
      text: 'Implementing CI/CD pipelines and cloud infrastructure',
      icon: 'ServerIcon',
      bg: 'bg-teal-100 dark:bg-teal-900/50',
      color: 'text-teal-600 dark:text-teal-400',
      class: 'top-24 left-1/3 w-48'
    } */
  ],
  education: [
    {
      degree: "Degree in Programming",
      institution: "Institut Supérieur de Commerce de Lubumbashi (Graduated 2024)",
      duration: "2022 - 2024",
      description: "Focus on software development, databases, and web technologies"
    }

  ],

  testimonials: [
    /*  {
       name: "Client Satisfait",
       position: "CEO, Entreprise XYZ",
       quote: "Jude a fait un excellent travail...",
       avatar: "/judepic.png" 
     } */
  ],


  skills: {
    frontend: {
      title: "Frontend",
      icon: "CodeIcon",
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
      icon: "TerminalIcon",
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
      title: "Tools",
      icon: "serverIcon",
      items: [
        { name: "Docker", level: 1, years: 0 },
        { name: "GIT", level: 4, years: 3 },
        { name: "GitHub", level: 3, years: 2 },
        { name: "Postman", level: 2, years: 0 },
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
      position: "Freelance Web Developer",
      company: "Self-employed",
      period: "2024 - Present",
      achievements: [
        "Built and delivered multiple web applications for small businesses",
        "Created custom dashboards, e-commerce platforms, and APIs",
        "Provided consulting on tech stack and architecture choices"
      ],
      stack: ["Laravel", "Angular", "Vue.js", "Tailwind CSS", "PHP"]
    },
    {
      position: "Web Developer Intern",
      company: "Afrisoft",
      period: "2024 (1 month)",
      achievements: [
        "Assisted in developing internal tools for business processes",
        "Contributed to UI improvements using Tailwind CSS",
        "Collaborated in a team of 3 developers on a client project"
      ],
      stack: ["PHP", "Tailwind CSS", "MySQL"]
    },
    {
      position: "Web Developer Intern",
      company: "Link DCs",
      period: "2024 (1 month)",
      achievements: [
        "Supported maintenance and updates for client websites",
        "Added features to existing Laravel applications",
        "Participated in code reviews and testing"
      ],
      stack: ["Laravel", "Blade", "JavaScript"]
    }
  ]
  ,

  projects: {
    portfolio: {
      name: "Terminal/Graphical Portfolio",
      description: "Portfolio with selectable visual style (terminal or graphical)",
      technologies: ["Vue 3", "Tailwind CSS"],
      link: "https://github.com/judempoyo/judempoyov2",
      year: 2025,
      features: [
        "Terminal and graphical modes",
        "Customizable visual theme",
        "Modern responsive design"
      ],
      image: "images/judeportfolio.png"
    },
    jumpdatatable: {
      name: "Jump Datatable",
      description: "Composer package to easily add dynamic tables in PHP projects",
      technologies: ["PHP", "Tailwind CSS", "Bootstrap", "JavaScript"],
      link: "https://github.com/judempoyo/jumpDatatable",
      year: 2025,
      features: [
        "Quick integration",
        "Auto-pagination",
        "Column sorting",
        "Data search",
        "Responsive design",
        "Easy customization"
      ],
      image: "images/jumpdatatable.png"
    },
    phpmvstarter: {
      name: "PHP MV Starter",
      description: "Starter kit with ready-to-use authentication system",
      technologies: ["PHP 8.2+", "Eloquent", "Dotenv", "Tailwind CSS v4", "PostCSS"],
      link: "https://github.com/judempoyo/phpMVCStarter",
      year: 2025,
      features: [
        "Authentication system",
        "Clean MVC structure",
        "Tailwind CSS integration"
      ],
      image: "images/phpmvcstarter.png"
    },
    learn2code: {
      name: "Learn2Code",
      description: "Mobile app to help beginners learn programming",
      technologies: ["Flutter"],
      link: "https://github.com/judempoyo/learn2code",
      year: 2025,
      features: [
        "Beginner-friendly lessons",
        "Interactive quizzes",
        "Progress tracking"
      ],
      image: "images/mobileapp.jpg"
    },
    ecom: {
      name: "Ecom Platform",
      description: "E-commerce platform for selling products (work in progress)",
      technologies: ["Laravel", "Livewire", "Filament"],
      link: "https://github.com/judempoyo/Ecom",
      year: 2025,
      features: [
        "Product management",
        "Admin dashboard (Filament)",
        "Planned payment integration"
      ],
      image: "images/ecom.png"
    },

    gestion_pharmacie: {
      name: "Pharmacy Management",
      description: "Pharmacy management app using PHP MVC architecture",
      technologies: ["PHP", "Tailwind CSS"],
      link: "https://github.com/judempoyo/gestion_pharmacie",
      year: 2025,
      features: [
        "Product and stock management",
        "Sales tracking",
        "Clean MVC structure"
      ],
      image: "images/jumpapi.png"
    },
    jumptodo: {
      name: "Jump Todo",
      description: "Task management app with Pomodoro timer",
      technologies: ["Angular", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/judempoyo/jumpTodo",
      year: 2025,
      features: [
        "Task lists",
        "Pomodoro integration",
        "Responsive UI"
      ],
      image: "images/jumptododark.png"
    },

    jumpmanagment: {
      name: "Jump Management",
      description: "Full management app for hardware stores or similar businesses",
      technologies: ["Laravel", "Livewire", "Filament"],
      link: "https://github.com/judempoyo/JumpManagment",
      year: 2025,
      features: [
        "Inventory management",
        "Sales dashboard",
        "User roles and permissions"
      ],
      image: "images/jumpmanagement.png"
    },
    trelloboardclone: {
      name: "Trello Board Clone",
      description: "Task management board inspired by Trello",
      technologies: ["Angular", "Angular Material", "Tailwind CSS"],
      link: "https://github.com/judempoyo/trelloboardclone",
      year: 2025,
      features: [
        "Board and task management",
        "Task filters",
        "Favorite boards",
        "Planned animations",
        "Planned authentication"
      ],
      image: "images/trelloboardclone.png"
    },
    jumpapi: {
      name: "Jump API",
      description: "REST API for user and product management with CRUD operations",
      technologies: ["PHP", "MySQL", "PDO"],
      link: "https://github.com/judempoyo/JumpApi",
      year: 2025,
      features: [
        "User and product CRUD",
        "Pagination support",
        "Dynamic model creation",
        "JSON request/response"
      ],
      image: "images/jumpapi.png"
    },
    appimmo: {
      name: "App Immo",
      description: "Mobile app for a fictional real estate agency",
      technologies: ["Flutter"],
      link: "https://github.com/judempoyo/appimmo",
      year: 2025,
      features: [
        "Property listings",
        "Contact management",
        "Mobile optimized UI"
      ],
      image: "images/mobileapp.jpg"
    },

    laravel12angular19starter: {
      name: "Laravel + Angular Starter",
      description: "Starter kit combining Laravel and Angular 19 (in progress)",
      technologies: ["Laravel", "Angular 19"],
      link: "https://github.com/judempoyo/laravel12angular19starter",
      year: 2025,
      features: [
        "Basic authentication (planned)",
        "REST API structure",
        "Angular frontend setup"
      ],
      image: "images/laravelangularstarter.png"
    },

  },



  timeline: [
    {
      title: "💼 First Experiences",
      content: "Web Developer Internships (2023)\n• Afrisoft: Contributed to internal tools and UI improvements\n• Link DCs: Maintained and enhanced Laravel applications"
    },
    {
      title: "🎓 Education",
      content: "Degree in Programming - Institut Supérieur de Commerce de Lubumbashi (Graduated 2024)\nFocus on software development, databases, and web technologies"
    },
    {
      title: "🚀 Freelance Journey",
      content: "Started as a Freelance Web Developer (2024 - Present)\n• Delivered custom web apps, dashboards, and APIs for clients\n• Gained hands-on experience with modern frameworks"
    },
    {
      title: "🌱 Continuous Learning",
      content: "Self-training on advanced Laravel, Angular, and API design\nContributed to open-source tools (e.g., Jump Datatable package)"
    }
  ]
  ,

  socialLinks: [
    {
      icon: "github",
      link: "https://github.com/judempoyo",
      name: "GitHub"
    },
    {
      icon: "linkedin",
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