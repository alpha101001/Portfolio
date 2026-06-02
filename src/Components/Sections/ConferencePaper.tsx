import styled from "styled-components";
import { conferencePapers } from "../../Data/Constant";
import ConferencePaperCard from "../Cards/ConferencePaperCard";
import {
  Eyebrow,
  Section,
  SectionDescription,
  SectionHeader,
  SectionInner,
  SectionTitle,
} from "../UI/Primitives";

const PaperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 18px;
`;

const ConferencePapers = () => {
  return (
    <Section id="ConferencePapers">
      <SectionInner>
        <SectionHeader>
          <Eyebrow>Publications</Eyebrow>
          <SectionTitle>Research credibility in blockchain systems</SectionTitle>
          <SectionDescription>
            A compact record of published work that supports the security and systems
            foundation behind the engineering portfolio.
          </SectionDescription>
        </SectionHeader>

        <PaperGrid>
          {conferencePapers.map((paper) => (
            <ConferencePaperCard key={paper.id} paper={paper} />
          ))}
        </PaperGrid>
      </SectionInner>
    </Section>
  );
};

export default ConferencePapers;
