import Link from "next/link";
import {
  Briefcase,
  Users,
  Headphones,
  Lightbulb,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import styles from "./requestsidebar.module.css";

interface SummaryCounts {
  total: number;
  active: number;
  pending: number;
  completed: number;
  cancelled: number;
}

interface RequestSidebarProps {
  counts: SummaryCounts;
  onPostTask?: () => void;
  onBrowseHelpers?: () => void;
  onContactSupport?: () => void;
}

const TIPS = [
  "Be specific about your requirements",
  "Set clear expectations and deadlines",
  "Communicate openly with your helper",
  "Leave a review after completion",
];

export default function RequestSidebar({
  counts,
  onPostTask,
  onBrowseHelpers,
  onContactSupport,
}: RequestSidebarProps) {
  return (
    <aside className={styles.sidebar}>
      {/* Request Summary */}
      <section className={styles.card}>
        <div className={styles.card__header}>
          <Briefcase
            size={16}
            strokeWidth={1.8}
            className={styles.card__icon}
          />
          <h3 className={styles.card__title}>Request Summary</h3>
        </div>
        <ul className={styles.summary__list}>
          <li className={styles.summary__item}>
            <span className={styles.summary__label}>Total Requests</span>
            <span className={styles.summary__value}>{counts.total}</span>
          </li>
          <li className={styles.summary__item}>
            <span className={styles.summary__label}>Active</span>
            <span
              className={`${styles.summary__value} ${styles["value--active"]}`}
            >
              {counts.active}
            </span>
          </li>
          <li className={styles.summary__item}>
            <span className={styles.summary__label}>Pending</span>
            <span
              className={`${styles.summary__value} ${styles["value--pending"]}`}
            >
              {counts.pending}
            </span>
          </li>
          <li className={styles.summary__item}>
            <span className={styles.summary__label}>Completed</span>
            <span
              className={`${styles.summary__value} ${styles["value--completed"]}`}
            >
              {counts.completed}
            </span>
          </li>
          <li className={styles.summary__item}>
            <span className={styles.summary__label}>Cancelled</span>
            <span className={styles.summary__value}>{counts.cancelled}</span>
          </li>
        </ul>
      </section>

      {/* Quick Actions */}
      <section className={styles.card}>
        <h3 className={styles.card__title}>Quick Actions</h3>
        <div className={styles.actions}>
          <button className={styles.action} onClick={onPostTask}>
            <div className={styles.action__iconWrap}>
              <Briefcase size={16} strokeWidth={1.8} />
            </div>
            <div className={styles.action__text}>
              <span className={styles.action__label}>Post a New Task</span>
              <span className={styles.action__sub}>
                Need help with something new?
              </span>
            </div>
            <ChevronRight size={16} className={styles.action__arrow} />
          </button>
          <button className={styles.action} onClick={onBrowseHelpers}>
            <div className={styles.action__iconWrap}>
              <Users size={16} strokeWidth={1.8} />
            </div>
            <div className={styles.action__text}>
              <span className={styles.action__label}>Browse Helpers</span>
              <span className={styles.action__sub}>
                Find the right expert for your task
              </span>
            </div>
            <ChevronRight size={16} className={styles.action__arrow} />
          </button>
        </div>
      </section>

      {/* Need Help */}
      <section className={`${styles.card} ${styles["card--support"]}`}>
        <div className={styles.support__top}>
          <div className={styles.support__iconWrap}>
            <Headphones size={20} strokeWidth={1.8} />
          </div>
          <div>
            <h3 className={styles.support__title}>Need Help?</h3>
            <p className={styles.support__sub}>
              Having issues with your request? Our support team is here to help.
            </p>
          </div>
        </div>
        <button className={styles.support__btn} onClick={onContactSupport}>
          Contact Support
        </button>
      </section>

      {/* Tips for Success */}
      <section className={styles.card}>
        <div className={styles.card__header}>
          <Lightbulb
            size={16}
            strokeWidth={1.8}
            className={styles.card__icon}
          />
          <h3 className={styles.card__title}>Tips for Success</h3>
        </div>
        <ul className={styles.tips}>
          {TIPS.map((tip) => (
            <li key={tip} className={styles.tip}>
              <CheckCircle size={14} className={styles.tip__icon} />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
