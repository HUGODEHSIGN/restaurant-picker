import State from '~/components/dropdown/State';
import { Label } from '~/components/ui/label';

type CuisineDropdownProps = {
  cuisineData: {
    name: string;
    id: number;
  }[];
  cuisineIds?: number[];
};

export default function CuisineDropdown({
  cuisineData,
  cuisineIds,
}: CuisineDropdownProps) {
  return (
    <div>
      <Label htmlFor="cuisine-dropdown">Cuisines</Label>

      <State
        id="cuisine-dropdown"
        name="cuisines"
        display="Cuisines"
        loaderData={cuisineData}
        state={cuisineIds}
      />
    </div>
  );
}
