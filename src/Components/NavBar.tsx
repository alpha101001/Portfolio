import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import { bio } from "../Data/Constant";
import { glassControl, glassPanel } from "./UI/GlassStyles";

const navItems = [
  { label: "About", href: "#About" },
  { label: "Skills", href: "#Skills" },
  { label: "Experience", href: "#Experience" },
  { label: "Projects", href: "#Projects" },
  { label: "Publications", href: "#ConferencePapers" },
  { label: "Education", href: "#Education" },
  { label: "Contact", href: "#Contact" },
];

const Nav = styled.header`
  position: sticky;
  top: 0;
  inset-block-start: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.nav};
  padding: 12px 16px;
  background: linear-gradient(180deg, rgba(7, 8, 20, 0.82), rgba(7, 8, 20, 0));
`;

const NavbarContainer = styled.nav`
  ${glassPanel}
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  min-height: 58px;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: 0 18px 0 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;

const NavLogo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.color.text};
  font-size: 1.12rem;
  font-weight: 800;
  text-decoration: none;

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.primary};
    box-shadow: ${({ theme }) => theme.shadow.glow};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.focus};
    outline-offset: 6px;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  list-style: none;

  @media (max-width: 920px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 0.94rem;
  font-weight: 600;
  text-decoration: none;
  transition:
    color ${({ theme }) => theme.transition.fast},
    transform ${({ theme }) => theme.transition.fast};

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 8px;
    left: 0;
    height: 2px;
    border-radius: ${({ theme }) => theme.radius.pill};
    background: ${({ theme }) => theme.color.primary};
    opacity: 0;
    transform: scaleX(0.65);
    transition:
      opacity ${({ theme }) => theme.transition.fast},
      transform ${({ theme }) => theme.transition.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    transform: translateY(-1px);

    &::after {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.focus};
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::after {
      transition: none;
    }

    &:hover {
      transform: none;
    }
  }

  @media (max-width: 920px) {
    width: 100%;
    justify-content: center;
  }
`;

const GithubButton = styled.a`
  ${glassControl}
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: 0 16px;
  color: ${({ theme }) => theme.color.text};
  font-size: 0.94rem;
  font-weight: 700;
  text-decoration: none;
  transition:
    background-color ${({ theme }) => theme.transition.fast},
    border-color ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast};

  &:hover {
    border-color: ${({ theme }) => theme.color.warning};
    background: rgba(250, 204, 21, 0.12);
    color: ${({ theme }) => theme.color.warning};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.focus};
    outline-offset: 4px;
  }

  @media (max-width: 920px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  ${glassControl}
  width: 44px;
  height: 44px;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.color.text};

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.focus};
    outline-offset: 4px;
  }

  @media (max-width: 920px) {
    display: inline-flex;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 920px) {
    ${glassPanel}
    display: block;
    width: min(100%, ${({ theme }) => theme.layout.maxWidth});
    margin: 10px auto 0;
    border-radius: ${({ theme }) => theme.radius.lg};
  }
`;

const MobileMenuInner = styled.ul`
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  margin: 0 auto;
  padding: 14px 18px 24px;
  display: grid;
  gap: 8px;
  list-style: none;
`;

const MobileGithubButton = styled(GithubButton)`
  display: inline-flex;
  width: 100%;
  margin-top: 8px;
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const closeOnResize = () => {
      if (window.innerWidth > 920) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnResize, { passive: true });

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnResize);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Nav>
      <NavbarContainer aria-label="Primary navigation">
        <NavLogo href="#About" onClick={closeMenu}>
          Avishek Roy
        </NavLogo>

        <NavItems>
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </NavItems>

        <GithubButton
          href={bio.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Open Avishek Roy on GitHub"
        >
          <FaGithub aria-hidden="true" />
          GitHub
        </GithubButton>

        <MobileMenuButton
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </MobileMenuButton>
      </NavbarContainer>

      {isMenuOpen && (
        <MobileMenu id="mobile-navigation">
          <MobileMenuInner>
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} onClick={closeMenu}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <MobileGithubButton
                href={bio.github}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </MobileGithubButton>
            </li>
          </MobileMenuInner>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
