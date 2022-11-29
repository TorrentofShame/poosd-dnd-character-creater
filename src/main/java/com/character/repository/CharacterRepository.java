package com.character.repository;

import com.character.model.Character;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CharacterRepository extends MongoRepository<Character, String> {

    // searches database for an existing character name
    // todo: incorporate user id in search so that only characters from that user are checked
    @Query("{'name': ?0}")
    Optional<Character> findByCharacter(String name);
}
