import { Session } from "inspector";
import { LoaderFunctionArgs } from "react-router-dom";
import { SessionCardProp, user } from "../molecules/SessionCard";
import SessionCardGroup from "../organisms/SessionCardGroup";
import { address } from "../API/address";
import { CharacterCardProps } from "../molecules/CharacterCard";
// WIP: use api??
export const sessionLoader = async ({params, request}: LoaderFunctionArgs): Promise<SessionCardProp> => {
    let data : any[] = [];
    var requestOptions : any = {
        method: 'GET',
        redirect: 'follow'
    };
        
    await fetch(`${address}/matchmaking`, requestOptions)
        .then(response => response.text())
        .then(result => {
            data = JSON.parse(result)
        })
        .catch(error => console.log('error', error));
    const {sessionId} = params as {sessionId: string};

    console.log(sessionId)
    let sel : SessionCardProp  = data.find(session => session.id == sessionId);
    let characters : CharacterCardProps[] | undefined= sel.characters;
    if(characters!=undefined){
        let newCharacters : CharacterCardProps[] = characters.map(character => {
            return {
                ...character,
                link:""
            }
        })
        sel.characters = newCharacters;
    }
    return sel;
  
};
export const characterSessionLoader = async ({params, request}: LoaderFunctionArgs): Promise<CharacterCardProps | undefined> => {
    let data : any[] = [];

    var requestOptions : any = {
        method: 'GET',
        redirect: 'follow'
    };
        
    await fetch(`${address}/matchmaking`, requestOptions)
        .then(response => response.text())
        .then(result => {
            data = JSON.parse(result)
        })
        .catch(error => console.log('error', error));
    const {sessionId} = params as {sessionId: string};
    const {userId} = params as {userId: string};
    let session : SessionCardProp  = data.find(session => session.id == sessionId);
    let characters : CharacterCardProps[] | undefined= session.characters;
    let players : user[] | undefined= session.players;
    
    if(players!==undefined&&characters!=undefined){
        for(let i =0;i<players.length;i++){
            if(players[i].id==userId){
                return characters[i];
            }
        }
    }
    return undefined;
  
};
