export const portfolioData = {
  name: "João Zinho Franklin Saldanha",
  title: "Information Systems Student",
  greeting: "Hello, I'm",
  description: "Passionate about technology, software development, and creating innovative solutions. Currently pursuing my degree in Information Systems with a focus on full-stack development and system architecture.",
  socials: [
    { icon: "fab fa-github", url: "https://github.com", label: "GitHub" },
    { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/joaozinhosaldanha/", label: "LinkedIn" },
    { icon: "fab fa-twitter", url: "https://twitter.com", label: "Twitter" },
    { icon: "fab fa-whatsapp", url: "https://api.whatsapp.com/send?phone=6285280263820", label: "WhatsApp" },
    { icon: "fas fa-envelope", url: "mailto:joaozinhofranklinsaldanha13@gmail.com", label: "Email" }
  ],
  about: {
    text: [
      "I'm an Information Systems student with a strong passion for technology and software development. My journey in tech has been driven by curiosity and a desire to solve real-world problems through innovative solutions.",
      "I enjoy working on both frontend and backend development, creating seamless user experiences while building robust and scalable systems. My academic journey has equipped me with a solid foundation in programming, database management, system analysis, and software engineering principles.",
      "When I'm not coding, I love exploring new technologies, contributing to open-source projects, and continuously learning to stay updated with the latest industry trends."
    ],
    stats: [
      { label: "Years of Study", value: "3+" },
      { label: "Projects Completed", value: "10+" },
      { label: "Technologies Mastered", value: "5+" }
    ]
  },
  skills: [
    {
      category: "Programming Languages",
      icon: "fas fa-code",
      items: [
        { name: "Java", progress: 85 },
        { name: "Python", progress: 80 },
        { name: "JavaScript", progress: 75 },
        { name: "C++", progress: 70 }
      ]
    },
    {
      category: "Web Development",
      icon: "fas fa-laptop-code",
      items: [
        { name: "HTML/CSS", progress: 90 },
        { name: "React", progress: 70 },
        { name: "Node.js", progress: 65 },
        { name: "Express", progress: 65 }
      ]
    },
    {
      category: "Databases & Tools",
      icon: "fas fa-database",
      items: [
        { name: "MySQL", progress: 80 },
        { name: "MongoDB", progress: 70 },
        { name: "Git", progress: 85 },
        { name: "Docker", progress: 60 }
      ]
    }
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, and payment integration.",
      tags: ["React", "Node.js", "MongoDB"],
      links: { demo: "#", github: "#" },
      icon: "fas fa-laptop-code"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management tool with real-time updates, team collaboration, and project tracking features.",
      tags: ["JavaScript", "Express", "MySQL"],
      links: { demo: "#", github: "#" },
      icon: "fas fa-tasks"
    },
    {
      title: "Data Analytics Dashboard",
      description: "An interactive dashboard for data visualization and analysis with real-time charts and reporting capabilities.",
      tags: ["Python", "Flask", "D3.js"],
      links: { demo: "#", github: "#" },
      icon: "fas fa-chart-line"
    },
    {
      title: "Mobile App",
      description: "A cross-platform mobile application with modern UI/UX design and offline capabilities.",
      tags: ["React Native", "Firebase", "Redux"],
      links: { demo: "#", github: "#" },
      icon: "fas fa-mobile-alt"
    }
  ],
  education: [
    {
      period: "Sep 2023 - Present",
      degree: "Information System — Concentration: Enterprise Resource Planning (ERP)",
      institution: "President University",
      description: "Currently pursuing a Bachelor's degree in Information Systems. GPA: 3.44 / 4.00",
      achievements: [
        "ASEAN Undergraduate Scholarship Award",
        "Vice Chairperson II, Faculty Association of Computer Science",
        "Secretary I, President University Timorese Student Association"
      ]
    },
    {
      period: "2018 - Dec 2022",
      degree: "High School Diploma",
      institution: "Colégio Paulo VI",
      description: "Completed high school education and graduated in December 2022. Received education in Tetun language."
    },
    {
      period: "2008 - 2018",
      degree: "SMP (Sekolah Menengah Pertama) / Middle School",
      institution: "Escola Portuguesa de Díli (Portuguese School)",
      description: "Completed Kindergarten through Grade 8. Received bilingual education in Portuguese."
    }
  ],
  contact: {
    email: "joaozinhofranklinsaldanha13@gmail.com",
    phone: "+62 852 8026 3820",
    whatsapp: "6285280263820",
    location: "Jakarta, Indonesia",
    location2: "Dili, Timor-Leste"
  }
};
