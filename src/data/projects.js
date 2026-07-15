const projects = [
  {
    id: 1,
    slug: "safespeak",
    title: "SafeSpeak",
    description:"A privacy-first web application that enables survivors to submit anonymous SGBV reports while allowing authorized caseworkers to securely manage, track, and respond to cases.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Firebase"],
    techStack: ["Next.js", "Node.js", "MongoDB", "Firebase", "Tailwind CSS"],
    role: "Full-stack developer",
    timeline: "5 weeks",
    github: "https://github.com/OkekeKachi/Sexual-and-Gender-Based-Violence-Reporting-Tool",
    demo: "#",
    featured: true,
    image: "/images/projects/safespeak.png",
    heroImage: "/images/projects/safespeak.png",
    problem:
      "Users and support teams needed a safer, anonymous way to report gender-based violence without exposing survivors to additional risk.",
    solution:
      "Developed a full-stack reporting platform with anonymous case submission, role-based access control, secure evidence management, and a case tracking workflow designed to protect sensitive user information.",
    features: [
      "Anonymous report submission with unique case tracking",
      "Role-based dashboards for administrators and caseworkers",
      "Secure evidence upload and management",
      "Real-time case status updates",
    ],
    challenges: [
      "Designing safe anonymity without losing accountability.",
      "Balancing usability with strong security controls.",
      "Creating a responsive, accessible experience for mobile users.",
    ],
    learned: [
      "How to architect privacy-first reporting flows.",
      "How to simplify complex workflows for vulnerable users.",
      "How to keep security and usability aligned.",
    ],
    gallery: [
      "/images/projects/safespeak-1.png",
      "/images/projects/safespeak-2.png",
      "/images/projects/safespeak-3.png",
    ],
  },

  {
    id: 2,
    slug: "ecommerce",
    title: "Smart E-Commerce & Swap Platform",
    description:
      "A full-stack marketplace that supports buying, selling, and item swapping through a unified product management and transaction workflow.",
    technologies: ["React", "Express", "MongoDB"],
    techStack: ["React", "Express", "MongoDB", "Stripe", "Vercel"],
    role: "Product and frontend lead",
    timeline: "4 weeks",
    github: "https://github.com/OkekeKachi/home-decor-app",
    demo: "#",
    featured: true,
    image: "/images/projects/ecommerce.png",
    heroImage: "/images/projects/ecommerce.png",
    problem:
      "Traditional marketplaces made it difficult for users to trade existing items, forcing them to sell and repurchase rather than swap directly.",
    solution:
      "I created a unified experience that supports buying, selling, and swapping in one storefront with intuitive product listings and seamless checkout flows.",
    features: [
      "Product marketplace with search and filters",
      "Swap workflow for item-to-item exchange",
      "Secure payments and order management",
      "Seller dashboard with inventory tools",
    ],
    challenges: [
      "Managing inventory state across buy/sell/swap flows.",
      "Designing a clean UI for a complex commerce model.",
      "Optimizing performance for rich product media.",
    ],
    learned: [
      "How to design flexible commerce experiences.",
      "How to keep checkout and swap journeys intuitive.",
      "How to model product state for modern marketplaces.",
    ],
    gallery: [
      "/images/projects/ecommerce-1.png",
      "/images/projects/ecommerce-2.png",
      "/images/projects/ecommerce-3.png",
    ],
  },
  {
    id: 3,
    slug: "kachploy",
    title: "Kachploy",
    description:
      "A recruitment platform that streamlines job posting, candidate applications, and hiring workflows through dedicated employer and applicant dashboards.",
    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Firebase"],
    techStack: ["Next.js", "Node.js", "Express", "MongoDB", "Firebase"],
    role: "UX-focused full-stack engineer",
    timeline: "6 weeks",
    github: "https://github.com/OkekeKachi/Kachploy",
    demo: "#",
    featured: true,
    image: "/images/projects/kachploy.png",
    heroImage: "/images/projects/kachploy.png",
    problem:
      "Recruiters and applicants were struggling with disjointed tools, causing long hiring cycles and poor visibility into candidate progress.",
    solution:
      "I built a centralized hiring experience that streamlines job listings, applications, and employer review workflows with clear status updates.",
    features: [
      "Employer and applicant dashboards",
      "Job posting and application tracking",
      "In-app messaging and status updates",
      "Candidate screening tools",
    ],
    challenges: [
      "Creating a polished hiring flow across different user roles.",
      "Keeping applicant data secure and easy to manage.",
      "Designing a seamless onboarding experience for employers and candidates.",
    ],
    learned: [
      "How to structure SaaS applications for multiple user roles.",
      "How to design workflow clarity for hiring teams.",
      "How to create onboarding experiences that reduce friction.",
    ],
    gallery: [
      "/images/projects/kachploy-1.png",
      "/images/projects/kachploy-2.png",
      "/images/projects/kachploy-3.png",
    ],
  },
  {
    id: 4,
    slug: "vuna",
    title: "Vuna",
    description:
      "An AI-assisted coaching platform that transforms employee feedback into actionable performance insights, personalized recommendations, and measurable growth plans.",
    technologies: ["Next.js", "TypeScript", "OpenAI", "Firebase"],
    techStack: ["Next.js", "TypeScript", "OpenAI", "Firebase", "Tailwind CSS"],
    role: "AI product developer",
    timeline: "5 weeks",
    github: "#",
    demo: "#",
    featured: false,
    image: "/images/projects/vuna.png",
    heroImage: "/images/projects/vuna.png",
    problem:
      "Teams lacked a fast way to turn feedback into actionable coaching insights across projects and roles.",
    solution:
      "I built an AI-powered coaching interface that turns performance data into clear suggestions, personalized check-ins, and team growth signals.",
    features: [
      "AI-generated coaching recommendations",
      "Team performance dashboards",
      "Custom goals and progress tracking",
      "Feedback capture and review workflows",
    ],
    challenges: [
      "Integrating AI outputs in a trustworthy way.",
      "Designing a calm, supportive user experience.",
      "Maintaining clarity across diverse team roles.",
    ],
    learned: [
      "How to design AI-first product experiences.",
      "How to make coaching feel practical and empowering.",
      "How to structure feedback workflows for teams.",
    ],
    gallery: [
      "/images/projects/vuna-1.png",
      "/images/projects/vuna-2.png",
      "/images/projects/vuna-3.png",
    ],
  },
];

export default projects;

