import CuisineDropdownItems from '~/components/form/cuisineDropdown/CuisineContent/CuisineDropdownItems';
import {
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator
} from '~/components/ui/dropdown-menu';

type CuisineDropdownContentProps = {
    cuisines: number[];
    setCuisines: React.Dispatch<React.SetStateAction<number[]>>;
  };

export default function CuisineDropdownContent({cuisines, setCuisines}: CuisineDropdownContentProps) {
  return (
    <DropdownMenuContent
        align="start"
        className="w-56">
        <DropdownMenuLabel>Cuisine</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <CuisineDropdownItems cuisines={cuisines} setCuisines={setCuisines} />
      </DropdownMenuContent>
  )
}