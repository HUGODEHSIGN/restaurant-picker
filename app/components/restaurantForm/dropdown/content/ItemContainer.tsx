import handleIsSelected from '~/components/restaurantForm/helpers/handleIsSelected';
import handleToggleItem from '~/components/restaurantForm/helpers/handleToggleItem';

import { DropdownMenuCheckboxItem } from '~/components/ui/dropdown-menu';
import { Checked } from '~/types/etc';

type ItemContainerProps = {
  inputState: number[];
  setInputState: React.Dispatch<React.SetStateAction<number[]>>;
  loaderData: {
    id: number;
    name: string;
  }[];
};

export default function ItemContainer({
  inputState,
  setInputState,
  loaderData,
}: ItemContainerProps) {
  return (
    <>
      {loaderData.map(({ id, name }) => (
        <DropdownMenuCheckboxItem
          checked={handleIsSelected(id, inputState) as Checked}
          onCheckedChange={() => handleToggleItem(id, setInputState)}
          key={id}>
          {name}
        </DropdownMenuCheckboxItem>
      ))}
    </>
  );
}
