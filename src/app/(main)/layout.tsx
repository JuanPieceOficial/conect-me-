import { Header } from '@/components/layout/header';
import { LeftSidebar } from '@/components/layout/left-sidebar';
import { RightSidebar } from '@/components/layout/right-sidebar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto flex">
        <LeftSidebar />
        <div className="flex-1 min-w-0">{children}</div>
        <RightSidebar />
      </main>
    </div>
  );
}
