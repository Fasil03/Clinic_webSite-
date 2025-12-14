package Adebabay.Clinic_Backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import Adebabay.Clinic_Backend.model.HomeContent;
import java.util.Optional;

public interface HomeRepository extends MongoRepository<HomeContent, String> {
    Optional<HomeContent> findByActiveTrue();

    
}
