package Adebabay.Clinic_Backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Adebabay.Clinic_Backend.model.AboutContent;
import Adebabay.Clinic_Backend.repository.AboutRepository;

import java.time.LocalDateTime;


@Service
public class AboutService {

    @Autowired
    private AboutRepository aboutRepository;
    
    public AboutContent getAboutContent() {
        return aboutRepository.findFirstByOrderByUpdatedAtDesc()
                .orElseGet(this::getDefaultAboutContent);
    }
    
    public AboutContent updateAboutContent(AboutContent aboutContent) {
        aboutContent.setUpdatedAt(LocalDateTime.now());
        return aboutRepository.save(aboutContent);
    }
    
    private AboutContent getDefaultAboutContent() {
        AboutContent aboutContent = new AboutContent();
        aboutContent.setPageTitle("About Our Clinic");
        aboutContent.setMainDescription("We are dedicated to providing exceptional healthcare services...");
        aboutContent.setMission("To provide compassionate, comprehensive healthcare...");
        aboutContent.setVision("To be the leading healthcare provider...");
        return aboutContent;
    }
}
    

