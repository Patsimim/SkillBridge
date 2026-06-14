"use client";

import { ChangeEvent } from "react";
import { Clock, X } from "lucide-react";
import { Step4Data, DaySchedule } from "../types/becomeHelperTypes";
import styles from "../becomeHelper.module.css";

const TIME_OPTIONS: string[] = [];
for (let h = 6; h <= 22; h++) {
  ["00", "30"].forEach((m) => {
    const hour = h % 12 === 0 ? 12 : h % 12;
    const ampm = h < 12 ? "AM" : "PM";
    TIME_OPTIONS.push(`${String(hour).padStart(2, "0")}:${m} ${ampm}`);
  });
}

function to24h(t: string): string {
  // stored as "HH:MM" 24h internally, displayed as 12h
  return t;
}

interface Step4RatesAvailabilityProps {
  data: Step4Data;
  onChange: (updated: Partial<Step4Data>) => void;
}

export default function Step4RatesAvailability({
  data,
  onChange,
}: Step4RatesAvailabilityProps) {
  /* ── Rate helpers ── */
  function handleRate(field: "hourlyRate" | "fixedTaskRate") {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const val = parseInt(e.target.value.replace(/\D/g, ""), 10) || 0;
      onChange({ [field]: val });
    };
  }

  /* ── Availability helpers ── */
  function updateDay(index: number, patch: Partial<DaySchedule>) {
    const next = data.availability.map((d, i) =>
      i === index ? { ...d, ...patch } : d,
    );
    onChange({ availability: next });
  }

  function toggleDay(index: number) {
    updateDay(index, { available: !data.availability[index].available });
  }

  const enabledDays = data.availability.filter((d) => d.available);

  return (
    <div className={styles.stepBody}>
      {/* Left */}
      <div className={styles.stepLeft}>
        <p className={styles.stepMeta}>Step 4 of 5</p>
        <h2 className={styles.stepTitle}>Rates &amp; Availability</h2>
        <p className={styles.stepDesc}>
          Set your rates and when you&apos;re available to help.
        </p>
      </div>

      {/* Right */}
      <div className={styles.stepRight}>
        {/* ── Hourly Rate ── */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor='hourlyRate'>
            Hourly Rate
          </label>
          <div className={styles.rateInputWrapper}>
            <span className={styles.rateCurrency}>₱</span>
            <input
              id='hourlyRate'
              type='text'
              inputMode='numeric'
              value={data.hourlyRate}
              onChange={handleRate("hourlyRate")}
              className={`${styles.input} ${styles.rateInput}`}
              aria-label='Hourly rate in Philippine Peso'
            />
            <span className={styles.rateUnit}>/ hour</span>
          </div>
        </div>

        {/* ── Fixed Task Rate ── */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor='fixedTaskRate'>
            Fixed Task Rate <span className={styles.fieldHint}>(Minimum)</span>
          </label>
          <div className={styles.rateInputWrapper}>
            <span className={styles.rateCurrency}>₱</span>
            <input
              id='fixedTaskRate'
              type='text'
              inputMode='numeric'
              value={data.fixedTaskRate}
              onChange={handleRate("fixedTaskRate")}
              className={`${styles.input} ${styles.rateInput}`}
              aria-label='Fixed task rate in Philippine Peso'
            />
            <span className={styles.rateUnit}>per task</span>
          </div>
        </div>

        {/* ── Weekly Availability ── */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Weekly Availability</label>
          <div className={styles.availabilityList}>
            {data.availability.map((day, i) => (
              <div key={day.day} className={styles.availabilityRow}>
                {/* Checkbox + day name */}
                <label className={styles.availabilityDayLabel}>
                  <input
                    type='checkbox'
                    checked={day.available}
                    onChange={() => toggleDay(i)}
                    className={styles.availabilityCheckbox}
                    aria-label={`Toggle ${day.day}`}
                  />
                  <span
                    className={`${styles.availabilityDay} ${day.available ? styles.availabilityDayActive : ""}`}
                  >
                    {day.day}
                  </span>
                </label>

                {/* Time selectors or "Not Available" */}
                {day.available ? (
                  <div className={styles.timeRow}>
                    <div className={styles.timeSelectWrapper}>
                      <Clock
                        size={11}
                        className={styles.timeIcon}
                        aria-hidden='true'
                      />
                      <select
                        value={day.startTime}
                        onChange={(e) =>
                          updateDay(i, { startTime: e.target.value })
                        }
                        className={styles.timeSelect}
                        aria-label={`${day.day} start time`}
                      >
                        {TIME_OPTIONS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <span className={styles.timeSep}>–</span>
                    <div className={styles.timeSelectWrapper}>
                      <select
                        value={day.endTime}
                        onChange={(e) =>
                          updateDay(i, { endTime: e.target.value })
                        }
                        className={styles.timeSelect}
                        aria-label={`${day.day} end time`}
                      >
                        {TIME_OPTIONS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ) : (
                  <span className={styles.notAvailable}>Not Available</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Summary pill ── */}
        {enabledDays.length > 0 && (
          <div className={styles.availabilitySummary}>
            <span className={styles.availabilitySummaryLabel}>Available:</span>{" "}
            {enabledDays.map((d) => d.day.slice(0, 3)).join(", ")}
            {" · "}
            {enabledDays[0].startTime} – {enabledDays[0].endTime}
          </div>
        )}
      </div>
    </div>
  );
}
