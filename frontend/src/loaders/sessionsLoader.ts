import { LoaderFunctionArgs } from "react-router-dom";
import { SessionCardGroupProps } from "../organisms/SessionCardGroup";
import { address } from "../API/address";
// WIP: use api??
const sessionsLoader = async ({params, request}: LoaderFunctionArgs): Promise<SessionCardGroupProps[]> => {
    let data : SessionCardGroupProps[] = []
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions : any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    await fetch(`${address}/matchmaking`, requestOptions)
    .then(response => response.text())
    .then(result => data = JSON.parse(result))
    .catch(error => console.log('error', error));
    
    return data;
}

export default sessionsLoader;
