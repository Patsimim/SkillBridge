"use client";

import { useState } from "react";
import {
  ChevronDown,
  FileText,
  Search,
  Monitor,
  GraduationCap,
  Briefcase,
  Palette,
  BookOpen,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import styles from "./requestform.module.css";

/* ─── Category data ─── */
type Category = {
  label: string;
  Icon: LucideIcon;
  color: string;
  bg: string;
};

const CATEGORIES: Category[] = [
  {
    label: "Tech Help",
    Icon: Monitor,
    color: "var(--cat-tech-color)",
    bg: "var(--cat-tech-bg)",
  },
  {
    label: "School Work",
    Icon: GraduationCap,
    color: "var(--cat-school-color)",
    bg: "var(--cat-school-bg)",
  },
  {
    label: "Business Support",
    Icon: Briefcase,
    color: "var(--cat-biz-color)",
    bg: "var(--cat-biz-bg)",
  },
  {
    label: "Creative Design",
    Icon: Palette,
    color: "var(--cat-design-color)",
    bg: "var(--cat-design-bg)",
  },
  {
    label: "Tutoring",
    Icon: BookOpen,
    color: "var(--cat-tutor-color)",
    bg: "var(--cat-tutor-bg)",
  },
  {
    label: "Iba Pa",
    Icon: Lightbulb,
    color: "var(--cat-other-color)",
    bg: "var(--cat-other-bg)",
  },
];

/* ─── Request Form ─── */
export function RequestForm() {
  const [desc, setDesc] = useState(
    "Need help with my Word document formatting",
  );
  const [budget, setBudget] = useState("300");
  const [category, setCategory] = useState("Tech Help");
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.panel}>
      <h2 className={styles.panel__title}>Hanap ng Tulong?</h2>

      <div className={styles.form}>
        {/* Description */}
        <textarea
          className={styles.form__textarea}
          rows={3}
          placeholder='Ilarawan ang kailangan mo...'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        {/* Budget */}
        <div className={styles.form__row}>
          <span className={styles.form__label}>Budget:</span>
          <div className={styles["form__budget-value"]}>
            <span className={styles.form__peso}>₱</span>
            <input
              type='number'
              className={styles["form__budget-input"]}
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
        </div>

        {/* Category dropdown */}
        <div className={styles["form__dropdown-wrapper"]}>
          <button
            className={styles["form__dropdown-btn"]}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={styles["form__dropdown-label"]}>
              <strong>Category: </strong>
              {category}
            </span>
            <ChevronDown
              className={`${styles["form__dropdown-chevron"]} ${open ? styles["form__dropdown-chevron--open"] : ""}`}
            />
          </button>

          {open && (
            <div className={styles["form__dropdown-menu"]}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.label}
                  className={styles["form__dropdown-option"]}
                  onClick={() => {
                    setCategory(cat.label);
                    setOpen(false);
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* CTAs */}
        <div className={styles.form__btns}>
          <button className={`${styles.btn} ${styles["btn--blue"]}`}>
            <FileText size={16} />
            Post Request
          </button>
          <button className={`${styles.btn} ${styles["btn--orange"]}`}>
            <Search size={16} />
            Browse Helpers
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Categories Grid ─── */
export function CategoriesGrid() {
  return (
    <div className={styles.panel}>
      <h3 className={styles.categories__title}>Categories</h3>

      <div className={styles.categories__grid}>
        {CATEGORIES.map(({ label, Icon, color, bg }) => (
          <button
            key={label}
            className={styles["category-card"]}
            style={{ background: bg }}
          >
            <div
              className={styles["category-card__icon-wrap"]}
              style={{ background: color + "22" }}
            >
              <Icon size={20} style={{ color }} />
            </div>
            <span className={styles["category-card__label"]}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
