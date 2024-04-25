import { SelectTrigger, SelectValue } from '~/components/ui/select';

export default function LocationSelectTrigger() {
  return (
    <SelectTrigger className="w-56">
      <SelectValue placeholder="Location" />
    </SelectTrigger>
  );
}
