"use client";
import DashboardNav from "../DashboardNav/DashboardNav";
import DashboardHero from "../DashboardHero/Dashboardhero";
import StatsRow from "../StatsRow/StatsRow";
import ForYouSection from "../ForYou/ForYou";
import MarketplaceSection from "../MarketPlace/MarketPlace";
import FeaturedHelper from "../FeaturedHelper/FeaturedHelper";
import UpcomingSchedule from "../Sidebar/UpcomingSchedule/UpcomingSchedule";
import RecentConversations from "../Sidebar/RecentConversation/RecentConversation";
import BecomeHelperCTA from "../Sidebar/BecomeHelperCTA/BecomeHelperCTA";
import HelperEarnings from "../Sidebar/Earnings/Earnings";
import styles from "./userdashboard.module.css";
import Footer from "@/components/Footer/Footer";

export default function UserDashboard() {
  return (
    <div className={styles.page}>
      <DashboardNav />
      <div className={styles.heroWrapper}>
        <DashboardHero />
      </div>
      <div className={styles.body}>
        <main className={styles.main}>
          <StatsRow />
          <ForYouSection />
          <MarketplaceSection />
          <FeaturedHelper />
        </main>
        <aside className={styles.sidebar}>
          <UpcomingSchedule />
          <RecentConversations />
          <BecomeHelperCTA />
          <HelperEarnings />
        </aside>
      </div>
      <Footer />
    </div>
  );
}
