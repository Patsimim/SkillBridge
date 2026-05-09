"use client";
import styles from "./earnings.module.css";
import Image from "next/image";

export default function HelperEarnings() {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.icon}>
          <Image
            src='/icons/wallet.png'
            alt='wallet icon'
            width={28}
            height={28}
            priority
          />
        </div>
        <div>
          <div className={styles.label}>Your Earnings (May)</div>
          <div className={styles.amount}>₱1,850</div>
        </div>
      </div>
      <button className={styles.link}>View Earnings →</button>
    </div>
  );
}
