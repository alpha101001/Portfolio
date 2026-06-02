export interface ContactFormData {
  from_email: string;
  from_name: string;
  subject: string;
  message: string;
}

const emailConfig = {
  endpoint: "https://api.emailjs.com/api/v1.0/email/send-form",
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_alpha",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_drv7ed4",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "cDTK7OE1cfnZJOvrS",
};

export const sendContactMessage = async (data: ContactFormData) => {
  const formData = new FormData();
  formData.append("service_id", emailConfig.serviceId);
  formData.append("template_id", emailConfig.templateId);
  formData.append("user_id", emailConfig.publicKey);
  formData.append("from_email", data.from_email);
  formData.append("from_name", data.from_name);
  formData.append("subject", data.subject);
  formData.append("message", data.message);

  const response = await fetch(emailConfig.endpoint, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Email request failed");
  }
};
