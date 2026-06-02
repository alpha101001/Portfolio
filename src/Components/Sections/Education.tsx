import { education } from "../../Data/Constant";
import EducationCard from "../Cards/EducationCard";
import {
  Eyebrow,
  Section,
  SectionDescription,
  SectionHeader,
  SectionInner,
  SectionTitle,
  TimelineItem,
  TimelineList,
} from "../UI/Primitives";

const Education = () => {
  return (
    <Section id="Education">
      <SectionInner>
        <SectionHeader>
          <Eyebrow>Education</Eyebrow>
          <SectionTitle>Academic foundation</SectionTitle>
          <SectionDescription>
            Formal computer science training kept compact so the engineering work remains
            the primary story.
          </SectionDescription>
        </SectionHeader>

        <TimelineList>
          {education.map((item) => (
            <TimelineItem key={item.id}>
              <EducationCard education={item} />
            </TimelineItem>
          ))}
        </TimelineList>
      </SectionInner>
    </Section>
  );
};

export default Education;
