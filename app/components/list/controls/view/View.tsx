import { Link } from '@remix-run/react';
import { Eye } from 'lucide-react';
import Control from '~/components/list/controls/Control';

export default function View() {
  return (
    <Link to="/">
      <Control
        name="View"
        variant="outline"
        icon={<Eye className="h-4 w-4" />}
      />
    </Link>
  );
}
