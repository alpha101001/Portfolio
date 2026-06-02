import styled from "styled-components";
import type { Project } from "../../Data/Constant";
import { Card, SecondaryButtonLink, Tag } from "../UI/Primitives";

interface ConferencePaperCardProps {
  paper: Project;
}

const PaperArticle = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px;
`;

const PaperTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: 1rem;
  line-height: 1.45;
`;

const PaperDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const PaperTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

const PaperButton = styled(SecondaryButtonLink)`
  width: fit-content;
  min-height: 40px;
  padding: 0 14px;
  font-size: 0.9rem;
`;

const ConferencePaperCard = ({ paper }: ConferencePaperCardProps) => {
  return (
    <PaperArticle>
      <PaperTitle>{paper.title}</PaperTitle>
      <PaperDescription>{paper.description}</PaperDescription>

      <PaperTags aria-label={`${paper.title} topics`}>
        {paper.tags.map((tag) => (
          <Tag key={`${paper.id}-${tag}`}>{tag}</Tag>
        ))}
      </PaperTags>

      {paper.paperLink && (
        <PaperButton href={paper.paperLink} target="_blank" rel="noreferrer">
          View Paper
        </PaperButton>
      )}
    </PaperArticle>
  );
};

export default ConferencePaperCard;
