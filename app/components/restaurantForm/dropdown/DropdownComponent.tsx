import Content from '~/components/restaurantForm/dropdown/dropdownContent/Content';
import TriggerContainer from '~/components/restaurantForm/dropdown/dropdownTrigger/TriggerContainer';
import { DropdownMenu } from '~/components/ui/dropdown-menu';

type DropdownComponentProps = {
  inputState: number[];
  setInputState: React.Dispatch<React.SetStateAction<number[]>>;
};
export default function DropdownComponent({
  inputState,
  setInputState,
}: DropdownComponentProps) {
  return (
    <DropdownMenu>
      <TriggerContainer
        inputState={inputState}
        setInputState={setInputState}
      />
      <Content
        inputState={inputState}
        setInputState={setInputState}
      />
    </DropdownMenu>
  );
}
