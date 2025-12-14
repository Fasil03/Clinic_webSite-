package Adebabay.Clinic_Backend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Adebabay.Clinic_Backend.model.Footer;
import Adebabay.Clinic_Backend.service.FooterService;

@RestController
@RequestMapping("/api/footer")
@CrossOrigin(origins = "http://localhost:5173")

public class FooterController {
  
    
    @Autowired
    private FooterService footerService;
    
    @GetMapping
    public ResponseEntity<Footer> getFooter() {
        return ResponseEntity.ok(footerService.getFooter());
    }
    
    @PutMapping
    public ResponseEntity<Footer> updateFooter(@RequestBody Footer footer) {
        return ResponseEntity.ok(footerService.updateFooter(footer));
    }

    
}
