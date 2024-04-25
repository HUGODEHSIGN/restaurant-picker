import CuisineBadgeContainer from '~/components/form/cuisineDropdown/CuisineTrigger/CuisineBadgeContainer';
import { Button } from '~/components/ui/button';
import { DropdownMenuTrigger } from '~/components/ui/dropdown-menu';

type CuisineDropdownTriggerProps = {
  cuisines: number[];
  setCuisines: React.Dispatch<React.SetStateAction<number[]>>;
};
export default function CuisineDropdownTrigger({
  cuisines,
  setCuisines,
}: CuisineDropdownTriggerProps) {

  return (
    <div className="flex flex-row w-fit">
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="justify-start rounded-r-none z-10">
          + Cuisine
        </Button>
      </DropdownMenuTrigger>
     <CuisineBadgeContainer cuisines={cuisines} setCuisines={setCuisines} />
    </div>
  );
}
