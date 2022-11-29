import {  ActionFunction, redirect } from "react-router-dom";
import { address } from "../API/address";
import { CharacterCardProps } from "../molecules/CharacterCard";
const id = localStorage.getItem("id");
const password = localStorage.getItem("password");
export const createCharacter = async () => {
  
  
  let characterId = "1";
  if(id!==null&&password!==null){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "id": id,
      "username": id,
      "password": password
    });

    var requestOptions : any = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      credentials: 'include'
    };

    await fetch(`${address}/characters`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        characterId=result.toString();
        console.log("sdfs")
      })
      .catch(error => console.log('error', error));
  }
  console.log(characterId)
  return redirect(`/app/characters/${characterId}/edit`)
};
export const selectAction: ActionFunction = async({params, request}) => {
  const {characterId} = params as {characterId: string};
  localStorage.setItem("characterId", characterId);
}
export const editAction: ActionFunction = async({request}) => {
  const formData = await request.formData();
  let temp = Object.fromEntries(formData)
  let stringTemp = "{";
  for (const [k, value] of Object.entries(temp)) {
    if(k=="name"||k=="image"||k=="alignment"||k=="raceName"||k=="className"||k=="description"){
      stringTemp+=`"${k}": "${value}",`;
    }
    else{
      if(value==""){
        stringTemp+=`"${k}":0,`;
      }
      else{
        stringTemp+=`"${k}":${value},`;
      }
      
    }
  }
  stringTemp =stringTemp.slice(0,-1)
  stringTemp+="}";
  console.log(stringTemp);
  let character = JSON.parse(stringTemp);

  if(id!==null&&password!==null){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(character);
    var raw = JSON.stringify({
      "character": character,
      "user": {
        "id": id,
        "username": id,
        "password": password
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
