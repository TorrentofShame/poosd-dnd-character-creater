package com.springboot.characterCreator;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @PostMapping("/register")
    public String signUp(@RequestBody final User user){
        return userDAO.register(user); 
    }
    @GetMapping("/login")
    public String loginUser(@RequestBody final User user){
        return userDAO.loginUser(user);
    }


}
