import { Form } from '@remix-run/react';
import CuisineDropdown from '~/components/restaurantForm/fields/CuisineDropdown';
import MealDropdown from '~/components/restaurantForm/fields/MealDropdown';
import NameInput from '~/components/restaurantForm/fields/NameInput';

import LocationSelect from '~/components/restaurantForm/fields/LocationSelect';

import { Button } from '~/components/ui/button';

export default function RestaurantForm() {
  return (
    <Form method="post">
      <LocationSelect />
      <CuisineDropdown />
      <MealDropdown />

      <NameInput />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
