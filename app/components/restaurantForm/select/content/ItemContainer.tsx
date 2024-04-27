import { SelectItem } from '~/components/ui/select';

type ItemContainerProps = {
  loaderData: {
    id: number;
    name: string;
  }[];
};

export default function ItemContainer({ loaderData }: ItemContainerProps) {
  return (
    <>
      {loaderData.map(({ id, name }) => (
        <SelectItem
          value={id.toString()}
          key={id}>
          {name}
        </SelectItem>
      ))}
    </>
  );
}
