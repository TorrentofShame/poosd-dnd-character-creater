package com.springboot.characterCreator;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

//import com.mongodb.client.model.Field;
@RestController
public class UserController {
    /*
    @Autowired
    private UserRepository userRepository;
    */
    @Autowired
    private UserDAO userDAO;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public String signUp(@RequestBody final User user){ //takes User value from the API endpoint request body
        return userDAO.register(user);  //passes the value to a function int userDAO
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/login")
    public String loginUser(@RequestHeader Map<String, String> headers){
        return userDAO.loginUser(headers.get("id"), headers.get("password"));
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/characters")
    public List<Character> getCharacters(@RequestHeader Map<String, String> headers){
        return userDAO.getCharacters(headers.get("id"), headers.get("password"));
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/characters")
    public int addCharacter(@RequestBody final User user){
        return userDAO.addCharacter(user);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/characters")
    public String editCharacter(@RequestBody final editEndpoint endpoint){
        final Character character = endpoint.getCharacter(); 
        final User user = endpoint.getUser();
        System.out.println(user.getId());
        return userDAO.editCharacter(user, character);
    }

}
