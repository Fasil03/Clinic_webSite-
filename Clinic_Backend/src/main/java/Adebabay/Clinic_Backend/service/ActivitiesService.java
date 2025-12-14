package Adebabay.Clinic_Backend.service;

import Adebabay.Clinic_Backend.model.Activity;
import Adebabay.Clinic_Backend.repository.ActivitiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class ActivitiesService {
    
    @Autowired
    private ActivitiesRepository activitiesRepository;
    
    public List<Activity> getAllActivities() {
        return activitiesRepository.findByActiveTrueOrderByActivityDateDesc();
    }
    
    public List<Activity> getUpcomingActivities() {
        return activitiesRepository.findUpcomingActivities(LocalDate.now());
    }
    
    public List<Activity> getFeaturedActivities() {
        return activitiesRepository.findByFeaturedTrueAndActiveTrue();
    }
    
    public Activity getActivityById(String id) {
        return activitiesRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Activity not found with id: " + id));
    }
    
    public Activity createActivity(Activity activity) {
        activity.setCreatedAt(LocalDateTime.now());
        activity.setActive(true);
        return activitiesRepository.save(activity);
    }
    
    public Activity registerParticipant(String activityId) {
        Activity activity = getActivityById(activityId);
        
        if (activity.getCurrentParticipants() >= activity.getMaxParticipants()) {
            throw new RuntimeException("Activity is full");
        }
        
        activity.setCurrentParticipants(activity.getCurrentParticipants() + 1);
        return activitiesRepository.save(activity);
    }
}