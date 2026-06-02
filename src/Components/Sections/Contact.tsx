import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiBriefcase, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import styled, { css } from "styled-components";
import { bio } from "../../Data/Constant";
import { ContactFormData, sendContactMessage } from "../../Utils/Email";
import { glassChip, glassControl } from "../UI/GlassStyles";
import {
  ButtonLink,
  Card,
  Eyebrow,
  Section,
  SectionDescription,
  SectionHeader,
  SectionInner,
  SectionTitle,
} from "../UI/Primitives";

type FormStatus = "idle" | "success" | "error";

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(320px, 1.2fr);
  gap: 24px;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const ContactPanel = styled(Card)`
  padding: 26px;
`;

const PanelTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: 1.35rem;
`;

const PanelText = styled.p`
  margin: 14px 0 0;
  color: ${({ theme }) => theme.color.textMuted};
  line-height: 1.75;
`;

const TrustList = styled.ul`
  display: grid;
  gap: 12px;
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
`;

const TrustItem = styled.li`
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
`;

const TrustIcon = styled.span`
  ${glassChip}
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.color.primary};
`;

const TrustContent = styled.div`
  min-width: 0;
`;

const TrustLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.textSubtle};
  font-size: 0.82rem;
  font-weight: 700;
`;

const TrustValue = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.text};
  font-weight: 800;
  overflow-wrap: anywhere;
`;

const TrustLink = styled.a`
  color: ${({ theme }) => theme.color.text};
  font-weight: 800;
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.focus};
    outline-offset: 4px;
  }
`;

const ContactForm = styled.form`
  display: grid;
  gap: 16px;
`;

const Field = styled.div`
  display: grid;
  gap: 7px;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.color.text};
  font-weight: 700;
`;

const sharedFieldStyles = css`
  width: 100%;
  min-height: 48px;
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: 12px;
  padding: 12px 14px;
  color: ${({ theme }) => theme.color.text};
  background: ${({ theme }) => theme.glass.panel};
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  box-shadow:
    inset 0 1px 0 ${({ theme }) => theme.glass.highlight},
    inset 0 -1px 0 rgba(56, 213, 255, 0.06);
  transition:
    border-color ${({ theme }) => theme.transition.fast},
    box-shadow ${({ theme }) => theme.transition.fast},
    background-color ${({ theme }) => theme.transition.fast};

  &::placeholder {
    color: ${({ theme }) => theme.color.textSubtle};
  }
`;

const Input = styled.input`
  ${sharedFieldStyles}

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.focus};
    outline-offset: 2px;
    border-color: ${({ theme }) => theme.color.primary};
  }
`;

const TextArea = styled.textarea`
  ${sharedFieldStyles}
  min-height: 150px;
  resize: vertical;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.focus};
    outline-offset: 2px;
    border-color: ${({ theme }) => theme.color.primary};
  }
`;

const ErrorText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.danger};
  font-size: 0.9rem;
`;

const StatusMessage = styled.p<{ $status: FormStatus }>`
  min-height: 24px;
  margin: 0;
  color: ${({ $status, theme }) =>
    $status === "success" ? theme.color.success : theme.color.danger};
  font-weight: 700;
`;

const SubmitButton = styled.button`
  ${glassControl}
  min-height: 48px;
  border-radius: ${({ theme }) => theme.radius.pill};
  color: ${({ theme }) => theme.color.background};
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.34), transparent 42%),
    linear-gradient(135deg, ${({ theme }) => theme.color.primary}, ${({ theme }) => theme.color.primaryStrong});
  font-weight: 900;
  transition:
    background-color ${({ theme }) => theme.transition.fast},
    border-color ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast};

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.color.warning};
    background: ${({ theme }) => theme.color.warning};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.62;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.focus};
    outline-offset: 3px;
  }
`;

const InlineLink = styled(ButtonLink)`
  width: fit-content;
  margin-top: 18px;

  @media (max-width: 520px) {
    width: 100%;
  }
`;

const Contact = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<ContactFormData>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setStatus("idle");

    try {
      await sendContactMessage(data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="Contact">
      <SectionInner>
        <SectionHeader>
          <Eyebrow>Contact</Eyebrow>
          <SectionTitle>Let’s build something practical</SectionTitle>
          <SectionDescription>
            Send a focused note about an opportunity, collaboration, or engineering
            problem. I will respond when the context is clear.
          </SectionDescription>
        </SectionHeader>

        <ContactGrid>
          <ContactPanel>
            <PanelTitle>What works best</PanelTitle>
            <PanelText>
              Share the goal, current state, expected outcome, and any timeline or
              constraints. Clear context helps me respond with useful next steps.
            </PanelText>

            <TrustList aria-label="Contact context">
              <TrustItem>
                <TrustIcon>
                  <FiMail aria-hidden="true" />
                </TrustIcon>
                <TrustContent>
                  <TrustLabel>Email</TrustLabel>
                  {bio.email ? (
                    <TrustLink href={`mailto:${bio.email}`}>{bio.email}</TrustLink>
                  ) : (
                    <TrustValue>{bio.emailLabel}</TrustValue>
                  )}
                </TrustContent>
              </TrustItem>

              {bio.phone && (
                <TrustItem>
                  <TrustIcon>
                    <FiPhone aria-hidden="true" />
                  </TrustIcon>
                  <TrustContent>
                    <TrustLabel>Phone</TrustLabel>
                    <TrustLink href={`tel:${bio.phone.replace(/\s+/g, "")}`}>
                      {bio.phone}
                    </TrustLink>
                  </TrustContent>
                </TrustItem>
              )}

              <TrustItem>
                <TrustIcon>
                  <FaLinkedinIn aria-hidden="true" />
                </TrustIcon>
                <TrustContent>
                  <TrustLabel>LinkedIn</TrustLabel>
                  <TrustLink href={bio.linkedin ?? bio.github} target="_blank" rel="noreferrer">
                    Professional profile
                  </TrustLink>
                </TrustContent>
              </TrustItem>

              <TrustItem>
                <TrustIcon>
                  <FaGithub aria-hidden="true" />
                </TrustIcon>
                <TrustContent>
                  <TrustLabel>GitHub</TrustLabel>
                  <TrustLink href={bio.github} target="_blank" rel="noreferrer">
                    alpha101001
                  </TrustLink>
                </TrustContent>
              </TrustItem>

              <TrustItem>
                <TrustIcon>
                  <FiMapPin aria-hidden="true" />
                </TrustIcon>
                <TrustContent>
                  <TrustLabel>Location</TrustLabel>
                  <TrustValue>{bio.location}</TrustValue>
                </TrustContent>
              </TrustItem>

              <TrustItem>
                <TrustIcon>
                  <FiBriefcase aria-hidden="true" />
                </TrustIcon>
                <TrustContent>
                  <TrustLabel>Availability</TrustLabel>
                  <TrustValue>{bio.availability}</TrustValue>
                </TrustContent>
              </TrustItem>
            </TrustList>

            <InlineLink href={bio.linkedin ?? bio.github} target="_blank" rel="noreferrer">
              Open Professional Profile
            </InlineLink>
          </ContactPanel>

          <ContactPanel>
            <ContactForm onSubmit={handleSubmit(onSubmit)} noValidate>
              <Field>
                <Label htmlFor="from_name">Name</Label>
                <Input
                  id="from_name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.from_name)}
                  aria-describedby={errors.from_name ? "from_name-error" : undefined}
                  {...register("from_name", { required: "Name is required" })}
                />
                {errors.from_name && (
                  <ErrorText id="from_name-error">{errors.from_name.message}</ErrorText>
                )}
              </Field>

              <Field>
                <Label htmlFor="from_email">Email</Label>
                <Input
                  id="from_email"
                  type="email"
                  autoComplete="email"
                  spellCheck={false}
                  aria-invalid={Boolean(errors.from_email)}
                  aria-describedby={errors.from_email ? "from_email-error" : undefined}
                  {...register("from_email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.from_email && (
                  <ErrorText id="from_email-error">{errors.from_email.message}</ErrorText>
                )}
              </Field>

              <Field>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  autoComplete="off"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <ErrorText id="subject-error">{errors.subject.message}</ErrorText>
                )}
              </Field>

              <Field>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 12,
                      message: "Message should include at least 12 characters",
                    },
                  })}
                />
                {errors.message && (
                  <ErrorText id="message-error">{errors.message.message}</ErrorText>
                )}
              </Field>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Send Message"}
              </SubmitButton>

              <div aria-live="polite">
                {status === "success" && (
                  <StatusMessage $status={status}>Message sent successfully.</StatusMessage>
                )}
                {status === "error" && (
                  <StatusMessage $status={status}>
                    Message could not be sent. Please try again or use the professional
                    profile link.
                  </StatusMessage>
                )}
              </div>
            </ContactForm>
          </ContactPanel>
        </ContactGrid>
      </SectionInner>
    </Section>
  );
};

export default Contact;
