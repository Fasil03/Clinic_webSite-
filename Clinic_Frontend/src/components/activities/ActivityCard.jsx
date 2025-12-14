import React from "react";
import "@/styles/activities/ActivityCard.css";

function ActivityCard({ title, description }) {
  return (
    <div className="activity-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ActivityCard;
