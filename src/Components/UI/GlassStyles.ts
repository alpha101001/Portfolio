import { css, keyframes, styled } from "styled-components";

const reflectionSweep = keyframes`
  from {
    transform: translateX(-125%) rotate(14deg);
  }

  to {
    transform: translateX(145%) rotate(14deg);
  }
`;

const glassBase = css`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.glass.border};
  background: var(--glass-surface, ${({ theme }) => theme.glass.fallback});
  background-clip: padding-box;
  backdrop-filter: blur(${({ theme }) => theme.glass.blur}) saturate(${({ theme }) => theme.glass.saturation});
  -webkit-backdrop-filter: blur(${({ theme }) => theme.glass.blur}) saturate(${({ theme }) => theme.glass.saturation});
  box-shadow:
    ${({ theme }) => theme.glass.shadow},
    inset 0 1px 0 ${({ theme }) => theme.glass.highlight},
    inset 0 -1px 0 ${({ theme }) => theme.glass.lowlight};

  &::before,
  &::after {
    content: "";
    position: absolute;
    pointer-events: none;
    border-radius: inherit;
  }

  &::before {
    inset: 0;
    background:
      linear-gradient(135deg, ${({ theme }) => theme.glass.highlight}, transparent 38%),
      linear-gradient(315deg, ${({ theme }) => theme.glass.reflection}, transparent 42%);
    opacity: 0.72;
  }

  &::after {
    top: -50%;
    bottom: -50%;
    left: -32%;
    width: 32%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.16),
      transparent
    );
    opacity: 0;
    transform: translateX(-125%) rotate(14deg);
    transition:
      opacity ${({ theme }) => theme.transition.slow},
      transform ${({ theme }) => theme.transition.slow};
  }

  &:hover::after {
    opacity: 0.6;
    transform: translateX(145%) rotate(14deg);
  }

  @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    background: ${({ theme }) => theme.glass.fallback};
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
      transition: none;
      opacity: 0;
    }
  }
`;

export const glassCard = css`
  ${glassBase}
  --glass-surface: ${({ theme }) => theme.glass.card};
`;

export const glassPanel = css`
  ${glassBase}
  --glass-surface: ${({ theme }) => theme.glass.panel};
`;

export const glassControl = css`
  ${glassBase}
  --glass-surface: ${({ theme }) => theme.glass.control};
`;

export const glassChip = css`
  ${glassBase}
  --glass-surface: ${({ theme }) => theme.glass.chip};
`;

export const glassHeroLens = css`
  ${glassBase}
  --glass-surface: ${({ theme }) => theme.glass.hero};

  &::before {
    filter: url(#portfolio-liquid-glass);
    opacity: 0.58;
  }
`;

export const glassShimmer = css`
  &::after {
    animation: ${reflectionSweep} 9s ease-in-out infinite;
    opacity: 0.36;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
      opacity: 0;
    }
  }
`;

export const GlassSurface = styled.div`
  ${glassPanel}
`;
