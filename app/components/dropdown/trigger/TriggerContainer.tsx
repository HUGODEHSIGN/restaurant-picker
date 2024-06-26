import BadgeContainer from '~/components/dropdown/trigger/BadgeContainer';
import Trigger from '~/components/dropdown/trigger/Trigger';

type TriggerContainerProps = {
  inputState: number[];
  setInputState: React.Dispatch<React.SetStateAction<number[]>>;
  display: string;
  loaderData: {
    id: number;
    name: string;
  }[];
};

export default function TriggerContainer({
  inputState,
  setInputState,
  display,
  loaderData,
}: TriggerContainerProps) {
  return (
    <div className="flex flex-row">
      <Trigger
        inputState={inputState}
        display={display}
      />
      <BadgeContainer
        inputState={inputState}
        setInputState={setInputState}
        loaderData={loaderData}
      />
    </div>
  );
}
