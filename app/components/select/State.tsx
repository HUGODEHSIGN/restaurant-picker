import { useState } from 'react';
import Component from '~/components/select/Component';

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
  const [inputState, setInputState] = useState<string>('');
  return (
    <>
      <input
        id={id}
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
