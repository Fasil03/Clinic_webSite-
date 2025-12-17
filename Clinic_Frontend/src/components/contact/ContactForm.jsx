import React, { useState } from "react";
import { contactApi } from "@/api/contactApi";
import "@/styles/contact/ContactForm.css";
import { FaUser, FaEnvelope, FaPhone, FaFileAlt, FaComment } from "react-icons/fa";

function ContactForm({ onSubmission }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (formData.phone && !/^[\d\s\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setLoading(true);
    setErrors({});
    
    try {
      await contactApi.sendMessage(formData);
      
      // Success
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      onSubmission('success');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        onSubmission(null);
      }, 5000);
      
    } catch (err) {
      console.error('Form submission error:', err);
      onSubmission('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        onSubmission(null);
      }, 5000);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="form-header">
        <h2>Send Us a Message</h2>
        <p>Fill out the form below and we'll get back to you as soon as possible.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">
            <FaUser className="input-icon" />
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">
            <FaEnvelope className="input-icon" />
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {/* Phone Field */}
        <div className="form-group">
          <label htmlFor="phone">
            <FaPhone className="input-icon" />
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number (optional)"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        {/* Subject Field */}
        <div className="form-group">
          <label htmlFor="subject">
            <FaFileAlt className="input-icon" />
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={errors.subject ? 'error' : ''}
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Appointment Booking">Appointment Booking</option>
            <option value="Emergency">Emergency</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && <span className="error-message">{errors.subject}</span>}
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label htmlFor="message">
            <FaComment className="input-icon" />
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Please provide details about your inquiry..."
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className={errors.message ? 'error' : ''}
          />
          <div className="char-counter">
            {formData.message.length} / 500 characters
          </div>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? (
            <>
              <span className="loading-spinner"></span>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;