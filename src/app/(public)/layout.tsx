import { Header } from "@/shared/components/Header";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps): JSX.Element {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
}
