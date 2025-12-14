package Adebabay.Clinic_Backend.model;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "about_contents")
public class AboutContent {
    @Id
    private String id;
    private String pageTitle;
    private String mainDescription;
    private String mission;
    private String vision;
    private String history;
    private List<String> values;
    private List<TeamMember> team;
    private Map<String, Object> statistics;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class TeamMember {
        private String name;
        private String position;
        private String qualification;
        private String bio;
        private String imageUrl;
        private Integer experienceYears;
        private List<String> specialties;
    }
}