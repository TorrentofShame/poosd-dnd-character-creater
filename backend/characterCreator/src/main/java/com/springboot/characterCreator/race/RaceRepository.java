package com.springboot.characterCreator.race;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface RaceRepository extends MongoRepository<Race, String> {

  List<Race> findByName(String name);
}
