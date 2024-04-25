import LocationSelectContent from '~/components/restaurantForm/locationSelect/locationContent/LocationSelectContent';
import LocationSelectTrigger from '~/components/restaurantForm/locationSelect/LocationSelectTrigger';
import { Select } from '~/components/ui/select';

type LocationSelectComponentProps = {
  setLocation: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export default function LocationSelectComponent({
  setLocation,
}: LocationSelectComponentProps) {
  return (
    <Select onValueChange={setLocation}>
      <LocationSelectTrigger />
      <LocationSelectContent />
    </Select>
  );
}
