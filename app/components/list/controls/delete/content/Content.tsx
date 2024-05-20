import Header from '~/components/list/controls/delete/content/Header';
import Container from '~/components/list/controls/delete/content/actions/Container';
import { AlertDialogContent } from '~/components/ui/alert-dialog';

type ContentProps = {
  id: number;
};

export default function Content({ id }: ContentProps) {
  return (
    <AlertDialogContent>
      <Header />
      <Container id={id} />
    </AlertDialogContent>
  );
}
