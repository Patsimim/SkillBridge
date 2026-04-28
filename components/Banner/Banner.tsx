"use client";

import { Search, Briefcase, ArrowRight } from "lucide-react";
import styles from "./banner.module.css";

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* Left — Find a Helper */}
        <div className={`${styles.card} ${styles["card--blue"]}`}>
          {/* decorative circles */}
          <div className={`${styles.circle} ${styles["circle--tl"]}`} />
          <div className={`${styles.circle} ${styles["circle--br"]}`} />

          <div className={styles.card__icon}>
            <Search size={28} strokeWidth={2} />
          </div>

          <h3 className={styles.card__title}>Kailangan ng Tulong?</h3>
          <p className={styles.card__desc}>
            I-post ang iyong task ngayon at makatanggap ng mga alok mula sa mga
            verified helpers sa iyong lugar.
          </p>

          <ul className={styles.card__perks}>
            <li>✓ Libre mag-post ng request</li>
            <li>✓ Makatanggap ng alok sa loob ng ilang minuto</li>
            <li>✓ Ligtas at secured na bayad</li>
          </ul>

          <button className={`${styles.btn} ${styles["btn--white-blue"]}`}>
            Mag-post ng Request
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Divider */}
        <div className={styles.divider}>
          <span className={styles.divider__text}>o</span>
        </div>

        {/* Right — Become a Helper */}
        <div className={`${styles.card} ${styles["card--orange"]}`}>
          <div className={`${styles.circle} ${styles["circle--tl"]}`} />
          <div className={`${styles.circle} ${styles["circle--br"]}`} />

          <div className={styles.card__icon}>
            <Briefcase size={28} strokeWidth={2} />
          </div>

          <h3 className={styles.card__title}>May Kasanayan Ka?</h3>
          <p className={styles.card__desc}>
            Kumita gamit ang iyong talento. Mag-sign up bilang helper at simulan
            ang pag-accept ng mga task ngayon din.
          </p>

          <ul className={styles.card__perks}>
            <li>✓ I-set ang sarili mong presyo</li>
            <li>✓ Flexible na oras — ikaw ang bossing</li>
            <li>✓ Direktang bayad sa iyong account</li>
          </ul>

          <button className={`${styles.btn} ${styles["btn--white-orange"]}`}>
            Maging Helper
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
