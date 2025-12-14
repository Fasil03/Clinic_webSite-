package Adebabay.Clinic_Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Adebabay.Clinic_Backend.model.ClinicService;
import Adebabay.Clinic_Backend.service.ServiceService;

import java.util.List;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "http://localhost:5173")

public class ServiceController {

    
  
   @Autowired
    private ServiceService servicesService;
    
    @GetMapping
    public ResponseEntity<List<ClinicService>> getAllServices() {
        return ResponseEntity.ok(servicesService.getAllServices());
    }
    
    @GetMapping("/featured")
    public ResponseEntity<List<ClinicService>> getFeaturedServices() {
        return ResponseEntity.ok(servicesService.getFeaturedServices());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ClinicService> getServiceById(@PathVariable String id) {
        return ResponseEntity.ok(servicesService.getServiceById(id));
    }
    
    @GetMapping("/category/{category}")
    public ResponseEntity<List<ClinicService>> getServicesByCategory(@PathVariable String category) {
        return ResponseEntity.ok(servicesService.getServicesByCategory(category));
    }
    
    @PostMapping
    public ResponseEntity<ClinicService> createService(@RequestBody ClinicService clinicService) {
        return new ResponseEntity<>(servicesService.createService(clinicService), HttpStatus.CREATED);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<ClinicService> updateService(@PathVariable String id, @RequestBody ClinicService clinicService) {
        return ResponseEntity.ok(servicesService.updateService(id, clinicService));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable String id) {
        servicesService.deleteService(id);
        return ResponseEntity.noContent().build();
    }

    
}
