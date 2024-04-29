import { Button } from '~/components/ui/button';
import { DropdownMenuTrigger } from '~/components/ui/dropdown-menu';
import { cn } from '~/lib/utils';

type TriggerProps = {
  inputState: number[];
  display: string;
};
export default function Trigger({ inputState, display }: TriggerProps) {
  function isStateEmpty(state: number[]) {
    if (state.length === 0) {
      return '';
    }
    return 'rounded-r-none';
  }

  return (
    <DropdownMenuTrigger
      className="w-56"
      asChild>
      <Button
        variant="outline"
        className={cn(isStateEmpty(inputState), 'justify-start z-10')}>
        + {display}
      </Button>
    </DropdownMenuTrigger>
  );
}
