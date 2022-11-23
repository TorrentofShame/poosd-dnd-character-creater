package com.springboot.characterCreator;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAO {
    @Autowired
    private MongoTemplate mongoTemplate;
    private User findUserById(final String id){
        try{
            final User foundUser = mongoTemplate.findById(id, User.class); //looks for user with matching ID in mongoDB
            return foundUser;
        }catch(Exception name){
            System.out.println(name);
            return null;
        }
    }
    public int addCharacter(User user){
        final User foundUser = findUserById(user.getId());
        if(foundUser==null) return -1; //user does not exist
        User newUser = foundUser;
        int newCharacterId = newUser.addCharacter(); //instantiates a new character in the new user
        mongoTemplate.save(newUser); //replaces the found user with the new User
        return newCharacterId; //returns new character id
    }
    public String editCharacter(User user, Character character){
        final User foundUser = findUserById(user.getId());
        if(foundUser==null) return "user does not exist"; //user does not exist
        User newUser = foundUser;
        String message = newUser.editCharacter(character); 
        mongoTemplate.save(newUser); //replaces the found user with the new user
        return message;
    }
    public List<Character> getCharacters(String id, String password){
        final User foundUser = findUserById(id);
        if(foundUser==null) return null;
        return foundUser.getCharacters(); 
    }
    public String loginUser(String id, String password){
        final User foundUser = findUserById(id);
        if(foundUser==null) return "user not found";
        if(foundUser.getPassword().equals(password)){   //checks if passowrds match
            return ""+id;  //accessToken
        }
        return "password does not match";
    }
    public String register(User user){
        /*
        final String encrypted = user.getPassword(); //encrypt password
        final User newUser = new User(user.getId(), encrypted); */
        try{
            mongoTemplate.insert(user); //inserts user into mongoDB 
            //create refresh token
            return user.getUsername();
        }catch(Exception name){
            return "user already exists";
        }
        
    }
}
