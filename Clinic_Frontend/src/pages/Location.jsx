import React, { useState, useEffect } from "react";
import LocationSection from "@/components/location/LocationSection";
import { locationApi } from "@/api/locationApi";

function Location() {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocationData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await locationApi.getLocationInfo();
        setLocationData(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load location information. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLocationData();
  }, []);

  if (loading) return <div className="location-page loading">Loading Location...</div>;
  if (error) return <div className="location-page error">{error}</div>;

  return (
    <div className="location-page">
      <LocationSection locationData={locationData} />
    </div>
  );
}

export default Location;