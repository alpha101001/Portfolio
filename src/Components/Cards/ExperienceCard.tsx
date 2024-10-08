import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const ContentCardTopSectionDiv = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
  
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const TopSectionBodyDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

const RoleInWorkPlaceDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #02f3f7;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const CompanyNameDiv = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #02f3f7;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const WorkTimelineDiv = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #A0C4FF;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const CompanyDescription = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: #AFC6C7;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const SkillSectionDiv = styled.div`
  color: rgba(201, 50, 128, 1);
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const SkillSectionGrandChildDiv = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #02fa40;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const SkillSectionChildDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

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

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement

      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#02f3f7",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(201, 50, 128, 0.4)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "15px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={experience?.date}
    >
      <ContentCardTopSectionDiv>
        <Image src={experience?.image} />
        <TopSectionBodyDiv>
          <RoleInWorkPlaceDiv>{experience?.role}</RoleInWorkPlaceDiv>
          <CompanyNameDiv>{experience?.company}</CompanyNameDiv>
          <WorkTimelineDiv>{experience?.date}</WorkTimelineDiv>
        </TopSectionBodyDiv>
      </ContentCardTopSectionDiv>
      <CompanyDescription>
        {experience?.description && <Span>{experience.description}</Span>}
        {experience?.skills && (
          <>
            <br />
            <SkillSectionDiv>
              <b>Skills</b>
              <SkillSectionChildDiv>
                {experience?.skills?.map((skill, index) => (
                  <SkillSectionGrandChildDiv key={index}>💥 {skill}</SkillSectionGrandChildDiv>
                ))}
              </SkillSectionChildDiv>
            </SkillSectionDiv>
          </>
        )}
      </CompanyDescription>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
