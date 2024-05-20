import { ActionFunctionArgs } from '@remix-run/node';
import { json, useLoaderData } from '@remix-run/react';
import { db } from 'db/drizzle';
import { restaurants } from 'db/schema';
import { eq } from 'drizzle-orm';
import ListContainer from '~/components/list/Container';

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

export async function action({ request }: ActionFunctionArgs) {
  try {
    const body = await request.formData();
    const data = Object.fromEntries(body.entries());
    if (data.type === 'delete') {
      const id = parseInt(data.id.toString());
      const deletedUser = await db
        .delete(restaurants)
        .where(eq(restaurants.id, id))
        .returning();
      return deletedUser;
    }
  } catch (err) {
    console.error(err);
  }
}

export default function ListPage() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <ListContainer data={data} />
    </div>
  );
}
