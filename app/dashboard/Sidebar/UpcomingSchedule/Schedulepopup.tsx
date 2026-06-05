"use client";
import { createPortal } from "react-dom";
import styles from "./schedulepopup.module.css";
import { X, Monitor, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const SCHEDULE = [
  {
    day: "Today",
    date: "May 8",
    time: "3:00 PM",
    name: "Math Tutoring Session",
    with: "John M.",
    status: "Confirmed",
    mode: "online",
  },
  {
    day: "Tomorrow",
    date: "May 9",
    time: "10:00 AM",
    name: "Essay Writing Help",
    with: "Alexandra R.",
    status: "Confirmed",
    mode: "online",
  },
  {
    day: "Saturday",
    date: "May 10",
    time: "2:00 PM",
    name: "Canva Presentation Review",
    with: "Patricia L.",
    status: "Pending",
    mode: "inperson",
  },
];

interface SchedulePopupProps {
  onClose: () => void;
}

export default function SchedulePopup({ onClose }: SchedulePopupProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Upcoming Schedule</h2>
            <p className={styles.subtitle}>
              Your confirmed and pending sessions
            </p>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Sessions */}
        <div className={styles.list}>
          {SCHEDULE.map((s, i) => (
            <div key={i} className={styles.group}>
              <div className={styles.dayLabel}>
                {s.day} <span className={styles.dot}>•</span> {s.date}
              </div>
              <div className={styles.sessionCard}>
                <div
                  className={`${styles.timeBox} ${
                    s.status === "Pending"
                      ? styles.timeBoxPending
                      : styles.timeBoxConfirmed
                  }`}
                >
                  {s.time.split(" ").map((part, i) => (
                    <span
                      key={i}
                      className={i === 0 ? styles.timeNum : styles.timeAmpm}
                    >
                      {part}
                    </span>
                  ))}
                </div>

                <div className={styles.info}>
                  <div className={styles.sessionName}>{s.name}</div>
                  <div className={styles.sessionWith}>with {s.with}</div>
                  <div className={styles.modeBadge}>
                    {s.mode === "online" ? (
                      <>
                        <Monitor size={11} />
                        Online Session
                      </>
                    ) : (
                      <>
                        <MapPin size={11} />
                        In-person
                      </>
                    )}
                  </div>
                </div>

                <div className={styles.right}>
                  <span
                    className={
                      s.status === "Confirmed"
                        ? styles.badgeConfirmed
                        : styles.badgePending
                    }
                  >
                    {s.status}
                  </span>
                  <button className={styles.viewBtn}>View Request</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <button className={styles.goBtn}>Go to My Requests →</button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
