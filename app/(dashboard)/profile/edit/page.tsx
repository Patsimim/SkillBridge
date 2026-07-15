"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./edit.module.css";
import ProfileAvatar from "../components/ProfileAvatar/ProfileAvatar";
import { mockHelperProfile } from "../profileData";

// ── Icons ─────────────────────────────────────────────────────────────────────
const BackIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='15 18 9 12 15 6' />
  </svg>
);
const UserIcon = () => (
  <svg
    width='15'
    height='15'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
    <circle cx='12' cy='7' r='4' />
  </svg>
);
const AboutIcon = () => (
  <svg
    width='15'
    height='15'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' />
    <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' />
  </svg>
);
const SkillsIcon = () => (
  <svg
    width='15'
    height='15'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='22 12 18 12 15 21 9 3 6 12 2 12' />
  </svg>
);
const RatesIcon = () => (
  <svg
    width='15'
    height='15'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='12' y1='1' x2='12' y2='23' />
    <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
  </svg>
);
const EduIcon = () => (
  <svg
    width='15'
    height='15'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M22 10v6M2 10l10-5 10 5-10 5z' />
    <path d='M6 12v5c3 3 9 3 12 0v-5' />
  </svg>
);
const PortfolioIcon = () => (
  <svg
    width='15'
    height='15'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='2' y='7' width='20' height='14' rx='2' ry='2' />
    <path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' />
  </svg>
);
const CertIcon = () => (
  <svg
    width='15'
    height='15'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
  </svg>
);
const AvailIcon = () => (
  <svg
    width='15'
    height='15'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='10' />
    <polyline points='12 6 12 12 16 14' />
  </svg>
);
const CalIcon = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='3' y='4' width='18' height='18' rx='2' ry='2' />
    <line x1='16' y1='2' x2='16' y2='6' />
    <line x1='8' y1='2' x2='8' y2='6' />
    <line x1='3' y1='10' x2='21' y2='10' />
  </svg>
);
const MapIcon = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
    <circle cx='12' cy='10' r='3' />
  </svg>
);
const XIcon = () => (
  <svg
    width='12'
    height='12'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='18' y1='6' x2='6' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </svg>
);
const PlusIcon = () => (
  <svg
    width='13'
    height='13'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='12' y1='5' x2='12' y2='19' />
    <line x1='5' y1='12' x2='19' y2='12' />
  </svg>
);
const CheckDoneIcon = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#22c55e'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='10' />
    <polyline points='9 12 11 14 15 10' />
  </svg>
);
const CheckTodoIcon = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#d1d5db'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='10' />
  </svg>
);
const ShieldIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
    <polyline points='9 12 11 14 15 10' />
  </svg>
);

// ── Constants ─────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { key: "basic", label: "Basic Information", icon: <UserIcon /> },
  { key: "about", label: "About Me", icon: <AboutIcon /> },
  { key: "skills", label: "Skills & Services", icon: <SkillsIcon /> },
  { key: "rates", label: "Rates & Languages", icon: <RatesIcon /> },
  { key: "education", label: "Education", icon: <EduIcon /> },
  { key: "portfolio", label: "Portfolio", icon: <PortfolioIcon /> },
  { key: "certs", label: "Certificates", icon: <CertIcon /> },
  { key: "avail", label: "Availability", icon: <AvailIcon /> },
];

const ALL_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const ALL_LANGUAGES = ["English", "Filipino", "Cebuano", "Spanish", "Others"];

const HOURS = [
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function EditProfilePage() {
  const router = useRouter();
  const p = mockHelperProfile;

  const [activeSection, setActiveSection] = useState("basic");

  // Form state
  const [fullName, setFullName] = useState(p.name);
  const [email, setEmail] = useState(p.email);
  const [phone, setPhone] = useState(p.phone);
  const [location, setLocation] = useState(p.location);
  const [dob, setDob] = useState(p.dateOfBirth);
  const [role, setRole] = useState<string>(p.role);
  const [bio, setBio] = useState(p.bio);
  const [skills, setSkills] = useState<string[]>(p.skills);
  const [newSkill, setNewSkill] = useState("");
  const [addingSkill, setAddingSkill] = useState(false);

  // Rates & Languages
  const [hourlyRate, setHourlyRate] = useState(String(p.rates.hourly));
  const [languages, setLanguages] = useState<string[]>(
    p.languages.map((l) => l.name),
  );

  // Availability
  const [availStatus, setAvailStatus] = useState(p.availability.status);
  const [fromHour, setFromHour] = useState("9:00 AM");
  const [toHour, setToHour] = useState("6:00 PM");
  const [activeDays, setActiveDays] = useState<string[]>([
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
  ]);

  const toggleDay = (day: string) =>
    setActiveDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );

  const toggleLanguage = (lang: string) =>
    setLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang],
    );

  const removeSkill = (skill: string) =>
    setSkills((prev) => prev.filter((s) => s !== skill));

  const confirmAddSkill = () => {
    const trimmed = newSkill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills((prev) => [...prev, trimmed]);
    }
    setNewSkill("");
    setAddingSkill(false);
  };

  const completionPct = 85;

  const suggestions = [
    { label: "Add a portfolio", done: true },
    { label: "Add a certificate", done: true },
    { label: "Verify your phone number", done: true },
    { label: "Add work experience", done: false },
  ];

  return (
    <div className={styles.shell}>
      {/* ── LEFT SIDEBAR ── */}
      <aside className={styles.sidebar}>
        <button
          type='button'
          className={styles.backBtn}
          onClick={() => router.back()}
        >
          <BackIcon /> Back to Profile
        </button>

        <nav className={styles.sidebarNav}>
          {NAV_ITEMS.map(({ key, label, icon }) => (
            <button
              key={key}
              type='button'
              className={`${styles.sidebarLink} ${activeSection === key ? styles.active : ""}`}
              onClick={() => setActiveSection(key)}
            >
              {icon} {label}
            </button>
          ))}
        </nav>

        {/* Profile Completion */}
        <div className={styles.completionCard}>
          <p className={styles.completionTitle}>Profile Completion</p>
          <p className={styles.completionPct}>{completionPct}% Complete</p>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${completionPct}%` }}
            />
          </div>
          <p className={styles.completionHint}>
            Complete your profile to get more clients and requests.
          </p>
          <p className={styles.suggestionsLabel}>Suggestions:</p>
          <div className={styles.suggestionsList}>
            {suggestions.map(({ label, done }) => (
              <div
                key={label}
                className={`${styles.suggestionItem} ${done ? styles.done : ""}`}
              >
                {done ? <CheckDoneIcon /> : <CheckTodoIcon />}
                {label}
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <main className={styles.main}>
        <div>
          <h1 className={styles.pageTitle}>Edit Profile</h1>
          <p className={styles.pageSubtitle}>
            Update your information to help others know you better.
          </p>
        </div>

        {/* Basic Information */}
        <section className={styles.section} id='basic'>
          <h2 className={styles.sectionTitle}>Basic Information</h2>

          {/* Avatar */}
          <div className={styles.avatarRow}>
            <div>
              <p className={styles.avatarLabel}>Profile Picture</p>
              <ProfileAvatar
                name={fullName}
                imageUrl={p.imageUrl}
                size={80}
                editable
                onUpload={() => {}}
              />
              <p className={styles.avatarHint}>JPG, PNG or GIF. Max 2MB.</p>
            </div>

            <div className={styles.formGrid} style={{ flex: 1 }}>
              <div className={styles.formField}>
                <label className={styles.label}>Full Name</label>
                <input
                  className={styles.input}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder='Your full name'
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>Email Address</label>
                <input
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='your@email.com'
                  type='email'
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>Phone Number</label>
                <input
                  className={styles.input}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='+63 912 345 6789'
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>Location</label>
                <div className={styles.inputWithIcon}>
                  <span className={styles.inputIcon}>
                    <MapIcon />
                  </span>
                  <input
                    className={styles.input}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder='City, Philippines'
                  />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>Date of Birth</label>
                <div className={styles.inputWithIcon}>
                  <span className={styles.inputIcon}>
                    <CalIcon />
                  </span>
                  <input
                    className={styles.input}
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    placeholder='Month DD, YYYY'
                  />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>Role</label>
                <select
                  className={styles.select}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value='Student'>Student</option>
                  <option value='Helper'>Helper</option>
                  <option value='Both'>Both</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className={styles.section} id='about'>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.textareaWrap}>
            <textarea
              className={styles.textarea}
              value={bio}
              onChange={(e) => setBio(e.target.value.slice(0, 1000))}
              placeholder='Tell clients about yourself, your skills, and your experience...'
            />
            <p className={styles.charCount}>{bio.length}/1000</p>
          </div>
        </section>

        {/* Skills & Services */}
        <section className={styles.section} id='skills'>
          <h2 className={styles.sectionTitle}>Skills & Services</h2>
          <p className={styles.sectionHint}>
            Add skills and services you are good at.
          </p>
          <div className={styles.skillsWrap}>
            {skills.map((skill) => (
              <span key={skill} className={styles.skillTag}>
                {skill}
                <button
                  type='button'
                  className={styles.skillRemoveBtn}
                  onClick={() => removeSkill(skill)}
                  aria-label={`Remove ${skill}`}
                >
                  <XIcon />
                </button>
              </span>
            ))}

            {addingSkill ? (
              <input
                autoFocus
                className={styles.input}
                style={{ width: 160 }}
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") confirmAddSkill();
                  if (e.key === "Escape") {
                    setAddingSkill(false);
                    setNewSkill("");
                  }
                }}
                onBlur={confirmAddSkill}
                placeholder='Skill name...'
              />
            ) : (
              <button
                type='button'
                className={styles.addSkillBtn}
                onClick={() => setAddingSkill(true)}
              >
                <PlusIcon /> Add Skill or Service
              </button>
            )}
          </div>
        </section>

        {/* Footer */}
        <div className={styles.footer}>
          <button
            type='button'
            className={styles.cancelBtn}
            onClick={() => router.back()}
          >
            Cancel
          </button>
          <button type='button' className={styles.saveBtn}>
            Save Changes
          </button>
        </div>
      </main>

      {/* ── RIGHT PANEL ── */}
      <aside className={styles.rightPanel}>
        {/* Hourly Rate */}
        <div className={styles.panelSection}>
          <p className={styles.panelTitle}>Hourly Rate</p>
          <p className={styles.panelHint}>Set your hourly rate</p>
          <div className={styles.rateInputWrap}>
            <span className={styles.rateCurrency}>₱</span>
            <input
              className={styles.rateInput}
              type='number'
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              min={0}
            />
            <span className={styles.rateUnit}>/hr</span>
          </div>
        </div>

        <div className={styles.panelDivider} />

        {/* Languages */}
        <div className={styles.panelSection}>
          <p className={styles.panelTitle}>Languages</p>
          <p className={styles.panelHint}>
            Select languages you can communicate in.
          </p>
          <div className={styles.languageList}>
            {ALL_LANGUAGES.map((lang) => (
              <label key={lang} className={styles.checkboxRow}>
                <input
                  type='checkbox'
                  className={styles.checkbox}
                  checked={languages.includes(lang)}
                  onChange={() => toggleLanguage(lang)}
                />
                {lang}
              </label>
            ))}
          </div>
          <button type='button' className={styles.addLangBtn}>
            <PlusIcon /> Add Language
          </button>
        </div>

        <div className={styles.panelDivider} />

        {/* Availability */}
        <div className={styles.panelSection}>
          <p className={styles.panelTitle}>Availability</p>
          <p className={styles.panelHint}>
            Set your availability status and working hours.
          </p>

          <div className={styles.formField}>
            <label className={styles.label}>Status</label>
            <select
              className={styles.select}
              value={availStatus}
              onChange={(e) =>
                setAvailStatus(e.target.value as typeof availStatus)
              }
            >
              <option value='Available'>🟢 Available</option>
              <option value='Busy'>🟠 Busy</option>
              <option value='Away'>⚪ Away</option>
            </select>
          </div>

          <div>
            <p className={styles.label} style={{ marginBottom: 8 }}>
              Working Hours
            </p>
            <div className={styles.workingHoursRow}>
              <div>
                <p className={styles.workingHoursLabel}>From</p>
                <select
                  className={styles.select}
                  value={fromHour}
                  onChange={(e) => setFromHour(e.target.value)}
                >
                  {HOURS.map((h) => (
                    <option key={h}>{h}</option>
                  ))}
                </select>
              </div>
              <div>
                <p className={styles.workingHoursLabel}>To</p>
                <select
                  className={styles.select}
                  value={toHour}
                  onChange={(e) => setToHour(e.target.value)}
                >
                  {HOURS.map((h) => (
                    <option key={h}>{h}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <p className={styles.label} style={{ marginBottom: 8 }}>
              Days
            </p>
            <div className={styles.daysRow}>
              {ALL_DAYS.map((day) => (
                <button
                  key={day}
                  type='button'
                  className={`${styles.dayPill} ${activeDays.includes(day) ? styles.selected : ""}`}
                  onClick={() => toggleDay(day)}
                >
                  {day.slice(0, 3)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.panelDivider} />

        {/* Privacy notice */}
        <div className={styles.privacyNotice}>
          <div className={styles.privacyIcon}>
            <ShieldIcon />
          </div>
          <p className={styles.privacyText}>
            <strong>Your information is safe with us.</strong>
            We'll never share your personal information without your permission.
          </p>
        </div>
      </aside>
    </div>
  );
}
