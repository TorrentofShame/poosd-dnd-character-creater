import {  ActionFunction, LoaderFunctionArgs, redirect } from "react-router-dom";
import { address } from "../API/address";

export const createSession = async () => {
  
const id = localStorage.getItem("id");
const password = localStorage.getItem("password");
  if(id!==null&&password!==null){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "id": id,
    "username": id,
    "password": password
    });

    const requestOptions : any = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    await fetch(`${address}/matchmaking`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
  return redirect(`/app/sessions/${id}`)
};

export const joinSession = async ({params, request}: LoaderFunctionArgs) => {
    const id = localStorage.getItem("id");
    const password = localStorage.getItem("password");
    const {sessionId} = params as {sessionId: string};
    const characterId = localStorage.getItem("characterId");
    if(characterId==null){
      console.log("character not selected");
    }
    else if(id!=null&&password!==null){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log(id+" "+password);
        const raw = JSON.stringify({
        "characterId": characterId,
        "user": {
            "id": id,
            "username": id,
            "password": password
        },
        "joinId": sessionId
        });

        var requestOptions : any = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        await fetch(`${address}/matchmaking`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
}