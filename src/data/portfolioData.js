export const portfolioData = {
  personal: {
    name: "Gebreslassie Dessie",
    title: "Full Stack Developer",
    email: "gebreslassiedessie@email.com",
    phone: "+251906995513/+251902067211",
    location: "Addis Abeba, Ethiopia",
    avatar: "/im4.jpg",
    resumeUrl: "/resume.pdf",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },

  skills: {
    mobile: [
      { id: "react-native", name: "React Native", level: 95, icon: "📱" },
      { id: "flutter", name: "Flutter", level: 85, icon: "💙" },
      { id: "ios", name: "iOS Development", level: 80, icon: "🍎" },
      { id: "android", name: "Android Development", level: 80, icon: "🤖" },
      { id: "mobile-ui", name: "Mobile UI/UX", level: 90, icon: "🎨" }
    ],
    desktop: [
      { id: "electron", name: "Electron", level: 90, icon: "⚡" },
      { id: "maui", name: ".NET MAUI", level: 75, icon: "🔷" },
      { id: "javafx", name: "Java FX", level: 70, icon: "☕" },
      { id: "tauri", name: "Tauri", level: 65, icon: "🚀" }
    ],
    web: {
      frontend: [
        { id: "react", name: "React", level: 98, icon: "⚛️" },
        { id: "nextjs", name: "Next.js", level: 92, icon: "▲" },
        { id: "typescript", name: "TypeScript", level: 90, icon: "🔷" },
        { id: "tailwind", name: "Tailwind CSS", level: 95, icon: "🎨" },
        { id: "vue", name: "Vue.js", level: 80, icon: "🟢" }
      ],
      backend: [
        { id: "nodejs", name: "Node.js", level: 95, icon: "🟢" },
        { id: "express", name: "Express", level: 90, icon: "🚂" },
        { id: "django", name: "Python/Django", level: 85, icon: "🐍" },
        { id: "postgresql", name: "PostgreSQL", level: 88, icon: "🐘" },
        { id: "mongodb", name: "MongoDB", level: 82, icon: "🍃" }
      ]
    },
    tools: [
      { id: "git", name: "Git", level: 98, icon: "📚" },
      { id: "docker", name: "Docker", level: 85, icon: "🐳" },
      { id: "aws", name: "AWS", level: 80, icon: "☁️" },
      { id: "firebase", name: "Firebase", level: 88, icon: "🔥" }
    ],
    skillCategories: {
      programming: [
        { id: "javascript", name: "JavaScript" },
        { id: "typescript", name: "TypeScript" },
        { id: "python", name: "Python" },
        { id: "java", name: "Java" },
        { id: "csharp", name: "C#" },
        { id: "dart", name: "Dart" }
      ],
      frameworks: [
        { id: "react", name: "React" },
        { id: "react-native", name: "React Native" },
        { id: "nextjs", name: "Next.js" },
        { id: "flutter", name: "Flutter" },
        { id: "electron", name: "Electron" },
        { id: "express", name: "Express" },
        { id: "django", name: "Django" }
      ],
      databases: [
        { id: "mongodb", name: "MongoDB" },
        { id: "postgresql", name: "PostgreSQL" },
        { id: "sql-server", name: "SQL Server" },
        { id: "firebase", name: "Firebase" },
        { id: "sqlite", name: "SQLite" }
      ],
      devTools: [
        { id: "git", name: "Git" },
        { id: "docker", name: "Docker" },
        { id: "aws", name: "AWS" },
        { id: "webpack", name: "Webpack" },
        { id: "jest", name: "Jest" },
        { id: "cypress", name: "Cypress" }
      ],
      methodologies: [
        { id: "agile", name: "Agile" },
        { id: "scrum", name: "Scrum" },
        { id: "ci-cd", name: "CI/CD" },
        { id: "tdd", name: "TDD" },
        { id: "microservices", name: "Microservices" },
        { id: "rest-apis", name: "REST APIs" }
      ]
    }
  },

  projects: [
    {
      id: "project1",
      title: "FitTrack - Fitness App",
      description: "A comprehensive fitness tracking application with real-time workout monitoring and progress analytics",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Push Notifications"],
      platform: "mobile",
      githubUrl: "https://github.com",
      liveUrl: "https://fittrack.demo.com",
      appStore: "https://apps.apple.com",
      playStore: "https://play.google.com",
      featured: true,
      status: "Live",
      category: "Health & Fitness"
    },
    {
      id: "project2",
      title: "TaskFlow - Productivity App",
      description: "Smart task management application with AI-powered scheduling and team collaboration features",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["Flutter", "SQLite", "Provider", "REST API"],
      platform: "mobile",
      githubUrl: "https://github.com",
      liveUrl: "https://taskflow.demo.com",
      featured: false,
      status: "Live",
      category: "Productivity"
    },
    {
      id: "project3",
      title: "CodeSync - Development IDE",
      description: "Cross-platform code editor with real-time collaboration and intelligent code completion",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
      technologies: ["Electron", "React", "WebSockets", "Monaco Editor", "Node.js"],
      platform: "desktop",
      githubUrl: "https://github.com",
      downloadUrl: "https://download.codesync.com",
      featured: true,
      status: "Live",
      category: "Development Tools"
    },
    {
      id: "project4",
      title: "BizAnalytics - Business Dashboard",
      description: "Enterprise analytics platform for business intelligence and data visualization",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      technologies: [".NET MAUI", "C#", "SQL Server", "Charting"],
      platform: "desktop",
      githubUrl: "https://github.com",
      featured: false,
      status: "In Development",
      category: "Business Intelligence"
    },
    {
      id: "project5",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and inventory management",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
      platform: "web",
      githubUrl: "https://github.com",
      liveUrl: "https://ecommerce.demo.com",
      featured: true,
      status: "Live",
      category: "E-Commerce"
    },
    {
      id: "project6",
      title: "Project Management Suite",
      description: "Collaborative project management tool with real-time updates and team communication",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      technologies: ["React", "Socket.io", "PostgreSQL", "Express", "Docker"],
      platform: "web",
      githubUrl: "https://github.com",
      liveUrl: "https://projects.demo.com",
      featured: true,
      status: "Live",
      category: "Project Management"
    }
  ],

  experience: [
    {
      id: "exp1",
      company: "TechCorp Inc.",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      location: "Remote",
      description: "Led cross-platform development initiatives and architected scalable solutions for enterprise clients. Managed a team of 5 developers and implemented CI/CD pipelines.",
      technologies: ["React Native", "Electron", "Next.js", "AWS", "Docker", "TypeScript", "Node.js", "PostgreSQL"],
      platforms: ["mobile", "desktop", "web"],
    },
    {
      id: "exp2",
      company: "MobileFirst Solutions",
      position: "Mobile Developer",
      period: "2020 - 2022",
      location: "Remote",
      description: "Specialized in building high-performance mobile applications for iOS and Android platforms. Collaborated with design teams to create intuitive user experiences.",
      technologies: ["React Native", "Flutter", "Firebase", "Redux", "iOS", "Android", "REST APIs"],
      platforms: ["mobile"],

    },
    {
      id: "exp3",
      company: "WebScale Technologies",
      position: "Full Stack Developer",
      period: "2018 - 2020",
      location: "Remote",
      description: "Developed and maintained web applications using modern JavaScript frameworks. Focused on creating responsive and accessible user interfaces.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Express", "TypeScript"],
      platforms: ["web"],

    },
    {
      id: "exp4",
      company: "DesktopSoft Inc.",
      position: "Desktop Application Developer",
      period: "2016 - 2018",
      location: "Remote",
      description: "Built desktop applications for Windows and macOS platforms. Focused on creating efficient and user-friendly business applications.",
      technologies: ["Electron", ".NET", "C#", "SQL Server", "WPF", "Java FX"],
      platforms: ["desktop"],
    }
  ],



  platformStats: {
    mobile: {
      projects: 5,
      experience: "2+ years",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      skills: ["Cross-platform Development", "Native Performance", "UI/UX Design", "App Store Deployment"]
    },
    desktop: {
      projects: 8,
      experience: "3+ years",
      technologies: ["Electron", ".NET MAUI", "Java FX"],
      skills: ["System Integration", "Performance Optimization", "Desktop UI", "Cross-platform Compatibility"]
    },
    web: {
      projects: 24,
      experience: "4+ years",
      technologies: ["React", "Next.js", "Node.js", "TypeScript"],
      skills: ["Full Stack Development", "API Design", "Cloud Deployment", "Performance Optimization"]
    }
  }
}