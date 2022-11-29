import {  ActionFunction, LoaderFunctionArgs, redirect } from "react-router-dom";
import { address } from "../API/address";
import { SessionCardProp } from "../molecules/SessionCard";

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
export const editSessionCharacter = async ({params, request}: LoaderFunctionArgs) => {
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
  const {userId} = params as {userId: string};
  if(sel.players!=undefined){
    const player = sel.players.find(p  => p.id==userId)
    if(player==undefined){
      return ;
    }
    const formData = await request.formData();
    const character = Object.fromEntries(formData);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "character": character,
      "user": {
        "id": player.id,
        "username": player.id,
        "password": player.password
      }
    });

    var requestOptions : any = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      credentials: 'include'
    };

    await fetch(`${address}/characters`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  }
  return redirect('/app');

}