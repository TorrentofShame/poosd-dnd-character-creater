import { ActionFunction, redirect } from "react-router-dom";

const loginAction: ActionFunction = async ({request}) => {
  const formData = await request.formData();
  try{
    console.log(Object.fromEntries(formData))
    console.debug('logging in!', Object.fromEntries(formData));
    const form = Object.fromEntries(formData);
    const id = (form.email);
    const password = (form.password);
    console.log(id+" "+password);
    var myHeaders = new Headers();
    if(typeof id == "string" && typeof password=="string"){
      myHeaders.append("id", id);
      myHeaders.append("password", password);
    }
    

    var requestOptions : any = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    await fetch("http://localhost:8080/login", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      console.log(password)
      if(typeof id == "string" && typeof password=="string"){
        localStorage.setItem("password", password);
        localStorage.setItem("id", result); //authenticate here
      }
    })
    .catch(error => {
      console.log(error);
    });
    
  }
  catch(err){
  }
  
};
 
export default loginAction;

