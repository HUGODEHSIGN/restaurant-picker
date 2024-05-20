import State from '~/components/select/State';
import { Label } from '~/components/ui/label';

type LocationSelectProps = {
  locationData: {
    name: string;
    id: number;
  }[];
  locationId?: number;
};

export default function LocationSelect({
  locationData,
  locationId,
}: LocationSelectProps) {
  return (
    <div>
      <Label htmlFor="location-select">Location</Label>
      <State
        id="location-select"
        name="location"
        display="Location"
        loaderData={locationData}
        state={locationId?.toString()}
      />
    </div>
  );
}
