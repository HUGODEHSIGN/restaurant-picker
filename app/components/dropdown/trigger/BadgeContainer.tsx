import handleRemoveItem from '~/components/dropdown/helpers/handleRemoveItem';
import { Badge } from '~/components/ui/badge';

type BadgeContainerProps = {
  inputState: number[];
  setInputState: React.Dispatch<React.SetStateAction<number[]>>;

  loaderData: {
    id: number;
    name: string;
  }[];
};

export default function BadgeContainer({
  inputState,
  setInputState,

  loaderData,
}: BadgeContainerProps) {
  return (
    <>
      {inputState.length !== 0 && (
        <div className="flex flex-row gap-2 bg-white border p-2 rounded-r-md items-center">
          {loaderData.map(
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
      )}
    </>
  );
}
