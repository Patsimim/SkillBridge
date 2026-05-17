"use client";
import Link from "next/link";
import { Calendar, Star } from "lucide-react";
import StatusBadge, {
  RequestStatus,
} from "../../../../../components/StatusBadge/StatusBadge";
import styles from "./requestcard.module.css";

export interface RequestCardData {
  id: string;
  icon: string; // emoji
  title: string;
  category: string;
  date: string;
  time: string;
  description: string;
  helperName: string;
  helperHref?: string;
  status: RequestStatus;
  /** Days until session (for active/pending) */
  sessionInDays?: number;
  /** Rating out of 5 (for completed) */
  rating?: number;
  ratingLabel?: string;
}

interface RequestCardProps {
  data: RequestCardData;
  onViewDetails?: (id: string) => void;
}

export default function RequestCard({ data, onViewDetails }: RequestCardProps) {
  const {
    id,
    icon,
    title,
    category,
    date,
    time,
    description,
    helperName,
    helperHref,
    status,
    sessionInDays,
    rating,
    ratingLabel,
  } = data;

  return (
    <div className={styles.card}>
      {/* Left: icon + info */}
      <div className={styles.card__left}>
        <div className={`${styles.card__icon} ${styles[`icon__${status}`]}`}>
          <span className={styles.card__emoji}>{icon}</span>
        </div>
        <div className={styles.card__info}>
          <h3 className={styles.card__title}>{title}</h3>
          <p className={styles.card__category}>{category}</p>
          <div className={styles.card__meta}>
            <Calendar size={13} strokeWidth={1.8} />
            <span>
              {date} &bull; {time}
            </span>
          </div>
          <p className={styles.card__description}>{description}</p>
          <p className={styles.card__helper}>
            with{" "}
            {helperHref ? (
              <Link href={helperHref} className={styles.card__helperLink}>
                {helperName}
              </Link>
            ) : (
              <span className={styles.card__helperLink}>{helperName}</span>
            )}
          </p>
        </div>
      </div>

      {/* Right: status + action */}
      <div className={styles.card__right}>
        <div className={styles.card__statusBlock}>
          <StatusBadge status={status} />

          {/* Session countdown for active/pending */}
          {sessionInDays !== undefined && status !== "completed" && (
            <div className={styles.card__countdown}>
              <span className={styles.countdown__label}>Session in</span>
              <span className={styles.countdown__days}>{sessionInDays}</span>
              <span className={styles.countdown__unit}>
                {sessionInDays === 1 ? "day" : "days"}
              </span>
            </div>
          )}

          {/* Waiting message for pending with no countdown */}
          {status === "pending" && sessionInDays === undefined && (
            <p className={styles.card__waiting}>
              Waiting for helper
              <br />
              confirmation
            </p>
          )}

          {/* Rating for completed */}
          {status === "completed" && rating !== undefined && (
            <div className={styles.card__rating}>
              <Star
                size={14}
                fill='#f59e0b'
                stroke='#f59e0b'
                strokeWidth={1.5}
              />
              <span className={styles.rating__score}>{rating.toFixed(1)}</span>
              {ratingLabel && (
                <span className={styles.rating__label}>{ratingLabel}</span>
              )}
            </div>
          )}
        </div>

        <button
          className={`${styles.card__btn} ${
            status === "confirmed"
              ? styles["card__btn--primary"]
              : styles["card__btn--outline"]
          }`}
          onClick={() => onViewDetails?.(id)}
        >
          View Details
          <svg
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M5 12h14M12 5l7 7-7 7' />
          </svg>
        </button>
      </div>
    </div>
  );
}
