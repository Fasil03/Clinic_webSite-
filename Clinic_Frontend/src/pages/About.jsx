import React, { useState, useEffect } from "react";
import "@/styles/about/AboutPage.css";
import AboutSection from "@/components/home/AboutSection";
import { aboutApi } from "@/api/aboutApi";

function About() {
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
        setError("Failed to load about content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <div className="about-page loading">Loading About...</div>;
  if (error) return <div className="about-page error">{error}</div>;

  return (
    <div className="about-page">
      <AboutSection aboutData={aboutData} isFullPage={true} />
    </div>
  );
}

export default About;