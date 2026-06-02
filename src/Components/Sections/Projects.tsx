import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { projects } from "../../Data/Constant";
import ProjectCard from "../Cards/ProjectCard";
import { glassControl, glassPanel } from "../UI/GlassStyles";
import {
  Eyebrow,
  Section,
  SectionDescription,
  SectionHeader,
  SectionInner,
  SectionTitle,
} from "../UI/Primitives";

const filters = [
  { label: "All", value: "all" },
  { label: "Personal", value: "Self" },
  { label: "Company", value: "Company" },
] as const;

type ProjectFilter = (typeof filters)[number]["value"];

const isProjectFilter = (value: string | null): value is ProjectFilter =>
  filters.some((filter) => filter.value === value);

const getInitialFilter = (): ProjectFilter => {
  const params = new URLSearchParams(window.location.search);
  const filter = params.get("project");

  return isProjectFilter(filter) ? filter : "all";
};

const FilterGroup = styled.div`
  ${glassPanel}
  width: fit-content;
  max-width: 100%;
  margin: 0 auto 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: 6px;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  ${glassControl}
  min-height: 40px;
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: 0 16px;
  color: ${({ $active, theme }) =>
    $active ? theme.color.background : theme.color.textMuted};
  background: ${({ $active, theme }) =>
    $active
      ? `linear-gradient(135deg, ${theme.color.primary}, ${theme.color.primaryStrong})`
      : theme.glass.control};
  font-weight: 800;
  transition:
    background-color ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ $active, theme }) =>
      $active ? theme.color.background : theme.color.text};
    background: ${({ $active, theme }) =>
      $active ? theme.color.primary : theme.color.surfaceSoft};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.focus};
    outline-offset: 3px;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState<ProjectFilter>(getInitialFilter);

  const visibleProjects = useMemo(() => {
    if (filter === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === filter);
  }, [filter]);

  useEffect(() => {
    const url = new URL(window.location.href);

    if (filter === "all") {
      url.searchParams.delete("project");
    } else {
      url.searchParams.set("project", filter);
    }

    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }, [filter]);

  return (
    <Section id="Projects">
      <SectionInner>
        <SectionHeader>
          <Eyebrow>Projects</Eyebrow>
          <SectionTitle>Selected work with practical outcomes</SectionTitle>
          <SectionDescription>
            Production work and personal systems presented by problem, solution, and
            outcome so hiring teams can scan the engineering relevance quickly.
          </SectionDescription>
        </SectionHeader>

        <FilterGroup aria-label="Project filters">
          {filters.map((item) => (
            <FilterButton
              key={item.value}
              type="button"
              $active={filter === item.value}
              aria-pressed={filter === item.value}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </FilterButton>
          ))}
        </FilterGroup>

        <ProjectGrid>
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.id === visibleProjects[0]?.id}
            />
          ))}
        </ProjectGrid>
      </SectionInner>
    </Section>
  );
};

export default Projects;
