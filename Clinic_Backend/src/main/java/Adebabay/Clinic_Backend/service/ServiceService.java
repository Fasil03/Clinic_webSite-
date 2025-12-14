package Adebabay.Clinic_Backend.service;

import Adebabay.Clinic_Backend.model.ClinicService;
import Adebabay.Clinic_Backend.repository.ServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ServiceService {  // Now this name is OK since model is ClinicService
    
    @Autowired
    private ServicesRepository servicesRepository;
    
    public List<ClinicService> getAllServices() {
        return servicesRepository.findByActiveTrue();
    }
    
    public List<ClinicService> getFeaturedServices() {
        return servicesRepository.findByFeaturedTrueAndActiveTrue();
    }
    
    public List<ClinicService> getServicesByCategory(String category) {
        return servicesRepository.findByCategoryAndActiveTrue(category);
    }
    
    public ClinicService getServiceById(String id) {
        return servicesRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Service not found with id: " + id));
    }
    
    public ClinicService createService(ClinicService service) {
        service.setCreatedAt(LocalDateTime.now());
        service.setActive(true);
        // Set default value for featured if null
        if (service.getFeatured() == null) {
            service.setFeatured(false);
        }
        return servicesRepository.save(service);
    }
    
    public ClinicService updateService(String id, ClinicService serviceDetails) {
        ClinicService service = getServiceById(id);
        
        if (serviceDetails.getName() != null) service.setName(serviceDetails.getName());
        if (serviceDetails.getDescription() != null) service.setDescription(serviceDetails.getDescription());
        if (serviceDetails.getCategory() != null) service.setCategory(serviceDetails.getCategory());
        if (serviceDetails.getPrice() != null) service.setPrice(serviceDetails.getPrice());
        if (serviceDetails.getBenefits() != null) service.setBenefits(serviceDetails.getBenefits());
        if (serviceDetails.getDisplayOrder() != null) service.setDisplayOrder(serviceDetails.getDisplayOrder());
        
        // Now this works correctly with Boolean object
        if (serviceDetails.getFeatured() != null) {
            service.setFeatured(serviceDetails.getFeatured());
        }
        
        service.setUpdatedAt(LocalDateTime.now());
        return servicesRepository.save(service);
    }
    
    public void deleteService(String id) {
        ClinicService service = getServiceById(id);
        service.setActive(false);
        servicesRepository.save(service);
    }
}