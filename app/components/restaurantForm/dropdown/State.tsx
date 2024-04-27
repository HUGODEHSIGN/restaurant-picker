import { useState } from 'react';
import Component from '~/components/restaurantForm/dropdown/Component';

type StateProps = {
  name: string;
  display: string;
  loaderData: {
    id: number;
    name: string;
  }[];
};

export default function State({ name, display, loaderData }: StateProps) {
  const [inputState, setInputState] = useState<number[]>([]);

  return (
    <>
      <input
        type="hidden"
        name={name}
        value={JSON.stringify(inputState)}
      />
      <Component
        inputState={inputState}
        setInputState={setInputState}
        display={display}
        loaderData={loaderData}
      />
    </>
  );
}
