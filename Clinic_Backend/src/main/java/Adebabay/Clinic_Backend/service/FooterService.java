package Adebabay.Clinic_Backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Adebabay.Clinic_Backend.model.Footer;
import Adebabay.Clinic_Backend.repository.FooterRepository;

import java.time.LocalDateTime;


@Service


public class FooterService {
    
    @Autowired
    private FooterRepository footerRepository;
    
    public Footer getFooter() {
        return footerRepository.findFirstByOrderByUpdatedAtDesc()
                .orElseGet(this::getDefaultFooter);
    }
    
    public Footer updateFooter(Footer footer) {
        footer.setUpdatedAt(LocalDateTime.now());
        return footerRepository.save(footer);
    }
    
    private Footer getDefaultFooter() {
        Footer footer = new Footer();
        footer.setClinicName("Our Clinic");
        footer.setAddress("123 Medical Street, Health City");
        footer.setPhone("+1-234-567-8900");
        footer.setEmail("info@ourclinic.com");
        footer.setCopyrightText("© 2024 Our Clinic. All rights reserved.");
        return footer;
    }

    
}
