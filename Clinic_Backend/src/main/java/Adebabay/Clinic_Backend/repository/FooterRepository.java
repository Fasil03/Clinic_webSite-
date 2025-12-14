package Adebabay.Clinic_Backend.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import Adebabay.Clinic_Backend.model.Footer;
import java.util.Optional;

public interface FooterRepository extends MongoRepository<Footer, String> {
    Optional<Footer> findFirstByOrderByUpdatedAtDesc();
}
    

