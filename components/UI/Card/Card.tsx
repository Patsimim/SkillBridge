"use client";
import styles from "./Card.module.css";

export type TagVariant = "popular" | "nearYou" | "recommended" | "trending";

const TAG_LABELS: Record<TagVariant, string> = {
  popular: "Popular",
  nearYou: "Near You",
  recommended: "Recommended",
  trending: "Trending",
};

const TAG_STYLES: Record<TagVariant, string> = {
  popular: styles.tagPopular,
  nearYou: styles.tagNearYou,
  recommended: styles.tagRecommended,
  trending: styles.tagTrending,
};

export interface CardProps {
  initials: string;
  name: string;
  rating: number;
  reviews: number;
  skill: string;
  price: string;
  tag?: TagVariant;
  verified?: boolean;
  showBookBtn?: boolean;
  onBook?: (name: string) => void;
}

export default function Card({
  initials,
  name,
  rating,
  reviews,
  skill,
  price,
  tag,
  verified = false,
  showBookBtn = false,
  onBook,
}: CardProps) {
  return (
    <div className={styles.card}>
      {tag && (
        <div className={styles.tagRow}>
          <span className={`${styles.tag} ${TAG_STYLES[tag]}`}>
            {TAG_LABELS[tag]}
          </span>
        </div>
      )}

      <div className={styles.avatarWrap}>
        <div className={styles.avatar}>{initials}</div>
        {verified && <div className={styles.verified}>✓</div>}
      </div>

      <div className={styles.name}>{name}</div>

      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.ratingVal}>{rating}</span>
        <span>({reviews})</span>
      </div>

      {showBookBtn && <div className={styles.skill}>{skill}</div>}

      <div className={styles.price}>
        {showBookBtn ? `Starts at ${price}` : `${skill} · ${price}`}
      </div>

      {showBookBtn && (
        <button className={styles.bookBtn} onClick={() => onBook?.(name)}>
          Book Now
        </button>
      )}
    </div>
  );
}
