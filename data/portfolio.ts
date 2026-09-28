export const portfolio = {
  name: "Aruj Garg",

  role: "Backend • AI • Systems",

  location: "Delhi, India",

  photo: "/profile.png",

  bio: "I build backend systems, developer infrastructure, and AI-powered applications.",

  about: {
  paragraphs: [
    "I'm a final-year Computer Science student at Maharaja Surajmal Institute of Technology, interested in backend engineering, AI, and infrastructure.",

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
    duration: "2025",
    description:
      "Contributed to the frontend of a research platform, building responsive interfaces and integrating APIs across multiple product modules.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "Git",
    ],
    highlights: [
      "Built reusable responsive UI components and product modules.",
      "Worked on the template creator, user profile, onboarding, and dashboard.",
      "Integrated APIs and handled frontend state and data fetching.",
      "Collaborated with backend and design teams to resolve integration and UI issues.",
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
    name: "IncidentIQ",
    description:
      "An AI-powered incident investigation platform that connects application metrics and logs to help investigate production incidents.",
    technologies: [
      "FastAPI",
      "Python",
      "Prometheus",
      "Grafana",
      "Loki",
    ],
    github: "",
    live: "",
    featured: true,
  },

  {
    name: "URL Shortener",
    description:
      "A production-style URL shortener with Redis caching, rate limiting, click analytics, and background processing.",
    technologies: [
      "Next.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Prisma",
    ],
    github: "",
    live: "https://url-shortener-eight-coral.vercel.app/",
    featured: false,
  },

  {
    name: "Research Agent",
    description:
      "An AI research assistant capable of searching the web, fetching pages, and streaming research results to the client.",
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "SSE",
    ],
    github: "",
    live: "https://researcher-agent.vercel.app/",
    featured: false,
  },
],
};