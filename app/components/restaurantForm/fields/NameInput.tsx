import { useState } from 'react';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

type NameInputProps = {
  state?: string;
};

export default function NameInput({ state }: NameInputProps) {
  const [inputState, setInputState] = useState(state);
  return (
    <div className="grow">
      <Label htmlFor="restaurant-name">Restaurant Name</Label>
      <Input
        id="restaurant-name"
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
        type="text"
        name="name"
      />
    </div>
  );
}
