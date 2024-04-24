import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { loader } from '~/routes/add';

export default function LocationSelect() {
  const { locationData } = useLoaderData<typeof loader>();
  const [, setLocation] = useState<string>();
  return (
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
  );
}
