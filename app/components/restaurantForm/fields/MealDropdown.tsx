import { useLoaderData } from '@remix-run/react';
import DropdownState from '~/components/restaurantForm/dropdown/State';
import { loader } from '~/routes/add.restaurant';

export default function MealDropdown() {
  const { mealData } = useLoaderData<typeof loader>();
  return (
    <DropdownState
      name="meals"
      display="Meals"
      loaderData={mealData}
    />
  );
}
