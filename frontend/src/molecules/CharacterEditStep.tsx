import { Link, useSearchParams } from "react-router-dom";
import { Step } from "semantic-ui-react";

export type CharacterEditStepProps = {
  /** Value for the ?step query parameter
   */
  id: string;
  /** Pretty name
   */
  name: string;
  disabled?: boolean;
};

const CharacterEditStep = ({
  id,
  name,
  disabled,
}: CharacterEditStepProps): JSX.Element => {
  const [params] = useSearchParams();
  const currentStep = params.get("step");

  return (
    <Step as={Link} to={`?step=${id}`} active={currentStep === id} disabled={disabled}>
      <Step.Content>
        <Step.Title>{name}</Step.Title>
      </Step.Content>
    </Step>
  );
};

export default CharacterEditStep;
