import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { projects } from "../../Data/Constant";
import ProjectCard from "../Cards/ProjectCard";

const NeonColorEffect = keyframes`
  0%, 100% {
    text-shadow: 0 0 4px #7f03fc, 0 0 8px #7f03fc, 0 0 12px #03eeff;
  }
  50% {
    text-shadow: 0 0 2px #1303fc, 0 0 4px #03eeff, 0 0 6px #03eeff;
  }
`;
const ParentContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 0px 16px;
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

const ProjectDescriptionDiv = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
    
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const ToggleButton = styled.div<{ $active: boolean }>`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: ${({ $active }) => ($active ? '#5F26AD' : 'transparent')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#a259ff')}; 
  
  &:hover {
    background: ${({ $active }) => ($active ? '#a259ff' : '#6a0dad')}; 
    color: #ffffff; /* White on hover */
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;
const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  padding-top: 30px;
`;

const Projects: React.FC = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <ParentContainerDiv id="Projects">
      <ChildContainerDiv>
        <TitleDiv>Projects</TitleDiv>
        <ProjectDescriptionDiv
          style={{
            marginBottom: "40px",
          }}
        >
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </ProjectDescriptionDiv>

        <ToggleButtonGroup>
          <ToggleButton
            $active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            ALL
          </ToggleButton>
          <Divider />
          <ToggleButton
            $active={toggle === "Web app"}
            onClick={() => setToggle("Web app")}
          >
            Web App
          </ToggleButton>
          <Divider />
          <ToggleButton
            $active={toggle === "Terminal Project"}
            onClick={() => setToggle("Terminal Project")}
          >
            Terminal Project
          </ToggleButton>
          <Divider />

        </ToggleButtonGroup>

        <CardContainerDiv>
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </CardContainerDiv>
      </ChildContainerDiv>
    </ParentContainerDiv>
  );
};

export default Projects;
