"use client";
import styles from "./becomehelperCTA.module.css";

const PERKS = [
  "Set your own rates & schedule",
  "Earn on your own terms",
  "Connect with 2,400+ students",
];

export default function BecomeHelperCTA() {
  return (
    <div className={styles.card}>
      <div className={styles.title}>Want to earn and help others?</div>
      <div className={styles.sub}>You're not listed as a helper yet.</div>
      {PERKS.map((p) => (
        <div key={p} className={styles.check}>
          <span className={styles.checkIcon}>✔</span> {p}
        </div>
      ))}
      <button type='button' className={styles.btn}>
        Become a Helper →
      </button>
    </div>
  );
}
