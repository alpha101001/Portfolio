import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { Typography } from "@mui/material";

// Define the interface for the form data
interface ContactFormData {
  from_email: string;
  from_name: string;
  subject: string;
  message: string;
}

const NeonColorEffect = keyframes`
  0%, 100% {
    text-shadow: 0 0 4px #7f03fc, 0 0 8px #7f03fc, 0 0 12px #03eeff;
  }
  50% {
    text-shadow: 0 0 2px #1303fc, 0 0 4px #03eeff, 0 0 6px #03eeff;
  }
`;
// Define the animation for the tick mark
const tickAnimation = keyframes`
  0% {
    stroke-dashoffset: 100;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

// Define the animation for the cross mark
const crossAnimation = keyframes`
  0% {
    stroke-dashoffset: 100;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const TickContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const TickSVG = styled.svg`
  width: 100px;
  height: 100px;
  stroke: green;
  stroke-width: 5;
  fill: none;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: ${tickAnimation} 1s ease forwards;
`;

const CrossSVG = styled.svg`
  width: 100px;
  height: 100px;
  stroke: red;
  stroke-width: 5;
  fill: none;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: ${crossAnimation} 1s ease forwards;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const TitleDiv = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: #fc03d7;
  animation: ${NeonColorEffect} 3s infinite alternate;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitleDiv = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid #03FBFB;
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid #03FBFB;
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const Contact: React.FC = () => {
  const [emailSent, setEmailSent] = useState<"success" | "error" | null>(null); // State to track if email was sent or failed
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    const formData = new FormData();
    formData.append('service_id', 'service_alpha');
    formData.append('template_id', 'template_drv7ed4');
    formData.append('user_id', 'cDTK7OE1cfnZJOvrS');
    formData.append('from_email', data.from_email);
    formData.append('from_name', data.from_name);
    formData.append('subject', data.subject);
    formData.append('message', data.message);

    fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setEmailSent("success"); // Show the tick mark
          setTimeout(() => {
            setEmailSent(null); // Hide the tick mark after 3 seconds
            reset(); // Reset the form
          }, 3000); // Tick mark is visible for 3 seconds
        } else {
          setEmailSent("error"); // Show the cross mark
          setTimeout(() => {
            setEmailSent(null); // Hide the cross mark after 3 seconds
          }, 3000); // Cross mark is visible for 3 seconds
        }
      })
      .catch(() => {
        setEmailSent("error"); // Show the cross mark on failure
        setTimeout(() => {
          setEmailSent(null); // Hide the cross mark after 3 seconds
        }, 3000); // Cross mark is visible for 3 seconds
      });
  };

  return (
    <Container id="Education">
      <Wrapper>
        <TitleDiv>Contact</TitleDiv>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        {emailSent === "success" ? (
          <TickContainer>
            <TickSVG viewBox="0 0 52 52">
              <path
                d="M26 1c13.807 0 25 11.193 25 25S39.807 51 26 51 1 39.807 1 26 12.193 1 26 1z"
              />
              <path d="M14 27l7 7 16-16" />
            </TickSVG>
          </TickContainer>
        ) : emailSent === "error" ? (
          <TickContainer>
            <CrossSVG viewBox="0 0 52 52">
              <path d="M26 1C12.746 1 1 12.746 1 26s11.746 25 25 25 25-11.746 25-25S39.254 1 26 1z" />
              <path d="M16 16l20 20M36 16L16 36" />
            </CrossSVG>
          </TickContainer>
        ) : (
          <ContactForm onSubmit={handleSubmit(onSubmit)}>
            <ContactTitleDiv>Email Me 🚀</ContactTitleDiv>
            <ContactInput
              placeholder="Your Email"
              {...register("from_email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Please enter a valid email address"
                }
              })}
            />
            {errors.from_email && <Typography sx={{ color: "#FB5303" }}>{errors.from_email.message}</Typography>}

            <ContactInput
              placeholder="Your Name"
              {...register("from_name", { required: "Name is required" })}
            />
            {errors.from_name && <Typography sx={{ color: "#FB5303" }}>{errors.from_name.message}</Typography>}

            <ContactInput
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && <Typography sx={{ color: "#FB5303" }}>{errors.subject.message}</Typography>}

            <ContactInputMessage
              placeholder="Message"
              {...register("message", { required: "Message is required" })}
              rows={4}
            />
            {errors.message && <Typography sx={{ color: "#FB5303" }}>{errors.message.message}</Typography>}

            <ContactButton type="submit" value="Send" />
          </ContactForm>
        )}
      </Wrapper>
    </Container>
  );
};

export default Contact;
