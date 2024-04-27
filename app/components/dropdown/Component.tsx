import Content from '~/components/dropdown/content/Content';
import TriggerContainer from '~/components/dropdown/trigger/TriggerContainer';
import { DropdownMenu } from '~/components/ui/dropdown-menu';

type ComponentProps = {
  inputState: number[];
  setInputState: React.Dispatch<React.SetStateAction<number[]>>;
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
    <DropdownMenu>
      <TriggerContainer
        inputState={inputState}
        setInputState={setInputState}
        display={display}
        loaderData={loaderData}
      />
      <Content
        inputState={inputState}
        setInputState={setInputState}
        display={display}
        loaderData={loaderData}
      />
    </DropdownMenu>
  );
}
