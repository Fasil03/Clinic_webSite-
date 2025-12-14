import React from "react";
import "@/styles/location/LocationSection.css";

function LocationSection() {
  return (
    <section className="location-section">
      <h2>Our Clinic Location</h2>
      <p>Adebabay Clinic, 123 Health Street, Humera, Ethiopia</p>

      {/* Embedded Google Map */}
      <div className="map-container">
        <iframe
          title="Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d37.123456!3d14.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sAdebabay%20Clinic!5e0!3m2!1sen!2set!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default LocationSection;
