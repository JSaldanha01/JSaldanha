export const portfolioData = {
  name: "João Zinho Franklin Saldanha",
  title: "Information Systems Student",
  greeting: "Hello, I'm",
  description: "Passionate about technology, software development, and creating innovative solutions. Currently pursuing my degree in Information Systems with a focus on full-stack development and system architecture.",
  socials: [
    { icon: "fab fa-github", url: "https://github.com", label: "GitHub" },
    { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/joaozinhosaldanha/", label: "LinkedIn" },
    { icon: "fab fa-whatsapp", url: "https://api.whatsapp.com/send?phone=6285280263820", label: "WhatsApp" },
    { icon: "fas fa-envelope", url: "mailto:joaozinho@jsaldanha.com", label: "Email" }
  ],
  about: {
    text: [
      "I'm an Information Systems student from Timor-Leste with a strong passion for technology and software development. My international journey — from the Portuguese School of Dili to President University in Indonesia on an ASEAN Scholarship — has shaped me into an adaptable, globally-minded developer.",
      "I specialize in both frontend and backend development, with hands-on industry experience building enterprise-grade systems for Telkomcel's core BSS infrastructure, the Ministry of Health Timor-Leste, and Bank Rakyat Indonesia TL. My academic background in ERP and Information Systems gives me a strong foundation for designing scalable, real-world solutions.",
      "When I'm not coding, I enjoy photography, video editing, and exploring new technologies. I also serve as Secretary I of the Timorese Student Association and Vice Chairperson of the Faculty of Computer Science — roles that have sharpened my leadership and communication skills."
    ]
  },

  skills: [
    { name: "Java", progress: 85, icon: "fab fa-java", category: "Backend" },
    { name: "React", progress: 85, icon: "fab fa-react", category: "Frontend" },
    { name: "Tailwind CSS", progress: 90, icon: "fas fa-file-code", category: "Frontend" },
    { name: "PHP / Laravel", progress: 78, icon: "fab fa-php", category: "Backend" },
    { name: "Flutter", progress: 70, icon: "fas fa-mobile-alt", category: "Frontend" },
    { name: "JavaScript", progress: 80, icon: "fab fa-js", category: "Frontend" },
    { name: "TypeScript", progress: 75, icon: "fas fa-scroll", category: "Frontend" },
    { name: "Python", progress: 80, icon: "fab fa-python", category: "Backend" },
    { name: "MySQL", progress: 80, icon: "fas fa-database", category: "Backend" },
    { name: "Vite", progress: 80, icon: "fas fa-bolt", category: "Frontend" },
    { name: "Git & GitHub", progress: 85, icon: "fab fa-git-alt", category: "DevOps" },
    { name: "Linux / VPS", progress: 72, icon: "fab fa-linux", category: "DevOps" },
    { name: "CI/CD (GitHub Actions)", progress: 68, icon: "fas fa-infinity", category: "DevOps" },
    { name: "MikroTik RouterOS", progress: 90, icon: "fas fa-network-wired", category: "Networking" },
    { name: "OSPF & Dynamic Routing", progress: 88, icon: "fas fa-route", category: "Networking" },
    { name: "VLAN & Subnetting", progress: 85, icon: "fas fa-sitemap", category: "Networking" },
    { name: "Network Firewalls & Security", progress: 85, icon: "fas fa-shield-alt", category: "Networking" },
    { name: "Site-to-Site VPN", progress: 82, icon: "fas fa-lock", category: "Networking" },
    { name: "TCP/IP Suite & IP Addressing", progress: 88, icon: "fas fa-globe", category: "Networking" },
    { name: "Network Load Balancing (PCC / ECMP)", progress: 85, icon: "fas fa-balance-scale", category: "Networking" },
    { name: "Policy-Based Routing (PBR)", progress: 82, icon: "fas fa-random", category: "Networking" },
    { name: "Network Failover & High Availability", progress: 85, icon: "fas fa-server", category: "Networking" },
    { name: "Epicor Kinetic ERP", progress: 70, icon: "fas fa-cogs", category: "ERP" },
    { name: "Photo Editing", progress: 85, icon: "fas fa-camera", category: "Creative" },
    { name: "Video Editing", progress: 75, icon: "fas fa-video", category: "Creative" }
  ],

  languages: [
    { name: "English", level: "Upper-Intermediate", detail: "IELTS 6.5 • CEFR B2", flagCode: "us" },
    { name: "Tetun", level: "Native", detail: "Mother tongue", flagCode: "tl" },
    { name: "Portugues", level: "Intermediate", detail: "School education", flagCode: "pt" },
    { name: "Bahasa Indonesia", level: "Intermediate", detail: "Daily use", flagCode: "id" }
  ],

  projects: [
    {
      title: "João Saldanha University Management System (JSU-UMS)",
      description: "Capstone Final Project: A comprehensive full-stack educational platform for academic administration. Built with Laravel 11 and deployed on a secure LEMP stack cloud VPS. Features automated CI/CD, real-time observability via Prometheus/Grafana, and high-performance background processing.",
      tags: ["Laravel", "LEMP Stack", "CI/CD", "Prometheus"],
      links: { github: "https://github.com", live: "https://staging.jsaldanha.com" },
      icon: "fas fa-graduation-cap",
      image: "/Images/JSU_Dashboard.png",
      images: [
        "/Images/JSU_Dashboard.png",
        "/Images/JSU_Portal_Login.png",
        "/Images/JSU_Enrollment.png",
        "/Images/JSU_Analytics.png",
        "/Images/JSU_Attendance_Sessions.png",
        "/Images/JSU_Attendance_Marking.png",
        "/Images/JSU_GPA_Report.png",
        "/Images/JSU_Email_Broadcast.png"
      ]
    },
    {
      title: "Epicor Kinetic ERP Implementation",
      description: "Individual capstone project: Implemented Epicor Kinetic ERP for a simulated pencil manufacturing company. Executed a full Make-to-Order business cycle covering Material Management, Purchasing, Production, Shipment, Invoicing, and Cash Receipt.",
      tags: ["Epicor Kinetic", "ERP", "MTO Process", "Business Systems"],
      links: {},
      icon: "fas fa-cogs"
    },
    {
      title: "PU IS Mobile App",
      description: "Led the proposal and design of a Flutter + Firebase mobile app for the PU Information Systems Major Association. Outlined features including Google Sign-In, email auth, and real-time Cloud Firestore updates.",
      tags: ["Flutter", "Firebase", "Firestore", "Mobile"],
      links: { github: "https://github.com" },
      icon: "fas fa-mobile-alt"
    },
    {
      title: "Telkomcel OCS Web Portal",
      description: "An enterprise BSS application managing telecommunication workflows, subscriber lifecycles, and complex billing logic. Engineered a scalable frontend architecture with lazy loading, modern data fetching, and strict role-based access control using the Metronic 9 design system.",
      tags: ["React", "TypeScript", "Zustand", "Tailwind CSS"],
      links: { github: "https://github.com" },
      icon: "fas fa-file-invoice-dollar",
      image: "/Images/Telkomcel_OCS.png"
    },
    {
      title: "Telkomcel CRM360, Call Center & Helpdesk",
      description: "Revamped the CRM360, Call Center, and Helpdesk login portal (Centro Informação) systems for Telkomcel. Integrated REST APIs using Swagger and resolved frontend UI issues through rigorous debugging and optimization.",
      tags: ["React", "API Integration", "UI Optimization", "Helpdesk"],
      links: { github: "https://github.com" },
      icon: "fas fa-headset",
      image: "/Images/Telkomcel_Helpdesk.png"
    },
    {
      title: "Saúde Hospital Information System",
      description: "Developed healthcare administration interfaces for the Ministry of Health, Timor-Leste. Implemented Portuguese and Tetum i18n translations, along with various logistics modules.",
      tags: ["TypeScript", "Healthcare", "i18n"],
      links: { github: "https://github.com" },
      icon: "fas fa-hospital",
      image: "/Images/HIS_Saude.png"
    },
    {
      title: "BRI TL Web Dashboard & BRILink Apps",
      description: "Contributed to frontend development for banking and payment-related Dashboards (BRILiaN & BRILink Apps), establishing standardized terminologies and interfaces for Bank Rakyat Indonesia Timor-Leste Branch.",
      tags: ["JavaScript", "Banking", "UI Implementation", "BRILink"],
      links: { github: "https://github.com" },
      icon: "fas fa-university",
      image: "/Images/BRILink_Dashboard.png"
    }
  ],

  experience: [
    {
      organization: "PT Shibly Teknologi Solusi",
      position: "Frontend Developer Intern",
      period: "September 2025 - June 2026",
      description: "Developed enterprise frontend systems for Telkomcel's core BSS platform, BRI Timor-Leste's web dashboard, and the Ministry of Health's Saúde HIS. Worked with React, TypeScript, and Tailwind CSS across high-stakes client projects."
    },
    {
      organization: "President University Timorese Student Association",
      position: "Secretary I",
      period: "October 2024 - October 2025",
      description: "Managed administrative duties, organized meeting minutes, and coordinated communication between association members."
    },
    {
      organization: "President University Faculty Association of Computer Science",
      position: "Vice Chairperson II",
      period: "October 2024 - October 2025",
      description: "Led faculty association activities, organized technical events, and advocated for student welfare within the Faculty of Computer Science."
    }
  ],

  education: [
    {
      period: "Sep 2023 - Present",
      degree: "Information System — Concentration: Enterprise Resource Planning (ERP)",
      institution: "President University",
      description: "Currently pursuing a Bachelor's degree in Information Systems.",
      achievements: [
        "ASEAN Undergraduate Scholarship Award",
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
      degree: "Kindergarten — Middle School",
      institution: "Escola Portuguesa de Díli (Portuguese School)",
      description: "Completed Kindergarten through Grade 8 (2008 - 2018). Received bilingual education in Portuguese."
    }
  ],

  certificates: [
    {
      title: "Gemini Certified University Student",
      issuer: "Google for Education",
      date: "06/29/2026",
      status: "Valid through 06/29/2029",
      icon: "fab fa-google",
      url: "https://edu.google.accredible.com/7ae0f950-ca28-49e2-800b-b989ba356b2d",
      embedUrl: "https://edu.google.accredible.com/embed/7ae0f950-ca28-49e2-800b-b989ba356b2d",
      image: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/186751652",
    },
    {
      title: "MikroTik Certified Network Associate (MTCNA)",
      issuer: "MikroTik",
      date: "July 2026",
      status: "Certified",
      icon: "fas fa-network-wired",
      image: "/certificates/Certificate%20MTCNA.jpg",
      url: "https://mikrotik.com/training/certificates/c730054c94e5a0ab9823",
    },
    {
      title: "MikroTik Certified Routing Engineer (MTCRE)",
      issuer: "MikroTik",
      date: "July 2026",
      status: "Certified",
      icon: "fas fa-route",
      image: "/certificates/Certificate%20MTCRE.jpg",
      url: "https://mikrotik.com/training/certificates/c730263cdba8d4dc59e7",
    }
  ],

  // Ordinary certificates: Training Courses, Internships, University Associations, Events, etc.
  otherCertificates: [
    {
      title: "Frontend Developer Internship Certificate",
      issuer: "PT Shibly Teknologi Solusi",
      date: "May 2026",
      status: "Internship Completed",
      category: "Internships",
      icon: "fas fa-laptop-code",
      image: "/certificates/Intern%20Certificate_Joao.jpg",
      url: "/certificates/Intern%20Certificate_Joao.pdf",
      urlLabel: "View PDF Document"
    },
    {
      title: "CompSciGala 2025 — Guard Team Member",
      issuer: "PUFA Computer Science (President University)",
      date: "2025",
      status: "Committee Contribution",
      category: "Events",
      icon: "fas fa-user-shield",
      image: "/certificates/Certificate%20Compsigala2025.jpg",
    },
    {
      title: "CS:GO 2025 — Logistics & Accommodation Team",
      issuer: "PUFA Computer Science (President University)",
      date: "2025",
      status: "Committee Contribution",
      category: "Events",
      icon: "fas fa-gamepad",
      image: "/certificates/Certificate%20CSGO%20Guard.jpeg",
    },
    {
      title: "MikroTik MTCNA Training Course",
      issuer: "IDN Networkers / MikroTik",
      date: "July 2026",
      status: "Training Completed",
      category: "Training Courses",
      icon: "fas fa-certificate",
      image: "/certificates/Certificate%20MTCNA%20Training%20IDN.jpeg",
    },
    {
      title: "MikroTik MTCRE Training Course",
      issuer: "IDN Networkers / MikroTik",
      date: "July 2026",
      status: "Training Completed",
      category: "Training Courses",
      icon: "fas fa-certificate",
      image: "/certificates/Certificate%20MTCRE%20Training%20IDN.jpeg",
    }
  ],

  contact: {
    email: "joaozinho@jsaldanha.com",
    phone: "+62 852 8026 3820",
    whatsapp: "6285280263820",
    location: "Jakarta, Indonesia",
    location2: "Dili, Timor-Leste"
  }
};