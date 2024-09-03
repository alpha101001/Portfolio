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

const InstitutionNameDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #02f3f7;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const GainedDegreeNameDiv = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #02f3f7;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const EducationTimelineDiv = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #c95f9b;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

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

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
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
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={education?.date}
    >
      <ContentCardTopSectionDiv>
        <Image src={education?.image} />
        <TopSectionBodyDiv>
          <InstitutionNameDiv>{education?.school}</InstitutionNameDiv>
          <GainedDegreeNameDiv>{education?.degree}</GainedDegreeNameDiv>
          <EducationTimelineDiv>{education?.date}</EducationTimelineDiv>
        </TopSectionBodyDiv>
      </ContentCardTopSectionDiv>
      {education?.grade && (
        <Grade>
          <b>Grade : </b>
          {education.grade}
        </Grade>
      )}
      <Description>
        {education?.desc && <Span>{education.desc}</Span>}
      </Description>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
