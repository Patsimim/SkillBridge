"use client";

import styles from "./howitwork.module.css";
import { FilePlus, UserSearch, CalendarDays, BadgeCheck } from "lucide-react";
import { CalendarDots } from "@phosphor-icons/react";

const STEPS = [
  {
    number: 1,
    title: "Post a Task",
    desc: "Tell us what you need done.",
    color: "#7C6FD4",
    bg: "#EEF0FB",
    illustration: <FilePlus size={64} color='#7C6FD4' strokeWidth={1.5} />,
  },
  {
    number: 2,
    title: "Find the right Helper",
    desc: "Choose a skilled Tasker based on price, skills, and reviews.",
    color: "#F59E0B",
    bg: "#FEF9EC",
    illustration: <UserSearch size={64} color='#F59E0B' strokeWidth={1.5} />,
  },
  {
    number: 3,
    title: "Book and schedule",
    desc: "Set a time that works for you, even as early as today.",
    color: "#4A90D9",
    bg: "#EBF4FF",
    illustration: <CalendarDots size={64} weight='duotone' color='#4A90D9' />,
  },
  {
    number: 4,
    title: "Complete and pay",
    desc: "Chat, pay, tip, and leave a review all in one place.",
    color: "#10B981",
    bg: "#ECFDF5",
    illustration: <BadgeCheck size={64} color='#10B981' strokeWidth={1.5} />,
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.header__eyebrow}>How it works?</p>
        <h2 className={styles.header__title}>
          Simple <span className={styles["header__title--accent"]}>4-step</span>{" "}
          process
        </h2>
        <p className={styles.header__sub}>
          No complications. Find the help you need in just a few minutes.
        </p>
      </div>

      <div className={styles.steps}>
        {STEPS.map((step, i) => (
          <div key={step.number} className={styles.step__wrapper}>
            {/* Card */}
            <div className={styles.card} style={{ background: step.bg }}>
              {/* Step badge */}
              <div
                className={styles.card__badge}
                style={{ background: step.color }}
              >
                {step.number}
              </div>

              <h3 className={styles.card__title}>{step.title}</h3>
              <p className={styles.card__desc}>{step.desc}</p>

              <div className={styles.card__illustration}>
                {step.illustration}
              </div>
            </div>

            {/* Arrow connector */}
            {i < STEPS.length - 1 && (
              <div className={styles.arrow} style={{ color: step.color }}>
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
