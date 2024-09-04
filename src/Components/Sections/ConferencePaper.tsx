import React from "react";
import styled, { keyframes } from "styled-components";
import { conferencePapers } from "../../Data/Constant";
import ConferencePaperCard from "../Cards/ConferencePaperCard";

// Title animation
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

const PaperDescriptionDiv = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  padding-top: 30px;
`;

const ConferencePapers: React.FC = () => {

   return (
      <ParentContainerDiv id="ConferencePapers">
         <ChildContainerDiv>
            <TitleDiv>Conference Papers (2023)</TitleDiv>
            <PaperDescriptionDiv>
               Below are my published conference papers on blockchain and related technologies.
            </PaperDescriptionDiv>

            <CardContainerDiv>
               {conferencePapers.map((paper, index) => (
                  <ConferencePaperCard key={index} paper={paper} />
               ))}
            </CardContainerDiv>
         </ChildContainerDiv>
      </ParentContainerDiv>
   );
};

export default ConferencePapers;
