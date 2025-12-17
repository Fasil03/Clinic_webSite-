import React, { useState, useEffect } from "react";
import ActivitiesSection from "@/components/activities/ActivitiesSection";
import { activitiesApi } from "@/api/activitiesApi";

function Activities() {
  const [activitiesData, setActivitiesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivitiesData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await activitiesApi.getActivities();
        setActivitiesData(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load activities. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchActivitiesData();
  }, []);

  if (loading) return <div className="activities-page loading">Loading Activities...</div>;
  if (error) return <div className="activities-page error">{error}</div>;

  return (
    <div className="activities-page">
      <ActivitiesSection activities={activitiesData} />
    </div>
  );
}

export default Activities;