import { useLoaderData } from '@remix-run/react';
import DropdownState from '~/components/restaurantForm/dropdown/State';
import { loader } from '~/routes/add.restaurant';

export default function CuisineDropdown() {
  const { cuisineData } = useLoaderData<typeof loader>();
  return (
    <DropdownState
      name="cuisines"
      display="Cuisines"
      loaderData={cuisineData}
    />
  );
}
