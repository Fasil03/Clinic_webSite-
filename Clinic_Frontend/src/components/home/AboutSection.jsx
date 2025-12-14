import React, { useState, useEffect } from "react";
import "@/styles/home/AboutSection.css";
import { aboutApi } from "@/api/aboutApi";

function AboutSection({ homeData }) {
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
    <section className="about-section">
      <h2>About {aboutData.pageTitle || "Our Clinic"}</h2>
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

      {homeData?.stats && (
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

      <div className="about-values">
        <h3>Our Values</h3>
        <ul>
          {aboutData.values && aboutData.values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
