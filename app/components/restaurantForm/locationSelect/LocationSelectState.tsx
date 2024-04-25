import { useState } from 'react';
import LocationSelectComponent from '~/components/restaurantForm/locationSelect/LocationSelectComponent';

export default function LocationSelectState() {
  const [location, setLocation] = useState<string>();
  return (
    <>
      <input
        type="hidden"
        name="location"
        value={location}
      />
      <LocationSelectComponent setLocation={setLocation} />
    </>
  );
}
