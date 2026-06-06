"use client";

import React, { useState } from "react";
import styles from "./post-task.module.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TaskFormData {
  title: string;
  category: string;
  description: string;
  budgetRange: string;
  scheduleDate: string;
  scheduleTime: string;
  location: "online" | "in-person";
  attachments: File[];
}

// ─── Sub-components (can be extracted to separate files) ──────────────────────

/** Reusable icon wrapper used in the step icons on the left column */
const StepIcon: React.FC<{
  color: string;
  children: React.ReactNode;
}> = ({ color, children }) => (
  <div className={styles.stepIcon} style={{ background: color }}>
    {children}
  </div>
);

/** Live preview card on the right */
const TaskPreview: React.FC<{ data: TaskFormData }> = ({ data }) => (
  <aside className={styles.preview}>
    <div className={styles.previewHeader}>
      <div>
        <h3 className={styles.previewTitle}>Task Preview</h3>
        <p className={styles.previewSubtitle}>
          Here&apos;s how your task will appear to helpers.
        </p>
      </div>
      <div className={styles.previewIllustration}>
        {/* Simple inline SVG illustration */}
        <svg
          viewBox='0 0 120 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect x='10' y='20' width='70' height='50' rx='6' fill='#EEF2FF' />
          <rect x='18' y='30' width='40' height='5' rx='2' fill='#C7D2FE' />
          <rect x='18' y='39' width='54' height='4' rx='2' fill='#E0E7FF' />
          <rect x='18' y='47' width='46' height='4' rx='2' fill='#E0E7FF' />
          <circle cx='88' cy='28' r='14' fill='#FEF3C7' />
          <text x='84' y='33' fontSize='14'>
            😊
          </text>
          <circle cx='106' cy='18' r='8' fill='#DBEAFE' />
          <text x='102' y='22' fontSize='10'>
            💬
          </text>
        </svg>
      </div>
    </div>

    <div className={styles.previewBody}>
      <PreviewRow
        icon={
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' />
            <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' />
          </svg>
        }
        label='Title'
        value={data.title || "—"}
      />
      <PreviewRow
        icon={
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path d='M4 19.5A2.5 2.5 0 0 1 6.5 17H20' />
            <path d='M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z' />
          </svg>
        }
        label='Category'
        value={data.category || "—"}
      />
      <PreviewRow
        icon={
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <line x1='12' y1='1' x2='12' y2='23' />
            <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
          </svg>
        }
        label='Budget'
        value={data.budgetRange || "—"}
      />
      <PreviewRow
        icon={
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <rect x='3' y='4' width='18' height='18' rx='2' ry='2' />
            <line x1='16' y1='2' x2='16' y2='6' />
            <line x1='8' y1='2' x2='8' y2='6' />
            <line x1='3' y1='10' x2='21' y2='10' />
          </svg>
        }
        label='Schedule'
        value={
          data.scheduleDate && data.scheduleTime
            ? `${data.scheduleDate} at ${data.scheduleTime}`
            : data.scheduleDate || "—"
        }
      />
      <PreviewRow
        icon={
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
            <circle cx='12' cy='10' r='3' />
          </svg>
        }
        label='Location'
        value={data.location === "online" ? "Online" : "In-person"}
      />
      {data.description && (
        <PreviewRow
          icon={
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path d='M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48' />
            </svg>
          }
          label='Description'
          value={data.description}
        />
      )}
    </div>

    <div className={styles.previewNotice}>
      <svg
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
      >
        <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
      </svg>
      <span>Your task will be visible to verified helpers once posted.</span>
    </div>
  </aside>
);

const PreviewRow: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
}> = ({ icon, label, value }) => (
  <div className={styles.previewRow}>
    <span className={styles.previewRowIcon}>{icon}</span>
    <div>
      <p className={styles.previewRowLabel}>{label}</p>
      <p className={styles.previewRowValue}>{value}</p>
    </div>
  </div>
);

// ─── Constants ─────────────────────────────────────────────────────────────────

const CATEGORIES = [
  "Education & Tutoring",
  "Home Services",
  "Tech Support",
  "Graphic Design",
  "Writing & Editing",
  "Photography",
  "Delivery & Errands",
  "Events & Entertainment",
  "Health & Wellness",
  "Legal & Financial",
  "Other",
];

const BUDGET_RANGES = [
  "₱100 - ₱300",
  "₱300 - ₱500",
  "₱500 - ₱1,000",
  "₱1,000 - ₱2,000",
  "₱2,000 - ₱5,000",
  "₱5,000+",
];

// ─── Main Page ─────────────────────────────────────────────────────────────────

const PostTaskPage: React.FC = () => {
  const [form, setForm] = useState<TaskFormData>({
    title: "Need help with my Calculus assignment",
    category: "Education & Tutoring",
    description:
      "I need help understanding integration techniques and solving practice problems for my upcoming Calculus exam. Please explain step by step.",
    budgetRange: "₱500 - ₱1,000",
    scheduleDate: "May 15, 2025",
    scheduleTime: "3:00 PM",
    location: "online",
    attachments: [],
  });

  const [dragOver, setDragOver] = useState(false);

  const update = (field: keyof TaskFormData, value: unknown) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      update("attachments", [
        ...form.attachments,
        ...Array.from(e.target.files),
      ]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    update("attachments", [...form.attachments, ...files]);
  };

  const titleLength = form.title.length;
  const descLength = form.description.length;

  return (
    <div className={styles.pageWrapper}>
      {/* ── Top Nav ── */}
      <nav className={styles.navbar}>
        <div className={styles.navBrand}>
          <span className={styles.navLogo}>S</span>
          <span className={styles.navBrandName}>
            <span className={styles.navBrandSkill}>Skill</span>
            <span className={styles.navBrandBridge}>BridgePH</span>
          </span>
        </div>
        <div className={styles.navLinks}>
          <a href='#' className={styles.navLink}>
            Browse Tasks
          </a>
          <a href='#' className={styles.navLink}>
            My Requests
          </a>
          <a href='#' className={styles.navLinkBadge}>
            Messages
            <span className={styles.badge}>3</span>
          </a>
        </div>
        <div className={styles.navRight}>
          <button className={styles.navNotif} aria-label='Notifications'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9' />
              <path d='M13.73 21a2 2 0 0 1-3.46 0' />
            </svg>
            Notifications
          </button>
          <div className={styles.navAvatar}>R</div>
          <span className={styles.navUsername}>Russel</span>
          <svg
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <polyline points='6 9 12 15 18 9' />
          </svg>
        </div>
      </nav>

      {/* ── Page Content ── */}
      <main className={styles.main}>
        {/* Back link */}
        <a href='#' className={styles.backLink}>
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <line x1='19' y1='12' x2='5' y2='12' />
            <polyline points='12 19 5 12 12 5' />
          </svg>
          Back to Dashboard
        </a>

        <h1 className={styles.pageTitle}>Post a New Task</h1>
        <p className={styles.pageSubtitle}>
          Fill out the details below to get help from experts.
        </p>

        <div className={styles.layout}>
          {/* ── Left: Form ── */}
          <div className={styles.formCard}>
            {/* Task Title */}
            <div className={styles.fieldGroup}>
              <StepIcon color='#EFF6FF'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#3B82F6'
                  strokeWidth='2'
                >
                  <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' />
                  <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' />
                </svg>
              </StepIcon>
              <div className={styles.fieldContent}>
                <label className={styles.label}>
                  Task Title <span className={styles.required}>*</span>
                </label>
                <p className={styles.hint}>
                  Summarize what you need help with in a short title.
                </p>
                <div className={styles.inputWrapper}>
                  <input
                    type='text'
                    className={styles.input}
                    value={form.title}
                    maxLength={100}
                    onChange={(e) => update("title", e.target.value)}
                    placeholder='e.g. Need help with my Calculus assignment'
                  />
                  <span className={styles.charCount}>{titleLength}/100</span>
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            {/* Category */}
            <div className={styles.fieldGroup}>
              <StepIcon color='#F0FDF4'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#22C55E'
                  strokeWidth='2'
                >
                  <path d='M4 19.5A2.5 2.5 0 0 1 6.5 17H20' />
                  <path d='M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z' />
                </svg>
              </StepIcon>
              <div className={styles.fieldContent}>
                <label className={styles.label}>
                  Category <span className={styles.required}>*</span>
                </label>
                <p className={styles.hint}>
                  Choose the category that best fits your task.
                </p>
                <div className={styles.selectWrapper}>
                  <select
                    className={styles.select}
                    value={form.category}
                    onChange={(e) => update("category", e.target.value)}
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <span className={styles.selectArrow}>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <polyline points='6 9 12 15 18 9' />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            {/* Task Description */}
            <div className={styles.fieldGroup}>
              <StepIcon color='#FFFBEB'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#F59E0B'
                  strokeWidth='2'
                >
                  <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
                  <polyline points='14 2 14 8 20 8' />
                  <line x1='16' y1='13' x2='8' y2='13' />
                  <line x1='16' y1='17' x2='8' y2='17' />
                  <polyline points='10 9 9 9 8 9' />
                </svg>
              </StepIcon>
              <div className={styles.fieldContent}>
                <label className={styles.label}>
                  Task Description <span className={styles.required}>*</span>
                </label>
                <p className={styles.hint}>
                  Provide more details so helpers can understand how to assist
                  you.
                </p>
                <div className={styles.textareaWrapper}>
                  <textarea
                    className={styles.textarea}
                    value={form.description}
                    maxLength={1000}
                    rows={4}
                    onChange={(e) => update("description", e.target.value)}
                    placeholder='Describe your task in detail...'
                  />
                  <span className={styles.charCount}>{descLength}/1000</span>
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            {/* Budget + Schedule */}
            <div className={styles.fieldGroup}>
              <StepIcon color='#FDF4FF'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#A855F7'
                  strokeWidth='2'
                >
                  <line x1='12' y1='1' x2='12' y2='23' />
                  <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                </svg>
              </StepIcon>
              <div className={styles.fieldContent}>
                <div className={styles.twoCol}>
                  <div>
                    <label className={styles.label}>
                      Budget (PHP) <span className={styles.required}>*</span>
                    </label>
                    <p className={styles.hint}>Set your budget range.</p>
                    <div className={styles.selectWrapper}>
                      <select
                        className={styles.select}
                        value={form.budgetRange}
                        onChange={(e) => update("budgetRange", e.target.value)}
                      >
                        {BUDGET_RANGES.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                      <span className={styles.selectArrow}>
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                        >
                          <polyline points='6 9 12 15 18 9' />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className={styles.label}>Schedule (Optional)</label>
                    <p className={styles.hint}>When do you need help?</p>
                    <div className={styles.scheduleInputs}>
                      <div className={styles.inputIconWrapper}>
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='#6B7280'
                          strokeWidth='2'
                        >
                          <rect
                            x='3'
                            y='4'
                            width='18'
                            height='18'
                            rx='2'
                            ry='2'
                          />
                          <line x1='16' y1='2' x2='16' y2='6' />
                          <line x1='8' y1='2' x2='8' y2='6' />
                          <line x1='3' y1='10' x2='21' y2='10' />
                        </svg>
                        <input
                          type='text'
                          className={`${styles.input} ${styles.inputWithIcon}`}
                          value={form.scheduleDate}
                          onChange={(e) =>
                            update("scheduleDate", e.target.value)
                          }
                          placeholder='May 15, 2025'
                        />
                      </div>
                      <div className={styles.inputIconWrapper}>
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='#6B7280'
                          strokeWidth='2'
                        >
                          <circle cx='12' cy='12' r='10' />
                          <polyline points='12 6 12 12 16 14' />
                        </svg>
                        <input
                          type='text'
                          className={`${styles.input} ${styles.inputWithIcon}`}
                          value={form.scheduleTime}
                          onChange={(e) =>
                            update("scheduleTime", e.target.value)
                          }
                          placeholder='3:00 PM'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            {/* Location + Attachments */}
            <div className={styles.fieldGroup}>
              <StepIcon color='#FFF1F2'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#F43F5E'
                  strokeWidth='2'
                >
                  <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
                  <circle cx='12' cy='10' r='3' />
                </svg>
              </StepIcon>
              <div className={styles.fieldContent}>
                <div className={styles.twoCol}>
                  <div>
                    <label className={styles.label}>
                      Location <span className={styles.required}>*</span>
                    </label>
                    <p className={styles.hint}>
                      Choose how you want to connect.
                    </p>
                    <div className={styles.radioGroup}>
                      <label className={styles.radioLabel}>
                        <input
                          type='radio'
                          name='location'
                          value='online'
                          checked={form.location === "online"}
                          onChange={() => update("location", "online")}
                          className={styles.radioInput}
                        />
                        <span
                          className={`${styles.radioCustom} ${form.location === "online" ? styles.radioChecked : ""}`}
                        />
                        Online
                      </label>
                      <label className={styles.radioLabel}>
                        <input
                          type='radio'
                          name='location'
                          value='in-person'
                          checked={form.location === "in-person"}
                          onChange={() => update("location", "in-person")}
                          className={styles.radioInput}
                        />
                        <span
                          className={`${styles.radioCustom} ${form.location === "in-person" ? styles.radioChecked : ""}`}
                        />
                        In-person
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className={styles.label}>
                      Attachments{" "}
                      <span className={styles.optional}>(Optional)</span>
                    </label>
                    <p className={styles.hint}>
                      Add files or screenshots for better understanding.
                    </p>
                    <div
                      className={`${styles.dropzone} ${dragOver ? styles.dropzoneDragOver : ""}`}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragOver(true);
                      }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                    >
                      <label className={styles.uploadBtn}>
                        <input
                          type='file'
                          multiple
                          hidden
                          onChange={handleFileChange}
                        />
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                        >
                          <path d='M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48' />
                        </svg>
                        Upload files
                      </label>
                      <span className={styles.dropzoneHint}>
                        Max 5MB per file
                      </span>
                    </div>
                    {form.attachments.length > 0 && (
                      <ul className={styles.fileList}>
                        {form.attachments.map((f, i) => (
                          <li key={i} className={styles.fileItem}>
                            <svg
                              width='14'
                              height='14'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='#6B7280'
                              strokeWidth='2'
                            >
                              <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
                              <polyline points='14 2 14 8 20 8' />
                            </svg>
                            {f.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className={styles.formActions}>
              <button className={styles.btnDraft}>Save Draft</button>
              <button className={styles.btnContinue}>Continue</button>
            </div>
          </div>

          {/* ── Right: Preview ── */}
          <TaskPreview data={form} />
        </div>
      </main>
    </div>
  );
};

export default PostTaskPage;
