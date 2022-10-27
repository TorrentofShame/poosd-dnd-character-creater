import { redirect } from "react-router-dom";

export const createCharacter = async () => {
  const id = '1';
  return redirect(`/app/characters/${id}/edit`)
};
