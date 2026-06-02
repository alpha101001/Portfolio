import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";
import { bio } from "../../Data/Constant";
import { glassChip, glassPanel } from "../UI/GlassStyles";

const footerLinks = [
  { label: "About", href: "#About" },
  { label: "Skills", href: "#Skills" },
  { label: "Experience", href: "#Experience" },
  { label: "Projects", href: "#Projects" },
  { label: "Publications", href: "#ConferencePapers" },
  { label: "Education", href: "#Education" },
  { label: "Contact", href: "#Contact" },
];

const FooterContainer = styled.footer`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  padding: 24px;
`;

const FooterWrapper = styled.div`
  ${glassPanel}
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  margin: 0 auto;
  display: grid;
  gap: 20px;
  justify-items: center;
  text-align: center;
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 28px 24px;
`;

const Logo = styled.a`
  color: ${({ theme }) => theme.color.text};
  font-size: clamp(1.35rem, 4vw, 1.9rem);
  font-weight: 900;
  line-height: 1.1;
  text-decoration: none;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.focus};
    outline-offset: 6px;
  }
`;

const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 18px;
  list-style: none;
`;

const NavLink = styled.a`
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.color.textMuted};
  font-weight: 700;
  text-decoration: none;
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.focus};
    outline-offset: 4px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

const SocialLink = styled.a`
  ${glassChip}
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.pill};
  color: ${({ theme }) => theme.color.text};
  transition:
    border-color ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast},
    transform ${({ theme }) => theme.transition.fast};

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.focus};
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

const Copyright = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSubtle};
  font-size: 0.92rem;
`;

const FooterNote = styled.p`
  max-width: 620px;
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo href="#About">Avishek Roy</Logo>
        <FooterNote>
          {bio.roleLine}. Based in {bio.location}; {bio.availability.toLowerCase()}.
        </FooterNote>

        <Nav aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </Nav>

        <SocialLinks aria-label="Social links">
          <SocialLink href={bio.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub aria-hidden="true" />
          </SocialLink>
          {bio.linkedin && (
            <SocialLink
              href={bio.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </SocialLink>
          )}
          {bio.facebook && (
            <SocialLink
              href={bio.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF aria-hidden="true" />
            </SocialLink>
          )}
        </SocialLinks>

        <Copyright>&copy; {year} Avishek Roy. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
