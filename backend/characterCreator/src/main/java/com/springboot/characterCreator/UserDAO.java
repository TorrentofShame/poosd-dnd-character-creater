package com.springboot.characterCreator;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAO {
    @Autowired
    private MongoTemplate mongoTemplate;

    
    public String loginUser(User user){
        User foundUser;
        try{
            foundUser = mongoTemplate.findById(user.getId(), User.class); //looks for user with matching ID in mongoDB
        }catch(Exception name){
            return "fail"; //runs if no ID is found
        }
        final String password = user.getPassword(); //encrypt password here
        if(foundUser.getPassword().equals(password)){   //checks if passowrds match
            return "success";  //accessToken
        }
        return "fail";
    }
    public String register(User user){
        /*
        final String encrypted = user.getPassword(); //encrypt password
        final User newUser = new User(user.getId(), encrypted); */
        try{
            mongoTemplate.insert(user); //inserts user into mongoDB 
            //create refresh token
            return "success";
        }catch(Exception name){

        }
        return "fail";
    }
}
