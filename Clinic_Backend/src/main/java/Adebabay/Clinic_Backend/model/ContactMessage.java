package Adebabay.Clinic_Backend.model;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Data
@Document(collection = "contact_messages")
public class ContactMessage {
   
    @Id
    private String id;
    
    private String name;
    private String email;
    private String phone;
    private String subject;
    private String message;
    
    private String status; // NEW, READ, REPLIED, ARCHIVED
    private String priority; // LOW, MEDIUM, HIGH
    
    // Response tracking
    private String replyMessage;
    private LocalDateTime repliedAt;
    private String repliedBy;
    
    private LocalDateTime createdAt;
}

