import CuisineDropdownContent from '~/components/restaurantForm/cuisineDropdown/CuisineContent/CuisineDropdownContent';
import CuisineDropdownTrigger from '~/components/restaurantForm/cuisineDropdown/CuisineTrigger/CuisineDropdownTrigger';
import { DropdownMenu } from '~/components/ui/dropdown-menu';

type CuisineDropdownComponentProps = {
  cuisines: number[];
  setCuisines: React.Dispatch<React.SetStateAction<number[]>>;
};
export default function CuisineDropdownComponent({
  cuisines,
  setCuisines,
}: CuisineDropdownComponentProps) {
  return (
    <DropdownMenu>
      <CuisineDropdownTrigger
        cuisines={cuisines}
        setCuisines={setCuisines}
      />
      <CuisineDropdownContent
        cuisines={cuisines}
        setCuisines={setCuisines}
      />
    </DropdownMenu>
  );
}