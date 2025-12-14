package Adebabay.Clinic_Backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import Adebabay.Clinic_Backend.model.Activity;
import java.time.LocalDate;
import java.util.List;

public interface ActivitiesRepository extends MongoRepository<Activity, String> {
    List<Activity> findByActiveTrueOrderByActivityDateDesc();
    List<Activity> findByFeaturedTrueAndActiveTrue();
    List<Activity> findByActivityDateAfterAndActiveTrue(LocalDate date);
    List<Activity> findByCategoryAndActiveTrue(String category);
    
    @Query("{'activityDate': {$gte: ?0}, 'active': true}")
    List<Activity> findUpcomingActivities(LocalDate date);
}
    

