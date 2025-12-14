package Adebabay.Clinic_Backend.config;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration

public class SwagggerConfig { 
    
    @Bean
    public OpenAPI clinicOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Clinic Website API")
                        .description("Backend API for Clinic Website")
                        .version("1.0.0"));
    }

    
}
