"use client";
import styles from "./becomehelperCTA.module.css";

const PERKS = [
  "Set your own rates & schedule",
  "Get paid securely in-platform",
  "Connect with 2,400+ students",
];

export default function BecomeHelperCTA() {
  return (
    <div className={styles.card}>
      <div className={styles.title}>May Kasanayan Ka? 💡</div>
      <div className={styles.sub}>Kumita gamit ang iyong skills.</div>
      {PERKS.map((p) => (
        <div key={p} className={styles.check}>
          <span className={styles.checkIcon}>✔</span> {p}
        </div>
      ))}
      <button className={styles.btn}>Become a Helper →</button>
    </div>
  );
}
