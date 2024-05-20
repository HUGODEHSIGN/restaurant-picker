import State from '~/components/dropdown/State';
import { Label } from '~/components/ui/label';

type MealDropdownProps = {
  mealData: {
    name: string;
    id: number;
  }[];
  mealIds?: number[];
};

export default function MealDropdown({ mealData, mealIds }: MealDropdownProps) {
  return (
    <div>
      <Label htmlFor="meal-dropdown">Meals</Label>
      <State
        id="meal-dropdown"
        name="meals"
        display="Meals"
        loaderData={mealData}
        state={mealIds}
      />
    </div>
  );
}
