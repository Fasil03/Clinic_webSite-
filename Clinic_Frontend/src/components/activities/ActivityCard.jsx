import React from "react";
import "@/styles/activities/ActivityCard.css";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

function ActivityCard({ activity }) {
  const formatDate = (dateString) => {
    if (!dateString) return "Date TBD";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    if (!timeString) return "";
    const time = new Date(`1970-01-01T${timeString}`);
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="activity-card">
      {/* Activity Image */}
      {activity.imageUrl && (
        <div className="activity-image">
          <img 
            src={activity.imageUrl} 
            alt={activity.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/default-activity.jpg";
            }}
          />
          {activity.featured && (
            <span className="featured-badge">Featured</span>
          )}
          <span className="category-badge">{activity.category}</span>
        </div>
      )}

      {/* Activity Content */}
      <div className="activity-content">
        <h3>{activity.title}</h3>
        <p className="activity-description">
          {activity.shortDescription || activity.description}
        </p>

        {/* Activity Details */}
        <div className="activity-details">
          <div className="detail-item">
            <FaCalendarAlt className="detail-icon" />
            <span>{formatDate(activity.activityDate)}</span>
          </div>
          
          {activity.startTime && (
            <div className="detail-item">
              <FaClock className="detail-icon" />
              <span>
                {formatTime(activity.startTime)}
                {activity.endTime && ` - ${formatTime(activity.endTime)}`}
              </span>
            </div>
          )}
          
          {activity.location && (
            <div className="detail-item">
              <FaMapMarkerAlt className="detail-icon" />
              <span>{activity.location}</span>
            </div>
          )}
          
          {activity.maxParticipants && (
            <div className="detail-item">
              <FaUsers className="detail-icon" />
              <span>
                {activity.currentParticipants || 0}/{activity.maxParticipants} participants
              </span>
            </div>
          )}
        </div>

        {/* Tags */}
        {activity.tags && activity.tags.length > 0 && (
          <div className="activity-tags">
            {activity.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}

        {/* Registration Info */}
        {activity.registrationRequired && (
          <div className="registration-info">
            <span className="registration-badge">Registration Required</span>
            {activity.registrationDeadline && (
              <span className="deadline">
                Deadline: {formatDate(activity.registrationDeadline)}
              </span>
            )}
          </div>
        )}

        {/* Contact Info */}
        {activity.organizer && (
          <div className="organizer-info">
            <strong>Organized by:</strong> {activity.organizer}
          </div>
        )}
      </div>
    </div>
  );
}

export default ActivityCard;