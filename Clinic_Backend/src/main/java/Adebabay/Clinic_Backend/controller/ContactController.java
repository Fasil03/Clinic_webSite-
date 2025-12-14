package Adebabay.Clinic_Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Adebabay.Clinic_Backend.model.ContactMessage;
import Adebabay.Clinic_Backend.service.ContactService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    
    @Autowired
    private ContactService contactService;
    
    @PostMapping
    public ResponseEntity<Map<String, Object>> saveMessage(@RequestBody ContactMessage message) {
        ContactMessage saved = contactService.saveMessage(message);
        
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Your message has been sent successfully!");
        response.put("data", saved);
        
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    
    @GetMapping
    public ResponseEntity<List<ContactMessage>> getAllMessages() {
        return ResponseEntity.ok(contactService.getAllMessages());
    }
    
    @GetMapping("/status/{status}")
    public ResponseEntity<List<ContactMessage>> getMessagesByStatus(@PathVariable String status) {
        return ResponseEntity.ok(contactService.getMessagesByStatus(status));
    }
    
    @PutMapping("/{id}/status/{status}")
    public ResponseEntity<ContactMessage> updateMessageStatus(
            @PathVariable String id,
            @PathVariable String status) {
        return ResponseEntity.ok(contactService.updateMessageStatus(id, status));
    }
    
    @GetMapping("/new/count")
    public ResponseEntity<Map<String, Long>> getNewMessagesCount() {
        Map<String, Long> response = new HashMap<>();
        response.put("count", contactService.getNewMessagesCount());
        return ResponseEntity.ok(response);
    }

    
}
