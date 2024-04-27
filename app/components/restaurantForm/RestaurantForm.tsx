import { Form } from '@remix-run/react';
import CuisineDropdown from '~/components/restaurantForm/fields/CuisineDropdown';
import MealDropdown from '~/components/restaurantForm/fields/MealDropdown';

import LocationSelect from '~/components/restaurantForm/locationSelect/LocationSelect';

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

export default function RestaurantForm() {
  return (
    <Form method="post">
      <LocationSelect />
      <CuisineDropdown />
      <MealDropdown />

      <Input
        type="text"
        name="restaurant"
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
