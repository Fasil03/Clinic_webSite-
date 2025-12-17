import React, { useState } from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import "@/styles/contact/ContactPage.css";

function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmissionStatus = (status) => {
    setSubmissionStatus(status);
  };

  return (
    <div className="contact-page">
      {submissionStatus === 'success' && (
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h3>Message Sent Successfully!</h3>
          <p>Thank you for contacting us. We'll get back to you soon.</p>
        </div>
      )}
      
      {submissionStatus === 'error' && (
        <div className="error-message">
          <div className="error-icon">⚠️</div>
          <h3>Something Went Wrong</h3>
          <p>Please try again later or contact us directly.</p>
        </div>
      )}

      <div className="contact-container">
        <ContactForm onSubmission={handleSubmissionStatus} />
        <ContactInfo />
      </div>
    </div>
  );
}

export default Contact;