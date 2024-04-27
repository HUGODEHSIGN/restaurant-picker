import { Button } from '~/components/ui/button';
import { DropdownMenuTrigger } from '~/components/ui/dropdown-menu';

type TriggerProps = {
  display: string;
};
export default function Trigger({ display }: TriggerProps) {
  return (
    <DropdownMenuTrigger asChild>
      <Button
        variant="outline"
        className="justify-start rounded-r-none z-10">
        + {display}
      </Button>
    </DropdownMenuTrigger>
  );
}
