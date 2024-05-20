import Trigger from '~/components/select/Trigger';
import Content from '~/components/select/content/Content';
import { Select } from '~/components/ui/select';

type ComponentProps = {
  inputState: string;
  setInputState: React.Dispatch<React.SetStateAction<string>>;
  display: string;
  loaderData: {
    id: number;
    name: string;
  }[];
};

export default function Component({
  inputState,
  setInputState,
  display,
  loaderData,
}: ComponentProps) {
  return (
    <Select
      onValueChange={setInputState}
      value={inputState}>
      <Trigger display={display} />
      <Content
        display={display}
        loaderData={loaderData}
      />
    </Select>
  );
}
