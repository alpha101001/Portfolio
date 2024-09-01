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
  skills: { name: string; image: string }[];
}

interface Experience {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
  document?: string;
}

interface Education {
  id: number;
  img: string;
  school: string;
  date: string;
  grade: string;
  description: string;
  degree: string;
}

interface ProjectMember {
  name: string;
  img: string;
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
    "Full Stack Developer",
    "Blockchain Enthusiast",
    "Problem Solver",
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
        image:
          "https://drive.google.com/file/d/1UblA460QFYWvgAxGXwYP31y82fuQXYdr/view?usp=sharing",
      },
      {
        name: "Redux.js",
        image:
          "https://drive.google.com/file/d/11zhljGzfCmR93QFlsHHWnrg-Pm84W7nL/view?usp=sharing",
      },
      {
        name: "Three.js",
        image:
          "https://drive.google.com/file/d/1S9waVZ3AIqwaugEi-1isx-PQX8f3kgq3/view?usp=sharing",
      },
      {
        name: "Material UI",
        image:
          "https://drive.google.com/file/d/1Rr0zI1XDjYZPFLtC64u4U7tw6G6liFgP/view?usp=sharing",
      },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/neurobit.jpeg?alt=media&token=1cacbb7b-e5ea-4efb-9b3d-f5a31b9564ad",
    role: "Software Engineer",
    company: "Sense & Respond Software LLC",
    date: "June 2024 - Present",
    description:
      "Enhanced user experiences and developed skills while working at Sense & Respond Software LLC.",
    skills: ["React.js", "Redux", "Material UI", "HTML", "CSS", "TypeScript"],
  },

  // Add other experiences similarly
];

export const education: Education[] = [
  {
    id: 0,
    img: "https://drive.google.com/file/d/1nye5e2cEaQNiyR422RXB7mnpY3ryJlP7/view?usp=sharing",
    school: "Khulna University of Engineering & Technology, Khulna",
    date: "2018 - 2023",
    grade: "2.91 CGPA",
    description:
      "I earned a Bachelor's degree in Computer Science and Engineering.",
    degree: "Bachelor of Science - BSc, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://drive.google.com/file/d/1D1L1W6KhyEk8-_yxZld0fKMMjFks2z3C/view?usp=sharing",
    school: "Notre Dame College, Dhaka",
    date: "2016 - 2018",
    grade: "5 GPA",
    description:
      "I completed my intermediate education at Notre Dame College, Dhaka, where I studied Science.",
    degree: "Higher Secondary Certificate - HSC, Science",
  },
  {
    id: 2,
    img: "https://drive.google.com/file/d/1-FA4TsU261g4e5K8V-kTCzj4qMvDSYbl/view?usp=sharing",
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
    image:
      "https://drive.google.com/file/d/1j73FhCzWVmZRE5kphd61TV2yKm16Ni8X/view?usp=sharing",
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
    image:
      "https://drive.google.com/file/d/1_woDeh-edr1MeXTmLRL3fo9KaapjO9Cd/view?usp=sharing",
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
