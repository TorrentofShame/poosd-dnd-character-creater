package com.springboot.characterCreator.race;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class RaceController {
    private final RaceRepository repository;

    RaceController(RaceRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/races")
    List<Race> all() {
        return repository.findAll();
    }

    @GetMapping("/races/{id}")
    Race one(@PathVariable String id) {
        return repository.findById(id)
            .orElseThrow(() -> new RaceNotFoundException(id));
    }
}
