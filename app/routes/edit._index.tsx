import { redirect } from '@remix-run/node';

export const loader = async () => {
  return redirect('/list');
};

export default function Page() {
  return;
}
