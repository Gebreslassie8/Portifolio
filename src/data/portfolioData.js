export const portfolioData = {
  personal: {
    name: "Gebreslassie Dessie",
    title: "Full Stack Developer",
    email: "gebreslassiedessie@gmail.com",
    phone: "+251906995513/+251902067211",
    location: "Addis Abeba, Ethiopia",
    avatar: "/image3.jpg",
    resumeUrl: "/resume.pdf",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
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
      title: "Ethiopian IT Park - Digital Library",
      description: "A comprehensive digital library platform for the Ethiopian IT Park, featuring a modern UI with responsive design, interactive book catalog, and user-friendly navigation system built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=250&fit=crop",
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript", "REST API"],
      platform: "web",
      githubUrl: "https://github.com/Gebreslassie8/Ethiopian-IT-park-Frontend",
      featured: true,
      status: "Live",
      category: "Digital Library",
      role: "Frontend Developer"
    },
    {
      id: "project2",
      title: "Online Theater Ticketing System",
      description: "A seamless web application for booking theater tickets online, featuring real-time seat selection, secure payment gateway integration, and an intuitive user interface for a smooth theater experience.",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400&h=250&fit=crop",
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript", "Payment Gateway"],
      platform: "web",
      githubUrl: "https://github.com/Gebreslassie8/Theaterwebfrontend",
      featured: true,
      status: "Live",
      category: "Entertainment & Booking",
      role: "Frontend Developer"
    },
    {
      id: "project3",
      title: "TaskFlow - Productivity App",
      description: "A Python-based task management application for tracking and organizing daily tasks efficiently.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["Python", "SQLite", "Tkinter"],
      platform: "desktop",
      githubUrl: "https://github.com/Gebreslassie8/To-Do-Listpython-project",
      featured: false,
      status: "Live",
      category: "Productivity"
    },
    {
      id: "project4",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and inventory management",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["TypeScript", "React", "Node.js", "Payment Gateway"],
      platform: "web",
      githubUrl: "https://github.com/Gebreslassie8/E-commerce",
      featured: true,
      status: "Live",
      category: "E-Commerce"
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
  ]


}