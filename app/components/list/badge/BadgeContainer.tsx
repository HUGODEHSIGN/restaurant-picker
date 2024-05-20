import { Badge } from '~/components/ui/badge';

type BadgeContainerProps = {
  data: {
    id: number;
    name: string;
  }[];
};

export default function BadgeContainer({ data }: BadgeContainerProps) {
  return (
    <div className="flex flex-row gap-1">
      {data.map(({ id, name }) => (
        <Badge key={id}>{name}</Badge>
      ))}
    </div>
  );
}
