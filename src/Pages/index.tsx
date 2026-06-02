import styled from "styled-components";
import StartCanvas from "../Components/Canvas/Stars";
import NavBar from "../Components/NavBar";
import ConferencePapers from "../Components/Sections/ConferencePaper";
import Contact from "../Components/Sections/Contact";
import Education from "../Components/Sections/Education";
import Experience from "../Components/Sections/Experience";
import Footer from "../Components/Sections/Footer";
import ProfileImage from "../Components/Sections/ProfileImage";
import Projects from "../Components/Sections/Projects";
import Skills from "../Components/Sections/Skills";
import { LiquidGlassFilter } from "../Components/UI/LiquidGlass";

const PageShell = styled.div`
  min-height: 100vh;
  overflow-x: clip;
  background: ${({ theme }) => theme.gradient.page};
`;

const SkipLink = styled.a`
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 100;
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: 10px 14px;
  color: ${({ theme }) => theme.color.background};
  background: ${({ theme }) => theme.color.focus};
  font-weight: 900;
  text-decoration: none;
  transform: translateY(-150%);
  transition: transform ${({ theme }) => theme.transition.fast};

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.text};
    outline-offset: 3px;
    transform: translateY(0);
  }
`;

const Main = styled.main`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
`;

const Portfolio: React.FC = () => {
  return (
    <PageShell>
      <SkipLink href="#main-content">Skip to Content</SkipLink>
      <LiquidGlassFilter />
      <StartCanvas />
      <NavBar />
      <Main id="main-content">
        <ProfileImage />
        <Skills />
        <Experience />
        <Projects />
        <ConferencePapers />
        <Education />
        <Contact />
      </Main>
      <Footer />
    </PageShell>
  );
};

export default Portfolio;
