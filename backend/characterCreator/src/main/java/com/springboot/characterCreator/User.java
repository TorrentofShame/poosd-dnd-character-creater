package com.springboot.characterCreator;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {
    @Id
    private String id;
    private String password;
    private String username; //could probably remove username since id does the same thing
    private List<Character> characters;
    private boolean isUserDM;
    public String getUsername(){
        return username;
    }
    public String getId(){
        return id;
    }
    public String getPassword(){
        return password;
    }
    public List<Character> getCharacters(){
        return characters;
    }
    public Character getCharacter(int i){
        try{
            return characters.get(i);
        }
        catch(Exception name){}
        return null;
    }
    public int addCharacter(){
        if(characters==null){
            characters = new ArrayList<Character>();
        }
        int size = characters.size()+1;
        characters.add(new Character("foobar", size));
        return size;
    }
    public String editCharacter(Character character){
        int id = character.getId(); //id of character that is being replaced
        Character currentCharacter = characters.get(id);
        currentCharacter.setCharacter(character);
        return "change made";
    }
    public boolean isUserDM(){
        return true;
    }
    public String toString(){
        return "id:"+id+"\n"+"username:"+username+"\n"+"password:"+password+"\n";
    }
}
