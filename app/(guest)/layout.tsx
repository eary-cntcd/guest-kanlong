import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>

        <Footer />
      </div>

  );
}