package Adebabay.Clinic_Backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Adebabay.Clinic_Backend.model.LocationInfo;
import Adebabay.Clinic_Backend.repository.LocationRepository;
import java.time.LocalDateTime;
import java.util.List;

@Service

public class LocationService {
    
    
    @Autowired
    private LocationRepository locationRepository;
    
    public LocationInfo getLocation() {
        return locationRepository.findFirstByOrderByCreatedAtDesc()
                .orElseGet(this::getDefaultLocation);
    }
    
    public List<LocationInfo> getAllLocations() {
        return locationRepository.findAllByOrderByCreatedAtDesc();
    }
    
    public LocationInfo createLocation(LocationInfo location) {
        location.setCreatedAt(LocalDateTime.now());
        return locationRepository.save(location);
    }
    
    private LocationInfo getDefaultLocation() {
        LocationInfo location = new LocationInfo();
        location.setClinicName("Our Clinic");
        location.setAddress("123 Medical Street");
        location.setCity("Health City");
        location.setPhone("+1-234-567-8900");
        return location;
    }
}
    
