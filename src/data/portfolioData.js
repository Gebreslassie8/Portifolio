// export const portfolioData = {
//   personal: {
//     name: "Gebreslassie Dessie",
//     title: "Full Stack Developer",
//     subtitle: "Mobile • Desktop • Web Applications",
//     email: "gebreslassiedessie@email.com",
//     phone: "+251 906995513/902067211",
//     location: "Addis Abeba,Ethiopia",
//     bio: "Full-stack developer with 5+ years of experience building scalable applications across all platforms. Specialized in React Native, Electron, and modern web technologies.",
//     detailedBio: [
//       "I specialize in creating cross-platform solutions that work seamlessly on mobile, desktop, and web. With expertise in React Native for mobile apps, Electron for desktop applications, and modern web frameworks, I deliver complete digital experiences.",
//       "My journey started with web development and expanded to include mobile and desktop applications. I believe in writing clean, maintainable code and staying updated with the latest industry trends across all platforms.",
//       "Whether it's a mobile app for iOS/Android, a desktop application for Windows/Mac/Linux, or a responsive web application, I have the skills to bring your ideas to life."
//     ],
//      avatar: "/im4.jpg", // ✅ image from public folder
//      resumeUrl: "/resume.pdf", // ✅ also from public folder
//     socialLinks: {
//       github: "https://github.com",
//       linkedin: "https://linkedin.com",
//       twitter: "https://twitter.com"
//     }
//   },

//   skills: {
//     mobile: [
//       { name: "React Native", level: 95, icon: "📱", description: "Cross-platform mobile development" },
//       { name: "Flutter", level: 85, icon: "💙", description: "Native performance apps" },
//       { name: "iOS Development", level: 80, icon: "🍎", description: "Swift & Objective-C" },
//       { name: "Android Development", level: 80, icon: "🤖", description: "Kotlin & Java" },
//       { name: "Mobile UI/UX", level: 90, icon: "🎨", description: "Responsive mobile design" }
//     ],
//     desktop: [
//       { name: "Electron", level: 90, icon: "⚡", description: "Cross-platform desktop apps" },
//       { name: ".NET MAUI", level: 75, icon: "🔷", description: "Microsoft ecosystem" },
//       { name: "Java FX", level: 70, icon: "☕", description: "Enterprise desktop apps" },
//       { name: "Tauri", level: 65, icon: "🚀", description: "Rust-based framework" }
//     ],
//     web: {
//       frontend: [
//         { name: "React", level: 98, icon: "⚛️", description: "Modern UI development" },
//         { name: "Next.js", level: 92, icon: "▲", description: "Full-stack React framework" },
//         { name: "TypeScript", level: 90, icon: "🔷", description: "Type-safe JavaScript" },
//         { name: "Tailwind CSS", level: 95, icon: "🎨", description: "Utility-first CSS" },
//         { name: "Vue.js", level: 80, icon: "🟢", description: "Progressive framework" }
//       ],
//       backend: [
//         { name: "Node.js", level: 95, icon: "🟢", description: "JavaScript runtime" },
//         { name: "Express", level: 90, icon: "🚂", description: "Web application framework" },
//         { name: "Python/Django", level: 85, icon: "🐍", description: "Rapid development" },
//         { name: "PostgreSQL", level: 88, icon: "🐘", description: "Relational database" },
//         { name: "MongoDB", level: 82, icon: "🍃", description: "NoSQL database" }
//       ]
//     },
//     tools: [
//       { name: "Git", level: 98, icon: "📚", description: "Version control" },
//       { name: "Docker", level: 85, icon: "🐳", description: "Containerization" },
//       { name: "AWS", level: 80, icon: "☁️", description: "Cloud services" },
//       { name: "Firebase", level: 88, icon: "🔥", description: "Backend as a service" }
//     ]
//   },

//   projects: [
//     // Mobile Projects
//     {
//       id: 1,
//       title: "FitTrack Pro Mobile",
//       description: "Advanced fitness tracking app with AI workout recommendations, social features, and real-time progress analytics. Supports offline mode and syncs across devices.",
//       image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
//       technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Push Notifications"],
//       platform: "mobile",
//       category: "Health & Fitness",
//       githubUrl: "https://github.com",
//       liveUrl: "https://fittrack.demo.com",
//       appStore: "https://apps.apple.com",
//       playStore: "https://play.google.com",
//       featured: true,
//       status: "Live"
//     },
//     {
//       id: 2,
//       title: "TaskFlow Mobile",
//       description: "Productivity app with intelligent task management, team collaboration, and offline capabilities. Features include Kanban boards and automated reminders.",
//       image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
//       technologies: ["Flutter", "SQLite", "Provider", "REST API"],
//       platform: "mobile",
//       category: "Productivity",
//       githubUrl: "https://github.com",
//       liveUrl: "https://taskflow.demo.com",
//       featured: false,
//       status: "Live"
//     },

//     // Desktop Projects
//     {
//       id: 3,
//       title: "CodeSync IDE",
//       description: "Modern desktop code editor with real-time collaboration, extensive plugin ecosystem, and integrated terminal. Supports multiple programming languages.",
//       image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
//       technologies: ["Electron", "React", "WebSockets", "Monaco Editor", "Node.js"],
//       platform: "desktop",
//       category: "Development Tools",
//       githubUrl: "https://github.com",
//       downloadUrl: "https://download.codesync.com",
//       featured: true,
//       status: "Live"
//     },
//     {
//       id: 4,
//       title: "Finance Dashboard Pro",
//       description: "Cross-platform desktop application for comprehensive personal finance management. Includes investment tracking and financial reporting features.",
//       image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
//       technologies: [".NET MAUI", "C#", "SQL Server", "Charting"],
//       platform: "desktop",
//       category: "Finance",
//       githubUrl: "https://github.com",
//       featured: false,
//       status: "In Development"
//     },

//     // Web Projects
//     {
//       id: 5,
//       title: "E-Commerce Platform",
//       description: "Full-stack e-commerce solution with advanced admin dashboard, payment integration, inventory management, and customer analytics.",
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
//       technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
//       platform: "web",
//       category: "E-commerce",
//       githubUrl: "https://github.com",
//       liveUrl: "https://ecommerce.demo.com",
//       featured: true,
//       status: "Live"
//     },
//     {
//       id: 6,
//       title: "Project Management Suite",
//       description: "Real-time collaborative project management platform with Kanban boards, time tracking, resource allocation, and comprehensive reporting.",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
//       technologies: ["React", "Socket.io", "PostgreSQL", "Express", "Docker"],
//       platform: "web",
//       category: "Productivity",
//       githubUrl: "https://github.com",
//       liveUrl: "https://projects.demo.com",
//       featured: true,
//       status: "Live"
//     }
//   ],

//   experience: [
//     {
//       id: 1,
//       company: "TechCorp Inc.",
//       position: "Senior Full Stack Developer",
//       period: "2022 - Present",
//       location: "San Francisco, CA",
//       description: "Lead development of cross-platform applications and mentor junior developers in modern software engineering practices across mobile, desktop, and web.",
//       achievements: [
//         "Architected and launched 3 mobile apps with 100k+ downloads across app stores",
//         "Developed desktop applications used by 10k+ enterprise users worldwide",
//         "Led migration of web platform to microservices architecture, improving scalability by 200%",
//         "Mentored 4 junior developers in cross-platform development best practices",
//         "Implemented CI/CD pipelines reducing deployment time by 70% across all platforms"
//       ],
//       technologies: ["React Native", "Electron", "Next.js", "AWS", "Docker", "TypeScript"],
//       platforms: ["mobile", "desktop", "web"]
//     },
//     {
//       id: 2,
//       company: "MobileFirst Solutions",
//       position: "Mobile Lead Developer",
//       period: "2020 - 2022",
//       location: "Remote",
//       description: "Specialized in cross-platform mobile application development for various industries with focus on performance and user experience.",
//       achievements: [
//         "Led development of 8+ mobile applications for healthcare and finance sectors",
//         "Achieved 4.8+ average star ratings across all published applications",
//         "Reduced app load times by 60% through performance optimization",
//         "Implemented offline-first architectures for unreliable network conditions",
//         "Integrated advanced features like push notifications and in-app purchases"
//       ],
//       technologies: ["React Native", "Flutter", "Firebase", "Redux", "iOS", "Android"],
//       platforms: ["mobile"]
//     },
//     {
//       id: 3,
//       company: "WebScale Technologies",
//       position: "Full Stack Web Developer",
//       period: "2018 - 2020",
//       location: "New York, NY",
//       description: "Developed responsive web applications and backend systems for various clients, focusing on scalability and user experience.",
//       achievements: [
//         "Built responsive web applications serving 50k+ monthly active users",
//         "Improved website performance scores by 40% through optimization",
//         "Developed RESTful APIs serving multiple client applications",
//         "Implemented comprehensive testing strategies increasing code coverage to 85%",
//         "Integrated third-party APIs and services for enhanced functionality"
//       ],
//       technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Express"],
//       platforms: ["web"]
//     },
//     {
//       id: 4,
//       company: "DesktopSoft Inc.",
//       position: "Desktop Application Developer",
//       period: "2016 - 2018",
//       location: "Seattle, WA",
//       description: "Focused on developing cross-platform desktop applications for enterprise clients with emphasis on performance and security.",
//       achievements: [
//         "Developed 5+ desktop applications for enterprise clients",
//         "Created applications with native performance using Electron and .NET",
//         "Implemented auto-update mechanisms for seamless user experience",
//         "Built secure desktop applications handling sensitive financial data",
//         "Optimized applications for Windows, macOS, and Linux platforms"
//       ],
//       technologies: ["Electron", ".NET", "C#", "SQL Server", "WPF"],
//       platforms: ["desktop"]
//     }
//   ],

//   services: [
//     {
//       id: 1,
//       title: "Mobile App Development",
//       description: "Cross-platform mobile applications for iOS and Android with native performance and seamless user experiences.",
//       icon: "📱",
//       features: ["React Native Development", "Flutter Apps", "iOS & Android", "App Store Deployment", "Push Notifications"],
//       color: "purple"
//     },
//     {
//       id: 2,
//       title: "Desktop Applications",
//       description: "Native and cross-platform desktop applications with focus on performance, security, and user experience.",
//       icon: "🖥️",
//       features: ["Electron Apps", ".NET MAUI", "Cross-platform", "Native Performance", "Auto Updates"],
//       color: "blue"
//     },
//     {
//       id: 3,
//       title: "Web Development",
//       description: "Full-stack web applications with modern frameworks, responsive design, and cloud deployment for optimal performance.",
//       icon: "🌐",
//       features: ["React/Next.js", "Full-stack", "Cloud Deployment", "Responsive Design", "SEO Optimization"],
//       color: "green"
//     },
//     {
//       id: 4,
//       title: "Cross-Platform Solutions",
//       description: "Complete solutions that work seamlessly across mobile, desktop, and web platforms with shared business logic.",
//       icon: "🚀",
//       features: ["Unified Codebase", "Platform-specific UI", "Shared APIs", "Consistent UX", "Reduced Development Time"],
//       color: "orange"
//     }
//   ],
//  // Update testimonials with African context
//   testimonials: [
//     {
//       id: 1,
//       name: "Alemayehu Tekle",
//       position: "CEO, Tech Innovation Africa",
//       content: "Gebreslassie delivered exceptional cross-platform solutions tailored for the Ethiopian market. His understanding of local user needs combined with technical excellence is remarkable.",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//       rating: 5
//     },
//     {
//       id: 2,
//       name: "Meron Abebe",
//       position: "Product Manager, Addis Tech Solutions",
//       content: "Working with Gebreslassie on our mobile applications was transformative. His apps handle Ethiopia's unique network conditions beautifully while maintaining excellent user experience.",
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
//       rating: 5
//     },
//     {
//       id: 3,
//       name: "Samuel Johnson",
//       position: "Director, African Digital Agency",
//       content: "Gebreslassie's desktop applications have revolutionized how Ethiopian businesses operate. His attention to offline functionality and local requirements is outstanding.",
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
//       rating: 5
//     }
//   ],
//   platformStats: {
//     mobile: {
//       projects: 12,
//       experience: "5+ years",
//       technologies: ["React Native", "Flutter", "iOS", "Android"],
//       description: "Building native-feeling mobile apps for both iOS and Android platforms"
//     },
//     desktop: {
//       projects: 8,
//       experience: "4+ years", 
//       technologies: ["Electron", ".NET MAUI", "Java FX"],
//       description: "Creating performant desktop applications for Windows, macOS, and Linux"
//     },
//     web: {
//       projects: 25,
//       experience: "6+ years",
//       technologies: ["React", "Next.js", "Node.js", "TypeScript"],
//       description: "Developing scalable web applications with modern frameworks and best practices"
//     }
//   }
  
// }


export const portfolioData = {
  personal: {
    name: "Gebreslassie Dessie",
    title: "Full Stack Developer",
    email: "gebreslassiedessie@email.com",
    phone: "+251 906995513/902067211",
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
    ]
  },

  projects: [
    {
      id: "project1",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Push Notifications"],
      platform: "mobile",
      githubUrl: "https://github.com",
      liveUrl: "https://fittrack.demo.com",
      appStore: "https://apps.apple.com",
      playStore: "https://play.google.com",
      featured: true,
      status: "Live"
    },
    {
      id: "project2",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["Flutter", "SQLite", "Provider", "REST API"],
      platform: "mobile",
      githubUrl: "https://github.com",
      liveUrl: "https://taskflow.demo.com",
      featured: false,
      status: "Live"
    },
    {
      id: "project3",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
      technologies: ["Electron", "React", "WebSockets", "Monaco Editor", "Node.js"],
      platform: "desktop",
      githubUrl: "https://github.com",
      downloadUrl: "https://download.codesync.com",
      featured: true,
      status: "Live"
    },
    {
      id: "project4",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      technologies: [".NET MAUI", "C#", "SQL Server", "Charting"],
      platform: "desktop",
      githubUrl: "https://github.com",
      featured: false,
      status: "In Development"
    },
    {
      id: "project5",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
      platform: "web",
      githubUrl: "https://github.com",
      liveUrl: "https://ecommerce.demo.com",
      featured: true,
      status: "Live"
    },
    {
      id: "project6",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      technologies: ["React", "Socket.io", "PostgreSQL", "Express", "Docker"],
      platform: "web",
      githubUrl: "https://github.com",
      liveUrl: "https://projects.demo.com",
      featured: true,
      status: "Live"
    }
  ],

  experience: [
    {
      id: "exp1",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      technologies: ["React Native", "Electron", "Next.js", "AWS", "Docker", "TypeScript"],
      platforms: ["mobile", "desktop", "web"]
    },
    {
      id: "exp2",
      company: "MobileFirst Solutions",
      period: "2020 - 2022",
      location: "Remote",
      technologies: ["React Native", "Flutter", "Firebase", "Redux", "iOS", "Android"],
      platforms: ["mobile"]
    },
    {
      id: "exp3",
      company: "WebScale Technologies",
      period: "2018 - 2020",
      location: "New York, NY",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Express"],
      platforms: ["web"]
    },
    {
      id: "exp4",
      company: "DesktopSoft Inc.",
      period: "2016 - 2018",
      location: "Seattle, WA",
      technologies: ["Electron", ".NET", "C#", "SQL Server", "WPF"],
      platforms: ["desktop"]
    }
  ],

  testimonials: [
    {
      id: "testimonial1",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: "testimonial2",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: "testimonial3",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ],

  platformStats: {
    mobile: {
      projects: 12,
      experience: "5+ years",
      technologies: ["React Native", "Flutter", "iOS", "Android"]
    },
    desktop: {
      projects: 8,
      experience: "4+ years",
      technologies: ["Electron", ".NET MAUI", "Java FX"]
    },
    web: {
      projects: 25,
      experience: "6+ years",
      technologies: ["React", "Next.js", "Node.js", "TypeScript"]
    }
  }
}