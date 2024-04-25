import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { loader } from '~/routes/add.restaurant';

export default function LocationSelect() {
  const { locationData } = useLoaderData<typeof loader>();
  const [location, setLocation] = useState<string>();
  return (
    <>
      <input
        type="hidden"
        name="location"
        value={location}
      />
      <Select onValueChange={setLocation}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {locationData.map(({ id, name }) => (
            <SelectItem
              value={id.toString()}
              key={id}>
              {name}
            </SelectItem>
          ))}
          {/* <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem> */}
        </SelectContent>
      </Select>
    </>
  );
}
