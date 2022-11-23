import { ActionFunction, redirect } from "react-router-dom";

const signupAction: ActionFunction = async ({request}) => {
  const formData = await request.formData();
  console.debug('signing in!', Object.fromEntries(formData));
  const form = Object.fromEntries(formData);
  const id = form.email;
  const password = form.password;
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

  await fetch("https://poosdapi.torrentofshame.com/register", requestOptions)
    .then(response => response.text())
    .then(result => {console.log(result)})
    .catch(error => console.log('error', error));
    return redirect('/login');
  };

export default signupAction;
