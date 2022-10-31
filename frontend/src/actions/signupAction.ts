import { ActionFunction, redirect } from "react-router-dom";

const signupAction: ActionFunction = async ({request}) => {
  const formData = await request.formData();
  console.debug('signing in!', Object.fromEntries(formData));
  return redirect('/app');
};

export default signupAction;
