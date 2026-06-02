import styled from "styled-components";
import type { Education } from "../../Data/Constant";
import { glassPanel } from "../UI/GlassStyles";
import { Card } from "../UI/Primitives";

interface EducationCardProps {
  education: Education;
}

const EducationArticle = styled(Card)`
  padding: 22px;
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

const Logo = styled.img`
  width: 52px;
  height: 52px;
  object-fit: contain;
`;

const HeaderBody = styled.div`
  min-width: 0;
`;

const School = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: 1.08rem;
  line-height: 1.35;
`;

const Degree = styled.p`
  margin: 4px 0 0;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 700;
  line-height: 1.45;
`;

const Meta = styled.p`
  margin: 4px 0 0;
  color: ${({ theme }) => theme.color.textSubtle};
  font-size: 0.92rem;
`;

const Description = styled.p`
  margin: 14px 0 0;
  color: ${({ theme }) => theme.color.textMuted};
  line-height: 1.6;
`;

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <EducationArticle>
      <CardHeader>
        <LogoFrame>
          <Logo
            src={education.image}
            alt={`${education.school} logo`}
            width="64"
            height="64"
            loading="lazy"
          />
        </LogoFrame>
        <HeaderBody>
          <School>{education.school}</School>
          <Degree>{education.degree}</Degree>
          <Meta>{education.date}</Meta>
        </HeaderBody>
      </CardHeader>

      <Description>{education.description}</Description>
    </EducationArticle>
  );
};

export default EducationCard;
