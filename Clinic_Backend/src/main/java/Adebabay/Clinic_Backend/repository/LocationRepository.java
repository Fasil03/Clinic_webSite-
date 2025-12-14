package Adebabay.Clinic_Backend.repository;




import org.springframework.data.mongodb.repository.MongoRepository;

import Adebabay.Clinic_Backend.model.LocationInfo;

import java.util.List;
import java.util.Optional;

public interface LocationRepository extends MongoRepository<LocationInfo, String> {
    List<LocationInfo> findAllByOrderByCreatedAtDesc();
    Optional<LocationInfo> findFirstByOrderByCreatedAtDesc();
}
    

