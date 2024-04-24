import { Form } from '@remix-run/react';
import CuisineDropdown from '~/components/form/cuisineDropdown/CuisineDropdown';
import LocationSelect from '~/components/form/locationSelect/LocationSelect';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

export default function AddForm() {
  return (
    <Form method="post">
      <LocationSelect />
      <CuisineDropdown />
      <Input
        type="text"
        name="name"
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
