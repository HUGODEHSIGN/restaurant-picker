import { useLoaderData } from '@remix-run/react';
import handleToggleItem from '~/components/restaurantForm/helpers/handleToggleItem';

import { DropdownMenuCheckboxItem } from '~/components/ui/dropdown-menu';
import { loader } from '~/routes/add.restaurant';
import { Checked } from '~/types/etc';

type ItemContainerProps = {
  inputState: number[];
  setInputState: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function ItemContainerProps({
  inputState,
  setInputState,
}: ItemContainerProps) {
  const { cuisineData } = useLoaderData<typeof loader>();

  return (
    <>
      {cuisineData.map(({ id, name }) => (
        <DropdownMenuCheckboxItem
          checked={inputState.includes(id) as Checked}
          onCheckedChange={() => handleToggleItem(id, setInputState)}
          key={id}>
          {name}
        </DropdownMenuCheckboxItem>
      ))}
    </>
  );
}
