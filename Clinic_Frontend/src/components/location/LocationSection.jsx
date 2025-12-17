import React from "react";
import { FaPhone, FaEnvelope, FaClock, FaCar, FaWheelchair, FaUserMd } from "react-icons/fa";
import "@/styles/location/LocationSection.css";

function LocationSection({ locationData }) {
  if (!locationData) return null;

  // Generate Google Maps URL from coordinates
  const mapsUrl = `https://www.google.com/maps?q=${locationData.latitude},${locationData.longitude}&hl=en&z=15&output=embed`;

  return (
    <section className="location-section">
      {/* Header */}
      <div className="location-header">
        <h1>Our Location</h1>
        <p className="clinic-name">{locationData.clinicName}</p>
        {locationData.branchName && (
          <p className="branch-name">{locationData.branchName}</p>
        )}
      </div>

      <div className="location-content">
        {/* Left Column: Map */}
        <div className="map-container">
          <iframe
            title="Clinic Location"
            src={mapsUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Column: Info */}
        <div className="location-info">
          {/* Address */}
          <div className="info-card address-card">
            <h3>Address</h3>
            <p className="address">{locationData.address}</p>
            <p className="city">{locationData.city}, {locationData.state} {locationData.zipCode}</p>
            <p className="country">{locationData.country}</p>
          </div>

          {/* Contact Info */}
          <div className="info-card contact-card">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <span className="contact-label">Phone:</span>
                <a href={`tel:${locationData.phone}`} className="contact-value">
                  {locationData.phone}
                </a>
              </div>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon emergency" />
              <div>
                <span className="contact-label">Emergency:</span>
                <a href={`tel:${locationData.emergencyPhone}`} className="contact-value emergency">
                  {locationData.emergencyPhone}
                </a>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <span className="contact-label">Email:</span>
                <a href={`mailto:${locationData.email}`} className="contact-value">
                  {locationData.email}
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          {locationData.workingHours && (
            <div className="info-card hours-card">
              <h3><FaClock /> Working Hours</h3>
              <div className="hours-list">
                {Object.entries(locationData.workingHours).map(([day, hours]) => (
                  <div key={day} className="hour-item">
                    <span className="day">{day}</span>
                    <span className="time">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Facilities */}
          {locationData.facilities && locationData.facilities.length > 0 && (
            <div className="info-card facilities-card">
              <h3>Facilities & Services</h3>
              <div className="facilities-grid">
                {locationData.facilities.map((facility, index) => (
                  <div key={index} className="facility-item">
                    {facility === "Parking" && <FaCar />}
                    {facility === "Wheelchair Access" && <FaWheelchair />}
                    {facility === "Pharmacy" && <span className="pharmacy-icon">💊</span>}
                    {facility === "Ambulance" && <span className="ambulance-icon">🚑</span>}
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Doctor Schedules */}
          {locationData.doctorSchedules && locationData.doctorSchedules.length > 0 && (
            <div className="info-card doctors-card">
              <h3><FaUserMd /> Doctor Schedules</h3>
              <div className="doctors-list">
                {locationData.doctorSchedules.map((doctor, index) => (
                  <div key={index} className="doctor-item">
                    <div className="doctor-info">
                      <h4>{doctor.doctorName}</h4>
                      <p className="specialization">{doctor.specialization}</p>
                    </div>
                    <div className="doctor-schedule">
                      {doctor.schedule && Object.entries(doctor.schedule).map(([day, time]) => (
                        <div key={day} className="schedule-item">
                          <span className="schedule-day">{day}</span>
                          <span className="schedule-time">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Directions Button */}
      <div className="directions-section">
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${locationData.latitude},${locationData.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="directions-btn"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}

export default LocationSection;