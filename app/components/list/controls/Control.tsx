import { Button } from '~/components/ui/button';

type ControlProps = {
  name: string;
  icon: JSX.Element;
  variant:
    | 'outline'
    | 'destructive'
    | 'link'
    | 'default'
    | 'secondary'
    | 'ghost'
    | null
    | undefined;
};

export default function Control({ name, icon, variant }: ControlProps) {
  return (
    <Button
      size="icon"
      variant={variant}>
      {icon}
    </Button>
  );
}
