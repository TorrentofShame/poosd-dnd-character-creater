package com.character.exception;

public class CharacterCollectionException extends Exception {

    public CharacterCollectionException(String message) {
        super(message);
    }

    public static String NotFoundException(String id) {
        return "Character with id "+id+" not found.";
    }

    // todo: edit this exception to only trigger when a user tries to make two characters of the same name.
    public static String CharacterAlreadyExists() {
        return "Character with this name already exists.";
    }

}
