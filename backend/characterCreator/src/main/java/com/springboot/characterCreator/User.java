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
        for(int i=0;i<characters.size();i++){
            final Character currentCharacter = characters.get(i);
            if(id==currentCharacter.getId()){
                System.out.println(currentCharacter.getId());
                characters.remove(i); 
                characters.add(character);
                return "change made";
            }
        }
        return "character does not exist";
    }
    public String toString(){
        return "id:"+id+"\n"+"username:"+username+"\n"+"password:"+password+"\n";
    }
}
