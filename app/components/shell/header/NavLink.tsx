import { Link } from '@remix-run/react';

type NavLinkProps = {
  icon: React.ReactNode;
  display: string;
  link: string;
};
export default function NavLink({ icon, display, link }: NavLinkProps) {
  return (
    <Link
      to={link}
      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
      {icon}
      {display}
    </Link>
  );
}
