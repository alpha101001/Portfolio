import styled from "styled-components";
import { glassCard, glassChip, glassControl } from "./GlassStyles";

export const Section = styled.section`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  scroll-margin-top: calc(${({ theme }) => theme.layout.navHeight} + 28px);
  padding: 88px 24px;

  @media (max-width: 768px) {
    padding: 68px 18px;
  }
`;

export const SectionInner = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  margin: 0 auto;
`;

export const SectionHeader = styled.header`
  max-width: 760px;
  margin: 0 auto 38px;
  text-align: center;
`;

export const Eyebrow = styled.p`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: clamp(2rem, 4.4vw, 3.25rem);
  line-height: 1.1;
  text-wrap: balance;
`;

export const SectionDescription = styled.p`
  max-width: 720px;
  margin: 16px auto 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 1.05rem;
  line-height: 1.7;
`;

export const Card = styled.article`
  ${glassCard}
  border-radius: ${({ theme }) => theme.radius.md};
  transition:
    border-color ${({ theme }) => theme.transition.base},
    box-shadow ${({ theme }) => theme.transition.base},
    transform ${({ theme }) => theme.transition.base};

  &:hover {
    border-color: ${({ theme }) => theme.color.borderStrong};
    box-shadow: ${({ theme }) => theme.shadow.cardHover};
    transform: translateY(-2px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

export const ButtonLink = styled.a`
  ${glassControl}
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: 0 20px;
  color: ${({ theme }) => theme.color.background};
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.34), transparent 42%),
    linear-gradient(135deg, ${({ theme }) => theme.color.primary}, ${({ theme }) => theme.color.primaryStrong});
  font-weight: 800;
  text-decoration: none;
  transition:
    background-color ${({ theme }) => theme.transition.fast},
    border-color ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast},
    transform ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.color.warning};
    border-color: ${({ theme }) => theme.color.warning};
    color: ${({ theme }) => theme.color.background};
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.focus};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

export const SecondaryButtonLink = styled(ButtonLink)`
  color: ${({ theme }) => theme.color.text};
  background: ${({ theme }) => theme.glass.control};

  &:hover {
    background: ${({ theme }) => theme.glass.panel};
    color: ${({ theme }) => theme.color.text};
  }
`;

export const Tag = styled.span`
  ${glassChip}
  min-height: 34px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: 7px 12px;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: 0.88rem;
  line-height: 1.2;
`;

export const TimelineList = styled.ol`
  position: relative;
  display: grid;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 15px;
    width: 7px;
    border: 1px solid ${({ theme }) => theme.glass.border};
    border-radius: ${({ theme }) => theme.radius.pill};
    background: linear-gradient(
      180deg,
      transparent,
      rgba(56, 213, 255, 0.28),
      rgba(217, 70, 239, 0.14),
      transparent
    );
    box-shadow:
      inset 0 1px 0 ${({ theme }) => theme.glass.highlight},
      0 0 28px rgba(56, 213, 255, 0.12);
  }

  @media (max-width: 640px) {
    gap: 18px;
  }
`;

export const TimelineItem = styled.li`
  position: relative;
  padding-left: 58px;

  &::before {
    content: "";
    position: absolute;
    top: 22px;
    left: 10px;
    width: 17px;
    height: 17px;
    border: 3px solid ${({ theme }) => theme.color.primary};
    border-radius: 50%;
    background: ${({ theme }) => theme.glass.fallback};
    box-shadow:
      0 0 0 6px rgba(56, 213, 255, 0.08),
      0 0 24px rgba(56, 213, 255, 0.22);
  }

  @media (max-width: 640px) {
    padding-left: 46px;

    &::before {
      left: 9px;
    }
  }
`;
