import ReactIcon from "../assets/ReactIcon.svg";
import ReduxIcon from "../assets/ReduxIcon.svg";
import MaterialUi from "../assets/MaterialUI.svg";
import BloggingSite from "../assets/BloggingSite.png";
import DBMSProject from "../assets/DBMSProject.png";
import KUETLogoVector from "../assets/KUETLogoVector.svg";
import NotreDameCollegeDhaka from "../assets/NotreDameCollegeDhaka.svg";
import AllThingAPI from "../assets/companyProject.png";
import SmartNotes from "../assets/SmartNotes.png";
import Portfolio from "../assets/Portfolio.png";
import notAvailable from "../assets/notAvailable.png";
import School from "../assets/School.png";
import SNR from "../assets/SNR.png";
import LYNORG from "../assets/LYNORG.png";
import Typescript from "../assets/Typescript.svg";
import WindowsOS from "../assets/WindowsOS.svg";
import ParrotOS from "../assets/ParrotOS.png";
import KaliLinuxOS from "../assets/KaliLinuxOS.svg";
import FedoraOS from "../assets/FedoraOS.svg";
import NextJs from "../assets/NextJs.svg";
import Anthropic from "../assets/Anthropic.svg";
import GoogleGemini from "../assets/GoogleGemini.svg";
import Cursor from "../assets/Cursor.svg";
import TailwindCSS from "../assets/TailwindCSS.svg";
import NodeJs from "../assets/NodeJs.svg";
import Go from "../assets/Go.svg";
import Docker from "../assets/Docker.svg";
import PostgreSQL from "../assets/PostgreSQL.svg";
import MongoDB from "../assets/MongoDB.svg";
import JavaScript from "../assets/JavaScript.svg";
import Cpp from "../assets/Cpp.svg";
import Antigravity from "../assets/Antigravity.svg";

interface Bio {
  name: string;
  roles: string[];
  description: string;
  github: string;
  resume: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
}

interface Skill {
  title: string;
  skills: { name: string; image?: string }[];
}

interface Experience {
  id: number;
  image: string;
  role: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
  document?: string;
}

interface Education {
  id: number;
  image: string;
  school: string;
  date: string;
  grade?: string;
  description: string;
  degree: string;
}

interface ProjectMember {
  name: string;
  image: string;
  linkedin: string;
  github: string;
}

export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  image?: string;
  tags: string[];
  category: string;
  github?: string;
  webapp?: string;
  members?: ProjectMember[];
  paperLink?: string;
  isLive?: boolean;
  liveURL?: string;
}

export interface Timeline {
  year: number;
  text: string;
}

export const bio: Bio = {
  name: "Avishek Roy",
  roles: [
    "Software Engineer",
    "AI-Assisted Engineer",
    "Full Stack Developer",
    "Cybersecurity Enthusiast",
    "Problem Solver",
    "Programmer",
  ],
  description:
    "System-driven Software Engineer with a strong foundation in backend architecture, security, and full-stack development. Actively leveraging AI tools, Agent Skills, and Prompt Engineering as primary development engines to architect scalable SaaS systems and accelerate the SDLC. Combines rigorous cybersecurity knowledge (CTFs, TryHackMe) with deep systems thinking to perform AI-assisted security audits and build robust, production-ready software.",
  github: "https://github.com/alpha101001",
  resume: "https://avi-12.s3.us-east-1.amazonaws.com/Avishek_Roy.pdf",
  linkedin: "https://www.linkedin.com/in/avishek-roy-/",
  facebook: "https://www.facebook.com/king101001/",
};

export const skills: Skill[] = [
  {
    title: "AI & Agentic Engineering",
    skills: [
      { name: "Antigravity", image: Antigravity },
      { name: "Cursor", image: Cursor },
      { name: "Claude Code", image: Anthropic },
      { name: "Gemini CLI", image: GoogleGemini },
      { name: "Agent Skills", image: Anthropic },
      { name: "MCP Tools", image: Anthropic },
      { name: "Prompt Engineering", image: GoogleGemini },
      { name: "AI SDLC Management", image: Antigravity },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Next.js", image: NextJs },
      { name: "React.js", image: ReactIcon },
      { name: "Redux Toolkit", image: ReduxIcon },
      { name: "Zustand" },
      { name: "Tailwind CSS", image: TailwindCSS },
      { name: "Node.js", image: NodeJs },
      { name: "Ant Design" },
      { name: "Material UI", image: MaterialUi },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "TypeScript", image: Typescript },
      { name: "JavaScript (ES6+)", image: JavaScript },
      { name: "Go (Golang)", image: Go },
      { name: "C++", image: Cpp },
      { name: "SQL" },
    ],
  },
  {
    title: "Systems Architecture & Integration",
    skills: [
      { name: "REST API Architecture" },
      { name: "Authentication & Authorization" },
      { name: "WebSockets" },
      { name: "System Design" },
      { name: "Scalability Validation" },
    ],
  },
  {
    title: "Databases, DevOps & Infrastructure",
    skills: [
      { name: "PostgreSQL", image: PostgreSQL },
      { name: "MongoDB", image: MongoDB },
      { name: "Docker", image: Docker },
      { name: "CI/CD Pipelines" },
      { name: "AWS (Basic)" },
      { name: "Linux" },
      { name: "Git" },
    ],
  },
  {
    title: "Core Engineering & Security",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Cybersecurity Principles" },
      { name: "Performance Optimization" },
      { name: "Blockchain Principles" },
    ],
  },
  {
    title: "Practical Knowledge in Operating Systems",
    skills: [
      { name: "Microsoft Windows", image: WindowsOS },
      { name: "Parrot Security OS", image: ParrotOS },
      { name: "Fedora Linux", image: FedoraOS },
      { name: "Kali Linux", image: KaliLinuxOS },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 0,
    image: notAvailable,
    role: "Software Engineer",
    company: "Shadhin Music",
    date: "August 2025 - Present",
    description:
      "Architected and engineered a high-performance Next.js application, utilizing AI-assisted workflows to boost Google Lighthouse scores from 42 to 85. Managed the SDLC for organic growth features, driving a large increase in SEO visibility by elevating discoverable pages from 2 to over 500 through dynamic rendering systems. Built secure, responsive interfaces with Zustand state management, integrating frontend components with backend APIs.",
    skills: ["Next.js", "JavaScript", "Tailwind CSS", "Zustand", "SEO", "AI-Assisted Development"],
  },
  {
    id: 1,
    image: LYNORG,
    role: "Software Engineer",
    company: "LynOrg Technologies Limited",
    date: "January 2025 - July 2025",
    description:
      "Developed complex, data-driven system interfaces for enterprise ERP solutions using React, TypeScript, and Ant Design. Architected real-time data synchronization features using WebSockets, optimizing application performance and component tree rendering for massive datasets. Collaborated with backend engineers to design, integrate, and test robust REST APIs.",
    skills: ["React.js", "TypeScript", "Ant Design", "WebSockets", "Redux Toolkit", "API Integration"],
  },
  {
    id: 2,
    image: SNR,
    role: "Software Engineer",
    company: "Sense & Respond Software LLC",
    date: "June 2024 - December 2024",
    description:
      "Built and maintained scalable React applications with TypeScript, establishing rigorous code standardization and security practices (ESLint) that significantly reduced production bugs. Optimized application architecture, loading times, and responsiveness through advanced code-splitting strategies and AI-assisted debugging workflows.",
    skills: ["React.js", "TypeScript", "Material UI", "Redux Toolkit", "ESLint", "API Integration"],
  },
  {
    id: 3,
    image: notAvailable,
    role: "Frontend Developer",
    company: "Freelance (Remote, USA)",
    date: "June 2022 - May 2024",
    description:
      "Managed the complete SDLC for individual clients, translating business requirements into scalable, secure web applications. Designed custom component architectures, implemented secure client-side features, and performed extensive debugging to ensure maintainability.",
    skills: ["React.js", "JavaScript", "HTML/CSS", "SDLC Management"],
  },
];

export const education: Education[] = [
  {
    id: 0,
    image: KUETLogoVector,
    school: "Khulna University of Engineering & Technology, Khulna",
    date: "2019 - 2024",
    grade: "CGPA 2.91",
    description:
      "I earned a Bachelor's degree in Computer Science and Engineering.",
    degree: "Bachelor of Science - BSc, Computer Science and Engineering",
  },
  {
    id: 1,
    image: NotreDameCollegeDhaka,
    school: "Notre Dame College, Dhaka",
    date: "2016 - 2018",
    grade: "GPA 5 (with Scholarship)",
    description:
      "I completed my intermediate education at Notre Dame College, Dhaka, where I studied Science.",
    degree: "Higher Secondary Certificate - HSC, Science",
  },
  {
    id: 2,
    image: School,
    school: "Seroil Govt. High School, Rajshahi",
    date: "2016",
    grade: "GPA 5",
    description:
      "I completed my secondary education at Seroil Govt. High School, Rajshahi, where I studied Science.",
    degree: "Secondary School Certificate - SSC, Science",
  },
];

export const projects: Project[] = [
  {
    id: 0,
    title: "Shadhin Music – Performance & SEO Overhaul",
    date: "August 2025 - Present",
    description:
      "Engineered a performance and SEO overhaul of a Next.js music platform, boosting the Google Lighthouse score from 42 to 85 and increasing discoverable pages from 2 to over 500 through dynamic rendering systems and AI-assisted workflows.",
    image: notAvailable,
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "Zustand"],
    category: "Company",
    isLive: false,
    liveURL: "",
  },
  {
    id: 1,
    title: "UI for Lynorg Workflow – Real-Time ERP Interface",
    date: "January 2025 - July 2025",
    description:
      "Built a complex, real-time ERP interface with WebSockets for enterprise resource planning. Utilized advanced optimizations like debouncing and code-splitting to ensure high performance with massive datasets.",
    image: notAvailable,
    tags: ["React", "JavaScript", "Ant Design", "Material UI", "Redux", "WebSockets"],
    category: "Company",
    isLive: false,
    liveURL: "",
  },
  {
    id: 2,
    title: "All Things API – Codebase Modernization",
    date: "",
    description:
      "Modernized a legacy remote company management codebase by implementing code standardization (ESLint) to reduce bugs, building a reusable component library, and adding internationalization support. Implemented role-based authentication in key application modules.",
    image: AllThingAPI,
    tags: ["React.js", "TypeScript", "Material UI", "Redux Toolkit", "API", "Git"],
    category: "Company",
    isLive: true,
    liveURL: "https://dev.web.apitestsuite.com/",
  },
  {
    id: 3,
    title: "Smart Notes",
    date: "December 2024",
    description:
      "A responsive note-taking app built with React.js, Material UI, and Redux Toolkit, offering a smooth user experience for creating and editing notes.",
    image: SmartNotes,
    tags: ["Full-Stack Application"],
    category: "Self",
    github: "https://github.com/alpha101001/SmartNotes-frontend",
    webapp: "https://github.com/alpha101001/SmartNotes-frontend",
    isLive: true,
    liveURL: "https://smart-notes-five.vercel.app/",
  },
  {
    id: 4,
    title: "Smart Notes Backend",
    date: "December 2024",
    description:
      "Backend for a note-taking app, developed using Express.js to ensure efficient data management and seamless functionality.",
    image: notAvailable,
    tags: ["Full-Stack Application"],
    category: "Self",
    github: "https://github.com/alpha101001/SmartNotes-backend",
    webapp: "https://github.com/alpha101001/SmartNotes-backend",
    isLive: false,
    liveURL: "https://smart-notes-five.vercel.app/",
  },
  {
    id: 5,
    title: "Portfolio",
    date: "September 2024",
    description:
      "A personal portfolio website showcasing my skills, projects, and experiences. Built with React.js, Material UI, and Three.js, it offers a visually appealing and interactive experience for visitors.",
    image: Portfolio,
    tags: ["Front-End"],
    category: "Self",
    github: "https://github.com/alpha101001/Portfolio",
    webapp: "https://github.com/alpha101001/Portfolio",
    isLive: true,
    liveURL: "https://alpha101001.github.io/Portfolio/",
  },
  {
    id: 6,
    title: "DBMS Project",
    date: "March 2022 - April 2022",
    description:
      "A comprehensive database project showcasing the versatility of SQL through a wide array of examples, demonstrating everything from basic queries to complex data manipulation and analytics techniques.",
    image: DBMSProject,
    tags: ["SQL"],
    category: "Self",
    github: "https://github.com/alpha101001/DBMS_Project",
    webapp: "https://github.com/alpha101001/DBMS_Project",
    isLive: false,
    liveURL: "",
  },
  {
    id: 7,
    title: "Blogging-Site",
    date: "April 2022 - May 2022",
    description:
      "A dynamic and user-friendly blogging platform designed for everyday bloggers. Built with ASP.NET and a MySQL database, offering a seamless experience for sharing and exploring a diverse range of blog posts.",
    image: BloggingSite,
    tags: ["C#", "MySQL", "ASP.NET"],
    category: "Self",
    github: "https://github.com/alpha101001/Blogging-Site-Web-Project---ASP.NET-",
    webapp: "https://github.com/alpha101001/Blogging-Site-Web-Project---ASP.NET-",
    isLive: false,
    liveURL: "",
  },
];

export const conferencePapers: Project[] = [
  {
    id: 0,
    title:
      "A Scalable Cross-Border Payment System based on Consortium Blockchain Ensuring Auditability",
    date: "2023",
    description:
      "First Author. This paper presents a scalable cross-border payment system based on a consortium blockchain that ensures auditability and transparency.",
    tags: ["Blockchain", "Solidity", "Polygon", "Thirdweb"],
    category: "Conference paper",
    paperLink: "https://ieeexplore.ieee.org/document/10427617",
  },
  {
    id: 1,
    title:
      "Sociala: An Incentivized Decentralized Social Media for Writers based on Blockchain using modified Delegated Proof of Stake | 10th International Conference on Networking, Systems and Security",
    date: "2023",
    description:
      "Third Author. This paper presents Sociala, a blockchain framework for writers that addresses decentralization challenges in social media. By using a modified DPoS algorithm, it enhances stability and mitigates vulnerabilities in existing systems.",
    tags: ["Blockchain", "Solidity"],
    category: "Conference paper",
    paperLink: "https://dl.acm.org/doi/10.1145/3629188.3629198",
  },
  {
    id: 2,
    title:
      "QEdu: A Quantum-Safe Blockchain Framework to Secure and Verify Educational Credentials",
    date: "2023",
    description:
      "Fourth Author. This paper presents QEdu, a consortium blockchain framework designed to secure educational credentials using quantum-safe Elgamal-like cryptography.",
    tags: ["Blockchain", "Solidity"],
    category: "Conference paper",
    paperLink: "https://ieeexplore.ieee.org/document/10441286",
  },
];

export const timelineData: Timeline[] = [];
