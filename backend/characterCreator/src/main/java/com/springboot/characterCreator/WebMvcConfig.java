package com.springboot.characterCreator;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer{
    
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
            .allowedMethods("*")
            .allowedOriginPatterns("https://*.torrentofshame.com")
            .allowedHeaders("*")
            .allowCredentials(true)
            .maxAge(-1);
    }
}
