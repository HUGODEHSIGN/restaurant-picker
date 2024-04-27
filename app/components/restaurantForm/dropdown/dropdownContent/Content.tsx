import ItemContainerProps from '~/components/restaurantForm/dropdown/dropdownContent/ItemContainer';
import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '~/components/ui/dropdown-menu';

type ContentProps = {
  inputState: number[];
  setInputState: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function Content({ inputState, setInputState }: ContentProps) {
  return (
    <DropdownMenuContent
      align="start"
      className="w-56">
      <DropdownMenuLabel>Cuisine</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <ItemContainerProps
        inputState={inputState}
        setInputState={setInputState}
      />
    </DropdownMenuContent>
  );
}
