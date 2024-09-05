import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../Components/NavBar';
import ProfileImage from '../Components/Sections/ProfileImage';
import Skills from '../Components/Sections/Skills';
import Experience from '../Components/Sections/Experience';
import Projects from '../Components/Sections/Projects';
import Education from '../Components/Sections/Education';
import Contact from '../Components/Sections/Contact';
import Footer from '../Components/Sections/Footer';
import StartCanvas from "../Components/Canvas/Stars";
import KnowMe from '../Components/Sections/KnowMe';
import ConferencePapers from '../Components/Sections/ConferencePaper';
interface Theme {
    bg: string;
}
// import { Container } from './styles';
const Body = styled.div<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
const Portfolio: React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Body>
                <StartCanvas />
                <div>
                    <ProfileImage />
                    <Wrapper>
                        <Skills />

                        <Experience />
                    </Wrapper>
                    <Wrapper>
                        <Projects />
                        <ConferencePapers />
                    </Wrapper>

                    <Wrapper>
                        <Education />
                        <KnowMe />
                        <Contact />
                    </Wrapper>
                    <Footer />
                </div>
            </Body>
        </BrowserRouter>
    );
}

export default Portfolio;