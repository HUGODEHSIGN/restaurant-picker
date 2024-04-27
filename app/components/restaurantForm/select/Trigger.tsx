import { SelectTrigger, SelectValue } from '~/components/ui/select';

type TriggerProps = {
  display: string;
};

export default function Trigger({ display }: TriggerProps) {
  return (
    <SelectTrigger className="w-56">
      <SelectValue placeholder={display} />
    </SelectTrigger>
  );
}
