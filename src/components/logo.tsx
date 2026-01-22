import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'group flex items-center gap-2 text-lg font-bold font-headline text-primary',
        className
      )}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:rotate-12">
        <span className="text-xl font-black text-primary-foreground">C</span>
      </div>
      <span className="hidden sm:inline-block">ConnectMe</span>
    </Link>
  );
}
