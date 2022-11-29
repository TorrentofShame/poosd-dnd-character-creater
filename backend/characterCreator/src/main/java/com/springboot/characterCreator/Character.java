package com.springboot.characterCreator;



public class Character {
    private int id;
    private String name;
    private String alignment;
    private String raceName;
    private String className;
    private String image;
    private String description;
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
    //add character components here
    public Character(String name, int id){
        this.name = name;
        this.id = id;
        this.alignment = "chaotic evil";
        this.raceName = "apeling";
        this.className = "rogue";
        this.image = "https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/4/30/GettyImages-1189192456.jpg.rend.hgtvcom.406.406.suffix/1619849704543.jpeg";
        this.description = "monkey denied his bannana";
    }
    public Character(){

    }
    public int getStrength(){
        return strength;
    }
    public int getDexterity(){
        return dexterity;
    }
    public int getConstitution(){
        return constitution;
    }
    public int getIntelligence(){
        return intelligence;
    }
    public int getWisdom(){
        return wisdom;
    }
    public int getCharisma(){
        return charisma;
    }

    // other stats
    public int getArmorClass(){
        return armorClass;
    }
    public int getSpeed(){
        return speed;
    }
    public int getInitiative(){
        return initiative;
    }
    public int getSpellSave(){
        return spellSave;
    }
    public int getPassivePerception(){
        return passivePerception;
    }
    public int getSpellAttack(){
        return spellAttack;
    }
    public String getImage(){
        return image;
    }
    public String getName(){
        return name;
    }
    public String getAlignment(){
        return alignment;
    }
    public String getRaceName(){
        return raceName;
    }
    public String getClassName(){
        return className;
    }
    public int getId(){
        return id;
    }
    public String getDescription(){
        return description;
    }
    public void setCharacter(Character character){
        if(character.getName()!="") name = character.getName();
        if(character.getAlignment()!="") alignment = character.getAlignment();
        if(character.getRaceName()!="") raceName = character.getRaceName();
        if(character.getClassName()!="") className = character.getClassName();
        if(character.getImage()!="") image = character.getImage();
        if(character.getDescription()!="") description = character.getDescription();
    
        if(character.getStrength()!=-1) strength = character.getStrength();
        if(character.getDexterity()!=-1) dexterity = character.getDexterity();
        if(character.getConstitution()!=-1) constitution = character.getConstitution();
        if(character.getCharisma()!=-1) charisma = character.getCharisma();
        if(character.getIntelligence()!=-1) strength = character.getIntelligence();
        if(character.getWisdom()!=-1) strength = character.getWisdom();
        if(character.getArmorClass()!=-1) armorClass = character.getArmorClass();
        if(character.getSpeed()!=-1) speed = character.getSpeed();
        if(character.getSpellSave()!=-1) spellSave = character.getSpellSave();
        if(character.getPassivePerception()!=-1) passivePerception = character.getPassivePerception();
        if(character.getSpellAttack()!=-1) spellAttack = character.getSpellAttack();
        
    }
}
