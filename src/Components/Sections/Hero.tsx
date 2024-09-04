import React from "react";
import styled from "styled-components";
import { bio as Bio } from "../../Data/Constant";
import Typewriter from "typewriter-effect";
import ProfilePic from "../../images/Avi.png";
import HeroAnimation from "../HeroAnimation/HeroAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../Utils/Motion";
import StarCanvas from "../Canvas/Stars";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const ParentOfLeftAndRightDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftSideDiv = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;

const RightSideDiv = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const CustomTitleDiv = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: auto;
  color: #05dff7;
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 40px;
  margin-bottom: 42px;
  color: #cfc6c8;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 35px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 100%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    300deg,
    hsla(271, 100%, 50%, 1) 30%,
    hsla(294, 100%, 50%, 1) 70%
  );
  background: -moz-linear-gradient(
    300deg,
    hsla(271, 100%, 50%, 1) 30%,
    hsla(294, 100%, 50%, 1) 70%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 20%,
    hsla(294, 100%, 50%, 1) 80%
  );
  box-shadow: 0px 15px 30px #18717a, -0px -0px 50px #18717a;
  border-radius: 90px;
  font-weight: 900;
  font-size: 20px;

  &:hover {
    transform: scale(1.19);
    transition: all 0.4s ease-in-out;
    box-shadow: 0px 0px 50px #18717a;
    filter: brightness(1.1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
  color: white;
`;

const CustomImageViewer = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid #8A0D5E;

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const Hero: React.FC = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <ParentOfLeftAndRightDiv>
            <LeftSideDiv>
              <motion.div {...headTextAnimation}>
                <CustomTitleDiv>
                  Hi, I am <br /> {Bio.name}
                </CustomTitleDiv>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                        delay: 80,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <ResumeButton href={Bio.resume} target="_blank">
                Check Resume
              </ResumeButton>
            </LeftSideDiv>
            <RightSideDiv>
              <motion.div {...headContentAnimation}>
                <Tilt options={{ speed: 1000, scale: 1.3, transition: true }}>
                  <CustomImageViewer src={ProfilePic} alt="Rishav Chanda" />
                </Tilt>
              </motion.div>
            </RightSideDiv>
          </ParentOfLeftAndRightDiv>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
