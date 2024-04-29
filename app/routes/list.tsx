import { json, useLoaderData } from '@remix-run/react';
import { db } from 'db/drizzle';

export async function loader() {
  const data = await db.query.restaurants.findMany({
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
  data.forEach((data) => console.log(data));
  return json(data);
}

export default function ListPage() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      {data.map(
        ({ id, name, location, mealsToRestaurants, cuisinesToRestaurants }) => (
          <div key={id}>
            <h1>{name}</h1>
            <p>{location.name}</p>
            <p>
              {mealsToRestaurants.map((meal) => (
                <div key={meal.mealId}>{meal.meals.name}</div>
              ))}
            </p>
          </div>
        )
      )}
    </>
  );
}
