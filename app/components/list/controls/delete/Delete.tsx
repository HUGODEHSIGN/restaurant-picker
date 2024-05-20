import Trigger from '~/components/list/controls/delete/Trigger';
import Content from '~/components/list/controls/delete/content/Content';

import { AlertDialog } from '~/components/ui/alert-dialog';

type DeleteProps = {
  id: number;
};

export default function Delete({ id }: DeleteProps) {
  return (
    <AlertDialog>
      <Trigger />
      <Content id={id} />
    </AlertDialog>
  );
}
