import React, { useState, useEffect } from "react";
import ServiceCard from "@/components/services/ServiceCard"; 
import "@/styles/services/ServicesSection.css";
import { servicesApi } from "@/api/servicesApi";

function ServicesSection({ limit }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await servicesApi.getAllServices();
        setServices(data);
      } catch (error) {
        console.error("Error loading services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const visibleServices = limit ? services.slice(0, limit) : services;

  if (loading) {
    return (
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="loading">Loading services...</div>
      </section>
    );
  }

  if (services.length === 0) {
    return (
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="no-services">No services available at the moment.</div>
      </section>
    );
  }

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {visibleServices.map((service) => (
          <ServiceCard key={service.id || service._id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;