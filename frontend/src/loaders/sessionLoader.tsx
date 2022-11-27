import { Session } from "inspector";
import { LoaderFunctionArgs } from "react-router-dom";
import { SessionCardProp } from "../molecules/SessionCard";
import SessionCardGroup from "../organisms/SessionCardGroup";
import { address } from "../API/address";
// WIP: use api??
const sessionLoader = async ({params, request}: LoaderFunctionArgs): Promise<SessionCardProp> => {
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
            .then(result => data = JSON.parse(result))
            .catch(error => console.log('error', error));
    }
    const {sessionId} = params as {sessionId: string};

    console.log(sessionId)
    const sel : SessionCardProp  = data.find(session => session.id == sessionId);
    return sel;
  
};

export default sessionLoader;
