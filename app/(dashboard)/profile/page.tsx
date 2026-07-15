"use client";

import Link from "next/link";
import React from "react";
import styles from "./profile.module.css";
import { mockHelperProfile } from "./profileData";
import ProfileAvatar from "./components/ProfileAvatar/ProfileAvatar";
import SectionCard from "./components/SectionCard/SectionCard";
import SkillTags from "./components/SkillTags/SkillTags";
import type { VerificationItem } from "./profileTypes";

// SVG icons
const MailIcon = () => (
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
    <rect x='2' y='4' width='20' height='16' rx='2' />
    <polyline points='22,4 12,13 2,4' />
  </svg>
);
const MapPinIcon = () => (
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
    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
    <circle cx='12' cy='10' r='3' />
  </svg>
);
const CalendarIcon = () => (
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
    <rect x='3' y='4' width='18' height='18' rx='2' ry='2' />
    <line x1='16' y1='2' x2='16' y2='6' />
    <line x1='8' y1='2' x2='8' y2='6' />
    <line x1='3' y1='10' x2='21' y2='10' />
  </svg>
);
const EditIcon = () => (
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
    <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' />
    <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' />
  </svg>
);
const CheckCircle = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
    <polyline points='22 4 12 15 9 12' />
  </svg>
);
const ClockIcon = () => (
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
    <circle cx='12' cy='12' r='10' />
    <polyline points='12 6 12 12 16 14' />
  </svg>
);
const SunIcon = () => (
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
    <circle cx='12' cy='12' r='5' />
    <line x1='12' y1='1' x2='12' y2='3' />
    <line x1='12' y1='21' x2='12' y2='23' />
    <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
    <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
    <line x1='1' y1='12' x2='3' y2='12' />
    <line x1='21' y1='12' x2='23' y2='12' />
    <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
    <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
  </svg>
);
const ShieldIcon = () => (
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
    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
    <polyline points='9 12 11 14 15 10' />
  </svg>
);
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width='13'
    height='13'
    viewBox='0 0 24 24'
    fill={filled ? "#f59e0b" : "none"}
    stroke={filled ? "#f59e0b" : "#e5e7eb"}
    strokeWidth='2'
  >
    <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
  </svg>
);
const FileIcon = () => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
    <polyline points='14 2 14 8 20 8' />
  </svg>
);
const LockIcon = () => (
  <svg
    width='17'
    height='17'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='3' y='11' width='18' height='11' rx='2' ry='2' />
    <path d='M7 11V7a5 5 0 0 1 10 0v4' />
  </svg>
);
const SettingsIcon = () => (
  <svg
    width='17'
    height='17'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='3' />
    <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z' />
  </svg>
);
const EyeIcon = () => (
  <svg
    width='17'
    height='17'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
    <circle cx='12' cy='12' r='3' />
  </svg>
);
const ClipboardIcon = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' />
    <rect x='8' y='2' width='8' height='4' rx='1' ry='1' />
  </svg>
);
const RepeatIcon = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='17 1 21 5 17 9' />
    <path d='M3 11V9a4 4 0 0 1 4-4h14' />
    <polyline points='7 23 3 19 7 15' />
    <path d='M21 13v2a4 4 0 0 1-4 4H3' />
  </svg>
);
const ZapIcon = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2' />
  </svg>
);

// Helpers
const Stars = ({ rating, max = 5 }: { rating: number; max?: number }) => (
  <div className={styles.reviewStars}>
    {Array.from({ length: max }, (_, i) => (
      <StarIcon key={i} filled={i < rating} />
    ))}
  </div>
);

const verificationLabels: Record<VerificationItem, string> = {
  email: "Email Verified",
  phone: "Phone Verified",
  studentId: "Student ID Verified",
  governmentId: "Government ID Verified",
};

// Page
export default function ProfilePage() {
  const p = mockHelperProfile;
  const statusKey = p.availability.status.toLowerCase() as
    | "available"
    | "busy"
    | "away";

  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>My Profile</h1>
      <p className={styles.pageSubtitle}>
        Manage your personal information and showcase your skills.
      </p>

      {/* Hero */}
      <div className={styles.heroCard}>
        <ProfileAvatar name={p.name} imageUrl={p.imageUrl} size={96} editable />

        <div className={styles.heroInfo}>
          <div className={styles.heroName}>
            <span className={styles.heroNameText}>{p.name}</span>
            <span className={styles.roleBadge}>{p.role}</span>
            {p.isVerified && (
              <span className={styles.verifiedBadge}>
                <CheckCircle /> Verified
              </span>
            )}
          </div>
          <div className={styles.heroMeta}>
            <span className={styles.heroMetaRow}>
              <MailIcon /> {p.email}
            </span>
            <span className={styles.heroMetaRow}>
              <MapPinIcon /> {p.location}
            </span>
            <span className={styles.heroMetaRow}>
              <CalendarIcon /> Member since {p.memberSince}
            </span>
          </div>
        </div>

        <Link href='/profile/edit' className={styles.editProfileBtn}>
          <EditIcon /> Edit Profile
        </Link>
      </div>

      {/* Two-column */}
      <div className={styles.layout}>
        {/* LEFT */}
        <div className={styles.leftCol}>
          {/* About Me + Stats */}
          <SectionCard title='About Me'>
            <p className={styles.bio}>{p.bio}</p>

            {(() => {
              const stats = [
                {
                  icon: <ClipboardIcon />,
                  value: p.stats.completedJobs,
                  label: "Completed Jobs",
                  link: "View history",
                  href: "#",
                  color: "blue",
                },
                {
                  icon: <RepeatIcon />,
                  value: p.stats.repeatClients,
                  label: "Repeat Clients",
                  link: "View details",
                  href: "#",
                  color: "orange",
                },
                {
                  icon: <ZapIcon />,
                  value: `${p.stats.responseRate}%`,
                  label: "Response Rate",
                  link: "View insights",
                  href: "#",
                  color: "green",
                },
                {
                  icon: <StarIcon filled />,
                  value: p.stats.averageRating,
                  label: "Average Rating",
                  link: "See reviews",
                  href: "#",
                  color: "purple",
                  isStar: true,
                },
              ];
              return (
                <div className={styles.statsRow}>
                  {stats.map(
                    ({ icon, value, label, link, href, color, isStar }, i) => (
                      <React.Fragment key={label}>
                        <div className={styles.statItem}>
                          <div
                            className={`${styles.statIconWrap} ${styles[color as "blue" | "orange" | "green" | "purple"]}`}
                          >
                            {icon}
                          </div>
                          <span className={styles.statValue}>
                            {value}
                            {isStar && (
                              <span className={styles.statStar}>★</span>
                            )}
                          </span>
                          <span className={styles.statLabel}>{label}</span>
                          <Link href={href} className={styles.statLink}>
                            {link}
                          </Link>
                        </div>
                        {i < stats.length - 1 && (
                          <div className={styles.statsDivider} />
                        )}
                      </React.Fragment>
                    ),
                  )}
                </div>
              );
            })()}
          </SectionCard>

          {/* Skills & Services */}
          <SectionCard title='Skills & Services'>
            <SkillTags tags={p.skills} />
          </SectionCard>

          {/* Experience */}
          <SectionCard title='Experience' onEdit={() => {}}>
            <div className={styles.experienceList}>
              {p.experience.map((exp, i) => (
                <div key={exp.title} className={styles.experienceItem}>
                  <div className={styles.expDotCol}>
                    <div
                      className={`${styles.expDot} ${exp.current ? "" : styles.past}`}
                    />
                    {i < p.experience.length - 1 && (
                      <div className={styles.expLine} />
                    )}
                  </div>
                  <div className={styles.expContent}>
                    <p className={styles.expTitle}>{exp.title}</p>
                    <p className={styles.expPeriod}>{exp.period}</p>
                    <p className={styles.expDesc}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Portfolio */}
          <SectionCard>
            <div className={styles.portfolioHeader}>
              <h2 className={styles.portfolioTitle}>Portfolio</h2>
              <Link href='#' className={styles.viewAllLink}>
                View All
              </Link>
            </div>
            <div className={styles.portfolioGrid}>
              {p.portfolio.map((item) => (
                <div key={item.id} className={styles.portfolioItem}>
                  <div className={styles.portfolioThumb}>
                    {item.thumbnailUrl ? (
                      <img src={item.thumbnailUrl} alt={item.title} />
                    ) : (
                      <FileIcon />
                    )}
                  </div>
                  <span className={styles.portfolioItemTitle}>
                    {item.title}
                  </span>
                  <span className={styles.portfolioItemType}>{item.type}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Reviews */}
          <SectionCard>
            <div className={styles.reviewsHeader}>
              <h2 className={styles.reviewsTitle}>
                Reviews{" "}
                <span className={styles.reviewCount}>
                  ({p.stats.totalReviews})
                </span>
              </h2>
              <Link href='#' className={styles.viewAllLink}>
                View All
              </Link>
            </div>
            <div className={styles.reviewList}>
              {p.reviews.map((review) => (
                <div key={review.id} className={styles.reviewItem}>
                  <ProfileAvatar
                    name={review.reviewerName}
                    imageUrl={review.reviewerAvatar}
                    size={36}
                  />
                  <div className={styles.reviewContent}>
                    <div className={styles.reviewerRow}>
                      <span className={styles.reviewerName}>
                        {review.reviewerName}
                      </span>
                      <span className={styles.reviewDate}>{review.date}</span>
                    </div>
                    <Stars rating={review.rating} />
                    <p className={styles.reviewComment}>{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Quick Actions */}
          <SectionCard title='Quick Actions'>
            <div className={styles.quickActionsGrid}>
              {[
                {
                  icon: <EditIcon />,
                  title: "Edit Profile",
                  desc: "Update your information",
                  href: "#",
                },
                {
                  icon: <EyeIcon />,
                  title: "View Public Profile",
                  desc: "See how others see you",
                  href: "#",
                },
                {
                  icon: <SettingsIcon />,
                  title: "Account Settings",
                  desc: "Manage your account",
                  href: "/dashboard/settings",
                },
                {
                  icon: <LockIcon />,
                  title: "Change Password",
                  desc: "Update your password",
                  href: "/dashboard/settings/password",
                },
              ].map(({ icon, title, desc, href }) => (
                <Link
                  key={title}
                  href={href}
                  className={styles.quickActionCard}
                >
                  <div className={styles.quickActionIcon}>{icon}</div>
                  <span className={styles.quickActionTitle}>{title}</span>
                  <span className={styles.quickActionDesc}>{desc}</span>
                </Link>
              ))}
            </div>
          </SectionCard>
        </div>

        {/* RIGHT */}
        <div className={styles.rightCol}>
          {/* Availability */}
          <SectionCard title='Availability'>
            <div className={styles.availStatus}>
              <div className={`${styles.availDot} ${styles[statusKey]}`} />
              <span
                className={`${styles.availStatusText} ${styles[statusKey]}`}
              >
                {p.availability.status}
              </span>
            </div>
            <div className={styles.availMeta}>
              <div className={styles.availRow}>
                <ClockIcon />
                <div className={styles.availRowText}>
                  <span className={styles.availRowLabel}>
                    Usually responds within
                  </span>
                  <span className={styles.availRowValue}>
                    {p.availability.responseTime}
                  </span>
                </div>
              </div>
              <div className={styles.availRow}>
                <SunIcon />
                <div className={styles.availRowText}>
                  <span className={styles.availRowLabel}>Working Hours</span>
                  <span className={styles.availRowValue}>
                    {p.availability.workingDays}
                    <br />
                    {p.availability.workingHours}
                  </span>
                </div>
              </div>
            </div>
          </SectionCard>

          {/* Verification */}
          <SectionCard title='Verification'>
            <div className={styles.verificationList}>
              {p.verifications.map((key) => (
                <div key={key} className={styles.verificationRow}>
                  <CheckCircle />
                  {verificationLabels[key]}
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Rates */}
          <SectionCard title='Rates'>
            <p className={styles.ratesSectionLabel}>Hourly Rate</p>
            <div className={styles.hourlyRate}>
              {p.rates.currency}
              {p.rates.hourly.toLocaleString()}
              <span> /hr</span>
            </div>

            <div className={styles.ratesDivider} />

            <p className={styles.ratesSectionLabel}>Languages</p>
            <div className={styles.languageList}>
              {p.languages.map((lang) => (
                <div key={lang.name} className={styles.languageRow}>
                  <span className={styles.languageName}>{lang.name}</span>
                  <div className={styles.languageStars}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <StarIcon key={i} filled={i < lang.rating} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Education */}
          <SectionCard title='Education'>
            <p className={styles.educationInstitution}>
              {p.education.institution}
            </p>
            <p className={styles.educationDegree}>{p.education.degree}</p>
            <p className={styles.educationPeriod}>{p.education.period}</p>
          </SectionCard>

          {/* Certificates */}
          <SectionCard title='Certificates'>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 14,
                marginTop: -4,
              }}
            >
              <span />
              <Link href='#' className={styles.viewAllLink}>
                View All
              </Link>
            </div>
            <div className={styles.certificateList}>
              {p.certificates.map((cert) => (
                <div key={cert.id} className={styles.certificateItem}>
                  <div className={styles.certIconWrap}>
                    <ShieldIcon />
                  </div>
                  <div className={styles.certText}>
                    <span className={styles.certTitle}>{cert.title}</span>
                    <span className={styles.certIssued}>{cert.issuedDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
