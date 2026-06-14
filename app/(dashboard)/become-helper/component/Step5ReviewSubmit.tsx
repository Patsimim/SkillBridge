"use client";

import {
  User,
  ShieldCheck,
  Sparkles,
  PhilippinePeso,
  CalendarDays,
  AlertCircle,
} from "lucide-react";
import { BecomeHelperFormData } from "../types/becomeHelperTypes";
import styles from "../becomeHelper.module.css";

interface Step5ReviewSubmitProps {
  data: BecomeHelperFormData;
}

interface ReviewRowProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

function ReviewRow({ icon, label, children }: ReviewRowProps) {
  return (
    <div className={styles.reviewRow}>
      <div className={styles.reviewIcon}>{icon}</div>
      <div className={styles.reviewContent}>
        <p className={styles.reviewLabel}>{label}</p>
        <div className={styles.reviewValue}>{children}</div>
      </div>
    </div>
  );
}

export default function Step5ReviewSubmit({ data }: Step5ReviewSubmitProps) {
  const { step1, step2, step3, step4 } = data;

  const availableDays = step4.availability
    .filter((d) => d.available)
    .map((d) => d.day.slice(0, 3))
    .join(", ");

  const availableTime = step4.availability.find((d) => d.available)
    ? `${step4.availability.find((d) => d.available)!.startTime} – ${
        step4.availability.find((d) => d.available)!.endTime
      }`
    : "—";

  return (
    <div className={styles.stepBody}>
      {/* Left */}
      <div className={styles.stepLeft}>
        <p className={styles.stepMeta}>Step 5 of 5</p>
        <h2 className={styles.stepTitle}>Review &amp; Submit</h2>
        <p className={styles.stepDesc}>
          Please review your details before submitting.
        </p>
      </div>

      {/* Right */}
      <div className={`${styles.stepRight} ${styles.reviewList}`}>
        {/* Basic Info */}
        <ReviewRow
          icon={<User size={15} strokeWidth={2} />}
          label='Basic Information'
        >
          <span className={styles.reviewPrimary}>{step1.fullName || "—"}</span>
          <span className={styles.reviewSecondary}>
            {step1.university || "—"}
          </span>
          <span className={styles.reviewSecondary}>{step1.course || "—"}</span>
        </ReviewRow>

        {/* Verification */}
        <ReviewRow
          icon={<ShieldCheck size={15} strokeWidth={2} />}
          label='Verification'
        >
          <div className={styles.reviewInlineRow}>
            <span className={styles.reviewPrimary}>
              Student ID, Selfie, and Phone Verified
            </span>
            {step2.otpVerified ? (
              <span className={styles.verifiedPill}>Verified</span>
            ) : (
              <span className={styles.unverifiedPill}>Incomplete</span>
            )}
          </div>
        </ReviewRow>

        {/* Skills */}
        <ReviewRow
          icon={<Sparkles size={15} strokeWidth={2} />}
          label='Skills / Categories'
        >
          <span className={styles.reviewPrimary}>
            {step3.skills.length > 0 ? step3.skills.join(", ") : "—"}
          </span>
        </ReviewRow>

        {/* Rates */}
        <ReviewRow
          icon={<PhilippinePeso size={15} strokeWidth={2} />}
          label='Rates'
        >
          <span className={styles.reviewPrimary}>
            ₱{step4.hourlyRate} per hour
          </span>
          <span className={styles.reviewSecondary}>
            ₱{step4.fixedTaskRate} minimum per task
          </span>
        </ReviewRow>

        {/* Availability */}
        <ReviewRow
          icon={<CalendarDays size={15} strokeWidth={2} />}
          label='Availability'
        >
          <span className={styles.reviewPrimary}>
            {availableDays || "—"} · {availableTime}
          </span>
        </ReviewRow>

        {/* Terms notice */}
        <div className={styles.termsNotice}>
          <AlertCircle size={13} strokeWidth={2} className={styles.termsIcon} />
          <p className={styles.termsText}>
            By submitting this application, you agree to the{" "}
            <a
              href='/terms'
              className={styles.termsLink}
              target='_blank'
              rel='noreferrer'
            >
              SkillBridgePH Helper Terms and Conditions.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
