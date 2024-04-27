import { Form } from '@remix-run/react';
import FieldContainer from '~/components/restaurantForm/FieldContainer';

import { Button } from '~/components/ui/button';

export default function RestaurantForm() {
  return (
    <Form method="post">
      <FieldContainer />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
