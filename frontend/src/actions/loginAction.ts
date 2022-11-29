import { ActionFunction, redirect } from "react-router-dom";
import { address } from "../API/address";
const loginAction: ActionFunction = async ({request}) => {
  const formData = await request.formData();
  try{
    console.log(Object.fromEntries(formData))
    console.debug('logging in!', Object.fromEntries(formData));
    const form = Object.fromEntries(formData);
    const id = (form.email);
    const password = (form.password);
    if(typeof id == "string" && typeof password=="string"){
      var myHeaders = new Headers();
      myHeaders.append("id", id);
      myHeaders.append("password", password);

      var requestOptions : any = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      await fetch(`${address}/login`, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          console.log(password)
          localStorage.setItem("password", password);
          localStorage.setItem("id", result); //authenticate here
        })
      .catch(error => {
        console.log(error);
      });
    }
  }
  catch(err){
  }
  redirect("/app");
};
 
export default loginAction;

