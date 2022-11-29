package com.springboot.characterCreator.race;

class RaceNotFoundException extends RuntimeException {
    RaceNotFoundException(String id) {
        super("Could not find race " + id);
    }
}
