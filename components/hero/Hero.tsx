"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Monitor,
  BookOpen,
  Palette,
  Briefcase,
} from "lucide-react";
import styles from "./hero.module.css";

const QUICK_CATEGORIES = [
  { label: "Tech Help", icon: <Monitor size={14} /> },
  { label: "Tutoring", icon: <BookOpen size={14} /> },
  { label: "Creative Design", icon: <Palette size={14} /> },
  { label: "Business Support", icon: <Briefcase size={14} /> },
];

export default function Hero() {
  const [query, setQuery] = useState("");

  return (
    <section className={styles.hero}>
      {/* Decorative floating shapes */}
      <span className={`${styles["hero__blob"]} ${styles["hero__blob--1"]}`} />
      <span className={`${styles["hero__blob"]} ${styles["hero__blob--2"]}`} />

      <div className={styles.hero__inner}>
        {/* ── Left column ── */}
        <div className={styles.hero__content}>
          <h1 className={styles.hero__heading}>
            Hanapin ang tamang tulong
            <br />
            para sa'yo ✨
          </h1>

          <p className={styles.hero__subtitle}>
            Kumonekta sa mga mapagkakatiwalaang helper para sa school, work,
            business, at higit pa.
          </p>

          {/* Search row */}
          <div className={styles["hero__search-row"]}>
            <div className={styles["hero__search-box"]}>
              <Search className={styles["hero__search-icon"]} />
              <input
                type='text'
                className={styles["hero__search-input"]}
                placeholder='Anong kailangan mo?'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <button className={styles["hero__post-btn"]}>
              Post Help
              <Plus size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Quick category pills */}
          <div className={styles["hero__pills"]}>
            {QUICK_CATEGORIES.map((cat) => (
              <button key={cat.label} className={styles["hero__pill"]}>
                <span className={styles["hero__pill-icon"]}>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Right column – illustration ── */}
        <div className={styles.hero__illustration} aria-hidden='true'>
          {/* Replace the src below with your actual illustration asset */}
          <img
            src='/illustration/heroImageF.png'
            alt=''
            className={styles["hero__illustration-img"]}
          />

          {/* Floating badge decorations */}
          <span
            className={`${styles["hero__badge"]} ${styles["hero__badge--tl"]}`}
          >
            ✉️
          </span>
          <span
            className={`${styles["hero__badge"]} ${styles["hero__badge--tr"]}`}
          >
            📋
          </span>
          <span
            className={`${styles["hero__badge"]} ${styles["hero__badge--bl"]}`}
          >
            💡
          </span>
          <span
            className={`${styles["hero__badge"]} ${styles["hero__badge--br"]}`}
          >
            📶
          </span>
        </div>
      </div>
    </section>
  );
}
