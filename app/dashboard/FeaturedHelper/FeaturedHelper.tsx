"use client";
import styles from "./featuredhelper.module.css";

const HELPERS = [
  {
    initials: "AR",
    name: "Alexandra R.",
    rating: 4.9,
    reviews: 128,
    skill: "Essay Writing · Research",
    price: "₱250",
  },
  {
    initials: "JM",
    name: "John M.",
    rating: 4.8,
    reviews: 96,
    skill: "Math Tutor · Calculus",
    price: "₱250",
  },
  {
    initials: "PL",
    name: "Patricia L.",
    rating: 4.9,
    reviews: 74,
    skill: "Canva · Social Media",
    price: "₱300",
  },
  {
    initials: "MT",
    name: "Michael T.",
    rating: 4.8,
    reviews: 83,
    skill: "Excel · Data Entry",
    price: "₱200",
  },
  {
    initials: "KD",
    name: "Kristine D.",
    rating: 4.9,
    reviews: 88,
    skill: "Lab Reports · Biology",
    price: "₱250",
  },
];

export default function FeaturedHelpers() {
  return (
    <section>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Featured Helpers</h2>
        <button className={styles.seeAll}>See all helpers →</button>
      </div>
      <div className={styles.scroll}>
        {HELPERS.map((h) => (
          <div key={h.name} className={styles.card}>
            <div className={styles.avatarWrap}>
              <div className={styles.avatar}>{h.initials}</div>
              <div className={styles.verified}>✓</div>
            </div>
            <div className={styles.helperName}>{h.name}</div>
            <div className={styles.rating}>
              <span className={styles.star}>★</span>
              <span className={styles.ratingVal}>{h.rating}</span>
              <span>({h.reviews})</span>
            </div>
            <div className={styles.skill}>{h.skill}</div>
            <div className={styles.price}>Starts at {h.price}</div>
            <button className={styles.bookBtn}>Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}
