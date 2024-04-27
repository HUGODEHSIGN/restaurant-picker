import { useLoaderData } from '@remix-run/react';
import handleRemoveItem from '~/components/restaurantForm/helpers/handleRemoveItem';
import { Badge } from '~/components/ui/badge';
import { loader } from '~/routes/add.restaurant';

type BadgeContainerProps = {
  inputState: number[];
  setInputState: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function BadgeContainer({
  inputState,
  setInputState,
}: BadgeContainerProps) {
  const { cuisineData } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-row gap-2 bg-white border p-2 rounded-r-md">
      {cuisineData.map(
        ({ id, name }) =>
          inputState.includes(id) && (
            <Badge
              onClick={() => handleRemoveItem(id, setInputState)}
              className="cursor-pointer"
              key={id}>
              {name}
            </Badge>
          )
      )}
    </div>
  );
}
