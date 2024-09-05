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
    skills: {
        name: string;
        image?: string;
    }[];
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
}
export interface Timeline {
    year: number;
    text: string;
}
export declare const bio: Bio;
export declare const skills: Skill[];
export declare const experiences: Experience[];
export declare const education: Education[];
export declare const projects: Project[];
export declare const conferencePapers: Project[];
export declare const timelineData: Timeline[];
export {};
