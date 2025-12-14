package Adebabay.Clinic_Backend.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import Adebabay.Clinic_Backend.model.ContactMessage;
import java.util.List;

public interface ContactRepository extends MongoRepository<ContactMessage, String> {
    List<ContactMessage> findByStatusOrderByCreatedAtDesc(String status);
    List<ContactMessage> findByPriorityOrderByCreatedAtDesc(String priority);
    long countByStatus(String status);
}
    

