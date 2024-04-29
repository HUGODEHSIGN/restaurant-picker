import CuisineDropdown from '~/components/restaurantForm/fields/CuisineDropdown';
import LocationSelect from '~/components/restaurantForm/fields/LocationSelect';
import MealDropdown from '~/components/restaurantForm/fields/MealDropdown';
import NameInput from '~/components/restaurantForm/fields/NameInput';

export default function FieldContainer() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col sm:flex-row gap-2">
        <NameInput />
        <LocationSelect />
      </div>
      <CuisineDropdown />
      <MealDropdown />
    </div>
  );
}
