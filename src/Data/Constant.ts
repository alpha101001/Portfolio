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
import School from "../assets/School.png";
import SNR from "../assets/SNR.png";
import LYNORG from "../assets/LYNORG.png";
import Typescript from "../assets/Typescript.svg";
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
import Linux from "../assets/Linux.svg";
import Git from "../assets/Git.svg";
import AntDesign from "../assets/AntDesign.svg";
import GithubActions from "../assets/GithubActions.svg";
import AWS from "../assets/AWS.svg";
import ShadhinMusic from "../assets/ShadhinMusic.svg";
import LeetCode from "../assets/LeetCode.svg";
import TryHackMe from "../assets/TryHackMe.svg";
import Ethereum from "../assets/Ethereum.svg";
import SocketIO from "../assets/SocketIO.svg";
import RestAPI from "../assets/RestAPI.svg";
import AuthLock from "../assets/AuthLock.svg";
import Performance from "../assets/Performance.svg";
import SystemDesign from "../assets/SystemDesign.svg";
import Scalability from "../assets/Scalability.svg";
import ResumePdf from "../assets/AVISHEK_ROY.pdf";
import AgentSkills from "../assets/AgentSkills.svg";
import MCPTools from "../assets/MCPTools.svg";
import A2AIcon from "../assets/A2A.svg";
import AISDLC from "../assets/AISDLC.svg";
import SecurityAudit from "../assets/SecurityAudit.svg";
import ZustandIcon from "../assets/Zustand.svg";
import StyledComponentsIcon from "../assets/StyledComponents.svg";
import SQLBadge from "../assets/SQLBadge.svg";
import OperatingSystem from "../assets/OperatingSystem.svg";
import FreelanceLogo from "../assets/Freelance.svg";

export interface Bio {
  name: string;
  roleLine: string;
  headline: string;
  headlineAccent: string;
  valueProposition: string;
  roles: string[];
  description: string;
  email?: string;
  emailLabel: string;
  phone?: string;
  location: string;
  availability: string;
  snapshotTitle: string;
  snapshotSummary: string;
  proofPoints: {
    value: string;
    label: string;
    detail: string;
  }[];
  achievementHighlights: string[];
  leetcodeLabel: string;
  tryHackMeLabel: string;
  github: string;
  resume: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
}

export interface SkillItem {
  name: string;
  image?: string;
}

export interface Skill {
  title: string;
  skills: SkillItem[];
}

export interface Experience {
  id: number;
  image?: string;
  role: string;
  company: string;
  date: string;
  location?: string;
  description: string;
  impactBullets: string[];
  skills: string[];
  document?: string;
}

export interface Education {
  id: number;
  image: string;
  school: string;
  date: string;
  description: string;
  degree: string;
}

export interface ProjectMember {
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
  problem?: string;
  solution?: string;
  outcome?: string;
  image?: string;
  visualType?: "brand" | "screenshot";
  visualAccent?: "cyan" | "magenta" | "yellow" | "green";
  tags: string[];
  category: "Self" | "Company" | "Conference paper";
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
  roleLine: "AI-driven Software Engineer | React, Next.js, TypeScript",
  headline: "Secure, scalable React systems for product teams",
  headlineAccent: "product teams",
  valueProposition:
    "System-driven software engineer building production-ready React and Next.js systems with secure API integration, performance discipline, and AI-assisted SDLC practices.",
  roles: [
    "React/Next.js Interfaces",
    "Secure API Integration",
    "Performance & SEO",
    "AI-assisted SDLC",
  ],
  description:
    "Software engineer focused on scalable frontend systems, secure integrations, and product-minded delivery. I use AI-assisted workflows as a development accelerator while keeping code review, accessibility, security review, and production reliability at the center.",
  email: "csekuet.avi.053@gmail.com",
  emailLabel: "csekuet.avi.053@gmail.com",
  phone: "+8801318755423",
  location: "Dhaka, Bangladesh",
  availability: "Open to software engineering opportunities",
  snapshotTitle: "Capability snapshot",
  snapshotSummary: "Production performance, SEO scale, algorithms, and practical security growth.",
  proofPoints: [
    {
      value: "42 -> 85",
      label: "Lighthouse uplift",
      detail: "Performance optimization at Shadhin Music",
    },
    {
      value: "500+",
      label: "Discoverable pages",
      detail: "Dynamic rendering for SEO visibility",
    },
    {
      value: "130+",
      label: "LeetCode problems",
      detail: "DSA and algorithmic practice",
    },
    {
      value: "28+",
      label: "TryHackMe rooms",
      detail: "Practical cybersecurity learning",
    },
  ],
  achievementHighlights: ["CTF rank 48", "Math Olympiad rank 9"],
  leetcodeLabel: "x64bit",
  tryHackMeLabel: "64bitX",
  github: "https://github.com/alpha101001",
  resume: ResumePdf,
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
      { name: "Agent Skills", image: AgentSkills },
      { name: "MCP Tools", image: MCPTools },
      { name: "A2A", image: A2AIcon },
      { name: "Prompt Engineering", image: GoogleGemini },
      { name: "AI SDLC Management", image: AISDLC },
      { name: "AI-Assisted Security Audits", image: SecurityAudit },
    ],
  },
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", image: ReactIcon },
      { name: "Next.js", image: NextJs },
      { name: "Redux Toolkit", image: ReduxIcon },
      { name: "Zustand", image: ZustandIcon },
      { name: "Material UI", image: MaterialUi },
      { name: "Ant Design", image: AntDesign },
      { name: "Styled Components", image: StyledComponentsIcon },
      { name: "Tailwind CSS", image: TailwindCSS },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "TypeScript", image: Typescript },
      { name: "JavaScript", image: JavaScript },
      { name: "Go", image: Go },
      { name: "C++", image: Cpp },
      { name: "SQL", image: SQLBadge },
    ],
  },
  {
    title: "Systems Architecture & Integration",
    skills: [
      { name: "REST API Architecture", image: RestAPI },
      { name: "WebSockets", image: SocketIO },
      { name: "Node.js", image: NodeJs },
      { name: "Access Control", image: AuthLock },
      { name: "System Design", image: SystemDesign },
      { name: "Operating System Concepts", image: OperatingSystem },
      { name: "Scalability Validation", image: Scalability },
    ],
  },
  {
    title: "Databases, DevOps & Infrastructure",
    skills: [
      { name: "PostgreSQL", image: PostgreSQL },
      { name: "MongoDB", image: MongoDB },
      { name: "Docker", image: Docker },
      { name: "CI/CD Pipelines", image: GithubActions },
      { name: "Git & GitHub", image: Git },
      { name: "Linux", image: Linux },
      { name: "AWS (Basic)", image: AWS },
    ],
  },
  {
    title: "Core Engineering & Security",
    skills: [
      { name: "Data Structures & Algorithms", image: LeetCode },
      { name: "Cybersecurity Principles", image: TryHackMe },
      { name: "Performance Optimization", image: Performance },
      { name: "Blockchain Principles", image: Ethereum },
    ],
  },
  {
    title: "Product Engineering & Testing",
    skills: [
      { name: "Product Thinking" },
      { name: "Code Review" },
      { name: "Debugging" },
      { name: "Accessibility" },
      { name: "Quality Assurance" },
      { name: "Performance Budgets", image: Performance },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 0,
    image: ShadhinMusic,
    role: "Software Engineer",
    company: "Shadhin Music",
    date: "August 2025 - Present",
    location: "On-site, Bangladesh",
    description:
      "Performance-focused product engineering for a Next.js music platform with SEO, rendering, and frontend reliability work.",
    impactBullets: [
      "Improved Google Lighthouse score from 42 to 85 through performance and rendering optimization.",
      "Increased discoverable pages from 2 to 500+ with dynamic rendering systems.",
      "Built secure, responsive features with Zustand state management and backend API integration.",
      "Used AI-assisted workflows to accelerate delivery while preserving code review discipline.",
    ],
    skills: ["Next.js", "JavaScript", "Tailwind CSS", "Zustand", "SEO", "AI-assisted Development"],
  },
  {
    id: 1,
    image: LYNORG,
    role: "Software Engineer",
    company: "LynOrg Technologies Limited",
    date: "January 2025 - July 2025",
    location: "On-site, Bangladesh",
    description:
      "Enterprise interface work for ERP workflows, dashboards, large datasets, and real-time operational screens.",
    impactBullets: [
      "Built ERP dashboards and data-heavy interfaces with React, TypeScript, and Ant Design.",
      "Implemented WebSocket-powered real-time features for synchronized operational workflows.",
      "Integrated and tested REST APIs with backend engineers across enterprise modules.",
      "Optimized rendering paths for large datasets and complex component trees.",
    ],
    skills: ["React.js", "TypeScript", "Ant Design", "WebSockets", "Redux Toolkit", "REST API"],
  },
  {
    id: 2,
    image: SNR,
    role: "Software Engineer",
    company: "Sense & Response Software LLC",
    date: "June 2024 - December 2024",
    location: "Remote, USA",
    description:
      "React and TypeScript application delivery with stronger standards, security-minded review, and responsiveness improvements.",
    impactBullets: [
      "Built and maintained scalable React applications with TypeScript and Material UI.",
      "Strengthened ESLint and security practices to reduce production bug risk.",
      "Improved loading behavior and responsiveness with code splitting and architecture cleanup.",
      "Used AI-assisted debugging workflows to speed up issue isolation and fixes.",
    ],
    skills: ["React.js", "TypeScript", "Material UI", "Redux Toolkit", "ESLint", "REST API"],
  },
  {
    id: 3,
    image: FreelanceLogo,
    role: "Frontend Developer (Web)",
    company: "Freelance",
    date: "June 2022 - May 2024",
    location: "Remote, USA",
    description:
      "Remote client delivery across full SDLC ownership, secure frontend implementation, component architecture, and maintainability.",
    impactBullets: [
      "Managed the complete SDLC for individual remote clients.",
      "Translated business requirements into scalable, secure web applications.",
      "Designed custom component architectures and secure client-side features.",
      "Performed extensive debugging to improve maintainability across client-facing delivery cycles.",
    ],
    skills: ["React.js", "JavaScript", "HTML/CSS", "Secure Client-side Features", "SDLC Management"],
  },
];

export const education: Education[] = [
  {
    id: 0,
    image: KUETLogoVector,
    school: "Khulna University of Engineering & Technology, Khulna",
    date: "2019 - 2024",
    description:
      "I earned a Bachelor's degree in Computer Science and Engineering.",
    degree: "Bachelor of Science - BSc, Computer Science and Engineering",
  },
  {
    id: 1,
    image: NotreDameCollegeDhaka,
    school: "Notre Dame College, Dhaka",
    date: "2016 - 2018",
    description:
      "I completed my intermediate education at Notre Dame College, Dhaka, where I studied Science.",
    degree: "Higher Secondary Certificate - HSC, Science",
  },
  {
    id: 2,
    image: School,
    school: "Seroil Govt. High School, Rajshahi",
    date: "2016",
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
      "Performance and SEO work for a production Next.js music platform.",
    problem: "Slow performance and a small SEO surface limited organic growth.",
    solution:
      "Optimized rendering, state management, and dynamic page generation.",
    outcome:
      "Lighthouse improved from 42 to 85, and discoverable pages increased from 2 to 500+.",
    image: ShadhinMusic,
    visualType: "brand",
    visualAccent: "cyan",
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "Zustand", "SEO"],
    category: "Company",
    isLive: false,
    liveURL: "",
  },
  {
    id: 2,
    title: "All Things API – Codebase Modernization",
    date: "",
    description:
      "Modernization work for a remote company management codebase.",
    problem:
      "Legacy modules needed consistency, reusable UI, and safer role-based flows.",
    solution:
      "Added standards, reusable components, i18n support, and role-based authentication.",
    outcome:
      "Reduced bug risk and made the application easier to extend across management workflows.",
    image: AllThingAPI,
    visualType: "brand",
    visualAccent: "magenta",
    tags: ["React.js", "TypeScript", "Material UI", "Redux Toolkit", "REST API", "Git"],
    category: "Company",
    isLive: true,
    liveURL: "https://dev.web.apitestsuite.com/",
  },
  {
    id: 1,
    title: "UI for Lynorg Workflow – Real-Time ERP Interface",
    date: "January 2025 - July 2025",
    description:
      "Real-time ERP interface work for enterprise operational workflows.",
    problem:
      "ERP users needed responsive dashboards and synchronized data views.",
    solution:
      "Built data-heavy React screens with REST integration and WebSocket updates.",
    outcome:
      "Delivered faster operational screens with real-time workflow visibility and cleaner dashboard interactions.",
    visualAccent: "yellow",
    tags: ["React.js", "JavaScript", "Ant Design", "Material UI", "Redux Toolkit", "WebSockets"],
    category: "Company",
    isLive: false,
    liveURL: "",
  },
  {
    id: 5,
    title: "Portfolio",
    date: "September 2024",
    description:
      "Static personal portfolio built to present engineering work, projects, and professional context.",
    problem:
      "The portfolio needed to communicate engineering credibility quickly.",
    solution:
      "Built a static Vite and React site with accessible sections and GitHub Pages deployment.",
    outcome:
      "Creates a maintainable recruiting surface for experience, skills, projects, research, education, and contact.",
    image: Portfolio,
    visualType: "screenshot",
    visualAccent: "green",
    tags: ["React.js", "TypeScript", "Styled Components", "Vite"],
    category: "Self",
    github: "https://github.com/alpha101001/Portfolio",
    webapp: "https://github.com/alpha101001/Portfolio",
    isLive: true,
    liveURL: "https://alpha101001.github.io/Portfolio/",
  },
  {
    id: 3,
    title: "Smart Notes",
    date: "December 2024",
    description:
      "Responsive note-taking application for creating and editing notes.",
    problem:
      "Users needed a simple note workflow with predictable state handling.",
    solution:
      "Built the frontend with React.js, Material UI, and Redux Toolkit.",
    outcome:
      "Provides a clean personal productivity interface with live deployment and source code available.",
    image: SmartNotes,
    visualType: "screenshot",
    visualAccent: "cyan",
    tags: ["React.js", "Material UI", "Redux Toolkit", "Responsive UI"],
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
      "Backend service for the Smart Notes application.",
    problem:
      "The note-taking frontend needed a service layer for data management.",
    solution:
      "Developed an Express.js backend to support the note workflow.",
    outcome:
      "Complements the Smart Notes frontend with a separated backend codebase.",
    visualAccent: "magenta",
    tags: ["Express.js", "Backend", "REST API"],
    category: "Self",
    github: "https://github.com/alpha101001/SmartNotes-backend",
    webapp: "https://github.com/alpha101001/SmartNotes-backend",
    isLive: false,
    liveURL: "https://smart-notes-five.vercel.app/",
  },
  {
    id: 6,
    title: "DBMS Project",
    date: "March 2022 - April 2022",
    description:
      "SQL project covering query patterns, data manipulation, and analytics examples.",
    problem:
      "The project needed to demonstrate database fundamentals through SQL examples.",
    solution:
      "Implemented queries from basic retrieval to manipulation and analytics.",
    outcome:
      "Shows database fundamentals that support backend and data-driven application work.",
    image: DBMSProject,
    visualType: "screenshot",
    visualAccent: "yellow",
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
      "Blogging platform built with ASP.NET and MySQL.",
    problem:
      "Everyday bloggers needed a simple platform for sharing posts.",
    solution:
      "Built a dynamic blogging site with ASP.NET and a MySQL database.",
    outcome:
      "Documents earlier full-stack fundamentals across server-rendered UI and relational data.",
    image: BloggingSite,
    visualType: "screenshot",
    visualAccent: "green",
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
