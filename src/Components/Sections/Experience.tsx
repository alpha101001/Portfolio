import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled, { keyframes } from "styled-components";
import { experiences } from "../../Data/Constant";
import ExperienceCard from "../Cards/ExperienceCard";
const NeonColorEffect = keyframes`
  0%, 100% {
    text-shadow: 0 0 4px #7f03fc, 0 0 8px #7f03fc, 0 0 12px #03eeff;
  }
  50% {
    text-shadow: 0 0 2px #1303fc, 0 0 4px #03eeff, 0 0 6px #03eeff;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
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

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Experience: React.FC = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <TitleDiv>Experience</TitleDiv>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          My work experience as a software engineer and currently working on here.
        </Desc>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
