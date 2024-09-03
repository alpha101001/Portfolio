import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled, { keyframes } from "styled-components";
import { timelineData } from "../../Data/Constant";
import KnowMeCard from "../Cards/KnowMeCard";
import EarthCanvas from "../Canvas/Earth";

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

const AboutDiv = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const KnowMe: React.FC = () => {
  return (
    <Container id="KnowMe">
      <Wrapper>
        <TitleDiv>Know Me A Little</TitleDiv>
        <AboutDiv
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            marginBottom: "40px",
          }}
        >
          With a balance of introversion and extroversion, I am always eager to expand my knowledge. Know my timeline:
        </AboutDiv>

        <VerticalTimeline>
          {timelineData.map((timeline, index) => (
            <KnowMeCard
              key={`timelineData-${index}`}
              timelineData={timeline}
            />
          ))}
        </VerticalTimeline>
        <EarthCanvas />
      </Wrapper>
    </Container>
  );
};

export default KnowMe;
