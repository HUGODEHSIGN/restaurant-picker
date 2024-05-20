import Delete from '~/components/list/controls/delete/Delete';
import Edit from '~/components/list/controls/edit/Edit';

type ControlsContainerProps = {
  id: number;
};

export default function ControlsContainer({ id }: ControlsContainerProps) {
  return (
    <div className="flex flex-row gap-2">
      <Edit id={id} />
      <Delete id={id} />
    </div>
  );
}
