package Adebabay.Clinic_Backend.controller;  // This line must match folder location

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
public class TestController {
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
    @GetMapping("/api/test")
    public Map<String, String> testConnection() {
        Map<String, String> response = new HashMap<>();
        
        try {
            // Try to get database name
            String dbName = mongoTemplate.getDb().getName();
            response.put("status", "SUCCESS");
            response.put("message", "Connected to MongoDB Atlas!");
            response.put("database", dbName);
        } catch (Exception e) {
            response.put("status", "ERROR");
            response.put("message", "Failed to connect to MongoDB: " + e.getMessage());
        }
        
        return response;
    }
}