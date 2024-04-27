import { useLoaderData } from '@remix-run/react';
import State from '~/components/dropdown/State';
import { Label } from '~/components/ui/label';
import { loader } from '~/routes/add.restaurant';

export default function CuisineDropdown() {
  const { cuisineData } = useLoaderData<typeof loader>();
  return (
    <div>
      <Label htmlFor="cuisine-dropdown">Cuisines</Label>
      <State
        id="cuisine-dropdown"
        name="cuisines"
        display="Cuisines"
        loaderData={cuisineData}
      />
    </div>
  );
}
