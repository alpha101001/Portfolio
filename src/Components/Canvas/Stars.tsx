import styled, { keyframes } from "styled-components";

const drift = keyframes`
  from {
    transform: translate3d(-2%, -1%, 0);
  }

  to {
    transform: translate3d(2%, 1%, 0);
  }
`;

const RefractiveField = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.background};
  pointer-events: none;
  overflow: hidden;
  background:
    linear-gradient(115deg, rgba(56, 213, 255, 0.08), transparent 24%),
    linear-gradient(245deg, rgba(217, 70, 239, 0.07), transparent 32%),
    repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.018) 0,
      rgba(255, 255, 255, 0.018) 1px,
      transparent 1px,
      transparent 96px
    ),
    repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.012) 0,
      rgba(255, 255, 255, 0.012) 1px,
      transparent 1px,
      transparent 96px
    );
  opacity: 0.86;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: -12%;
    animation: ${drift} 30s ease-in-out infinite alternate;
  }

  &::before {
    background:
      linear-gradient(112deg, transparent 8%, rgba(56, 213, 255, 0.13) 18%, transparent 31%),
      linear-gradient(68deg, transparent 46%, rgba(255, 255, 255, 0.06) 52%, transparent 59%),
      linear-gradient(138deg, transparent 62%, rgba(217, 70, 239, 0.12) 72%, transparent 84%);
    filter: blur(18px);
    opacity: 0.6;
  }

  &::after {
    background:
      linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.04), transparent),
      repeating-linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.018) 0,
        rgba(255, 255, 255, 0.018) 1px,
        transparent 1px,
        transparent 18px
      );
    opacity: 0.42;
    mix-blend-mode: screen;
    animation-duration: 44s;
    animation-direction: alternate-reverse;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none;
    }
  }
`;

const StyledStarsCanvas = () => {
  return <RefractiveField aria-hidden="true" />;
};

export default StyledStarsCanvas;
