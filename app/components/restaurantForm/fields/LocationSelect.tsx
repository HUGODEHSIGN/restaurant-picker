import { useLoaderData } from '@remix-run/react';
import State from '~/components/restaurantForm/select/State';
import { loader } from '~/routes/add.restaurant';

export default function LocationSelect() {
  const { locationData } = useLoaderData<typeof loader>();
  return (
    <State
      name="location"
      display="Location"
      loaderData={locationData}
    />
  );
}
