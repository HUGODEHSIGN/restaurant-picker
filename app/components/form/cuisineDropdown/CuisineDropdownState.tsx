import { useState } from 'react';
import CuisineDropdownComponent from '~/components/form/cuisineDropdown/CuisineDropdownComponent';

export default function CuisineDropdownState() {
  const [cuisines, setCuisines] = useState<number[]>([]);

  return (
    <>
      <input
        type="hidden"
        name="cuisines"
        value={JSON.stringify(cuisines)}
      />
      <CuisineDropdownComponent
        cuisines={cuisines}
        setCuisines={setCuisines}
      />
    </>
  );
}
