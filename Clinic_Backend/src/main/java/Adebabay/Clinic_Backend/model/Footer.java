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
@Document(collection = "footers")
public class Footer {
    @Id
    private String id;
    private String clinicName;
    private String address;
    private String phone;
    private String email;
    private String emergencyContact;
    private List<Link> quickLinks;
    private List<Link> serviceLinks;
    private List<SocialLink> socialLinks;
    private List<Link> legalLinks;
    private boolean newsletterEnabled;
    private String newsletterTitle;
    private String newsletterDescription;
    private String copyrightText;
    private String developedBy;
    private String developedByLink;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Link {
        private String text;
        private String url;
        private String target;
    }
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class SocialLink {
        private String platform;
        private String url;
        private String iconClass;
        private String displayName;
    }
}