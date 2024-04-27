import { useLoaderData } from '@remix-run/react';
import State from '~/components/dropdown/State';
import { loader } from '~/routes/add.restaurant';

export default function CuisineDropdown() {
  const { cuisineData } = useLoaderData<typeof loader>();
  return (
    <State
      name="cuisines"
      display="Cuisines"
      loaderData={cuisineData}
    />
  );
}
