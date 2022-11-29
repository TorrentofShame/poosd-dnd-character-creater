package com.springboot.characterCreator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(repositoryImplementationPostfix = "serviceImpl")
public class CharacterCreatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(CharacterCreatorApplication.class, args);
	}

}
