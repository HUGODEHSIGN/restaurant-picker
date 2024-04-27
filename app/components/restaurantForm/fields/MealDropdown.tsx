import { useLoaderData } from '@remix-run/react';
import State from '~/components/dropdown/State';

import { loader } from '~/routes/add.restaurant';

export default function MealDropdown() {
  const { mealData } = useLoaderData<typeof loader>();
  return (
    <State
      name="meals"
      display="Meals"
      loaderData={mealData}
    />
  );
}
