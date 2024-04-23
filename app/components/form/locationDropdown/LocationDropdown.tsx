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

type locationStateInitType = {
  [key: number]: Checked;
};

export default function LocationDropdown() {
  // const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  // const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  // const [showPanel, setShowPanel] = React.useState<Checked>(false);

  const dbLocations = useLoaderData<typeof loader>();

  const locationStateInit = dbLocations.reduce((obj, { id }) => {
    obj[id] = false;
    return obj;
  }, {} as locationStateInitType);

  const [isSelected, setIsSelected] = useState(locationStateInit);

  console.log(locationStateInit);

  // const locationsInitState = dbLocations.map((location) => ({
  //   ...location,
  //   isSelected: false as Checked,
  // }));

  // const [locationState, setLocationState] = useState(locationsInitState);

  function handleSelect(id: number) {
    const newState = { ...isSelected };
    newState[id] = !newState[id];
    setIsSelected(newState);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">+ Location</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Location</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {dbLocations.map(({ id, name }) => (
          <DropdownMenuCheckboxItem
            checked={isSelected[id]}
            onCheckedChange={() => handleSelect(id)}
            key={id}>
            {name}
          </DropdownMenuCheckboxItem>
        ))}
        {/* <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}>
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled>
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}>
          Panel
        </DropdownMenuCheckboxItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
