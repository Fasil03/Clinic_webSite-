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
@Document(collection = "home_contents")
public class HomeContent {
    @Id
    private String id;
    private String heroTitle;
    private String heroDescription;
    private String heroImageUrl;
    private String heroButtonText;
    private String heroButtonLink;
    private List<Feature> features;
    private Map<String, Integer> stats;
    private boolean active;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Feature {
        private String title;
        private String description;
        private String icon;
    }
}