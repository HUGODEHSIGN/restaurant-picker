import LocationSelectItems from '~/components/restaurantForm/locationSelect/locationContent/LocationSelectItems';
import {
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from '~/components/ui/select';

export default function LocationSelectContent() {
  return (
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Location</SelectLabel>
        <SelectSeparator />
        <LocationSelectItems />
      </SelectGroup>
    </SelectContent>
  );
}
