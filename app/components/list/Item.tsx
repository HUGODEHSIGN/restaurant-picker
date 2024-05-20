import BadgeContainer from '~/components/list/badge/BadgeContainer';
import ControlsContainer from '~/components/list/controls/ControlsContainer';

type ListItemProps = {
  name: string;
  id: number;
  location: {
    id: number;
    name: string;
  };
  mealsToRestaurants: {
    mealId: number;
    restaurantId: number;
    meals: {
      id: number;
      name: string;
    };
  }[];
  cuisinesToRestaurants: {
    cuisineId: number;
    restaurantId: number;
    cuisines: {
      id: number;
      name: string;
    };
  }[];
};

export default function ListItem({
  id,
  name,
  location,
  mealsToRestaurants,
  cuisinesToRestaurants,
}: ListItemProps) {
  const meals = mealsToRestaurants.map(({ meals }) => meals);
  const cuisines = cuisinesToRestaurants.map(({ cuisines }) => cuisines);

  return (
    <div className="border-t p-4 flex flex-col gap-4 hover:bg-accent">
      <div className="flex flex-row justify-between">
        <div>
          <h3 className="font-bold">{name}</h3>
          <p>{location.name}</p>
        </div>
        <ControlsContainer id={id} />
      </div>
      <div className="flex flex-col gap-1">
        <BadgeContainer data={meals} />
        <BadgeContainer data={cuisines} />
      </div>
    </div>
  );
}
