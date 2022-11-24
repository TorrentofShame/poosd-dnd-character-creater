import { LoaderFunctionArgs } from "react-router-dom";
import { CharacterCardProps } from "../molecules/CharacterCard";

// WIP: use api??
const characterLoader = async ({params, request}: LoaderFunctionArgs): Promise<CharacterCardProps> => {
  let data : any[] = [];

  var myHeaders = new Headers();
  const user = localStorage.getItem("id");
  const password = localStorage.getItem("password"); 
  if(user!=null&&password!=null){
    myHeaders.append("id", user);
    myHeaders.append("password", password);
    var requestOptions : any = {
      method: 'GET',
      headers: myHeaders,
    };
    
    await fetch("https://poosdapi.torrentofshame.com/characters", requestOptions)
      .then(response => response.text())
      .then(result => {
        data = JSON.parse(result);
      })
      .catch(error => console.log('error', error));
  }
  var val = 1;
  const {characterId} = params as {characterId: string};
  if(typeof characterId =="string"){
    val = parseInt(characterId);
  }
  const sel : CharacterCardProps = data.find(character => character.id == val);
  return sel;
};

export default characterLoader;
