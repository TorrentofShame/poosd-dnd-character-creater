import { ActionFunction, redirect } from "react-router-dom";

const loginAction: ActionFunction = async ({request}) => {
  const formData = await request.formData();
  console.debug('logging in!', Object.fromEntries(formData));
  return redirect('/app');
};

export default loginAction;

