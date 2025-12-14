package Adebabay.Clinic_Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Adebabay.Clinic_Backend.model.HomeContent;
import Adebabay.Clinic_Backend.service.HomeService;

@RestController
@RequestMapping("/api/home")
@CrossOrigin(origins = "http://localhost:5173")

public class HomeController {

    @Autowired
    private HomeService homeService;
    
    @GetMapping
    public ResponseEntity<HomeContent> getHomeContent() {
        return ResponseEntity.ok(homeService.getHomeContent());
    }
    
    @PutMapping
    public ResponseEntity<HomeContent> updateHomeContent(@RequestBody HomeContent homeContent) {
        return ResponseEntity.ok(homeService.updateHomeContent(homeContent));
    }

    
}
