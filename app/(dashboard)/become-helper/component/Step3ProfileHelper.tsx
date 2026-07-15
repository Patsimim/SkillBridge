"use client";

import { useState, KeyboardEvent, ChangeEvent } from "react";
import { X, Plus } from "lucide-react";
import { Step3Data } from "../types/becomeHelperTypes";
import styles from "../becomeHelper.module.css";

const SKILL_OPTIONS = [
  "Tutoring",
  "Programming",
  "Design",
  "Errands",
  "Research",
  "Writing",
  "Math",
  "Science",
  "Language",
  "Music",
];

const MAX_BIO = 250;

interface Step3HelperProfileProps {
  data: Step3Data;
  onChange: (updated: Partial<Step3Data>) => void;
}

export default function Step3HelperProfile({
  data,
  onChange,
}: Step3HelperProfileProps) {
  const [langInput, setLangInput] = useState("");

  /* ── Skills ── */
  function toggleSkill(skill: string) {
    const current = data.skills;
    const next = current.includes(skill)
      ? current.filter((s) => s !== skill)
      : [...current, skill];
    onChange({ skills: next });
  }

  /* ── Bio ── */
  function handleBio(e: ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value.length <= MAX_BIO) {
      onChange({ bio: e.target.value });
    }
  }

  /* ── Languages ── */
  function addLanguage(lang: string) {
    const trimmed = lang.trim();
    if (!trimmed || data.languages.includes(trimmed)) return;
    onChange({ languages: [...data.languages, trimmed] });
    setLangInput("");
  }

  function removeLanguage(lang: string) {
    onChange({ languages: data.languages.filter((l) => l !== lang) });
  }

  function handleLangKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addLanguage(langInput);
    }
    if (e.key === "Backspace" && !langInput && data.languages.length > 0) {
      removeLanguage(data.languages[data.languages.length - 1]);
    }
  }

  return (
    <div className={styles.stepBody}>
      {/* Left */}
      <div className={styles.stepLeft}>
        <p className={styles.stepMeta}>Step 3 of 5</p>
        <h2 className={styles.stepTitle}>Helper Profile</h2>
        <p className={styles.stepDesc}>
          Let students know how you can help them.
        </p>
      </div>

      {/* Right */}
      <div className={styles.stepRight}>
        {/* Skills / Categories  */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>
            Skills / Categories{" "}
            <span className={styles.fieldHint}>(Select all that apply)</span>
          </label>
          <div className={styles.skillGrid}>
            {SKILL_OPTIONS.map((skill) => {
              const checked = data.skills.includes(skill);
              return (
                <button
                  key={skill}
                  type='button'
                  onClick={() => toggleSkill(skill)}
                  className={`${styles.skillChip} ${checked ? styles.skillChipChecked : ""}`}
                  aria-pressed={checked}
                >
                  <span
                    className={`${styles.skillCheckbox} ${checked ? styles.skillCheckboxChecked : ""}`}
                  >
                    {checked && (
                      <svg
                        width='9'
                        height='9'
                        viewBox='0 0 10 8'
                        fill='none'
                        aria-hidden='true'
                      >
                        <path
                          d='M1 4L3.5 6.5L9 1'
                          stroke='white'
                          strokeWidth='1.8'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    )}
                  </span>
                  {skill}
                </button>
              );
            })}
          </div>
        </div>

        {/*  Short Bio  */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor='helperBio'>
            Short Bio
          </label>
          <div className={styles.textareaWrapper}>
            <textarea
              id='helperBio'
              className={styles.textarea}
              placeholder="e.g. I'm a computer science student who enjoys teaching and helping others understand difficult concepts..."
              value={data.bio}
              onChange={handleBio}
              rows={4}
            />
            <span className={styles.charCount}>
              {data.bio.length}/{MAX_BIO}
            </span>
          </div>
        </div>

        {/*  Languages Spoken  */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Languages Spoken</label>
          <div className={styles.tagInputWrapper}>
            {data.languages.map((lang) => (
              <span key={lang} className={styles.langTag}>
                {lang}
                <button
                  type='button'
                  onClick={() => removeLanguage(lang)}
                  className={styles.langTagRemove}
                  aria-label={`Remove ${lang}`}
                >
                  <X size={10} strokeWidth={2.5} />
                </button>
              </span>
            ))}
            <input
              type='text'
              className={styles.tagInput}
              placeholder={
                data.languages.length === 0
                  ? "e.g. English, Filipino"
                  : "+ Add language"
              }
              value={langInput}
              onChange={(e) => setLangInput(e.target.value)}
              onKeyDown={handleLangKeyDown}
              aria-label='Add a language'
            />
            {langInput.trim() && (
              <button
                type='button'
                className={styles.addLangBtn}
                onClick={() => addLanguage(langInput)}
                aria-label='Add language'
              >
                <Plus size={13} strokeWidth={2.5} />
              </button>
            )}
          </div>
          <p className={styles.fieldHintBlock}>
            Press Enter or comma to add a language
          </p>
        </div>
      </div>
    </div>
  );
}
