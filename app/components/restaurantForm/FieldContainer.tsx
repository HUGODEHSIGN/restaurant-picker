import CuisineDropdown from '~/components/restaurantForm/fields/CuisineDropdown';
import LocationSelect from '~/components/restaurantForm/fields/LocationSelect';
import MealDropdown from '~/components/restaurantForm/fields/MealDropdown';
import NameInput from '~/components/restaurantForm/fields/NameInput';

type FieldContainerProps = {
  cuisineData: {
    name: string;
    id: number;
  }[];
  locationData: {
    name: string;
    id: number;
  }[];
  mealData: {
    name: string;
    id: number;
  }[];
  id?: number;
  name?: string;
  locationId?: number;
  mealIds?: number[];
  cuisineIds?: number[];
};

export default function FieldContainer({
  name,
  cuisineData,
  locationData,
  mealData,
  locationId,
  mealIds,
  cuisineIds,
}: FieldContainerProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col sm:flex-row gap-2">
        <NameInput state={name} />
        <LocationSelect
          locationData={locationData}
          locationId={locationId}
        />
      </div>
      <CuisineDropdown
        cuisineData={cuisineData}
        cuisineIds={cuisineIds}
      />
      <MealDropdown
        mealData={mealData}
        mealIds={mealIds}
      />
    </div>
  );
}
