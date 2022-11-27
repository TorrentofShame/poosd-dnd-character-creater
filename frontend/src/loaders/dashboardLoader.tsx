import { LoaderFunctionArgs } from "react-router-dom";
import { CharacterCardProps } from "../molecules/CharacterCard";
import { address } from "../API/address";
// WIP: use api??
const dashboardLoader = async ({params, request}: LoaderFunctionArgs): Promise<CharacterCardProps[]> => {
  const user = localStorage.getItem("id");
  const password = localStorage.getItem("password");
  var data : CharacterCardProps[] = []
  var myHeaders = new Headers();
  if(user!=null&&password!=null){
    myHeaders.append("id", user);
    myHeaders.append("password", password);
    var requestOptions : any = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    await fetch(`${address}/characters`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        //localStorage.setItem("characters",JSON.stringify(result));
        data = JSON.parse(result);
      })
      .catch(error => console.log('error', error));
  }
  return data;
};

export default dashboardLoader;

