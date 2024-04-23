import { Form } from '@remix-run/react';
import CuisineDropdown from '~/components/form/cuisineDropdown/CuisineDropdown';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

export default function AddForm() {
  return (
    <Form method="post">
      <CuisineDropdown />
      <Input
        type="text"
        name="name"
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
