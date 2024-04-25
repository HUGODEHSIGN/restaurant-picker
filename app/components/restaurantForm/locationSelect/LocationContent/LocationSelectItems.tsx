import { useLoaderData } from '@remix-run/react';
import { SelectItem } from '~/components/ui/select';
import { loader } from '~/routes/add.restaurant';

export default function LocationSelectItems() {
  const { locationData } = useLoaderData<typeof loader>();
  console.log(locationData);
  return (
    <>
      {locationData.map(({ id, name }) => (
        <SelectItem
          value={id.toString()}
          key={id}>
          {name}
        </SelectItem>
      ))}
    </>
  );
}
