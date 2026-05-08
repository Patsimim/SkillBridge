"use client";
import styles from "./marketplace.module.css";

const TASKS = [
  {
    icon: "✍️",
    bg: "#eff6ff",
    category: "Essay Writing",
    title: "College Level Essay",
    desc: "Need a 1500-word essay about digital marketing.",
    price: "₱350",
    time: "2 days",
    loc: "Quezon City",
  },
  {
    icon: "📐",
    bg: "#f0fdf4",
    category: "Math Tutoring",
    title: "Calculus I",
    desc: "Pa-help sa derivatives at integrals, 1-on-1 session.",
    price: "₱250/hr",
    time: "Tomorrow",
    loc: "Cebu City",
  },
  {
    icon: "🎨",
    bg: "#fdf4ff",
    category: "Canva Presentation",
    title: "Pitch Deck",
    desc: "Gawa ng 12-slide pitch deck for our school project.",
    price: "₱300",
    time: "3 days",
    loc: "Davao City",
  },
  {
    icon: "💾",
    bg: "#fff7ed",
    category: "Data Encoding",
    title: "Excel Task",
    desc: "Encode 100 rows of data with formatting.",
    price: "₱200",
    time: "Tomorrow",
    loc: "Makati City",
  },
  {
    icon: "🔬",
    bg: "#f0fdf4",
    category: "Lab Report",
    title: "Science Subject",
    desc: "Need help with analysis and conclusion part.",
    price: "₱250",
    time: "4 days",
    loc: "Manila",
  },
  {
    icon: "💻",
    bg: "#eff6ff",
    category: "IT Help",
    title: "Software Troubleshooting",
    desc: "My laptop crashes when running Python scripts.",
    price: "₱180",
    time: "ASAP",
    loc: "Online",
  },
];

export default function MarketplaceSection() {
  return (
    <section>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Live in the Marketplace</h2>
        <button className={styles.seeAll}>View all requests →</button>
      </div>
      <div className={styles.grid}>
        {TASKS.map((t) => (
          <div key={t.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrap} style={{ background: t.bg }}>
                {t.icon}
              </div>
              <div className={styles.cardCategory}>{t.category}</div>
              <span className={styles.badgeOpen}>Open</span>
            </div>
            <div className={styles.taskTitle}>{t.title}</div>
            <div className={styles.taskDesc}>{t.desc}</div>
            <div className={styles.taskPrice}>{t.price}</div>
            <div className={styles.taskMeta}>
              <span>🕐 Due in {t.time}</span>
              <span>📍 {t.loc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
