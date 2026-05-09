"use client";

import { Star } from "lucide-react";
import styles from "./reviews.module.css";

type Review = {
  name: string;
  initials: string;
  avatarColor: string;
  rating: number;
  text: string;
  category: string;
  location: string;
};

const REVIEWS: Review[] = [
  {
    name: "Maria C.",
    initials: "MC",
    avatarColor: "#4A90D9",
    rating: 5,
    text: "Grabe si Kuya, sobrang bilis! Natapos niya ang Excel report ko in less than an hour. Hindi ko na kailangan mag-aral ng formulas. Highly recommend!",
    category: "Tech Help",
    location: "Quezon City",
  },
  {
    name: "Jose R.",
    initials: "JR",
    avatarColor: "#F97316",
    rating: 5,
    text: "Ang galing ng helper na nakuha ko para sa thesis ko. Patient na patient siya mag-explain ng methodology. Nakapasa ako dahil sa kanya!",
    category: "School Work",
    location: "Cebu City",
  },
  {
    name: "Ana P.",
    initials: "AP",
    avatarColor: "#10B981",
    rating: 4,
    text: "Nag-pa-help ako para sa logo ng aming small business. Super satisfied! Professional ang dating ng output, parang malaking company na kami.",
    category: "Creative Design",
    location: "Davao",
  },
  {
    name: "Rico M.",
    initials: "RM",
    avatarColor: "#8B5CF6",
    rating: 5,
    text: "Ang bilis magreply at magtrabaho. Na-ayos yung bug sa website ko agad. Sana all ganito ka-efficient. Babalik ako next time!",
    category: "Tech Help",
    location: "Manila",
  },
  {
    name: "Luz T.",
    initials: "LT",
    avatarColor: "#EC4899",
    rating: 5,
    text: "Tinulungan ako sa business proposal ko para sa loan application. Napaka-professional ng output. Na-approve ang loan ko! Salamat talaga.",
    category: "Business Support",
    location: "Iloilo",
  },
  {
    name: "Kevin B.",
    initials: "KB",
    avatarColor: "#F59E0B",
    rating: 4,
    text: "Kumuha ako ng tutor para sa anak ko sa Math. Nagtaas ng grade ang bata in just 2 sessions. Ang husay ng pag-explain, hindi boring.",
    category: "Tutoring",
    location: "Batangas",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < rating ? styles["star--filled"] : styles["star--empty"]
          }
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <p className={styles.header__eyebrow}>
          See what happy customers are saying
        </p>
        <h2 className={styles.header__title}>
          Why customers love{" "}
          <span className={styles["header__title--accent"]}>
            SkillBridgePH.
          </span>{" "}
        </h2>
        <p className={styles.header__sub}>
          Libo-libo na ang nakinabang sa SkillBridgePH. Ikaw na ang susunod!
        </p>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {REVIEWS.map((review) => (
          <div key={review.name} className={styles.card}>
            <div className={styles.card__top}>
              <div
                className={styles.card__avatar}
                style={{ background: review.avatarColor }}
              >
                {review.initials}
              </div>
              <div className={styles.card__meta}>
                <span className={styles.card__name}>{review.name}</span>
                <span className={styles.card__location}>{review.location}</span>
              </div>
              <StarRating rating={review.rating} />
            </div>

            <p className={styles.card__text}>"{review.text}"</p>

            <span className={styles.card__tag}>{review.category}</span>
          </div>
        ))}
      </div>

      {/* Footer badge */}
      <div className={styles.badge}>
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className={styles["star--filled"]} />
          ))}
        </div>
        <span className={styles.badge__text}>
          Rated <strong>4.9</strong> out of <strong>5</strong> based on over
          12,400 reviews
        </span>
      </div>
    </section>
  );
}
