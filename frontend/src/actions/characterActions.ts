import {  ActionFunction, redirect } from "react-router-dom";

export const createCharacter = async () => {
  const id = '1';
  return redirect(`/app/characters/${id}/edit`)
};

export const editAction: ActionFunction = async({request}) => {
  const formData = await request.formData();
  const character = Object.fromEntries(formData);
  console.log(character)
  console.debug('logging in!', Object.fromEntries(formData));
  return redirect('/app');
}
