import { LoaderFunctionArgs } from "react-router-dom";
import { CharacterCardProps } from "../molecules/CharacterCard";

// WIP: use api??
const dashboardLoader = async ({params, request}: LoaderFunctionArgs): Promise<CharacterCardProps[]> => {
  return [
    {
      id: '1',
      name: 'foobar',
      alignment: 'chaotic neutral',
      raceName: 'human',
      className: 'fighter',
      description: 'foobar',
    },
    {
      id: '2',
      name: 'foobar Dos',
      alignment: 'chaotic evil',
      raceName: 'tabaxi',
      className: 'rouge',
    }
  ];
};

export default dashboardLoader;
