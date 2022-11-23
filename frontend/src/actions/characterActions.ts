import {  ActionFunction, redirect } from "react-router-dom";
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

    await fetch("https://poosdapi.torrentofshame.com/characters", requestOptions)
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

export const editAction: ActionFunction = async({request}) => {
  const formData = await request.formData();
  const character = Object.fromEntries(formData);
  if(id!==null&&password!==null){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

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

    await fetch("https://poosdapi.torrentofshame.com/characters", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  
  console.log(character)
  console.debug('logging in!', Object.fromEntries(formData));
  return redirect('/app');
}
