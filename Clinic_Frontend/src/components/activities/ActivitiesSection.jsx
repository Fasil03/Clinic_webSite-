import React from "react";
import activities from "@/data/activities";
import ActivityCard from "./ActivityCard";
import "@/styles/activities/ActivitiesSection.css";

function ActivitiesSection({ limit }) {
  const list = limit ? activities.slice(0, limit) : activities;

  return (
    <section className="activities-section">
      <h2>Our Activities</h2>
      <div className="activities-grid">
        {list.map((activity) => (
          <ActivityCard
            key={activity.id}
            title={activity.title}
            description={activity.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ActivitiesSection;
