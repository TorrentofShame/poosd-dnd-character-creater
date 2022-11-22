package com.springboot.characterCreator;

public class Character {
    private int id;
    private String name;
    private String alignment;
    private String raceName;
    private String className;
    //add character components here
    public Character(String name, int id){
        this.name = name;
        this.id = id;
        alignment = "chaotic evil";
        raceName = "tabaxi";
        className = "rogue";
    }
    public Character(){

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
}
