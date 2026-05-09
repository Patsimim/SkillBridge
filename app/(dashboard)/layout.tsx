import DashboardNav from "@/app/dashboard/DashboardNav/DashboardNav";
import Footer from "@/components/Footer/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardNav />
      {children}
      <Footer />
    </>
  );
}
