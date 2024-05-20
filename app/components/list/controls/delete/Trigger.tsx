import { Trash2 } from 'lucide-react';
import { AlertDialogTrigger } from '~/components/ui/alert-dialog';
import { Button } from '~/components/ui/button';

export default function Trigger() {
  return (
    <AlertDialogTrigger asChild>
      {/* <Control
      name="View"
      variant="destructive"
      icon={<Trash2 className="h-4 w-4" />}
    /> */}
      <Button
        size="icon"
        variant="destructive">
        <Trash2 className="h-4 w-4" />
      </Button>
    </AlertDialogTrigger>
  );
}
