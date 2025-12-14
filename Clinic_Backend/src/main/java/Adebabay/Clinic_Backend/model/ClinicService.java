package Adebabay.Clinic_Backend.model;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "services")
public class ClinicService {
    @Id
    private String id;
    private String name;
    private String description;
    private String shortDescription;
    private String category;
    private String icon;
    private String imageUrl;
    private Double price;
    private String priceUnit;
    private List<String> benefits;
    private List<String> procedures;
    private List<String> features;
    private Integer displayOrder;
    private boolean active;
    private Boolean featured;
    private Integer estimatedDuration;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}