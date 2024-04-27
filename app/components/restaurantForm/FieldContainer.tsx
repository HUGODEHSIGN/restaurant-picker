import CuisineDropdown from '~/components/restaurantForm/fields/CuisineDropdown';
import LocationSelect from '~/components/restaurantForm/fields/LocationSelect';
import MealDropdown from '~/components/restaurantForm/fields/MealDropdown';
import NameInput from '~/components/restaurantForm/fields/NameInput';

export default function FieldContainer() {
  return (
    <div className="flex flex-col gap-2">
      <NameInput />
      <LocationSelect />
      <CuisineDropdown />
      <MealDropdown />
    </div>
  );
}
