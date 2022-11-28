package com.character.controller;

import com.character.exception.CharacterCollectionException;
import com.character.model.Character;
import com.character.repository.CharacterRepository;
import com.character.service.CharacterService;
import jakarta.validation.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
public class CharacterController {

    @Autowired
    private CharacterRepository charRepo;

    @Autowired
    private CharacterService charService;

    @GetMapping("/characters")
    public ResponseEntity<?> getAllCharacters() {
        List<Character> charList = charService.getAllCharacters();
        return new ResponseEntity<>(charList, charList.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
    }

    @GetMapping("/characters/{id}")
    public ResponseEntity<?> getSingleCharacter(@PathVariable("id") String id) {
        try {
            return new ResponseEntity<>(charService.getSingleCharacter(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/characters")
    public ResponseEntity<?> createCharacter(@RequestBody Character newChar) {
        try {
            charService.createCharacter(newChar);
            return new ResponseEntity<Character>(newChar, HttpStatus.OK);
        } catch (ConstraintViolationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        } catch (CharacterCollectionException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @PutMapping("/characters/{id}")
    public ResponseEntity<?> updateCharacterById(@PathVariable("id") String id, @RequestBody Character charUpdate) {
        try {
            charService.updateCharacter(id, charUpdate);
            return new ResponseEntity<>("Updated character with id "+id, HttpStatus.OK);
        } catch (ConstraintViolationException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        } catch (CharacterCollectionException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/characters/{id}")
    public ResponseEntity<?> deleteCharacterById(@PathVariable("id") String id) {
        try {
            charService.deleteCharacterById(id);
            return new ResponseEntity<>("Character with id "+id+" has been deleted.", HttpStatus.OK);
        }
        catch (CharacterCollectionException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}
