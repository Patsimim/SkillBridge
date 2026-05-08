"use client";
import { useState } from "react";
import styles from "./dashboardhero.module.css";
import Image from "next/image";
import { Search } from "lucide-react";

function HeroIllustration() {
  return (
    <Image
      src='/dashboard_Illustration/dashboard_illustration.png'
      alt='Dashboard Illustration'
      width={500}
      height={300}
      priority
      className={styles.illustration}
      style={{ width: "auto", height: "auto" }}
    />
  );
}

export default function DashboardHero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.greeting}>
          Magandang araw, <span className={styles.name}>Russel</span> 👋
        </h1>
        <p className={styles.sub}>What do you need help with today?</p>

        <div className={styles.searchRow}>
          <div className={styles.searchBox}>
            <Search className={styles.searchIcon} />
            <input
              type='text'
              className={styles.searchInput}
              placeholder='Ano ang kailangan mo? (e.g. Math tutor, Essay writing, Data encoding...)'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className={styles.searchBtn}>Search</button>
        </div>

        <div className={styles.actions}>
          <button className={styles.actionPrimary}>Post a Task</button>
          <button className={styles.actionSecondary}>My Requests</button>
          <button className={styles.actionSecondary}>Messages</button>
          <button className={styles.actionSecondary}>Saved Helpers</button>
        </div>
      </div>

      <div className={styles.right}>
        <HeroIllustration />
      </div>
    </div>
  );
}
