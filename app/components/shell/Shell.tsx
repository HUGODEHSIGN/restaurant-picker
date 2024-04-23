import { TooltipProvider } from '@radix-ui/react-tooltip';
import Aside from '~/components/shell/aside/Aside';
import Header from '~/components/shell/header/Header';

type ShellProps = {
  children: React.ReactNode;
};
export default function Shell({ children }: ShellProps) {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <Aside />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <Header />
          <main className="grid flex-1 items-start gap-4 p-4">{children}</main>
        </div>
      </div>
    </TooltipProvider>
  );
}
