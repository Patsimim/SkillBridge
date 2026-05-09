"use client";
import Image from "next/image";
import styles from "./statsrow.module.css";

const STATS = [
  {
    img: "/icons/exam.png",
    bg: "iconBlue",
    num: "2",
    label: "Active Requests",
    sub: "view and manage",
  },
  {
    img: "/icons/date.png",
    bg: "iconOrange",
    num: "1",
    label: "Booking Tomorrow",
    sub: "view schedule",
  },
  {
    img: "/icons/chat-boxf.png",
    bg: "iconGreen",
    num: "3",
    label: "Unread Messages",
    sub: "from helpers",
  },
];

export default function StatsRow() {
  return (
    <div className={styles.statsRow}>
      {STATS.map((s, i) => (
        <div key={s.label} className={styles.statItem}>
          {/* divider before 2nd and 3rd */}
          {i > 0 && <div className={styles.divider} />}

          <div className={styles.statCard}>
            <div
              className={`${styles.statIconWrap} ${styles[s.bg as keyof typeof styles]}`}
            >
              <Image src={s.img} alt={s.label} width={22} height={22} />
            </div>
            <div>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statSub}>{s.sub}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
