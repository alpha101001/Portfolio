import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled, { keyframes } from "styled-components";
import { education } from "../../Data/Constant";
import EducationCard from "../Cards/EducationCard";
const NeonColorEffect = keyframes`
  0%, 100% {
    text-shadow: 0 0 4px #7f03fc, 0 0 8px #7f03fc, 0 0 12px #03eeff;
  }
  50% {
    text-shadow: 0 0 2px #1303fc, 0 0 4px #03eeff, 0 0 6px #03eeff;
  }
`;

const ParentContainerDiv = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  
`;

const ChildContainerDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
    
`;

const TitleDiv = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: #fc03d7;
  animation: ${NeonColorEffect} 3s infinite alternate;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }    
`;

const EducationDescriptionDiv = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Education: React.FC = () => {
  return (
    <ParentContainerDiv id="Education">
      <ChildContainerDiv>
        <TitleDiv>Education</TitleDiv>
        <EducationDescriptionDiv
          style={{
            marginLeft: "40px",
            marginRight: "40px",
            // marginBottom: "40px",
          }}
        >
          My education has been a journey of self-discovery and growth. My
          educational details are as follows:
        </EducationDescriptionDiv>

        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>

      </ChildContainerDiv>
    </ParentContainerDiv>
  );
};

export default Education;
