package com.springboot.characterCreator;

public class Character {
    private int id;
    private String name;
    private String alignment;
    private String raceName;
    private String className;
    private String image;
    private String description;
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
        
    }
    public boolean equals(Character character){
        if(character.getName()!=name) return false;
        if(character.getAlignment()!=alignment) return false;
        if(character.getRaceName()!=raceName) return false;
        if(character.getClassName()!=className) return false;
        if(character.getImage()!=image) return false;
        if(character.getDescription()!=description) return false;
        return true;
    }
}
