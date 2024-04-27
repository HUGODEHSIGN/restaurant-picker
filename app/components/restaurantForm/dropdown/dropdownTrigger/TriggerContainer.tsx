import BadgeContainer from '~/components/restaurantForm/dropdown/dropdownTrigger/BadgeContainer';
import Trigger from '~/components/restaurantForm/dropdown/dropdownTrigger/Trigger';

type TriggerContainerProps = {
  inputState: number[];
  setInputState: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function TriggerContainer({
  inputState,
  setInputState,
}: TriggerContainerProps) {
  return (
    <div className="flex flex-row w-fit">
      <Trigger />
      <BadgeContainer
        inputState={inputState}
        setInputState={setInputState}
      />
    </div>
  );
}
