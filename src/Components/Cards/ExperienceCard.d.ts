import React from "react";
interface Experience {
    image: string;
    company: string;
    role: string;
    date: string;
    description?: string;
    skills?: string[];
}
interface ExperienceCardProps {
    experience: Experience;
}
declare const ExperienceCard: React.FC<ExperienceCardProps>;
export default ExperienceCard;
