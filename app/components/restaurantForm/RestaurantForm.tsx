import { Form } from '@remix-run/react';
import FieldContainer from '~/components/restaurantForm/FieldContainer';

import { Button } from '~/components/ui/button';

type RestaurantFormProps = {
  cuisineData: {
    name: string;
    id: number;
  }[];
  locationData: {
    name: string;
    id: number;
  }[];
  mealData: {
    name: string;
    id: number;
  }[];
  id?: number;
  name?: string;
  locationId?: number;
  mealIds?: number[];
  cuisineIds?: number[];
};

export default function RestaurantForm(props: RestaurantFormProps) {
  return (
    <Form
      method="post"
      className="flex flex-col gap-4">
      <FieldContainer {...props} />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
