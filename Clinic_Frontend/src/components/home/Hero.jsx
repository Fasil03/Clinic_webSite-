import React from "react";
import "@/styles/home/Hero.css";

function Hero({ title, description, imageUrl, buttonText, buttonLink }) {
  const defaultImage = "/images/banner.jpg"; 
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
        {buttonText && buttonLink && (
          <a href={buttonLink} className="hero-button">{buttonText}</a>
        )}
      </div>
      <div className="hero-image">
        <img
          src={imageUrl || defaultImage}
          alt="Clinic Banner"
          onError={(e) => { e.target.onerror = null; e.target.src = defaultImage; }}
        />
      </div>
    </section>
  );
}

export default Hero;
