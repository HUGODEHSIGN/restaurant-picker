import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { loader } from '~/routes/add';

type Checked = DropdownMenuCheckboxItemProps['checked'];

type cuisineStateInitType = {
  [key: number]: Checked;
};

export default function CuisineDropdown() {
  const cuisineData = useLoaderData<typeof loader>();

  const cuisineStateInit = cuisineData.reduce((obj, { id }) => {
    obj[id] = false;
    return obj;
  }, {} as cuisineStateInitType);

  const [isSelected, setIsSelected] = useState(cuisineStateInit);

  function handleSelect(id: number) {
    const newState = { ...isSelected };
    newState[id] = !newState[id];
    console.log(newState);
    setIsSelected(newState);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">+ Location</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Cuisine</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {cuisineData.map(({ id, name }) => (
          <DropdownMenuCheckboxItem
            checked={isSelected[id]}
            onCheckedChange={() => handleSelect(id)}
            key={id}>
            {name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
