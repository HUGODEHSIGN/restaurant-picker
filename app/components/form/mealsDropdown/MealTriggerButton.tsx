import { Cuisines } from 'db/schema';
import { cuisineStateInitType } from '~/components/form/cuisineDropdown/CuisineDropdown';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { DropdownMenuTrigger } from '~/components/ui/dropdown-menu';

type MealTriggerButtonProps = {
  meals: cuisineStateInitType;
  setMeals: React.Dispatch<React.SetStateAction<cuisineStateInitType>>;
  mealData: Cuisines[];
};
export default function MealTriggerButton({
  meals,
  setMeals,
  mealData,
}: MealTriggerButtonProps) {
  function handleRemove(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number
  ) {
    console.log('test');
    const newState = { ...meals };
    newState[id] = false;
    console.log(newState);
    setMeals(newState);
    e.stopPropagation();
  }

  return (
    <div className="flex flex-row w-fit">
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="justify-start rounded-r-none z-10">
          + Meal
        </Button>
      </DropdownMenuTrigger>
      <div className="flex flex-row gap-2 bg-white border p-2 rounded-r-md">
        {mealData.map(
          ({ id, name }) =>
            meals[id] && (
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
