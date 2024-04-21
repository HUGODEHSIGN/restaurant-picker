import { Link } from '@remix-run/react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '~/components/ui/tooltip';

type TabsProps = {
  icon: React.ReactNode;
  tooltip: string;
  link: string;
};

export default function Tabs({ icon, tooltip, link }: TabsProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={link}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
          {icon}
          <span className="sr-only">{tooltip}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{tooltip}</TooltipContent>
    </Tooltip>
  );
}
