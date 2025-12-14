package Adebabay.Clinic_Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Adebabay.Clinic_Backend.model.Activity;
import Adebabay.Clinic_Backend.service.ActivitiesService;

import java.util.List;

@RestController
@RequestMapping("/api/activities")
@CrossOrigin(origins = "http://localhost:5173")

public class ActivitiesController {
  
    @Autowired
    private ActivitiesService activitiesService;
    
    @GetMapping
    public ResponseEntity<List<Activity>> getAllActivities() {
        return ResponseEntity.ok(activitiesService.getAllActivities());
    }
    
    @GetMapping("/upcoming")
    public ResponseEntity<List<Activity>> getUpcomingActivities() {
        return ResponseEntity.ok(activitiesService.getUpcomingActivities());
    }
    
    @GetMapping("/featured")
    public ResponseEntity<List<Activity>> getFeaturedActivities() {
        return ResponseEntity.ok(activitiesService.getFeaturedActivities());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable String id) {
        return ResponseEntity.ok(activitiesService.getActivityById(id));
    }
    
    @PostMapping
    public ResponseEntity<Activity> createActivity(@RequestBody Activity activity) {
        return new ResponseEntity<>(activitiesService.createActivity(activity), HttpStatus.CREATED);
    }
    
    @PostMapping("/{id}/register")
    public ResponseEntity<Activity> registerParticipant(@PathVariable String id) {
        return ResponseEntity.ok(activitiesService.registerParticipant(id));
    }

    
}
