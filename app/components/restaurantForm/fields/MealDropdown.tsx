import { useLoaderData } from '@remix-run/react';
import State from '~/components/dropdown/State';
import { Label } from '~/components/ui/label';

import { loader } from '~/routes/add.restaurant';

export default function MealDropdown() {
  const { mealData } = useLoaderData<typeof loader>();
  return (
    <div>
      <Label htmlFor="meal-dropdown">Meals</Label>
      <State
        id="meal-dropdown"
        name="meals"
        display="Meals"
        loaderData={mealData}
      />
    </div>
  );
}
