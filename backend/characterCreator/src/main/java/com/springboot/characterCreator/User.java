package com.springboot.characterCreator;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {
    @Id
    private String id;
    private String password;
    private String username;

    public String getUsername(){
        return username;
    }
    public String getId(){
        return id;
    }
    public String getPassword(){
        return password;
    }
}
