import { Link } from '@remix-run/react';
import { Pencil } from 'lucide-react';
import Control from '~/components/list/controls/Control';

type EditProps = {
  id: number;
};

export default function Edit({ id }: EditProps) {
  return (
    <Link to={`/edit/${id}`}>
      <Control
        name="View"
        variant="outline"
        icon={<Pencil className="h-4 w-4" />}
      />
    </Link>
  );
}
