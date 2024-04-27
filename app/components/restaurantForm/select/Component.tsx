import Trigger from '~/components/restaurantForm/select/Trigger';
import Content from '~/components/restaurantForm/select/content/Content';
import { Select } from '~/components/ui/select';

type ComponentProps = {
  setInputState: React.Dispatch<React.SetStateAction<string | undefined>>;
  display: string;
  loaderData: {
    id: number;
    name: string;
  }[];
};

export default function Component({
  setInputState,
  display,
  loaderData,
}: ComponentProps) {
  return (
    <Select onValueChange={setInputState}>
      <Trigger display={display} />
      <Content
        display={display}
        loaderData={loaderData}
      />
    </Select>
  );
}
