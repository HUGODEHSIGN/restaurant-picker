import { json, useLoaderData } from '@remix-run/react';
import { db } from 'db/drizzle';
import { Pencil, Trash2 } from 'lucide-react';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';

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
    <div>
      {data.map(
        ({ id, name, location, mealsToRestaurants, cuisinesToRestaurants }) => (
          <div
            key={id}
            className="border-t p-4 flex flex-col gap-4 hover:bg-accent">
            <div className="flex flex-row justify-between">
              <div>
                <h3 className="font-bold">{name}</h3>
                <p>{location.name}</p>
              </div>
              <div className="flex flex-row gap-2">
                <Button
                  size="icon"
                  variant="outline">
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                {mealsToRestaurants.map((meal) => (
                  <Badge key={meal.mealId}>{meal.meals.name}</Badge>
                ))}
              </div>
              <div className="flex flex-row gap-2">
                {cuisinesToRestaurants.map((cuisines) => (
                  <Badge key={cuisines.cuisineId}>
                    {cuisines.cuisines.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
