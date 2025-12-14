package Adebabay.Clinic_Backend.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import Adebabay.Clinic_Backend.model.AboutContent;
import java.util.Optional;

public interface AboutRepository extends MongoRepository<AboutContent, String> {
    Optional<AboutContent> findFirstByOrderByUpdatedAtDesc();
}

