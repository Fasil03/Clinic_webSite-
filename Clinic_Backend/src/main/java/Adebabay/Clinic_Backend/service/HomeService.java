package Adebabay.Clinic_Backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Adebabay.Clinic_Backend.model.HomeContent;
import Adebabay.Clinic_Backend.repository.HomeRepository;

import java.time.LocalDateTime;

@Service


public class HomeService {
  

    
    @Autowired
    private HomeRepository homeRepository;
    
    public HomeContent getHomeContent() {
        return homeRepository.findByActiveTrue()
                .orElseGet(this::getDefaultHomeContent);
    }
    
    public HomeContent updateHomeContent(HomeContent homeContent) {
        homeContent.setUpdatedAt(LocalDateTime.now());
        return homeRepository.save(homeContent);
    }
    
    private HomeContent getDefaultHomeContent() {
        HomeContent homeContent = new HomeContent();
        homeContent.setHeroTitle("Welcome to Our Clinic");
        homeContent.setHeroDescription("Providing exceptional healthcare services with compassion and expertise.");
        homeContent.setActive(true);
        return homeContent;
    }

    
}
