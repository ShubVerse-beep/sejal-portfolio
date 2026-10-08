export interface Project {
  title: string;
  description: string;
  technologies: string[];
  status?: string;
  award?: string;
  github?: string;
  live?: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  university: string;
  degree: string;
  period: string;
  score: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
}

export interface PortfolioData {
  personal: {
    firstName: string;
    lastName: string;
    fullName: string;
    role: string;
    email: string;
    phone: string;
    region: string;
    profileImage: string;
  };
  hero: {
    greeting: string;
    roles: string[];
    tagline: string;
  };
  about: {
    badge: string;
    bio: string;
    statusBadge: string;
    stats: StatItem[];
  };
  skills: string[];
  expertise: ExpertiseItem[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  social: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
  };
}

export const portfolio: PortfolioData = {
  personal: {
    firstName: "Sejal",
    lastName: "Rai",
    fullName: "Sejal Manoj Rai",
    role: "App & Web Developer",
    email: "sejalrai9156@gmail.com",
    phone: "+91-9156046848",
    region: "Mumbai, India",
    profileImage: "/profile.jpg"
  },

  hero: {
    greeting: "HI, I'M",
    roles: [
      "App Developer",
      "Web Developer",
      "AR/VR Developer",
      "UI/UX Designer"
    ],
    tagline: "I build interactive web experiences, cross-platform mobile apps, and immersive VR worlds with precision and clean engineering."
  },

  about: {
    badge: "// System profile",
    bio: "Final-year Computer Engineering student with hands-on experience in App Development, Web Design, and AR/VR applications. Passionate about building interactive websites, real-world Flutter apps, and immersive spatial environments with performance, intuitive design, and clean architecture.",
    statusBadge: "OPEN TO OPPORTUNITIES · 2026",
    stats: [
      { value: "9.6 CGPA", label: "Academic Excellence" },
      { value: "Flutter & Web", label: "Core Stack" },
      { value: "1st Place", label: "CU Hackathon Winner" }
    ]
  },

  skills: [
    "Flutter",
    "HTML5",
    "CSS3",
    "Node.js",
    "MongoDB",
    "WordPress",
    "AR/VR",
    "Game Dev",
    "JavaScript",
    "Figma",
    "MySQL",
    "Git & GitHub",
    "REST APIs",
    "VS Code",
    "XAMPP",
    "React",
    "Tailwind CSS",
    "GSAP"
  ],

  expertise: [
    {
      id: "ROOT 01",
      title: "Mobile App Development",
      description: "Developing cross-platform Flutter mobile applications with REST APIs, authentication, and MongoDB backend integration.",
      tags: ["Flutter", "Node.js", "MongoDB"]
    },
    {
      id: "ROOT 02",
      title: "Web & Frontend Engineering",
      description: "Crafting modern, responsive web experiences with custom animations, semantic styling, and high-performance delivery.",
      tags: ["HTML5 / CSS3", "JavaScript", "Tailwind CSS"]
    },
    {
      id: "ROOT 03",
      title: "AR / VR & Immersive 3D",
      description: "Building immersive virtual reality environments, spatial audio integration, and interactive user experiences.",
      tags: ["AR/VR", "Game Dev", "3D Interaction"]
    },
    {
      id: "ROOT 04",
      title: "UI/UX & WordPress Solutions",
      description: "Designing interface systems in Figma, responsive WordPress platforms, custom plugins, and search engine optimization.",
      tags: ["Figma", "WordPress CMS", "SEO"]
    }
  ],

  projects: [
    {
      title: "Micronest — Fintech Loan Platform",
      description: "Awarded 1st place at CU Innovation Hackathon (2025). Developed a financial solution to provide accessible loans for individuals unable to access traditional banking services, securing entry into Campus Tank.",
      technologies: ["Fintech", "Web Platform", "Node.js", "MongoDB"],
      status: "AWARD WINNER",
      award: "1st Place CU Innovation Hackathon",
      github: "https://github.com/sejalrai9156",
      live: ""
    },
    {
      title: "Space Explorer VR",
      description: "Immersive virtual reality space exploration game allowing users to navigate galaxies and interact with celestial environments. Features spatial audio and intuitive VR controls.",
      technologies: ["AR/VR", "Game Dev", "Spatial Audio", "3D Controls"],
      status: "VR EXPERIENCE",
      github: "https://github.com/sejalrai9156",
      live: ""
    },
    {
      title: "Healthcare & Service Apps",
      description: "Full-stack cross-platform mobile application developed with Flutter, featuring secure authentication, API integration, and MongoDB Atlas for real-time data handling.",
      technologies: ["Flutter", "Node.js", "MongoDB Atlas", "REST API"],
      status: "MOBILE APP",
      github: "https://github.com/sejalrai9156",
      live: ""
    },
    {
      title: "Samsung Product Showcase",
      description: "Branded product showcase website mimicking Samsung's design language, featuring custom styling, sleek micro-animations, and fluid responsive layout.",
      technologies: ["WordPress", "Custom Styling", "Animations", "Responsive"],
      status: "LIVE SHOWCASE",
      github: "",
      live: ""
    },
    {
      title: "WordPress Portfolio Platform",
      description: "Designed and launched an interactive portfolio website showcasing projects and skills with comprehensive mobile responsiveness and SEO optimization.",
      technologies: ["WordPress CMS", "SEO Basics", "Mobile UI", "Plugins"],
      status: "DEPLOYED",
      github: "",
      live: ""
    }
  ],

  experience: [
    {
      role: "App Development Intern",
      company: "Cosmic Web Solutions (Freelancing)",
      period: "2026",
      description: [
        "Developing mobile applications using Flutter with API and backend integration.",
        "Working on real-time projects focusing on UI/UX, performance, and deployment."
      ]
    },
    {
      role: "WordPress Developer Intern",
      company: "DLLE",
      period: "2025",
      description: [
        "Designed and developed responsive websites using WordPress.",
        "Implemented themes, plugins, and basic SEO optimization."
      ]
    },
    {
      role: "AR/VR Intern",
      company: "Immersive Tech Lab",
      period: "2025",
      description: [
        "Worked on immersive AR/VR applications with interactive 3D environments.",
        "Gained experience in VR design, user interaction, and spatial visualization."
      ]
    },
    {
      role: "PR Head",
      company: "SPCA — St. John College of Engineering and Management",
      period: "June 2025",
      description: [
        "Hosted and coordinated a major technical event involving student-led innovation challenges."
      ]
    },
    {
      role: "Joint Secretary",
      company: "Bureau of Indian Standards (BIS)",
      period: "August 2025",
      description: [
        "Organized standards literacy and technical student initiatives."
      ]
    }
  ],

  education: [
    {
      institution: "St. John College of Engineering and Management, Palghar",
      university: "Mumbai University",
      degree: "T.E. in Computer Engineering",
      period: "2025–2026",
      score: "CGPA: 9.6"
    }
  ],

  certifications: [
    { title: "App Development", issuer: "CWS", date: "March 2026" },
    { title: "Data Analytics", issuer: "Deloitte", date: "July 2025" },
    { title: "AR & VR Development", issuer: "IOFT", date: "Dec 2024" },
    { title: "Game Development", issuer: "IOFT", date: "Dec 2024" }
  ],

  social: {
    github: "https://github.com/sejalrai9156",
    linkedin: "https://linkedin.com/in/sejal-rai-18334a321",
    email: "sejalrai9156@gmail.com",
    phone: "+91-9156046848"
  }
};
