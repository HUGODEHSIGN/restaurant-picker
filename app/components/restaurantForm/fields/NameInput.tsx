import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

export default function NameInput() {
  return (
    <div className="grow">
      <Label htmlFor="restaurant-name">Restaurant Name</Label>
      <Input
        id="restaurant-name"
        type="text"
        name="name"
      />
    </div>
  );
}
