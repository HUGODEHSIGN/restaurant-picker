import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import CuisineTriggerButton from '~/components/form/cuisineDropdown/CuisineTriggerButton';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '~/components/ui/dropdown-menu';
import { loader } from '~/routes/add';

type Checked = DropdownMenuCheckboxItemProps['checked'];

// export type cuisineStateInitType = {
//   [key: number]: Checked;
// };

export default function CuisineDropdown() {
  const { cuisineData } = useLoaderData<typeof loader>();

  const [cuisines, setCuisines] = useState<number[]>([]);

  return (
    <>
      <input
        type="hidden"
        name="cuisines"
        value={JSON.stringify(cuisines)}
      />
      <DropdownMenu>
        <CuisineTriggerButton
          cuisines={cuisines}
          setCuisines={setCuisines}
          cuisineData={cuisineData}
        />

        <DropdownMenuContent
          align="start"
          className="w-56">
          <DropdownMenuLabel>Cuisine</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {cuisineData.map(({ id, name }) => (
            <DropdownMenuCheckboxItem
              checked={cuisines.includes(id) as Checked}
              onCheckedChange={() => setCuisines((prev) => [...prev, id])}
              key={id}>
              {name}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
