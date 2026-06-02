import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";
import { bio } from "../../Data/Constant";
import ProfilePic from "../../assets/Avi.png";
import { glassChip, glassHeroLens, glassPanel, glassShimmer } from "../UI/GlassStyles";
import { ButtonLink, SecondaryButtonLink, Tag } from "../UI/Primitives";

const HeroSection = styled.section`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  min-height: calc(100svh - ${({ theme }) => theme.layout.navHeight});
  display: flex;
  align-items: flex-start;
  padding: 58px 24px 72px;
  scroll-margin-top: ${({ theme }) => theme.layout.navHeight};

  @media (max-width: 768px) {
    min-height: auto;
    padding: 36px 18px 58px;
  }
`;

const HeroInner = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(320px, 0.96fr);
  gap: 64px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 42px;
  }
`;

const HeroCopy = styled.div`
  display: grid;
  gap: 18px;

  @media (max-width: 900px) {
    text-align: center;
    justify-items: center;
  }
`;

const HeroBadge = styled.p`
  ${glassChip}
  width: fit-content;
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: 8px 13px;
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0;
`;

const IntroLine = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: clamp(1.05rem, 2vw, 1.22rem);
  font-weight: 800;
`;

const HeroTitle = styled.h1`
  max-width: 720px;
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: clamp(2.35rem, 4.8vw, 4.25rem);
  line-height: 1.02;
  text-wrap: balance;
`;

const Accent = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.color.primary};
`;

const HeroDescription = styled.p`
  max-width: 660px;
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: clamp(1rem, 1.6vw, 1.12rem);
  line-height: 1.65;
`;

const RoleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const SnapshotPanel = styled.div`
  ${glassPanel}
  width: min(100%, 390px);
  display: grid;
  gap: 14px;
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 16px;

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 900px) {
    width: min(100%, 440px);
  }

  @media (max-width: 420px) {
    padding: 14px;
  }
`;

const SnapshotHeader = styled.div`
  display: grid;
  gap: 5px;
`;

const SnapshotKicker = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const SnapshotTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: clamp(1.05rem, 2vw, 1.28rem);
  line-height: 1.2;
`;

const SnapshotSummary = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 0.9rem;
  line-height: 1.55;
`;

const SnapshotMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 360px) {
    grid-template-columns: 1fr;
  }
`;

const SnapshotTile = styled.div`
  min-height: 104px;
  display: grid;
  align-content: start;
  gap: 5px;
  border: 1px solid rgba(189, 230, 255, 0.14);
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 12px;
  background: rgba(7, 12, 25, 0.36);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
`;

const SnapshotValue = styled.strong`
  display: block;
  color: ${({ theme }) => theme.color.primary};
  font-size: clamp(1.05rem, 2.5vw, 1.35rem);
  line-height: 1;
`;

const SnapshotLabel = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-size: 0.88rem;
  font-weight: 900;
  line-height: 1.25;
`;

const SnapshotDetail = styled.span`
  color: ${({ theme }) => theme.color.textSubtle};
  font-size: 0.78rem;
  line-height: 1.4;
`;

const SnapshotFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SnapshotChip = styled.span`
  ${glassChip}
  min-height: 30px;
  display: inline-flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: 6px 10px;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: 0.78rem;
  font-weight: 800;
`;

const CtaGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  @media (max-width: 520px) {
    width: 100%;

    ${ButtonLink},
    ${SecondaryButtonLink} {
      width: 100%;
    }
  }
`;

const ProfileLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const ProfileLink = styled.a`
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
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

const TrustSignals = styled.dl`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  color: ${({ theme }) => theme.color.textSubtle};

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const Signal = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.94rem;

  dt {
    color: ${({ theme }) => theme.color.primary};
    font-weight: 800;
  }

  dd {
    margin: 0;
  }
`;

const HeroVisual = styled.aside`
  display: grid;
  justify-items: center;
  gap: 18px;
  padding-top: 36px;

  @media (max-width: 900px) {
    padding-top: 0;
  }
`;

const PortraitWrap = styled.div`
  ${glassHeroLens}
  ${glassShimmer}
  position: relative;
  width: min(100%, 390px);
  aspect-ratio: 1;
  border-radius: 34px;
  padding: 14px;

  &::before {
    content: "";
    position: absolute;
    inset: 32px -18px -18px 42px;
    z-index: -1;
    border-radius: 34px;
    border: 1px solid ${({ theme }) => theme.glass.border};
    background: ${({ theme }) => theme.glass.panel};
    filter: blur(1px);
  }

  @media (max-width: 900px) {
    width: min(100%, 300px);
  }

  @media (max-width: 520px) {
    width: min(100%, 176px);
    border-radius: 28px;
    padding: 10px;

    &::before {
      inset: 22px -10px -10px 30px;
      border-radius: 28px;
    }
  }
`;

const Portrait = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 24px;
  object-fit: cover;
  object-position: center;
  background: ${({ theme }) => theme.color.surfaceStrong};

  @media (max-width: 520px) {
    border-radius: 20px;
  }
`;

const ProfileImage = () => {
  const headlineLead = bio.headline.replace(bio.headlineAccent, "").trim();

  return (
    <HeroSection id="About">
      <HeroInner>
        <HeroCopy>
          <HeroBadge>{bio.roleLine}</HeroBadge>
          <IntroLine>Hi, I am {bio.name}.</IntroLine>
          <HeroTitle>
            {headlineLead} <Accent>{bio.headlineAccent}.</Accent>
          </HeroTitle>
          <HeroDescription>{bio.valueProposition}</HeroDescription>

          <RoleList aria-label="Professional roles">
            {bio.roles.map((role) => (
              <Tag key={role}>{role}</Tag>
            ))}
          </RoleList>

          <CtaGroup>
            <ButtonLink href="#Projects">View Projects</ButtonLink>
            <SecondaryButtonLink href={bio.resume} target="_blank" rel="noreferrer">
              Download Resume
            </SecondaryButtonLink>
            <SecondaryButtonLink href="#Contact">
              Contact
            </SecondaryButtonLink>
          </CtaGroup>

          <TrustSignals aria-label="Professional context">
            <Signal>
              <dt>Location</dt>
              <dd>{bio.location}</dd>
            </Signal>
            <Signal>
              <dt>Availability</dt>
              <dd>{bio.availability}</dd>
            </Signal>
          </TrustSignals>

          <ProfileLinks aria-label="Professional profiles">
            <ProfileLink href={bio.github} target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" />
              GitHub
            </ProfileLink>
            {bio.linkedin && (
              <ProfileLink href={bio.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedinIn aria-hidden="true" />
                LinkedIn
              </ProfileLink>
            )}
          </ProfileLinks>
        </HeroCopy>

        <HeroVisual aria-label="Profile and selected impact">
          <PortraitWrap>
            <Portrait
              src={ProfilePic}
              alt="Portrait of Avishek Roy"
              width="760"
              height="760"
            />
          </PortraitWrap>

          <SnapshotPanel aria-label="Capability snapshot">
            <SnapshotHeader>
              <SnapshotKicker>CV-backed proof</SnapshotKicker>
              <SnapshotTitle>{bio.snapshotTitle}</SnapshotTitle>
              <SnapshotSummary>{bio.snapshotSummary}</SnapshotSummary>
            </SnapshotHeader>

            <SnapshotMetrics
              aria-label={`Skill proof metrics. LeetCode ${bio.leetcodeLabel}; TryHackMe ${bio.tryHackMeLabel}.`}
            >
              {bio.proofPoints.map((point) => (
                <SnapshotTile key={point.label}>
                  <SnapshotValue>{point.value}</SnapshotValue>
                  <SnapshotLabel>{point.label}</SnapshotLabel>
                  <SnapshotDetail>{point.detail}</SnapshotDetail>
                </SnapshotTile>
              ))}
            </SnapshotMetrics>

            <SnapshotFooter aria-label="Additional achievements">
              {bio.achievementHighlights.map((highlight) => (
                <SnapshotChip key={highlight}>{highlight}</SnapshotChip>
              ))}
            </SnapshotFooter>
          </SnapshotPanel>
        </HeroVisual>
      </HeroInner>
    </HeroSection>
  );
};

export default ProfileImage;
