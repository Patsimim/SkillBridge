"use client";
import { useState } from "react";
import styles from "./upcomingschedule.module.css";
import SchedulePopup from "./Schedulepopup";
import { Expand } from "lucide-react";

const SCHEDULE = [
  {
    date: "Today, May 8",
    time: "3:00 PM",
    name: "Math Tutoring Session",
    with: "John M.",
    status: "Confirmed",
  },
  {
    date: "Tomorrow, May 9",
    time: "10:00 AM",
    name: "Essay Writing Help",
    with: "Alexandra R.",
    status: "Confirmed",
  },
  {
    date: "Sat, May 10",
    time: "2:00 PM",
    name: "Canva Presentation Review",
    with: "Patricia L.",
    status: "Pending",
  },
];

export default function UpcomingSchedule() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Upcoming Schedule</h2>
          <button className={styles.seeAll} onClick={() => setShowPopup(true)}>
            <Expand />
          </button>
        </div>
        <div className={styles.list}>
          {SCHEDULE.map((s, i) => (
            <div key={i}>
              <div className={styles.date}>{s.date}</div>
              <div className={styles.row}>
                <div className={styles.time}>{s.time}</div>
                <div className={styles.details}>
                  <div className={styles.name}>{s.name}</div>
                  <div className={styles.with}>with {s.with}</div>
                </div>
                <span
                  className={
                    s.status === "Confirmed"
                      ? styles.badgeConfirmed
                      : styles.badgePending
                  }
                >
                  {s.status}
                </span>
              </div>
              {i < SCHEDULE.length - 1 && <div className={styles.divider} />}
            </div>
          ))}
        </div>
      </div>

      {showPopup && <SchedulePopup onClose={() => setShowPopup(false)} />}
    </>
  );
}
