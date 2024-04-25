import { useLoaderData } from "@remix-run/react";
import { Badge } from "~/components/ui/badge";
import { loader } from "~/routes/add";

type CuisineBadgeContainerProps = {
    cuisines: number[];
    setCuisines: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function CuisineBadgeContainer({cuisines, setCuisines}: CuisineBadgeContainerProps) {
    const { cuisineData } = useLoaderData<typeof loader>();

    function handleRemove(badgeId: number) {
        setCuisines((prev) => [...prev].filter((stateId) => badgeId !== stateId));
      }

  return (
    <div className="flex flex-row gap-2 bg-white border p-2 rounded-r-md">
    {cuisineData.map(
      ({ id, name }) =>
        cuisines.includes(id) && (
          <Badge
            onClick={() => handleRemove(id)}
            className="cursor-pointer"
            key={id}>
            {name}
          </Badge>
        )
    )}
  </div>
  )
}