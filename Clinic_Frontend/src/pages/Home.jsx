import React, { useState, useEffect } from "react";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";
import { homeApi } from "@/api/homeApi";

function Home() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await homeApi.getHomeContent();
        setHomeData(data);
      } catch (err) {
        console.error(err);
        setError("Backend not reachable. Please try later.");
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (loading) return <div className="home-page loading">Loading...</div>;
  if (error) return <div className="home-page error">{error}</div>;

  return (
    <div className="home-page">
      <Hero
        title={homeData.heroTitle}
        description={homeData.heroDescription}
        imageUrl={homeData.heroImageUrl}
        buttonText={homeData.heroButtonText}
        buttonLink={homeData.heroButtonLink}
      />
      <AboutSection homeData={homeData} />
      <ServicesSection limit={3} />
    </div>
  );
}

export default Home;
