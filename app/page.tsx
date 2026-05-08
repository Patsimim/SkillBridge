import GuestLanding from "@/app/GuestLanding/GuestLanding";
import UserDashboard from "@/app/dashboard/Userdashboard/Userdashboard";

export default function HomePage() {
  const user = { id: 1, name: "Test User" };
  const isLoggedIn = !!user;
  const Dashboard = UserDashboard as any;

  return <>{isLoggedIn ? <Dashboard /> : <GuestLanding />}</>;
}
