export const portfolio = {
  name: "Aruj Garg",

  role: "Backend • AI • Systems",

  location: "Delhi, India",

  photo: "/picture.png",

  bio: "Building backend systems, developer infrastructure, and AI-powered applications.",

  about: {
  paragraphs: [
    "Final-year Computer Science student at Maharaja Surajmal Institute of Technology, interested in backend engineering, AI, and infrastructure.",

    "I enjoy understanding how systems work under the hood — from APIs and databases to queues, containers, and the infrastructure connecting them.",
  ],
},



  interests: [
    "Backend Engineering",
    "Distributed Systems",
    "AI Engineering",
    "DevOps",
    "Developer Tooling",
  ],

 links: {
  github: "https://github.com/ArujGarg",
  linkedin: "https://www.linkedin.com/in/arujgarg/",
  leetcode: "https://leetcode.com/u/ArujGarg/",
  resume: "https://drive.google.com/file/d/1Wb8bbBRq_CxXiZYA_7DRXqStGh3BsdDX/view?usp=sharing",
},

 experience: [
  {
    company: "Research Commons",
    role: "Frontend Developer Intern",
    duration: "May 2025 - Nov 2025",
    location: "Bangalore (Remote)",
    description:
      "Built and maintained frontend features for a research platform, working across responsive UI, API integration, state management, and reusable component architecture.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "Git",
    ],
    highlights: [
      "Developed 25+ responsive and modular UI components across 10+ product features using Next.js, TypeScript, and Tailwind CSS.",
      "Integrated and debugged REST APIs across 8+ frontend workflows using Redux Toolkit and TanStack Query for data fetching, caching, and synchronization.",
      "Refactored 15+ legacy and reusable components to improve rendering performance, maintainability, and consistency.",
      "Identified and resolved 30+ UI/UX, layout, API integration, and state-management issues while collaborating with designers and backend developers.",
    ],
  },
],

  projects: [
  {
    name: "SkyDeploy",
    description:
      "A deployment platform for building and running Dockerized applications, inspired by platforms like Vercel and Render.",
    technologies: [
      "Next.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Nginx",
    ],
    github: "https://github.com/ArujGarg/skydeploy",
    live: "https://skydeploy.aruj.dev/",
    featured: true,
  },

  {
    name: "IncidentIQ (currently building)",
    description:
      "An AI-powered incident investigation platform that connects application metrics and logs to help investigate production incidents.",
    technologies: [
      "FastAPI",
      "Python",
      "Prometheus",
      "Grafana",
      "Loki",
    ],
    github: "https://github.com/ArujGarg/IncidentIQ",
    live: "",
    featured: false,
  },

  {
    name: "ShortLink",
    description:
      "A production-style URL shortener with Redis caching, rate limiting, click analytics, and background processing.",
    technologies: [
      "Next.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Prisma",
    ],
    github: "https://github.com/ArujGarg/url-shortener",
    live: "https://shortlink.aruj.dev/",
    featured: true,
  },

  {
    name: "Research Agent",
    description:
      "An AI research assistant capable of searching the web, fetching pages, and streaming research results to the client.",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "SSE",
    ],
    github: "https://github.com/ArujGarg/researcher-agent",
    live: "https://researcher-agent.vercel.app/",
    featured: false,
  },

{
  name: "DocuQuery RAG",
  description:
    "A document-based RAG assistant that lets users upload documents and ask questions about their contents using retrieval-augmented generation.",
  technologies: [
    "Python",
    "FastAPI",
    "LangChain",
    "RAG",
    "Vector Store",
  ],
  github: "https://github.com/ArujGarg/DocuQuery-RAG",
  live: "https://docuquery.aruj.dev/",
  featured: true,
},
],
};