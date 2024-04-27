import { useState } from 'react';
import Component from '~/components/dropdown/Component';

type StateProps = {
  id: string;
  name: string;
  display: string;
  loaderData: {
    id: number;
    name: string;
  }[];
};

export default function State({ id, name, display, loaderData }: StateProps) {
  const [inputState, setInputState] = useState<number[]>([]);

  return (
    <>
      <input
        id={id}
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
