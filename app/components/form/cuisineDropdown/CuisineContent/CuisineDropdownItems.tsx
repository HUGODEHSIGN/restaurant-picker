import { useLoaderData } from "@remix-run/react";
import handleToggleItem from "~/components/form/helpers/handleToggleItem";
import { DropdownMenuCheckboxItem } from "~/components/ui/dropdown-menu";
import { loader } from "~/routes/add";
import { Checked } from "~/types/etc";

type CuisineDropdownItemsProps = {
    cuisines: number[];
    setCuisines: React.Dispatch<React.SetStateAction<number[]>>;
  };

export default function CuisineDropdownItems({cuisines, setCuisines}: CuisineDropdownItemsProps) {
    const { cuisineData } = useLoaderData<typeof loader>();

  return (
    <>
    {cuisineData.map(({ id, name }) => (
          <DropdownMenuCheckboxItem
            checked={cuisines.includes(id) as Checked}
            onCheckedChange={() => handleToggleItem(id, setCuisines)}
            key={id}>
            {name}
          </DropdownMenuCheckboxItem>
        ))}</>
  )
}