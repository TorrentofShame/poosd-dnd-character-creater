package com.character.model;

import jakarta.validation.constraints.NegativeOrZero;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "characters")

public class Character {

    @Id
    private String id;

    @NotNull
    private String name;

    private int belongsToUser;

    // main attributes
    private int strength;
    private int dexterity;
    private int constitution;
    private int intelligence;
    private int wisdom;
    private int charisma;

    // other stats
    private int armorClass;
    private int speed;
    private int initiative;
    private int spellSave;
    private int passivePerception;
    private int spellAttack;

    // not implemented
    // level, experience, renown & rank, alignment, race, background

    private Date createdAt;
    private Date updatedAt;

    public String getName() {
        return name;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
