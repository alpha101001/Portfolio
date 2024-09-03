import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";
import AdjustIcon from '@mui/icons-material/Adjust';
import { Timeline } from "../../Data/Constant";




const AboutDiv = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #02fa40;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;




interface KnowMeCardProps {
   timelineData: Timeline;
}


const KnowMeCard: React.FC<KnowMeCardProps> = ({ timelineData }) => {
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
         date={timelineData?.year.toString()}
      >
         <AboutDiv>💥 {timelineData?.text}</AboutDiv>
      </VerticalTimelineElement>
   );
};

export default KnowMeCard;
