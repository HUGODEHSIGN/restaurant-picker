import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import MealTriggerButton from '~/components/form/mealsDropdown/MealTriggerButton';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '~/components/ui/dropdown-menu';
import { loader } from '~/routes/add';

type Checked = DropdownMenuCheckboxItemProps['checked'];

export type mealStateInitType = {
  [key: number]: Checked;
};

export default function MealDropdown() {
  const { mealData } = useLoaderData<typeof loader>();

  const mealStateInit = mealData.reduce((obj, { id }) => {
    obj[id] = false;
    return obj;
  }, {} as mealStateInitType);

  const [meals, setMeals] = useState(mealStateInit);

  function handleSelect(id: number) {
    const newState = { ...meals };
    newState[id] = !newState[id];
    console.log(newState);
    setMeals(newState);
  }

  return (
    <>
      <input
        type="hidden"
        name="meals"
        value={JSON.stringify(meals)}
      />
      <DropdownMenu>
        <MealTriggerButton
          meals={meals}
          setMeals={setMeals}
          mealData={mealData}
        />

        <DropdownMenuContent
          align="start"
          className="w-56">
          <DropdownMenuLabel>Meals</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {mealData.map(({ id, name }) => (
            <DropdownMenuCheckboxItem
              checked={meals[id]}
              onCheckedChange={() => handleSelect(id)}
              key={id}>
              {name}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
