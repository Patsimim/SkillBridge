"use client";
import styles from "./earnings.module.css";

export default function HelperEarnings() {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.icon}>💰</div>
        <div>
          <div className={styles.label}>Your Earnings (May)</div>
          <div className={styles.amount}>₱1,850</div>
        </div>
      </div>
      <button className={styles.link}>View Details →</button>
    </div>
  );
}
