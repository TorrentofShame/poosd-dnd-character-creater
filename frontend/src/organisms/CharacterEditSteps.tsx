import { Step } from "semantic-ui-react";
import CharacterEditStep, { CharacterEditStepProps } from '../molecules/CharacterEditStep';

const steps: CharacterEditStepProps[] = [
  {
    id: 'ability-scores',
    name: 'Ability Scores',
  },
  {
    id: 'race',
    name: 'Race',
  },
  {
    id: 'class',
    name: 'Class',
  },
  {
    id: 'background',
    name: 'Background',
  },
  {
    id: 'proficiencies',
    name: 'Proficiencies',
  },
  {
    id: 'spells',
    name: 'Spells',
  },
];

const CharacterEditSteps = (): JSX.Element => {
  return (
    <Step.Group fluid>
      {steps.map(s => <CharacterEditStep {...s} />)}
    </Step.Group>
  );
};

export default CharacterEditSteps;
