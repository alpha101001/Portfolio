import styled from "styled-components";
import type { Project } from "../../Data/Constant";
import { glassChip, glassHeroLens, glassPanel } from "../UI/GlassStyles";
import { Card, SecondaryButtonLink, Tag } from "../UI/Primitives";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectArticle = styled(Card)<{ $featured: boolean }>`
  height: 100%;
  grid-column: ${({ $featured }) => ($featured ? "1 / -1" : "auto")};
  display: ${({ $featured }) => ($featured ? "grid" : "flex")};
  grid-template-columns: ${({ $featured }) => ($featured ? "0.86fr 1.14fr" : "none")};
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 860px) {
    display: flex;
    grid-template-columns: none;
  }
`;

const VisualFrame = styled.div<{ $accent?: Project["visualAccent"]; $featured: boolean }>`
  ${glassHeroLens}
  width: 100%;
  aspect-ratio: ${({ $featured }) => ($featured ? "auto" : "16 / 9")};
  min-height: ${({ $featured }) => ($featured ? "100%" : "auto")};
  position: relative;
  overflow: hidden;
  background: ${({ $accent, theme }) => {
    if ($accent === "magenta") {
      return `linear-gradient(135deg, ${theme.color.surfaceStrong}, rgba(217, 70, 239, 0.28))`;
    }

    if ($accent === "yellow") {
      return `linear-gradient(135deg, ${theme.color.surfaceStrong}, rgba(250, 204, 21, 0.22))`;
    }

    if ($accent === "green") {
      return `linear-gradient(135deg, ${theme.color.surfaceStrong}, rgba(52, 211, 153, 0.22))`;
    }

    return `linear-gradient(135deg, ${theme.color.surfaceStrong}, rgba(56, 213, 255, 0.24))`;
  }};

  @media (max-width: 860px) {
    aspect-ratio: 16 / 9;
    min-height: auto;
  }
`;

const ScreenshotImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const BrandVisual = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 18px;
  padding: 28px;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    inset: 24px;
    border: 1px solid rgba(248, 250, 252, 0.12);
    border-radius: ${({ theme }) => theme.radius.lg};
    background:
      linear-gradient(135deg, rgba(7, 8, 20, 0.34), rgba(15, 23, 42, 0.52));
  }

  > * {
    position: relative;
  }
`;

const BrandLogoFrame = styled.div`
  ${glassPanel}
  width: min(62%, 220px);
  min-height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 18px;
`;

const BrandLogo = styled.img`
  width: auto;
  max-width: 100%;
  max-height: 88px;
  display: block;
  object-fit: contain;
`;

const BrandTitle = styled.span`
  max-width: 28ch;
  color: ${({ theme }) => theme.color.text};
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  font-weight: 900;
  line-height: 1.25;
`;

const BrandTagLine = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 7px;
`;

const BrandTag = styled.span`
  ${glassChip}
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: 5px 9px;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: 0.78rem;
  font-weight: 700;
`;

const PlaceholderContent = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 14px;
  padding: 24px;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    inset: 18px;
    border: 1px solid rgba(248, 250, 252, 0.12);
    border-radius: ${({ theme }) => theme.radius.md};
  }

  > * {
    position: relative;
  }
`;

const PlaceholderInitials = styled.span`
  ${glassPanel}
  width: 72px;
  height: 72px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  color: ${({ theme }) => theme.color.text};
  font-size: 1.35rem;
  font-weight: 900;
  letter-spacing: 0.04em;
`;

const PlaceholderTitle = styled.span`
  max-width: 24ch;
  color: ${({ theme }) => theme.color.text};
  font-weight: 900;
  line-height: 1.25;
`;

const PlaceholderTags = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
`;

const PlaceholderTag = styled.span`
  ${glassChip}
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: 4px 8px;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: 0.75rem;
`;

const ProjectBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 22px;

  @media (min-width: 861px) {
    ${ProjectArticle}[data-featured="true"] & {
      padding: 28px;
    }
  }
`;

const ProjectTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: 1.12rem;
  line-height: 1.35;
`;

const ProjectDate = styled.p`
  margin: -6px 0 0;
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.9rem;
  font-weight: 700;
`;

const ProjectDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  line-height: 1.6;
`;

const OutcomeCallout = styled.div`
  ${glassPanel}
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 12px 14px;
  color: ${({ theme }) => theme.color.text};
  line-height: 1.5;

  strong {
    display: block;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.color.primary};
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

const DetailList = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin: 0;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const DetailItem = styled.div`
  display: grid;
  gap: 3px;

  dt {
    color: ${({ theme }) => theme.color.primary};
    font-size: 0.78rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  dd {
    margin: 0;
    color: ${({ theme }) => theme.color.textSoft};
    line-height: 1.5;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  min-height: 34px;
`;

const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border: 2px solid ${({ theme }) => theme.color.background};
  border-radius: 50%;
  background: ${({ theme }) => theme.color.text};
  object-fit: cover;

  & + & {
    margin-left: -8px;
  }
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
  padding-top: 4px;
`;

const CardButton = styled(SecondaryButtonLink)`
  min-height: 40px;
  padding: 0 14px;
  font-size: 0.9rem;
`;

const getProjectInitials = (title: string) =>
  title
    .replace(/[–—-]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const details = [
    { label: "Problem", value: project.problem },
    { label: "Solution", value: project.solution },
  ].filter((item): item is { label: string; value: string } => Boolean(item.value));

  return (
    <ProjectArticle $featured={featured} data-featured={featured}>
      <VisualFrame
        $accent={project.visualAccent}
        $featured={featured}
        role={project.image ? undefined : "img"}
        aria-label={project.image ? undefined : `${project.title} project visual placeholder`}
      >
        {project.image && project.visualType === "screenshot" ? (
          <ScreenshotImage
            src={project.image}
            alt={`${project.title} project preview`}
            width="640"
            height="360"
            loading="lazy"
          />
        ) : project.image ? (
          <BrandVisual>
            <BrandLogoFrame>
              <BrandLogo
                src={project.image}
                alt={`${project.title} logo`}
                width="220"
                height="112"
                loading="lazy"
              />
            </BrandLogoFrame>
            <BrandTitle>{project.title}</BrandTitle>
            <BrandTagLine aria-hidden="true">
              {project.tags.slice(0, 3).map((tag) => (
                <BrandTag key={`${project.id}-brand-${tag}`}>{tag}</BrandTag>
              ))}
            </BrandTagLine>
          </BrandVisual>
        ) : (
          <PlaceholderContent aria-hidden="true">
            <PlaceholderInitials>{getProjectInitials(project.title)}</PlaceholderInitials>
            <PlaceholderTitle>{project.title}</PlaceholderTitle>
            <PlaceholderTags>
              {project.tags.slice(0, 3).map((tag) => (
                <PlaceholderTag key={`${project.id}-placeholder-${tag}`}>{tag}</PlaceholderTag>
              ))}
            </PlaceholderTags>
          </PlaceholderContent>
        )}
      </VisualFrame>

      <ProjectBody>
        <ProjectTitle>{project.title}</ProjectTitle>
        {project.date && <ProjectDate>{project.date}</ProjectDate>}
        <ProjectDescription>{project.description}</ProjectDescription>

        {project.outcome && (
          <OutcomeCallout>
            <strong>Outcome</strong>
            {project.outcome}
          </OutcomeCallout>
        )}

        {details.length > 0 && (
          <DetailList>
            {details.map((item) => (
              <DetailItem key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </DetailItem>
            ))}
          </DetailList>
        )}

        {project.tags.length > 0 && (
          <TagList aria-label={`${project.title} technologies`}>
            {project.tags.map((tag) => (
              <Tag key={`${project.id}-${tag}`}>{tag}</Tag>
            ))}
          </TagList>
        )}

        {project.members && (
          <Members aria-label={`${project.title} collaborators`}>
            {project.members.map((member) => (
              <Avatar
                key={member.github}
                src={member.image}
                alt={member.name}
                width="34"
                height="34"
                loading="lazy"
              />
            ))}
          </Members>
        )}

        <ActionRow>
          {project.isLive && project.liveURL && (
            <CardButton href={project.liveURL} target="_blank" rel="noreferrer">
              Live Demo
            </CardButton>
          )}
          {project.github && (
            <CardButton href={project.github} target="_blank" rel="noreferrer">
              View Code
            </CardButton>
          )}
        </ActionRow>
      </ProjectBody>
    </ProjectArticle>
  );
};

export default ProjectCard;
