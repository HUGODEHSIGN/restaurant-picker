import Tabs from '~/components/shell/aside/Tabs';
import navData from '~/components/shell/navData';

export default function Aside() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {navData.map(({ icon, display, link }) => (
          <Tabs
            icon={icon}
            tooltip={display}
            link={link}
            key={display}
          />
        ))}
      </nav>
    </aside>
  );
}
