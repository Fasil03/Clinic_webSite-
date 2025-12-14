package Adebabay.Clinic_Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Adebabay.Clinic_Backend.model.LocationInfo;
import Adebabay.Clinic_Backend.service.LocationService;

import java.util.List;

@RestController
@RequestMapping("/api/location")
@CrossOrigin(origins = "http://localhost:5173")

public class LocationController {
    
    @Autowired
    private LocationService locationService;
    
    @GetMapping
    public ResponseEntity<LocationInfo> getLocation() {
        return ResponseEntity.ok(locationService.getLocation());
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<LocationInfo>> getAllLocations() {
        return ResponseEntity.ok(locationService.getAllLocations());
    }
    
    @PostMapping
    public ResponseEntity<LocationInfo> createLocation(@RequestBody LocationInfo location) {
        return new ResponseEntity<>(locationService.createLocation(location), HttpStatus.CREATED);
    }

}
