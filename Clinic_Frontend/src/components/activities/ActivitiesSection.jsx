import React from "react";
import ActivityCard from "./ActivityCard";
import "@/styles/activities/ActivitiesSection.css";

function ActivitiesSection({ activities, limit }) {
  const displayActivities = limit ? activities.slice(0, limit) : activities;

  if (!activities || activities.length === 0) {
    return (
      <section className="activities-section">
        <h2>Our Activities</h2>
        <p className="no-activities">No activities available at the moment.</p>
      </section>
    );
  }

  return (
    <section className="activities-section">
      <h2>Our Activities</h2>
      <div className="activities-grid">
        {displayActivities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
          />
        ))}
      </div>
    </section>
  );
}

export default ActivitiesSection;