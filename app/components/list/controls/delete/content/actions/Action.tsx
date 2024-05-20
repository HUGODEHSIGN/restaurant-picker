import { Form } from '@remix-run/react';
import { AlertDialogAction } from '~/components/ui/alert-dialog';
import { Button } from '~/components/ui/button';

type ActionProps = {
  id: number;
};

export default function Action({ id }: ActionProps) {
  return (
    <Form method="post">
      <input
        type="hidden"
        name="id"
        value={id}
      />
      <input
        type="hidden"
        name="type"
        value="delete"
      />
      <AlertDialogAction asChild>
        <Button type="submit">Continue</Button>
      </AlertDialogAction>
    </Form>
  );
}
