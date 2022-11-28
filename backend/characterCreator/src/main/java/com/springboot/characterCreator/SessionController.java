package com.springboot.characterCreator;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

//import com.mongodb.client.model.Field;
@RestController
public class SessionController {
    /*
    @Autowired
    private UserRepository userRepository;
    */
    
    @Autowired
    private SessionDAO sessionDAO;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/matchmaking")
    public String createSession(@RequestBody final User user){ //takes User value from the API endpoint request body
        return sessionDAO.createSession(user);  //passes the value to a function int userDAO
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/matchmaking")
    public List<Session> getAllSessions(){
        return sessionDAO.getAllSessions();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/matchmaking")
    public String joinSession(@RequestBody final JoinSessionEndpoint endpoint){ 
        final User user = endpoint.getUser();
        final int characterId = endpoint.getCharacterId();   //destructs the endpoint into its properties
        final String id = endpoint.getJoinId();
        return sessionDAO.joinSession(user, characterId, id);
    }
}
