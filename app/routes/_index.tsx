import type { MetaFunction } from '@remix-run/node';
import CuisineSelect from '~/components/Filters/CuisineSelect';
import Location from '~/components/Filters/Location';
import Meal from '~/components/Filters/Meal';
import { Button } from '~/components/ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

import { useLoaderData } from '@remix-run/react';
import db from 'db/drizzle';
import { cuisines } from 'db/schema';
import { useState } from 'react';

export type FilterTypes = {
  location: number | undefined;
  meal: number | undefined;
  cuisine: number | undefined;
};

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export async function loader() {
  const cuisineData = await db.select().from(cuisines);
  return { cuisineData };
}

export default function Index() {
  const [filters, setFilters] = useState<FilterTypes>({
    location: undefined,
    meal: undefined,
    cuisine: undefined,
  });

  const { cuisineData } = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-12 gap-4">
        <Location />
        <Meal />
        <CuisineSelect
          data={cuisineData}
          setFilters={setFilters}
        />
      </div>
      <Button>Generate</Button>
      <Card>
        <CardHeader>
          <CardTitle>card title</CardTitle>
          <CardDescription>card description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>card content</p>
        </CardContent>
        <CardFooter>
          <p>Card footer</p>
        </CardFooter>
      </Card>
      <div>{filters.cuisine}</div>
    </div>
  );
}
