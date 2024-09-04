import React from "react";
import styled from "styled-components";
import { Project } from "../../Data/Constant";

interface ProjectCardProps {
  project: Project;
}

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: #121212; /* Matte Black */
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4); /* Standard shadow */
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  border: 1px solid rgba(201, 50, 128, 0.4);
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-1rem);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6); /* Enhanced shadow on hover */
    filter: brightness(1.1);
    scale: 1.1;
  }
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  // background-color: red;
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;


const ProjectDetailsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
  flex-grow: 1;
  
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #00E5FF;
  
`;

const WorkTimelineDiv = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: #A0C4FF;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const ProjectDescriptionDiv = styled.div`
  font-weight: 400;
  color: #AFC6C7;
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: #FFFFFF;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid #1C1C1E;
`;

const Button = styled.a`
  color: #FF006E;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  &:hover {
    color: #FFDD00; 
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} alt={project.title} />

      <ProjectDetailsDiv>
        <Title>{project.title}</Title>
        <WorkTimelineDiv>{project.date}</WorkTimelineDiv>
        <ProjectDescriptionDiv>{project.description}</ProjectDescriptionDiv>
      </ProjectDetailsDiv>
      <Members>
        {project.members?.map((member, index) => (
          <Avatar key={index} src={member.image} alt="Member" />
        ))}
      </Members>
      <Button href={project.github} target="_blank">
        View Code
      </Button>
    </Card>
  );
};

export default ProjectCard;
