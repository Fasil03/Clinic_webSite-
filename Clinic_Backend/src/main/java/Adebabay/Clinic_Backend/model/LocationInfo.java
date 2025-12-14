package Adebabay.Clinic_Backend.model;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Data
@Document(collection = "locations")

public class LocationInfo {
    @Id
    private String id;
    
    private String clinicName;
    private String branchName;
    
    // Contact Info
    private String address;
    private String city;
    private String state;
    private String zipCode;
    private String country;
    
    private String phone;
    private String email;
    private String emergencyPhone;
    
    // Coordinates for Map
    private Double latitude;
    private Double longitude;
    
    // Working Hours
    private Map<String, String> workingHours; // Key: Day, Value: Hours
    
    // Facilities
    private List<String> facilities; // ["Parking", "Pharmacy", "Ambulance", "Wheelchair Access"]
    
    // Doctors Availability
    private List<DoctorSchedule> doctorSchedules;
    
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
    @Data
    public static class DoctorSchedule {
        private String doctorName;
        private String specialization;
        private Map<String, String> schedule; // Key: Day, Value: Time
    }

}
