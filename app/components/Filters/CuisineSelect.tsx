import { Cuisines } from 'db/schema';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { FilterTypes } from '~/routes/_index';

type CuisineSelectProps = {
  data: Cuisines[];
  setFilters: React.Dispatch<React.SetStateAction<FilterTypes>>;
};

export default function CuisineSelect({
  data,
  setFilters,
}: CuisineSelectProps) {
  return (
    <Select
      onValueChange={(value) =>
        setFilters((prev) => {
          return { ...prev, cuisine: parseInt(value) };
        })
      }>
      <SelectTrigger className="col-span-12 sm:col-span-12 md:col-span-4">
        <SelectValue placeholder="Cuisine" />
      </SelectTrigger>
      <SelectContent>
        {data &&
          data.map(({ id, name }) => (
            <SelectItem
              value={id.toString()}
              key={id}>
              {name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}
