package com.character.service;

import com.character.exception.CharacterCollectionException;
import com.character.model.Character;
import jakarta.validation.ConstraintViolationException;

import java.util.List;

public interface CharacterService {

    public void createCharacter(Character newChar) throws ConstraintViolationException, CharacterCollectionException;

    public List<Character> getAllCharacters();

    public Character getSingleCharacter(String id) throws CharacterCollectionException;

    public void updateCharacter(String id, Character charUpdate) throws CharacterCollectionException;

    public void deleteCharacterById(String id) throws CharacterCollectionException;
}
