"use client";
import styles from "./foryou.module.css";

const CARDS = [
  {
    tag: "Popular",
    tagCls: "tagPopular",
    initials: "AR",
    name: "Alexandra R.",
    rating: 4.9,
    reviews: 128,
    price: "₱250/hr",
    skill: "Essay Writing",
  },
  {
    tag: "Near You",
    tagCls: "tagNearYou",
    initials: "JM",
    name: "John M.",
    rating: 4.8,
    reviews: 96,
    price: "₱250/hr",
    skill: "Math Tutor",
  },
  {
    tag: "Recommended",
    tagCls: "tagRecommended",
    initials: "PL",
    name: "Patricia L.",
    rating: 4.9,
    reviews: 74,
    price: "₱300/hr",
    skill: "Canva Design",
  },
  {
    tag: "Trending",
    tagCls: "tagTrending",
    initials: "MT",
    name: "Michael T.",
    rating: 4.8,
    reviews: 83,
    price: "₱200/hr",
    skill: "Data Entry",
  },
  {
    tag: "Popular",
    tagCls: "tagPopular",
    initials: "KD",
    name: "Kristine D.",
    rating: 4.9,
    reviews: 88,
    price: "₱250/hr",
    skill: "Lab Reports",
  },
];

export default function ForYouSection() {
  return (
    <section>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>For You</h2>
        <button className={styles.seeAll}>See all →</button>
      </div>
      <div className={styles.scroll}>
        {CARDS.map((c) => (
          <div key={c.name} className={styles.card}>
            <span
              className={`${styles.cardTag} ${styles[c.tagCls as keyof typeof styles]}`}
            >
              {c.tag}
            </span>
            <div className={styles.avatar}>{c.initials}</div>
            <div className={styles.cardName}>{c.name}</div>
            <div className={styles.cardRating}>
              <span className={styles.star}>★</span>
              <span className={styles.ratingVal}>{c.rating}</span>
              <span>({c.reviews})</span>
            </div>
            <div className={styles.cardPrice}>
              {c.skill} · {c.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
