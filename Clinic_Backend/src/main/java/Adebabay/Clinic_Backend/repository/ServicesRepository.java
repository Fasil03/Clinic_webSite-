package Adebabay.Clinic_Backend.repository;

import Adebabay.Clinic_Backend.model.ClinicService;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ServicesRepository extends MongoRepository<ClinicService, String> {
    List<ClinicService> findByActiveTrue();
    List<ClinicService> findByFeaturedTrueAndActiveTrue();
    List<ClinicService> findByCategoryAndActiveTrue(String category);
}