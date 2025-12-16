import React, { useState, useEffect } from "react";
import "@/styles/home/AboutSection.css";
import { aboutApi } from "@/api/aboutApi";

function AboutSection({ homeData, isFullPage = false }) {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await aboutApi.getAboutContent();
        setAboutData(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load About section.");
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <section className="about-section loading">Loading About section...</section>;
  if (error) return <section className="about-section error">{error}</section>;

  return (
    <section className={`about-section ${isFullPage ? 'full-page' : ''}`}>
      {/* Different heading based on page */}
      {isFullPage ? (
        <h1>About {aboutData.pageTitle || "Our Clinic"}</h1>
      ) : (
        <h2>About {aboutData.pageTitle || "Our Clinic"}</h2>
      )}
      
      <p className="about-description">{aboutData.mainDescription}</p>

      <div className="about-cards">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>{aboutData.mission}</p>
        </div>
        <div className="about-card">
          <h3>Our Vision</h3>
          <p>{aboutData.vision}</p>
        </div>
      </div>

      {/* Show home stats only on home page */}
      {!isFullPage && homeData?.stats && (
        <div className="about-stats">
          <h3>Our Achievements</h3>
          <div className="stats-grid">
            {Object.entries(homeData.stats).map(([key, value]) => (
              <div key={key} className="stat-item">
                <div className="stat-value">{value}+</div>
                <div className="stat-label">
                  {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Values section - always show */}
      <div className="about-values">
        <h3>Our Values</h3>
        <ul>
          {aboutData.values && aboutData.values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>

      {/* ADDITIONAL CONTENT FOR FULL PAGE */}
      {isFullPage && (
        <>
          {/* History section */}
          {aboutData.history && (
            <div className="about-history">
              <h2>Our History</h2>
              <p>{aboutData.history}</p>
            </div>
          )}

          {/* Team section */}
          {aboutData.team && aboutData.team.length > 0 && (
            <div className="about-team">
              <h2>Our Team</h2>
              <div className="team-grid">
                {aboutData.team.map((member, index) => (
                  <div key={index} className="team-member">
                    <div className="member-image">
                      {member.imageUrl ? (
                        <img 
                          src={member.imageUrl} 
                          alt={member.name}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/default-doctor.jpg";
                          }}
                        />
                      ) : (
                        <div className="default-avatar">
                          <i className="fas fa-user-md"></i>
                        </div>
                      )}
                    </div>
                    <div className="member-info">
                      <h3>{member.name}</h3>
                      <p className="position">{member.position}</p>
                      <p className="qualification">{member.qualification}</p>
                      <p className="experience">{member.experienceYears} years experience</p>
                      <p className="bio">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Statistics section */}
          {aboutData.statistics && (
            <div className="about-statistics">
              <h2>Clinic Statistics</h2>
              <div className="statistics-grid">
                {Object.entries(aboutData.statistics).map(([key, value], index) => (
                  <div key={index} className="statistic-item">
                    <div className="statistic-value">{value}</div>
                    <div className="statistic-label">
                      {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default AboutSection;