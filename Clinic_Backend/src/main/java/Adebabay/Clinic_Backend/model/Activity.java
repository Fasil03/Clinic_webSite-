package Adebabay.Clinic_Backend.model;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Data
@Document(collection = "activities")
public class Activity {
    @Id
    private String id;
    
    private String title;
    private String description;
    private String shortDescription;
    private String imageUrl;
    
    // Date and Time
    private LocalDate activityDate;
    private LocalTime startTime;
    private LocalTime endTime;
    
    // Location
    private String location;
    private String address;
    
    // Registration
    private boolean registrationRequired;
    private Integer maxParticipants;
    private Integer currentParticipants;
    private LocalDate registrationDeadline;
    
    // Category
    private String category; // "Health Camp", "Workshop", "Seminar", "Campaign"
    private List<String> tags;
    
    // Contact
    private String organizer;
    private String contactEmail;
    private String contactPhone;
    
    // Metadata
    private boolean active;
    private boolean featured;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    
}
