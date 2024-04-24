import { ActionFunctionArgs, json } from '@remix-run/node';
import { db } from 'db/drizzle';
import { cuisines, locations } from 'db/schema';
import AddForm from '~/components/form/AddForm';

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const name = body.get('name') as string;
  console.log(name);
  return null;
  // return await db.insert(locations).values({ name });
}

export async function loader() {
  // const locationData = await db.select().from(locations);

  // const cuisineData = await db.select().from(cuisines);

  const data = await db.transaction(async (tx) => {
    const cuisineData = await tx.select().from(cuisines);
    const locationData = await tx.select().from(locations);
    return { cuisineData, locationData };
  });

  return json(data);
}

export default function AddPage() {
  return <AddForm />;
}
