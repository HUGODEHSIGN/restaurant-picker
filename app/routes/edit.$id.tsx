import { LoaderFunctionArgs, redirect } from '@remix-run/node';
import { json, useLoaderData } from '@remix-run/react';
import { db } from 'db/drizzle';
import { cuisines, locations, meals, restaurants } from 'db/schema';
import { eq } from 'drizzle-orm';
import RestaurantForm from '~/components/restaurantForm/RestaurantForm';

export async function loader({ params }: LoaderFunctionArgs) {
  try {
    const paramsId = parseInt(params.id as string);

    if (!paramsId) return redirect('/list');

    const restaurantQuery = await db.query.restaurants.findFirst({
      where: eq(restaurants.id, paramsId),
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

    if (!restaurantQuery) return redirect('/list');

    const { id, name, locationId } = restaurantQuery;

    const mealIds = restaurantQuery.mealsToRestaurants.map(
      ({ mealId }) => mealId
    );
    const cuisineIds = restaurantQuery.cuisinesToRestaurants.map(
      ({ cuisineId }) => cuisineId
    );

    const restaurantData = { id, name, locationId, mealIds, cuisineIds };
    console.log(restaurantQuery);

    const tagsData = await db.transaction(async (tx) => {
      const cuisineData = await tx.select().from(cuisines);
      const locationData = await tx.select().from(locations);
      const mealData = await tx.select().from(meals);
      return { cuisineData, locationData, mealData };
    });

    return json({ ...tagsData, ...restaurantData });
  } catch (err) {
    console.error(err);
  }
}

export default function Page() {
  const data = useLoaderData<typeof loader>();

  return <RestaurantForm {...data} />;
}
