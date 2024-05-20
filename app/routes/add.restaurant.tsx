import { ActionFunctionArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { db } from 'db/drizzle';
import {
  cuisines,
  cuisinesToRestaurants,
  locations,
  meals,
  mealsToRestaurants,
  restaurants,
} from 'db/schema';
import RestaurantForm from '~/components/restaurantForm/RestaurantForm';

export async function action({ request }: ActionFunctionArgs) {
  try {
    const body = await request.formData();
    // const name = body.get('name') as string;
    const { name, location, cuisines, meals } = Object.fromEntries(
      body.entries()
    );
    const [newRestaurant] = await db
      .insert(restaurants)
      .values({
        name: name.toString(),
        locationId: parseInt(location.toString()),
      })
      .returning();

    JSON.parse(meals.toString()).forEach(async (mealId: number) => {
      await db.insert(mealsToRestaurants).values({
        mealId,
        restaurantId: newRestaurant.id,
      });
    });

    JSON.parse(cuisines.toString()).forEach(async (cuisineId: number) => {
      await db.insert(cuisinesToRestaurants).values({
        cuisineId,
        restaurantId: newRestaurant.id,
      });
    });

    return newRestaurant;
  } catch (err) {
    console.error(err);
  }
}

export async function loader() {
  const data = await db.transaction(async (tx) => {
    const cuisineData = await tx.select().from(cuisines);
    const locationData = await tx.select().from(locations);
    const mealData = await tx.select().from(meals);
    return { cuisineData, locationData, mealData };
  });

  return json(data);
}

export default function Page() {
  const data = useLoaderData<typeof loader>();
  return <RestaurantForm {...data} />;
}
