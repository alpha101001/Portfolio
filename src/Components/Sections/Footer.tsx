import React from "react";
import styled from "styled-components";
import { bio as Bio } from "../../Data/Constant";
import {
  FacebookRounded,
  LinkedIn,
} from "@mui/icons-material";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const LogoDiv = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: #03FBFB;
`;

const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.3rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #d705fc;
    scale: 1.2;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LogoDiv>Avishek Roy</LogoDiv>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#ConferencePapers">Publications</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#KnowMe">KnowMe</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display">
            <FacebookRounded />
          </SocialMediaIcon>

          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedIn />
          </SocialMediaIcon>

        </SocialMediaIcons>
        <Copyright>&copy; 2024 Avishek Roy. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
