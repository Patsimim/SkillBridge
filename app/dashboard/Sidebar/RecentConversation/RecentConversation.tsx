"use client";
import styles from "./recentconversation.module.css";

const CONVOS = [
  {
    initials: "JM",
    name: "John M.",
    msg: "Sure! I'm available at 3 PM.",
    time: "2m",
    unread: 2,
  },
  {
    initials: "AR",
    name: "Alexandra R.",
    msg: "I'll send the draft by tonight.",
    time: "1h",
    unread: 1,
  },
  {
    initials: "KD",
    name: "Kristine D.",
    msg: "Okay, see you tomorrow then!",
    time: "3h",
    unread: 0,
  },
  {
    initials: "MT",
    name: "Michael T.",
    msg: "The Excel file is ready for you.",
    time: "1d",
    unread: 0,
  },
];

export default function RecentConversations() {
  return (
    <div className={styles.card}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Recent Conversations</h2>
        <button className={styles.seeAll}>View all →</button>
      </div>
      <div className={styles.list}>
        {CONVOS.map((c) => (
          <div key={c.name} className={styles.item}>
            <div className={styles.avatarWrap}>
              <div className={styles.avatar}>{c.initials}</div>
              {c.unread > 0 && <div className={styles.unread}>{c.unread}</div>}
            </div>
            <div className={styles.body}>
              <div className={styles.name}>{c.name}</div>
              <div className={styles.msg}>{c.msg}</div>
            </div>
            <div className={styles.time}>{c.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
