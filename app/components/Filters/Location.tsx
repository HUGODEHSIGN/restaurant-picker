import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { loader } from '~/routes/_index';

export default function Location() {
  const locationData = useLoaderData<typeof loader>();
  const [filterState, setFilterState] = useState<string>();

  return (
    <>
      <input
        type="hidden"
        name="locationId"
        value={filterState}
      />
      <Select
        value={filterState}
        onValueChange={setFilterState}>
        <SelectTrigger className="col-span-12 sm:col-span-6 md:col-span-4">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          {locationData.map(({ id, name }) => (
            <SelectItem
              value={id.toString()}
              key={id}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
