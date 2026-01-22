import Link from 'next/link';
import { Home, Users, Compass, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { currentUser } from '@/lib/data';

const navigationLinks = [
  { icon: Home, text: 'Home', href: '/' },
  { icon: Compass, text: 'Explore', href: '#' },
  { icon: Users, text: 'Communities', href: '#' },
  { icon: User, text: 'Profile', href: `/profile/${currentUser.username}` },
];

export function LeftSidebar() {
  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 flex-col gap-4 border-r bg-background p-4 md:flex">
      <nav className="flex flex-col gap-2">
        {navigationLinks.map((link) => (
          <Button
            key={link.text}
            variant={link.href === '/' ? 'secondary' : 'ghost'}
            className="justify-start"
            asChild
          >
            <Link href={link.href}>
              <link.icon className="mr-3 h-5 w-5" />
              {link.text}
            </Link>
          </Button>
        ))}
      </nav>
    </aside>
  );
}
