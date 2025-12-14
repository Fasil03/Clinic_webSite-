import React from "react";
import { 
  FaStethoscope, 
  FaHeart, 
  FaTooth, 
  FaUserMd, 
  FaAmbulance,
  FaFlask 
} from "react-icons/fa";
import "@/styles/services/ServiceCard.css";

function ServiceCard({ service }) {
  // Map categories to icons
  const getIcon = () => {
    const category = service.category?.toLowerCase();
    if (category?.includes('dental')) return <FaTooth />;
    if (category?.includes('cardio')) return <FaHeart />;
    if (category?.includes('general')) return <FaStethoscope />;
    if (category?.includes('emergency')) return <FaAmbulance />;
    if (category?.includes('lab')) return <FaFlask />;
    return <FaUserMd />;
  };

  // Get CSS class based on category
  const getCardClass = () => {
    const category = service.category?.toLowerCase();
    if (category?.includes('dental')) return 'service-card dental';
    if (category?.includes('cardio')) return 'service-card cardiology';
    if (category?.includes('general')) return 'service-card general';
    return 'service-card';
  };

  return (
    <div className={getCardClass()}>
      <div className="service-icon">
        {getIcon()}
      </div>
      <h3>{service.name}</h3>
      <p className="service-description">
        {service.shortDescription || service.description}
      </p>
      {service.price && (
        <div className="service-price">
          <strong>${service.price}</strong> {service.priceUnit || "per session"}
        </div>
      )}
      {service.benefits && service.benefits.length > 0 && (
        <div className="service-benefits">
          <h4>Benefits:</h4>
          <ul>
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index}>✓ {benefit}</li>
            ))}
          </ul>
        </div>
      )}
      <button className="service-button">Learn More</button>
    </div>
  );
}

export default ServiceCard;