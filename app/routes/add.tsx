import { ActionFunctionArgs } from '@remix-run/node';
import { Form } from '@remix-run/react';
import db from 'db/drizzle';
import { cuisines } from 'db/schema';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const name = body.get('name') as string;
  return await db.insert(cuisines).values({ name });
}

export default function AddPage() {
  return (
    <div>
      <Form method="post">
        <Input
          type="text"
          name="name"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
