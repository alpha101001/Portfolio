import React from "react";
import styled from "styled-components";
import { Project } from "../../Data/Constant";

interface ConferencePaperCardProps {
   paper: Project;
}

const Card = styled.div`
  width: 500px;
  background-color: #121212;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Keeps the button at the bottom */
  gap: 14px;
  transition: all 0.5s ease-in-out;
  
  &:hover {
    transform: translateY(-1rem);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;


const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #00E5FF;
`;



const PaperDescriptionDiv = styled.div`
  font-weight: 400;
  color: #AFC6C7;
  margin-top: 8px;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  max-height: none; /* No height restrictions */
`;

const Button = styled.a`
  color: #ff006e;
  text-decoration: none;
  font-weight: 600;
  text-align: center; /* Center the button */
  margin-top: auto; /* Push the button to the bottom */
  display: block;
  width: 100%; /* Ensures the button is centered */
  &:hover {
    color: #ffdd00;
  }
`;

const ConferencePaperCard: React.FC<ConferencePaperCardProps> = ({ paper }) => {
   return (
      <Card>
         <Title>{paper.title}</Title>

         <PaperDescriptionDiv>{paper.description}</PaperDescriptionDiv>
         <Button href={paper.paperLink} target="_blank">
            View Paper
         </Button>
      </Card>
   );
};

export default ConferencePaperCard;
