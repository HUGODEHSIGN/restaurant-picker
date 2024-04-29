import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node';
import Location from '~/components/filters/Location';
import { Button } from '~/components/ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

import { Form, json, useActionData } from '@remix-run/react';
import { db } from 'db/drizzle';
import { locations, restaurants } from 'db/schema';
import { eq } from 'drizzle-orm';
import { Badge } from '~/components/ui/badge';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  try {
    const body = await request.formData();

    const { locationId: id } = Object.fromEntries(body.entries());

    if (!id) {
      return null;
    }

    const data = await db.query.restaurants.findMany({
      where: eq(restaurants.locationId, parseInt(id.toString())),
      with: {
        location: true,
        mealsToRestaurants: {
          with: {
            meals: true,
          },
        },
        cuisinesToRestaurants: {
          with: {
            cuisines: true,
          },
        },
      },
    });

    const randomRestaurant = data[Math.floor(Math.random() * data.length)];

    if (data.length === 1) {
      return data[0];
    }

    if (!randomRestaurant) {
      return null;
    }

    return randomRestaurant;
  } catch (err) {
    console.error(err);
  }
}

export async function loader() {
  const locationData = await db.select().from(locations);
  return json(locationData);
}

export default function Index() {
  const data = useActionData<typeof action>();

  return (
    <div className="flex flex-col gap-4">
      <Form method="post">
        <div className="flex flex-row gap-2">
          <Location />
          <Button>Generate</Button>
        </div>
      </Form>
      {data && (
        <Card>
          <CardHeader>
            <CardTitle>{data?.name}</CardTitle>
            <CardDescription>{data.location.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                {data.mealsToRestaurants.map(({ mealId, meals: { name } }) => (
                  <Badge key={mealId}>{name}</Badge>
                ))}
              </div>
              <div className="flex flex-row gap-2">
                {data.cuisinesToRestaurants.map(
                  ({ cuisineId, cuisines: { name } }) => (
                    <Badge key={cuisineId}>{name}</Badge>
                  )
                )}
              </div>
            </div>
            <p>card content</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
