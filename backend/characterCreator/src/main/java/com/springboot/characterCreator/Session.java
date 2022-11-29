package com.springboot.characterCreator;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Session {
    @Id
    private String id;
    private User host;
    private List<User> players;
    private List<Character> characters;
    public Session(){

    }
    public Session(String id, User host){
        this.id = id;
        this.host = host;
    }
    public String getId(){
        return id;
    }
    public User getHost(){
        return host;
    }
    public List<User> getPlayers(){
        return players;
    }
    public List<Character> getCharacters(){
        return characters;
    }
    public String addUser(User user, Character character){
        if(players == null){
            players = new ArrayList<User>();
            characters = new ArrayList<Character>();
        }
        for(int i=0;i<players.size();i++){
            final User currentUser = players.get(i);
            if(currentUser.getId().equals(user.getId())){
                players.remove(i);
                characters.remove(i);
                return "player left the sesion";
            }
        }
        /* 
        if(players.size()>=4){
            return "too many players";
        }*/
        players.add(user);
        characters.add(character);
        return "player joined session";
    }
}

