import { Cuisines } from 'db/schema';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { DropdownMenuTrigger } from '~/components/ui/dropdown-menu';

type CuisineTriggerButtonProps = {
  cuisines: number[];
  setCuisines: React.Dispatch<React.SetStateAction<number[]>>;
  cuisineData: Cuisines[];
};
export default function CuisineTriggerButton({
  cuisines,
  setCuisines,
  cuisineData,
}: CuisineTriggerButtonProps) {
  function handleRemove(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    badgeId: number
  ) {
    setCuisines((prev) => [...prev].filter((stateId) => badgeId !== stateId));
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
            cuisines.includes(id) && (
              <Badge
                onClick={(e) => handleRemove(e, id)}
                className="cursor-pointer"
                key={id}>
                {name}
              </Badge>
            )
        )}
      </div>
    </div>
  );
}
