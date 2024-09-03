import React, { useEffect, useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { bio as Bio } from "../Data/Constant";
import { MenuRounded } from "@mui/icons-material";
const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: yellow;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px; /* Adjust the thickness of the bottom line */
    background-color: #02faf2; /* Set the bottom line color */
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
`;
const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavLink = styled.a<{ isOpen?: boolean }>`
  color: ${({ isOpen }) => isOpen ? "#02faf2" : "#f5f7f7"};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ isOpen }) => isOpen ? "#f8fc05" : "#d705fc"};
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const GithubButton = styled.a`
  border: 1px solid #0dded7;
  color: yellow;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    background: #faf602;
    color: #000000;
  }
`;
const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const MobileMenu = styled.ul<{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 12px 40px 24px 40px;
  list-style: none;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 70px; /* Positioned just below the red line */
  right: 0;
  transition: transform 2s cubic-bezier(0.68, -0.55, 0.27, 1.55),opacity 2s ease-in-out; /* Slower transition effect */
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"}; /* Slide down */
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")}; /* Fade in */
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1")}; /* Hide when closed */
`;
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Ensure the menu is closed initially on larger screens
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Nav >
      <NavbarContainer >
        <NavLogo to="/"><b>Portfolio</b></NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "yellow" }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Publications">Publications</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#KnowMe">KnowMe</NavLink>

        </NavItems>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#About" isOpen={isOpen}>
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills" isOpen={isOpen}>
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience" isOpen={isOpen}>
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects" isOpen={isOpen}>
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Publications" isOpen={isOpen}>
              Publications
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education" isOpen={isOpen}>
              Education
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#KnowMe" isOpen={isOpen}>
              KnowMe
            </NavLink>
            <GithubButton
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GithubButton>
          </MobileMenu>
        )}
        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};
export default Navbar;
