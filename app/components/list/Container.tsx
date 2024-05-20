import ListItem from '~/components/list/Item';

type ListContainerProps = {
  data: {
    id: number;
    name: string;
    locationId: number;
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
  }[];
};
export default function ListContainer({ data }: ListContainerProps) {
  return (
    <>
      {data.map((item) => (
        <ListItem
          {...item}
          key={item.id}
        />
      ))}
    </>
  );
}
