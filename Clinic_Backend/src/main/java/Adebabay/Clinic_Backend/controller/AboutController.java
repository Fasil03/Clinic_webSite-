package Adebabay.Clinic_Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Adebabay.Clinic_Backend.model.AboutContent;
import Adebabay.Clinic_Backend.service.AboutService;

@RestController
@RequestMapping("/api/about")
@CrossOrigin(origins = "http://localhost:5173")

public class AboutController {
  
    @Autowired
    private AboutService aboutService;
    
    @GetMapping
    public ResponseEntity<AboutContent> getAboutContent() {

        return ResponseEntity.ok(aboutService.getAboutContent());
    }
    
    @PutMapping
    public ResponseEntity<AboutContent> updateAboutContent(
            @RequestBody AboutContent aboutContent) {
        return ResponseEntity.ok(aboutService.updateAboutContent(aboutContent));
    }

    
}
