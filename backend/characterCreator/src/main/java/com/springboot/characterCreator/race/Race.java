package com.springboot.characterCreator.race;

import org.springframework.data.annotation.Id;

public class Race {

    @Id private String id;

    private String name;
    private String description;

    public Race() {}

    public Race(String name, String description) {
        this.name = name;
        this.description = description;
    }

    @Override
    public String toString() {
        return String.format(
            "Race[id=%s, name='%s', description='%s']",
            id, name, description);
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

}

