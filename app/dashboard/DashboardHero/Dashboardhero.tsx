"use client";
import { useState } from "react";
import styles from "./dashboardhero.module.css";
import Image from "next/image";
import { Search, Plus, FileText, MessageSquare, Bookmark } from "lucide-react";

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

const ACTIONS = [
  {
    icon: <Plus size={18} strokeWidth={2.5} />,
    label: "Post a Task",
    sub: "Get help from experts",
    primary: true,
    badge: null,
  },
  {
    icon: <FileText size={17} strokeWidth={1.8} />,
    label: "My Requests",
    sub: "2 active requests",
    primary: false,
    badge: null,
  },
  {
    icon: <MessageSquare size={17} strokeWidth={1.8} />,
    label: "Messages",
    sub: "3 unread messages",
    primary: false,
    badge: 3,
  },
  {
    icon: <Bookmark size={17} strokeWidth={1.8} />,
    label: "Saved Helpers",
    sub: "5 saved helpers",
    primary: false,
    badge: null,
  },
];

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
            <Search size={15} className={styles.searchIcon} />
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
          {ACTIONS.map((a) => (
            <button
              key={a.label}
              className={`${styles.actionBtn} ${
                a.primary ? styles.actionPrimary : styles.actionSecondary
              }`}
            >
              <span className={styles.actionIcon}>{a.icon}</span>
              <span className={styles.actionText}>
                <span className={styles.actionLabel}>
                  {a.label}
                  {a.badge && (
                    <span className={styles.actionBadge}>{a.badge}</span>
                  )}
                </span>
                <span className={styles.actionSub}>{a.sub}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <HeroIllustration />
      </div>
    </div>
  );
}
