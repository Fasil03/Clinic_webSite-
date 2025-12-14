package Adebabay.Clinic_Backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Adebabay.Clinic_Backend.model.ContactMessage;
import Adebabay.Clinic_Backend.repository.ContactRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service


public class ContactService {
    
    
    @Autowired
    private ContactRepository contactRepository;
    
    public ContactMessage saveMessage(ContactMessage message) {
        message.setCreatedAt(LocalDateTime.now());
        message.setStatus("NEW");
        message.setPriority("MEDIUM");
        return contactRepository.save(message);
    }
    
    public List<ContactMessage> getAllMessages() {
        return contactRepository.findAll();
    }
    
    public List<ContactMessage> getMessagesByStatus(String status) {
        return contactRepository.findByStatusOrderByCreatedAtDesc(status);
    }
    
    public ContactMessage updateMessageStatus(String id, String status) {
        ContactMessage message = contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Message not found with id: " + id));
        
        message.setStatus(status);
        if (status.equals("REPLIED")) {
            message.setRepliedAt(LocalDateTime.now());
        }
        
        return contactRepository.save(message);
    }
    
    public long getNewMessagesCount() {
        return contactRepository.countByStatus("NEW");
    }

    
}
