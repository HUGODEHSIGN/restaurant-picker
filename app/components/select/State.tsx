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
  state?: string;
};

export default function State({
  id,
  name,
  display,
  loaderData,
  state = '',
}: StateProps) {
  const [inputState, setInputState] = useState<string>(state);
  return (
    <>
      <input
        id={id}
        type="hidden"
        name={name}
        value={inputState}
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
