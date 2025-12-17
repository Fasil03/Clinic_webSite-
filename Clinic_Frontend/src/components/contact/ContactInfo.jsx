import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "@/styles/contact/ContactInfo.css";

function ContactInfo() {
  const contactInfo = {
    address: "Adebabay Clinic, 123 Health Street, Humera, Ethiopia",
    phone: "+251 123 456 789",
    emergency: "+251 911 123 456",
    email: "info@adebabayclinic.com",
    workingHours: {
      "Monday - Friday": "8:00 AM - 8:00 PM",
      "Saturday": "9:00 AM - 5:00 PM",
      "Sunday": "10:00 AM - 4:00 PM",
      "Emergency": "24/7"
    }
  };

  return (
    <section className="contact-info-section">
      <div className="info-header">
        <h2>Contact Information</h2>
        <p>Get in touch with us through any of these channels</p>
      </div>

      <div className="info-grid">
        {/* Address */}
        <div className="info-card">
          <div className="card-icon address">
            <FaMapMarkerAlt />
          </div>
          <h3>Our Address</h3>
          <p>{contactInfo.address}</p>
        </div>

        {/* Phone */}
        <div className="info-card">
          <div className="card-icon phone">
            <FaPhone />
          </div>
          <h3>Phone Numbers</h3>
          <p className="phone-number">
            <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
          </p>
          <p className="emergency-number">
            <strong>Emergency:</strong>
            <a href={`tel:${contactInfo.emergency}`}>{contactInfo.emergency}</a>
          </p>
        </div>

        {/* Email */}
        <div className="info-card">
          <div className="card-icon email">
            <FaEnvelope />
          </div>
          <h3>Email Address</h3>
          <p>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </p>
        </div>

        {/* Working Hours */}
        <div className="info-card">
          <div className="card-icon hours">
            <FaClock />
          </div>
          <h3>Working Hours</h3>
          <div className="hours-list">
            {Object.entries(contactInfo.workingHours).map(([day, hours]) => (
              <div key={day} className="hour-item">
                <span className="day">{day}</span>
                <span className="time">{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Preview */}
      <div className="map-preview">
        <h3>Find Us Here</h3>
        <div className="mini-map">
          <iframe
            title="Clinic Location Mini Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d37.123456!3d14.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sAdebabay%20Clinic!5e0!3m2!1sen!2set!4v1234567890"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;