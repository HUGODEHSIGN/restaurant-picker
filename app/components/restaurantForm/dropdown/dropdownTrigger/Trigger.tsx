import { Button } from '~/components/ui/button';
import { DropdownMenuTrigger } from '~/components/ui/dropdown-menu';

export default function Trigger() {
  return (
    <DropdownMenuTrigger asChild>
      <Button
        variant="outline"
        className="justify-start rounded-r-none z-10">
        + Cuisine
      </Button>
    </DropdownMenuTrigger>
  );
}
