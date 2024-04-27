import { useLoaderData } from '@remix-run/react';
import State from '~/components/select/State';
import { Label } from '~/components/ui/label';

import { loader } from '~/routes/add.restaurant';

export default function LocationSelect() {
  const { locationData } = useLoaderData<typeof loader>();
  return (
    <div>
      <Label htmlFor="location-select">Location</Label>
      <State
        id="location-select"
        name="location"
        display="Location"
        loaderData={locationData}
      />
    </div>
  );
}
