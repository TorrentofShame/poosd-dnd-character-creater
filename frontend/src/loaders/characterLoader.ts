import { LoaderFunctionArgs } from "react-router-dom";
import { CharacterCardProps } from "../molecules/CharacterCard";

const dummyData = {  
  '1': {
    id: '1',
    name: 'foobar',
    alignment: 'chaotic neutral',
    raceName: 'human',
    className: 'fighter',
    description: 'foobar',
  },
  '2': {
    id: '2',
    name: 'foobar Dos',
    alignment: 'chaotic evil',
    raceName: 'tabaxi',
    className: 'rouge',
  }
};

// WIP: use api??
const characterLoader = async ({params, request}: LoaderFunctionArgs): Promise<CharacterCardProps> => {
  const {characterId} = params as {characterId: CharacterCardProps['id']};

  return dummyData[characterId as keyof typeof dummyData];
};

export default characterLoader;
