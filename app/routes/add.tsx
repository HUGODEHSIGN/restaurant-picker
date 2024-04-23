import { ActionFunctionArgs, json } from '@remix-run/node';
import db from 'db/drizzle';
import { cuisines } from 'db/schema';
import AddForm from '~/components/form/AddForm';

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const name = body.get('name') as string;
  console.log(name);
  return null;
  // return await db.insert(locations).values({ name });
}

export async function loader() {
  // const locationData = json(await db.select().from(locations));
  const cuisineData = json(await db.select().from(cuisines));
  return cuisineData;
}

export default function AddPage() {
  return <AddForm />;
}
