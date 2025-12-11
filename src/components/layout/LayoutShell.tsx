import PrimaryNav from '@/components/navigation/primary/PrimaryNav';

export function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PrimaryNav />
      {children}
      <footer></footer>
    </>
  );
}
