import { Form } from '@remix-run/react';
import CuisineDropdown from '~/components/restaurantForm/cuisineDropdown/CuisineDropdown';

import LocationSelect from '~/components/restaurantForm/locationSelect/LocationSelect';

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

export default function RestaurantForm() {
  return (
    <Form method="post">
      <LocationSelect />
      <CuisineDropdown />

      <Input
        type="text"
        name="restaurant"
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
