import { Cuisines } from 'db/schema';
import { cuisineStateInitType } from '~/components/form/cuisineDropdown/CuisineDropdown';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { DropdownMenuTrigger } from '~/components/ui/dropdown-menu';

type CuisineTriggerButtonProps = {
  isSelected: cuisineStateInitType;
  setIsSelected: React.Dispatch<React.SetStateAction<cuisineStateInitType>>;
  cuisineData: Cuisines[];
};
export default function CuisineTriggerButton({
  isSelected,
  setIsSelected,
  cuisineData,
}: CuisineTriggerButtonProps) {
  function handleRemove(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number
  ) {
    console.log('test');
    const newState = { ...isSelected };
    newState[id] = false;
    console.log(newState);
    setIsSelected(newState);
    e.stopPropagation();
  }

  return (
    <div className="flex flex-row w-fit">
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="justify-start rounded-r-none z-10">
          + Cuisine
        </Button>
      </DropdownMenuTrigger>
      <div className="flex flex-row gap-2 bg-white border p-2 rounded-r-md">
        {cuisineData.map(
          ({ id, name }) =>
            isSelected[id] && (
              <Badge
                onClick={(e) => handleRemove(e, id)}
                key={id}>
                {name}
              </Badge>
            )
        )}
      </div>
    </div>
  );
}
