package com.character.service;

import com.character.CharacterApplication;
import com.character.exception.CharacterCollectionException;
import com.character.model.Character;
import com.character.repository.CharacterRepository;
import jakarta.validation.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CharacterServiceImpl implements CharacterService {

    @Autowired
    private CharacterRepository charRepo;

    @Override
    public void createCharacter(Character newChar) throws ConstraintViolationException, CharacterCollectionException {

        Optional<Character> charOptional = charRepo.findByCharacter(newChar.getName());
        if (charOptional.isPresent())
            throw new CharacterCollectionException(CharacterCollectionException.CharacterAlreadyExists());
        else {
            newChar.setCreatedAt(new Date(System.currentTimeMillis()));
            charRepo.save(newChar);
        }
    }

    @Override
    public List<Character> getAllCharacters() {
        List<Character> characters = charRepo.findAll();
        if (characters.size() > 0)
            return characters;
        else
            return new ArrayList<Character>();
    }

    @Override
    public Character getSingleCharacter(String id) throws CharacterCollectionException {
        Optional<Character> charOptional = charRepo.findById(id);
        if (!charOptional.isPresent())
            throw new CharacterCollectionException(CharacterCollectionException.NotFoundException(id));
        else
            return charOptional.get();
    }

    @Override
    public void updateCharacter(String id, Character charUpdate) throws CharacterCollectionException {

        Optional<Character> charWithId = charRepo.findById(id);
        Optional<Character> charWithSameName = charRepo.findByCharacter(charUpdate.getName());

        if (charWithId.isPresent()) {

            // checks that the character id and character name are identical to charUpdate
            // throws exception if name matches but id does not
            if (charWithSameName.isPresent() && !charWithSameName.get().getId().equals(id))
                throw new CharacterCollectionException(CharacterCollectionException.CharacterAlreadyExists());

            Character charToUpdate = charWithId.get();
            charToUpdate.setName(charUpdate.getName());
            charToUpdate.setBelongsToUser(charUpdate.getBelongsToUser());

            // update main attributes
            charToUpdate.setStrength(charUpdate.getStrength());
            charToUpdate.setDexterity(charUpdate.getDexterity());
            charToUpdate.setConstitution(charUpdate.getConstitution());
            charToUpdate.setIntelligence(charUpdate.getIntelligence());
            charToUpdate.setWisdom(charUpdate.getWisdom());
            charToUpdate.setCharisma(charUpdate.getCharisma());

            // update other stats
            charToUpdate.setArmorClass(charUpdate.getArmorClass());
            charToUpdate.setSpeed(charUpdate.getSpeed());
            charToUpdate.setInitiative(charUpdate.getInitiative());
            charToUpdate.setSpellSave(charUpdate.getSpellSave());
            charToUpdate.setPassivePerception(charUpdate.getPassivePerception());
            charToUpdate.setSpellAttack(charUpdate.getSpellAttack());

            charToUpdate.setUpdatedAt(new Date(System.currentTimeMillis()));
            charRepo.save(charToUpdate);

        } else {
            throw new CharacterCollectionException(CharacterCollectionException.NotFoundException(id));
        }
    }

    @Override
    public void deleteCharacterById(String id) throws CharacterCollectionException {
        Optional<Character> charOptional = charRepo.findById(id);
        if (!charOptional.isPresent())
            throw new CharacterCollectionException(CharacterCollectionException.NotFoundException(id));
        else
            charRepo.deleteById(id);
    }


}
