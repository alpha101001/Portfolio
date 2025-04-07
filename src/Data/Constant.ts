import ReactIcon from "../assets/ReactIcon.svg";
import ReduxIcon from "../assets/ReduxIcon.svg";
import ThreeIcon from "../assets/ThreeIcon.svg";
import MaterialUi from "../assets/MaterialUI.svg";
import BloggingSite from "../assets/BloggingSite.png";
import DBMSProject from "../assets/DBMSProject.png";
import KUETLogoVector from "../assets/KUETLogoVector.svg";
import NotreDameCollegeDhaka from "../assets/NotreDameCollegeDhaka.svg";
import AllThingAPI from "../assets/companyProject.png";
import SmartNotes from "../assets/SmartNotes.png";
import Portfolio from "../assets/Portfolio.png";
import notAvailable from "../assets/notAvailable.png";
import ExpressJs from "../assets/icons8-express-js.svg";

import School from "../assets/School.png";
import SNR from "../assets/SNR.png";
import LYNORG from "../assets/LYNORG.png";
import Typescript from "../assets/Typescript.svg";
// import Cpp from "../assets/cpp.svg";
// import CSharp from "../assets/CSharp.svg";
import Python from "../assets/Python.svg";
import Solidity from "../assets/Solidity.svg";
// import SQL from "../assets/SQL.svg";
// import Database from "../assets/Database.svg";
import SymmetricKeyCryptography from "../assets/SymmetricKeyCryptography.png";
import AsymmetricKeyCryptography from "../assets/AsymmetricKeyCryptography.png";
import HashFunctions from "../assets/HashFunctions.png";
import DigitalSignatures from "../assets/DigitalSignatures.png";
import BlockchainCryptography from "../assets/BlockchainCryptography.png";
import KeyManagement from "../assets/KeyManagement.png";
import ZeroKnowledgeProofs from "../assets/ZeroKnowledgeProof.svg";
import ECC from "../assets/ECC.svg";
import WindowsOS from "../assets/WindowsOS.svg";
import ParrotOS from "../assets/ParrotOS.png";
import KaliLinuxOS from "../assets/KaliLinuxOS.svg";
import FedoraOS from "../assets/FedoraOS.svg";
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
    'Full Stack Enthusiast',
    "Blockchain Enthusiast",
    "Problem Solver",
    "Frontend Developer",
    "Programmer",
  ],
  description:
    "I am an enthusiastic Full Stack Developer specializing in React, TypeScript, Redux, and Material UI, now expanding into backend engineering and AWS-based solutions. With Docker foundations and a passion for building secure, scalable systems, I merge front-end excellence with cloud readiness. Driven, adaptable, and fueled by a growth mindset, I embrace challenges, collaborate effectively, and consistently deliver high-quality results.",
  github: "https://github.com/alpha101001",
  resume:
    "https://avi-12.s3.us-east-1.amazonaws.com/Avishek_Roy.pdf",
  linkedin: "https://www.linkedin.com/in/avishek-roy-/",
  facebook: "https://www.facebook.com/king101001/",
};

export const skills: Skill[] = [
  {
    title: "Tech Stack",
    skills: [
      {
        name: "React.js",
        image: ReactIcon,
      },
      {
        name: "Redux Toolkit",
        image: ReduxIcon,
      },
      {
        name: "Three.js",
        image: ThreeIcon,
      },
      {
        name: "Material UI",
        image: MaterialUi,
      },
      {
        name: "Express.js",
        image: ExpressJs,
      },
      {
        name: "Ant Design",
      //   image: ExpressJs,
      },
      {
        name: "Node.js",
      //   image: ExpressJs,
      },
       {
        name: "R&D",
      //   image: ExpressJs,
      },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      {
        name: "TypeScript",
        image: Typescript,
      },
      // {
      //   name: "C++",
      //   image: Cpp,
      // },
      // {
      //   name: "C#",
      //   image: CSharp,
      // },
      // {
      //   name: "Python",
      //   image: Python,
      // },
      {
        name: "Solidity",
        image: Solidity,
      },
      // {
      //   name: "SQL",
      //   image: SQL,
      // },
    ],
  },
//   {
//     title: "Database Knowledge",
//     skills: [
//       {
//         name: "Database Management System",
//         image: Database,
//       },
//     ],
//   },
  {
    title: "Practical Knowledge in Operating Systems",
    skills: [
      {
        name: "Microsoft Windows",
        image: WindowsOS,
      },
      {
        name: "Parrot Security OS",
        image: ParrotOS,
      },
      {
        name: "Fedora Linux",
        image: FedoraOS,
      },
      {
        name: "Kali Linux",
        image: KaliLinuxOS,
      },
    ],
  },
  {
    title: "Cryptography Knowledge",
    skills: [
      {
        name: "Symmetric Key Cryptography",
        image: SymmetricKeyCryptography, // Replace with appropriate image asset
      },
      {
        name: "Asymmetric Key Cryptography",
        image: AsymmetricKeyCryptography, // Replace with appropriate image asset
      },
      {
        name: "Hash Functions",
        image: HashFunctions, // Replace with appropriate image asset
      },

      {
        name: "Digital Signatures",
        image: DigitalSignatures, // Replace with appropriate image asset
      },
      {
        name: "Blockchain Cryptography",
        image: BlockchainCryptography, // Replace with appropriate image asset
      },
      {
        name: "Key Management",
        image: KeyManagement, // Replace with appropriate image asset
      },
      {
        name: "Elliptic Curve Cryptography (ECC)",
        image: ECC, // Replace with appropriate image asset
      },

      {
        name: "Zero-Knowledge Proofs",
        image: ZeroKnowledgeProofs, // Replace with appropriate image asset
      },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 0,
    image: SNR,
    role: "Software Engineer",
    company: "Sense & Respond Software LLC",
    date: "June 2024 - December 2024",
    description:
      "Contributed to the development of 'All Things API', a comprehensive remote company management system that  provides a remote workplace operations and communication.",
    skills: ["React.js", "Redux Toolkit", "Material UI", "TypeScript", "API Integration"],
  },
  {
    id: 1,
    image: LYNORG,
    role: "Software Engineer",
    company: "LynOrg Technologies Limited",
    date: "January 2025 - Present",
    description:
      "Working on multiple ERP solution projects, implementing business systems with integrated functionalities for enterprise resource planning and management.",
    skills: ["React.js", "Redux Toolkit", "Ant Design", "JavaScript", "API Integration"],
  },

  // Add other experiences similarly
];

export const education: Education[] = [
  {
    id: 0,
    image: KUETLogoVector,
    school: "Khulna University of Engineering & Technology, Khulna",
    date: "2018 - 2023",
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
  // Add other education similarly
];

export const projects: Project[] = [
   {
      id: 0,
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
      liveURL:"https://smart-notes-five.vercel.app/",
    },
    {
      id: 1,
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
      liveURL:"https://smart-notes-five.vercel.app/",
    },
    {
      id: 2,
      title: "All Thing API",
      date: "",
      description:
        "In the employment of my previous job, I worked on this project.In here, I fixed all ESLint errors across the codebase, ensuring consistent coding standards and maintainability with TypeScript, integrated i18n to implement multi-language support and resolved critical UI/functional bugs for improved user experience. Developed reusable React with Material UI components and implemented role-based authentication in key application modules.",
      image: AllThingAPI,
      tags: ["React.js", "TypeScript", "Material UI","Redux Toolkit","API","Git"],
      category: "Company",
      github: "",
      webapp: "",
      isLive: true,
      liveURL:"https://dev.web.apitestsuite.com/",
    },
    {
      id: 3,
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
      liveURL:"https://alpha101001.github.io/Portfolio/",
    },
  {
    id: 4,
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
    liveURL:"",
  },
  {
    id: 5,
    title: "Blogging-Site",
    date: "April 2022 - May 2022",
    description:
      "A dynamic and user-friendly blogging platform designed for everyday bloggers. Built with ASP.NET and a MySQL database, offering a seamless experience for sharing and exploring a diverse range of blog posts.",
    image: BloggingSite,
    tags: ["C#     ", "MySQL     ", "ASP.NET     "],
    category: "Self",
    github:
      "https://github.com/alpha101001/Blogging-Site-Web-Project---ASP.NET-",
    webapp:
      "https://github.com/alpha101001/Blogging-Site-Web-Project---ASP.NET-",
      isLive: false,
      liveURL:"",
  },

  // Add other projects similarly
];

export const conferencePapers: Project[] = [
  {
    id: 0,
    title:
      "A Scalable Cross-Border Payment System based on Consortium Blockchain Ensuring Auditability",
    date: "2023",
    description:
      "Conference paper on Blockchain Technology. This paper presents a scalable cross-border payment system based on a consortium blockchain that ensures auditability and transparency.",
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
      "Conference paper on Blockchain Technology. This paper presents Sociala, a blockchain framework for writers that addresses decentralization challenges in social media. By using a modified DPoS algorithm, it enhances stability and mitigates vulnerabilities in existing systems.",
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
      "This paper presents QEdu, a consortium blockchain framework designed to secure educational credentials using quantum-safe Elgamal-like cryptography. It evaluates the vulnerability of existing blockchain architectures in education to quantum attacks and highlights the need for quantum-resistant solutions, demonstrating the effectiveness of the proposed approach.",
    tags: ["Blockchain", "Solidity"],
    category: "Conference paper",
    paperLink: "https://ieeexplore.ieee.org/document/10441286",
  },
];

export const timelineData: Timeline[] = [

//   {
//     year: 2016,
//     text: "Started Higher Secondary education at Notre Dame College.",
//   },
//   {
//     year: 2018,
//     text: "Another phase change occurred, and I started my undergraduate studies at KUET, going through a challenging period for 3 years alongside my BSc in CSE.",
//   },
//   { year: 2022, text: "Returned to my passion for the pursuit of knowledge." },
//   { year: 2023, text: "Achieved 3 conference papers related to my thesis." },
//   {
//     year: 2024,
//     text: "Entered a new phase and began my journey as a Software Engineer at Sense & Respond Software LLC.",
//   },
];
