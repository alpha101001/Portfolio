import React from "react";
interface Education {
    image: string;
    school: string;
    degree: string;
    date: string;
    grade?: string;
    desc?: string;
}
interface EducationCardProps {
    education: Education;
}
declare const EducationCard: React.FC<EducationCardProps>;
export default EducationCard;
