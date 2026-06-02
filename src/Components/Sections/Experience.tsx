import { experiences } from "../../Data/Constant";
import ExperienceCard from "../Cards/ExperienceCard";
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

const Experience = () => {
  return (
    <Section id="Experience">
      <SectionInner>
        <SectionHeader>
          <Eyebrow>Experience</Eyebrow>
          <SectionTitle>Production and client engineering experience</SectionTitle>
          <SectionDescription>
            Full-time, remote, and freelance delivery across production frontend
            systems, secure client work, real-time interfaces, REST integrations,
            and AI-assisted delivery.
          </SectionDescription>
        </SectionHeader>

        <TimelineList>
          {experiences.map((experience) => (
            <TimelineItem key={experience.id}>
              <ExperienceCard experience={experience} />
            </TimelineItem>
          ))}
        </TimelineList>
      </SectionInner>
    </Section>
  );
};

export default Experience;
