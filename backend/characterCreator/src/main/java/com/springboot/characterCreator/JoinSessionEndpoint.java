package com.springboot.characterCreator;

public class JoinSessionEndpoint {
    
    private int characterId;
    private User user;
    private String joinId;
    public User getUser(){
        return user;
    }
    public int getCharacterId(){
        return characterId;
    }
    public String getJoinId(){
        return joinId;
    }
}