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
    title: "Ethiopian IT Park Enterprise Content Management System",
    description: "A full-stack enterprise CMS built for the Ethiopian IT Park — featuring role-based access control, content publishing workflows, digital asset management, and a responsive admin dashboard. Frontend deployed on Vercel, backend API on Render.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=250&fit=crop",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "JWT"],
    platform: "web",
    githubUrl: "https://github.com/Gebreslassie8/Ethiopian-IT-park-Frontend",
    liveUrl: "https://ethiopian-it-park-frontend.vercel.app/",        // ← update to your actual Vercel deployment
    backendUrl: "https://ethiopian-it-park-api.onrender.com", // ← update to your Render backend URL
    featured: true,
    status: "Live",
    category: "Enterprise CMS",
    role: "Full-Stack Developer"
  },
  {
    id: "project2",
    title: "Online Theater Ticketing System",
    description: "A complete end-to-end ticketing web application with real-time seat reservations, secure authentication, and a responsive seating map. Frontend on Vercel, REST API on Render.",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400&h=250&fit=crop",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Payment Gateway"],
    platform: "web",
    githubUrl: "https://github.com/Gebreslassie8/Theaterwebfrontend",
    liveUrl: "https://theater-ticketing.vercel.app",         // ← update to your actual Vercel deployment
    backendUrl: "https://theater-api.onrender.com",         // ← update to your Render backend URL
    featured: true,
    status: "Live",
    category: "Entertainment & Booking",
    role: "Full-Stack Developer"
  },
  {
    id: "project3",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with secure payments, cart & checkout flow, inventory management, and admin panel. Frontend on Vercel, backend API on Render.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB", "Payment Gateway", "JWT"],
    platform: "web",
    githubUrl: "https://github.com/Gebreslassie8/E-commerce",
    liveUrl: "https://ecommerce-platform.vercel.app",        // ← update to your actual Vercel deployment
    backendUrl: "https://ecommerce-api.onrender.com",       // ← update to your Render backend URL
    featured: true,
    status: "Live",
    category: "E-Commerce",
    role: "Full-Stack Developer"
  },

  {
    id: "project4",
    title: "Task Manager — Python Flask",
    description: "A Python-powered task management web application built with Flask and SQLite. Features CRUD operations, task filtering, priority levels, and persistent storage. Deployed live on Render.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    technologies: ["Python", "Flask", "SQLite", "Jinja2", "HTML/CSS"],
    platform: "web",
    githubUrl: "https://github.com/Gebreslassie8/To-Do-Listpython-project",
    liveUrl: "https://todo-list-python-7req.onrender.com",
    featured: true,
    status: "Live",
    category: "Productivity",
    role: "Python Developer"
  },
  {
    id: "project5",
    title: "Game Spinner — Interactive Wheel",
    description: "A fun and interactive spinning wheel game with smooth animations, randomized selection, and instant results. Perfect for giveaways, random pickers, and decision-making. Deployed live on Vercel.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
    technologies: ["React", "CSS Animations", "Vite", "JavaScript"],
    platform: "web",
    githubUrl: "https://github.com/Gebreslassie8/game-spinner",
    liveUrl: "https://game-spinner-wheat.vercel.app/",
    featured: true,
    status: "Live",
    category: "Game / Fun",
    role: "Frontend Developer"
  },
  {
    id: "project6",
    title: "Smart Calculator",
    description: "A feature-rich smart calculator web app with a clean, responsive interface. Supports basic arithmetic, scientific functions, calculation history, and full keyboard input — built with React and deployed on Vercel.",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400&h=250&fit=crop",
    technologies: ["React", "Vite", "JavaScript", "CSS3"],
    platform: "web",
    githubUrl: "https://github.com/Gebreslassie8/smart-calculator",
    liveUrl: "https://smart-calculater.vercel.app/",
    featured: true,
    status: "Live",
    category: "Utility / Productivity",
    role: "Frontend Developer"
  }

],


  experience: [
  {
    id: "exp1",
    company: "Ethiopian ICT Park",
    position: "Full-Stack Developer | Content Management System",
    period: "2017 E.C",
    location: "Addis Ababa, Ethiopia",
    description:
      "On-site software engineering internship at the Ethiopian ICT Park. Engineered a scalable enterprise Content Management System (CMS) with React.js and Node.js/Express.js, implemented JWT authentication and role-based access control, and built modular REST APIs for digital asset management, content publishing, and audit logging.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MySQL", "JWT", "RBAC"],
    platforms: ["web"]
  },
  {
    id: "exp2",
    company: "Online Theater Ticketing System",
    position: "Full-Stack Developer | Personal Project",
    period: "2018 E.C - Present",
    location: "Addis Ababa, Ethiopia",
    description:
      "Architected and built a complete end-to-end ticketing platform with real-time seat reservations, secure authentication, and optimized database schemas. Improved transaction throughput by 15% through query optimization and caching. Deployed frontend on Vercel and backend REST API on Render.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Payment Gateway", "JWT"],
    platforms: ["web"]
  }
]


}