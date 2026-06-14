"use client";

import { useRouter } from "next/navigation";
import { Clock } from "lucide-react";
import styles from "../becomeHelper.module.css";

export default function SuccessState() {
  const router = useRouter();

  return (
    <div className={styles.successWrapper}>
      {/* Confetti illustration */}
      <div className={styles.successIllustration} aria-hidden='true'>
        {/* Decorative dots */}
        <span className={`${styles.confetti} ${styles.c1}`} />
        <span className={`${styles.confetti} ${styles.c2}`} />
        <span className={`${styles.confetti} ${styles.c3}`} />
        <span className={`${styles.confetti} ${styles.c4}`} />
        <span className={`${styles.confetti} ${styles.c5}`} />

        {/* Big green checkmark circle */}
        <div className={styles.successCircle}>
          <svg
            viewBox='0 0 52 52'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={styles.successCheck}
            aria-hidden='true'
          >
            <circle cx='26' cy='26' r='26' fill='#22c55e' />
            <path
              d='M14 27L22 35L38 18'
              stroke='white'
              strokeWidth='3.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>

        {/* Party popper emoji-style accent */}
        <div className={styles.popperAccent} aria-hidden='true'>
          🎉
        </div>
      </div>

      {/* Heading */}
      <h2 className={styles.successTitle}>Application Submitted!</h2>
      <p className={styles.successSub}>
        Your helper application is now under review.
      </p>

      {/* Status card */}
      <div className={styles.statusCard}>
        <div className={styles.statusRow}>
          <span className={styles.statusLabel}>Application Status</span>
          <span className={styles.statusBadge}>Pending Review</span>
        </div>
        <p className={styles.statusDesc}>
          We&apos;ll review your application and notify you via email and in-app
          notification.
        </p>

        <div className={styles.statusMeta}>
          <Clock size={14} strokeWidth={2} className={styles.statusMetaIcon} />
          <div>
            <p className={styles.statusMetaLabel}>Expected Review Time</p>
            <p className={styles.statusMetaValue}>1 – 3 business days</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <button
        type='button'
        className={styles.dashboardBtn}
        onClick={() => router.push("/")}
      >
        Go to Dashboard
      </button>
    </div>
  );
}
