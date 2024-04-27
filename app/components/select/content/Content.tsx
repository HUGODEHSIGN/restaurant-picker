import ItemContainer from '~/components/select/content/ItemContainer';
import {
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from '~/components/ui/select';

type ContentProps = {
  display: string;
  loaderData: {
    id: number;
    name: string;
  }[];
};

export default function Content({ display, loaderData }: ContentProps) {
  return (
    <SelectContent>
      <SelectGroup>
        <SelectLabel>{display}</SelectLabel>
        <SelectSeparator />
        <ItemContainer loaderData={loaderData} />
      </SelectGroup>
    </SelectContent>
  );
}
