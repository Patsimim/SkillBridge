// components/messages/SessionCard.tsx

import type { Request } from "../../types/messages.types";
import styles from "./sessioncard.module.css";

interface SessionCardProps {
  request: Request;
}

export default function SessionCard({ request }: SessionCardProps) {
  const statusClass =
    request.status === "Confirmed"
      ? styles["status--confirmed"]
      : request.status === "Pending"
        ? styles["status--pending"]
        : styles["status--completed"];

  return (
    <div className={styles.sessionCard}>
      <div className={styles.sessionCard__icon}>📅</div>

      <div className={styles.sessionCard__body}>
        <span className={styles.sessionCard__title}>{request.title}</span>
        <span className={styles.sessionCard__datetime}>
          📅 {request.date} • {request.time}
        </span>
      </div>

      <div className={styles.sessionCard__right}>
        <span className={`${styles.statusBadge} ${statusClass}`}>
          {request.status}
        </span>
        <button className={styles.sessionCard__viewBtn}>View Request →</button>
      </div>
    </div>
  );
}
