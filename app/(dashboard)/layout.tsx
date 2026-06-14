import DashboardNav from "@/app/dashboard/DashboardNav/DashboardNav";
import Footer from "@/components/Footer/Footer";
import "@flaticon/flaticon-uicons/css/all/all.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <DashboardNav />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}
