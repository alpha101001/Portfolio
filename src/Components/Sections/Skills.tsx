import styled from "styled-components";
import { skills } from "../../Data/Constant";
import { glassChip } from "../UI/GlassStyles";
import {
  Card,
  Eyebrow,
  Section,
  SectionDescription,
  SectionHeader,
  SectionInner,
  SectionTitle,
  Tag,
} from "../UI/Primitives";

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 18px;
`;

const SkillCard = styled(Card)`
  min-height: 100%;
  padding: 22px;
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 16px;
  margin: 0 0 18px;
`;

const SkillTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: 1.15rem;
  line-height: 1.35;
`;

const SkillCount = styled.span`
  ${glassChip}
  flex: 0 0 auto;
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: 4px 9px;
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.78rem;
  font-weight: 800;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

const SkillTag = styled(Tag)`
  min-height: 38px;
`;

const SkillImage = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
`;

const Skills = () => {
  return (
    <Section id="Skills">
      <SectionInner>
        <SectionHeader>
          <Eyebrow>Knowledge</Eyebrow>
          <SectionTitle>Practical engineering toolkit</SectionTitle>
          <SectionDescription>
            A scan-friendly view of the technologies, systems, and engineering habits I use
            to build maintainable product software.
          </SectionDescription>
        </SectionHeader>

        <SkillsGrid>
          {skills.map((skillGroup) => (
            <SkillCard key={skillGroup.title}>
              <SkillHeader>
                <SkillTitle>{skillGroup.title}</SkillTitle>
                <SkillCount>{skillGroup.skills.length}</SkillCount>
              </SkillHeader>
              <SkillList>
                {skillGroup.skills.map((item) => (
                  <SkillTag key={item.name}>
                    {item.image && (
                      <SkillImage
                        src={item.image}
                        alt=""
                        width="22"
                        height="22"
                        loading="lazy"
                      />
                    )}
                    {item.name}
                  </SkillTag>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SectionInner>
    </Section>
  );
};

export default Skills;
