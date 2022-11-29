package com.springboot.characterCreator;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class SessionDAO {
    @Autowired
    private MongoTemplate mongoTemplate;
    @Autowired
    private UserDAO userDAO;
    private Session findSessionById(final String id){
        try{
            final Session foundSession = mongoTemplate.findById(id, Session.class); //looks for session with matching ID in mongoDB
            return foundSession;
        }catch(Exception name){
            System.out.println(name);
            return null;
        }
    }
    public String createSession(User user){
        if(userDAO.isUserDM(user)==true){
            final Session foundSession = findSessionById(user.getId());
            if(foundSession!=null){
                mongoTemplate.remove(foundSession);
                return "deleteing session";
            }
            final Session newSession = new Session(user.getId(), user);
            mongoTemplate.save(newSession);
            return "createing session";
        }
        return "user is not a dm";
    }
    public String joinSession(User user,int characterId, String sessionId){
        final User foundUser = userDAO.findUserById(user.getId());
        if(foundUser == null) return "user not found";
        final Character character = foundUser.getCharacter(characterId);
        if(character==null) return "character does not exist";
        Session foundSession = findSessionById(sessionId);
        if(foundSession==null) return "session does not exist";
        String res = foundSession.addUser(user, character);
        mongoTemplate.save(foundSession);
        return res;
    }
    public List<Session> getAllSessions(){
        return mongoTemplate.findAll(Session.class);
    }
    public String deleteSession(final User user){
        final Session foundSession = findSessionById(user.getId());
        if(foundSession==null) return "session not found";
        mongoTemplate.remove(user);
        return "session removed";
    }
}
