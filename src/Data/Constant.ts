import ReactIcon from "../assets/ReactIcon.svg";
import ReduxIcon from "../assets/ReduxIcon.svg";
import ThreeIcon from "../assets/ThreeIcon.svg";
import MaterialUi from "../assets/MaterialUI.svg";
import BloggingSite from "../assets/BloggingSite.png";
import DBMSProject from "../assets/DBMSProject.png";
import KUETLogoVector from "../assets/KUETLogoVector.svg";
import NotreDameCollegeDhaka from "../assets/NotreDameCollegeDhaka.svg";
import School from "../assets/School.png";
import SNR from "../assets/SNR.png";
import Typescript from "../assets/Typescript.svg";
import Cpp from "../assets/cpp.svg";
import CSharp from "../assets/CSharp.svg";
import Python from "../assets/Python.svg";
import Solidity from "../assets/Solidity.svg";
import SQL from "../assets/SQL.svg";
import Database from "../assets/Database.svg";
import SymmetricKeyCryptography from "../assets/SymmetricKeyCryptography.png";
import AsymmetricKeyCryptography from "../assets/AsymmetricKeyCryptography.png";
import HashFunctions from "../assets/HashFunctions.png";
import DigitalSignatures from "../assets/DigitalSignatures.png";
import BlockchainCryptography from "../assets/BlockchainCryptography.png";
import KeyManagement from "../assets/KeyManagement.png";
import ZeroKnowledgeProofs from "../assets/ZeroKnowledgeProof.svg";
import ECC from "../assets/ECC.svg";
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
  grade: string;
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
}

interface Timeline {
  year: number;
  text: string;
}

export const bio: Bio = {
  name: "Avishek Roy",
  roles: [
    "Software Engineer",
    "Blockchain Enthusiast",
    "Problem Solver",
    "Full Stack Developer",
    "Programmer",
  ],
  description:
    "I am a driven and adaptable individual, consistently eager to embrace new challenges. My passion for learning fuels my commitment to delivering high-quality results. With a positive attitude and a growth mindset, I am prepared to make a meaningful impact and achieve remarkable success.",
  github: "https://github.com/alpha101001",
  resume:
    "https://drive.google.com/file/d/13wzTmpeVl-Ql5fZ2kPz26yS1jWL6WaGg/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/avishek-roy-/",
  facebook: "https://www.facebook.com/king101001/",
};

export const skills: Skill[] = [
  {
    title: "Frontend",
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
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      {
        name: "TypeScript",
        image: Typescript,
      },
      {
        name: "C++",
        image: Cpp,
      },
      {
        name: "C#",
        image: CSharp,
      },
      {
        name: "Python",
        image: Python,
      },
      {
        name: "Solidity",
        image: Solidity,
      },
      {
        name: "SQL",
        image: SQL,
      },
    ],
  },
  {
    title: "Database Knowledge",
    skills: [
      {
        name: "Database Management System",
        image: Database,
      },
    ],
  },
  {
    title: "Cryptography",
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
    date: "June 2024 - Present",
    description:
      "Enhancing user experiences and developing skills while working at Sense & Respond Software LLC.",
    skills: [
      "React.js",
      "Redux Toolkit",
      "Material UI",
      "HTML",
      "CSS",
      "TypeScript",
      "API",
    ],
  },

  // Add other experiences similarly
];

export const education: Education[] = [
  {
    id: 0,
    image: KUETLogoVector,
    school: "Khulna University of Engineering & Technology, Khulna",
    date: "2018 - 2023",
    grade: "2.91 CGPA",
    description:
      "I earned a Bachelor's degree in Computer Science and Engineering.",
    degree: "Bachelor of Science - BSc, Computer Science and Engineering",
  },
  {
    id: 1,
    image: NotreDameCollegeDhaka,
    school: "Notre Dame College, Dhaka",
    date: "2016 - 2018",
    grade: "5 GPA",
    description:
      "I completed my intermediate education at Notre Dame College, Dhaka, where I studied Science.",
    degree: "Higher Secondary Certificate - HSC, Science",
  },
  {
    id: 2,
    image: School,
    school: "Seroil Govt. High School, Rajshahi",
    date: "2016",
    grade: "5 GPA",
    description:
      "I completed my secondary education at Seroil Govt. High School, Rajshahi, where I studied Science.",
    degree: "Secondary School Certificate - SSC, Science",
  },
  // Add other education similarly
];

export const projects: Project[] = [
  {
    id: 0,
    title: "DBMS Project",
    date: "March 2022 - April 2022",
    description:
      "A comprehensive database project showcasing the versatility of SQL through a wide array of examples, demonstrating everything from basic queries to complex data manipulation and analytics techniques.",
    image: DBMSProject,
    tags: ["SQL"],
    category: "Terminal app",
    github: "https://github.com/alpha101001/DBMS_Project",
    webapp: "https://github.com/alpha101001/DBMS_Project",
  },
  {
    id: 1,
    title: "Blogging-Site",
    date: "April 2022 - May 2022",
    description:
      "A dynamic and user-friendly blogging platform designed for everyday bloggers. Built with ASP.NET and a MySQL database, offering a seamless experience for sharing and exploring a diverse range of blog posts.",
    image: BloggingSite,
    tags: ["C#", "MySQL", "ASP.NET"],
    category: "Web app",
    github:
      "https://github.com/alpha101001/Blogging-Site-Web-Project---ASP.NET-",
    webapp:
      "https://github.com/alpha101001/Blogging-Site-Web-Project---ASP.NET-",
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

  // Add other projects similarly
];

export const timelineData: Timeline[] = [
  { year: 2014, text: "Started my journey of learning." },
  {
    year: 2016,
    text: "Phase changed and started college education at NDC, where I learned about psychological aspects of life alongside my HSC education.",
  },
  {
    year: 2018,
    text: "Another phase change occurred, and I started my undergraduate studies at KUET, going through a challenging period for 3 years alongside my BSc in CSE.",
  },
  { year: 2022, text: "Returned to my passion for the pursuit of knowledge." },
  { year: 2023, text: "Achieved 3 conference papers related to my thesis." },
  {
    year: 2024,
    text: "Entered a new phase and began my journey as a Software Engineer at Sense & Respond Software LLC.",
  },
];
