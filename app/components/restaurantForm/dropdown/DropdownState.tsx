import { useState } from 'react';
import DropdownComponent from '~/components/restaurantForm/dropdown/DropdownComponent';

export default function DropdownState() {
  const [inputState, setInputState] = useState<number[]>([]);

  return (
    <>
      <input
        type="hidden"
        name="cuisines"
        value={JSON.stringify(inputState)}
      />
      <DropdownComponent
        inputState={inputState}
        setInputState={setInputState}
      />
    </>
  );
}
