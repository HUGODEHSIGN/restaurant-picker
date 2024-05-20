import Action from '~/components/list/controls/delete/content/actions/Action';
import Cancel from '~/components/list/controls/delete/content/actions/Cancel';
import { AlertDialogFooter } from '~/components/ui/alert-dialog';

type ContainerProps = {
  id: number;
};

export default function Container({ id }: ContainerProps) {
  return (
    <AlertDialogFooter>
      <Cancel />
      <Action id={id} />
    </AlertDialogFooter>
  );
}
