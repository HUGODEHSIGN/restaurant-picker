import { Form } from '@remix-run/react';
import CuisineDropdownState from '~/components/form/cuisineDropdown/CuisineDropdownState';
import LocationSelect from '~/components/form/locationSelect/LocationSelect';
import MealDropdown from '~/components/form/mealsDropdown/MealsDropdown';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

export default function AddForm() {
  return (
    <Form method="post">
      <LocationSelect />
      <CuisineDropdownState />
      <MealDropdown />

      <Input
        type="text"
        name="restaurant"
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
