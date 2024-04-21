import type { MetaFunction } from '@remix-run/node';
import Cuisine from '~/components/Filters/Cuisine';
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

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-12 gap-4">
        <Location />
        <Meal />
        <Cuisine />
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
    </div>
  );
}
