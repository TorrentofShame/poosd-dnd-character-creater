package com.springboot.characterCreator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableMongoRepositories(repositoryImplementationPostfix = "serviceImpl")
public class CharacterCreatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(CharacterCreatorApplication.class, args);
	}

    /*
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
				    .allowedOriginPatterns("https://*.torrentofshame.com")
				    .allowedMethods("*")
                    .allowedHeaders("*")
				    .allowCredentials(true).maxAge(-1);
			}
		};
	}

    */
}
