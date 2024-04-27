import ItemContainer from '~/components/dropdown/content/ItemContainer';
import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '~/components/ui/dropdown-menu';

type ContentProps = {
  inputState: number[];
  setInputState: React.Dispatch<React.SetStateAction<number[]>>;
  display: string;
  loaderData: {
    id: number;
    name: string;
  }[];
};

export default function Content({
  inputState,
  setInputState,
  display,
  loaderData,
}: ContentProps) {
  return (
    <DropdownMenuContent
      align="start"
      className="w-56">
      <DropdownMenuLabel>{display}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <ItemContainer
        inputState={inputState}
        setInputState={setInputState}
        loaderData={loaderData}
      />
    </DropdownMenuContent>
  );
}
