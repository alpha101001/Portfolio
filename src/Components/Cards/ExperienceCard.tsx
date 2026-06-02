import styled from "styled-components";
import type { Experience } from "../../Data/Constant";
import { glassPanel } from "../UI/GlassStyles";
import { Card, Tag } from "../UI/Primitives";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceArticle = styled(Card)`
  padding: 24px;
`;

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: center;
`;

const LogoFrame = styled.div`
  ${glassPanel}
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.sm};
`;

const InitialMark = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: 0.04em;
`;

const Logo = styled.img<{ $shape: "square" | "wide" | "tall" }>`
  width: ${({ $shape }) => ($shape === "wide" ? "58px" : "46px")};
  height: ${({ $shape }) => ($shape === "tall" ? "56px" : "46px")};
  object-fit: contain;
`;

const HeaderBody = styled.div`
  min-width: 0;
`;

const Role = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: 1.18rem;
  line-height: 1.35;
`;

const Company = styled.p`
  margin: 4px 0 0;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 700;
`;

const DateText = styled.p`
  margin: 4px 0 0;
  color: ${({ theme }) => theme.color.textSubtle};
  font-size: 0.92rem;
`;

const Description = styled.p`
  margin: 18px 0 0;
  color: ${({ theme }) => theme.color.textMuted};
  line-height: 1.65;
`;

const ImpactList = styled.ul`
  display: grid;
  gap: 9px;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
`;

const ImpactItem = styled.li`
  position: relative;
  padding-left: 18px;
  color: ${({ theme }) => theme.color.textSoft};
  line-height: 1.55;

  &::before {
    content: "";
    position: absolute;
    top: 0.68em;
    left: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.primary};
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
`;

const getLogoShape = (id: number) => {
  if (id === 1) {
    return "wide";
  }

  if (id === 2) {
    return "tall";
  }

  return "square";
};

const getInitials = (company: string) =>
  company
    .replace(/\([^)]*\)/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <ExperienceArticle>
      <CardHeader>
        <LogoFrame>
          {experience.image ? (
            <Logo
              src={experience.image}
              alt={`${experience.company} logo`}
              width="64"
              height="64"
              loading="lazy"
              $shape={getLogoShape(experience.id)}
            />
          ) : (
            <InitialMark aria-hidden="true">{getInitials(experience.company)}</InitialMark>
          )}
        </LogoFrame>
        <HeaderBody>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <DateText>
            {experience.date}
            {experience.location ? ` | ${experience.location}` : ""}
          </DateText>
        </HeaderBody>
      </CardHeader>

      <Description>{experience.description}</Description>

      <ImpactList aria-label={`${experience.company} impact highlights`}>
        {experience.impactBullets.map((item) => (
          <ImpactItem key={item}>{item}</ImpactItem>
        ))}
      </ImpactList>

      <SkillList aria-label={`${experience.company} skills`}>
        {experience.skills.map((skill) => (
          <Tag key={`${experience.company}-${skill}`}>{skill}</Tag>
        ))}
      </SkillList>
    </ExperienceArticle>
  );
};

export default ExperienceCard;
