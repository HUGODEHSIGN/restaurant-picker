import { useState } from 'react';
import Component from '~/components/select/Component';

type StateProps = {
  name: string;
  display: string;
  loaderData: {
    id: number;
    name: string;
  }[];
};

export default function State({ name, display, loaderData }: StateProps) {
  const [inputState, setInputState] = useState<string>();
  return (
    <>
      <input
        type="hidden"
        name={name}
        value={inputState}
      />
      <Component
        setInputState={setInputState}
        display={display}
        loaderData={loaderData}
      />
    </>
  );
}
