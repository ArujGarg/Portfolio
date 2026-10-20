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
    role: "Software Developer Intern",
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
  "Developed 25+ reusable UI components across 10+ product features using Next.js, TypeScript, and Tailwind CSS, translating Figma designs into responsive interfaces and improving UI consistency.",
  "Integrated REST APIs across 8+ application workflows, configuring request payloads and headers, processing JSON responses, and managing loading, error, and data synchronization states.",
  "Tested and debugged REST API endpoints using Swagger, analyzed response payloads and HTTP errors, and collaborated with backend engineers to identify API issues and validate fixes.",
  "Refactored 15+ existing components and resolved 30+ UI, API integration, and state-management issues, improving code maintainability and reliability across multiple product modules.",
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
