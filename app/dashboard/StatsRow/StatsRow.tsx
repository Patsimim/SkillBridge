"use client";
import styles from "./statsrow.module.css";

const STATS = [
  {
    icon: "📋",
    bg: "iconBlue",
    num: "3",
    label: "Active Requests",
    sub: "2 with new offers",
  },
  {
    icon: "💬",
    bg: "iconOrange",
    num: "5",
    label: "Unread Messages",
    sub: "From 3 helpers",
  },
  {
    icon: "✅",
    bg: "iconGreen",
    num: "12",
    label: "Tasks Completed",
    sub: "This month",
  },
];

export default function StatsRow() {
  return (
    <div className={styles.statsRow}>
      {STATS.map((s) => (
        <div key={s.label} className={styles.statCard}>
          <div
            className={`${styles.statIconWrap} ${styles[s.bg as keyof typeof styles]}`}
          >
            {s.icon}
          </div>
          <div>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
            <div className={styles.statSub}>{s.sub}</div>
          </div>
          <span className={styles.statArrow}>›</span>
        </div>
      ))}
    </div>
  );
}
