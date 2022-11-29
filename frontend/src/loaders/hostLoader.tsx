import { Session } from "inspector";
import { LoaderFunctionArgs } from "react-router-dom";
import { SessionCardProp, user } from "../molecules/SessionCard";
import SessionCardGroup from "../organisms/SessionCardGroup";
import { address } from "../API/address";
import { CharacterCardProps } from "../molecules/CharacterCard";
// WIP: use api??
const hostLoader = async ({params, request}: LoaderFunctionArgs): Promise<SessionCardProp> => {
    let data : any[] = [];
    const user = localStorage.getItem("id");
    const password = localStorage.getItem("password"); 
    if(user!=null&&password!=null){
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
    }
    const {sessionId} = params as {sessionId: string};

    console.log(sessionId)
    const sel : SessionCardProp  = data.find(session => session.id == sessionId);
    let characters : CharacterCardProps[] | undefined= sel.characters;
    let players : user[] | undefined = sel.players;
    let currentPlayer = -1;
    if(characters!=undefined){
        let newCharacters : CharacterCardProps[] = characters.map(character => {
            currentPlayer+=1;
            if(players!=undefined){
                return {
                    ...character,
                    link:`${players[currentPlayer].id}` //heheheheeheheheheheheheheheheheheheheheheheeheheheheheheheheheheheheehe
                }
            }
            return {...character}
        })
        sel.characters = newCharacters;
    }
    return sel;
  
};

export default hostLoader;
