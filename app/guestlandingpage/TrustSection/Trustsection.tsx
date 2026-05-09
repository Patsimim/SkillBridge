import { ShieldCheck, Lock, MessageCircle, Star } from "lucide-react";
import styles from "./trustsection.module.css";

const TRUST_ITEMS = [
  {
    icon: <ShieldCheck size={26} strokeWidth={1.8} />,
    iconBg: "#dbeafe",
    iconColor: "#2171e3",
    title: "Verified Helpers",
    desc: "All helpers go through identity and skills verification to ensure safe and quality service.",
  },
  {
    icon: <Lock size={26} strokeWidth={1.8} />,
    iconBg: "#d1fae5",
    iconColor: "#059669",
    title: "Secure Payments",
    desc: "Your payments are held in escrow and only released when you're satisfied with the work.",
  },
  {
    icon: <MessageCircle size={26} strokeWidth={1.8} />,
    iconBg: "#ede9fe",
    iconColor: "#7c3aed",
    title: "In-App Messaging",
    desc: "Chat with your helper directly and easily within the platform. No need for third-party apps.",
  },
  {
    icon: <Star size={26} strokeWidth={1.8} />,
    iconBg: "#fef9c3",
    iconColor: "#d97706",
    title: "Ratings & Reviews",
    desc: "Honest feedback from real users to help you choose the best helper for your task.",
  },
];

export default function TrustSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why you can trust SkillBridge PH</h2>
          <p className={styles.sub}>
            Your safety is our priority. We work hard behind the scenes to
            ensure a safe and positive experience for all.
          </p>
        </div>

        <div className={styles.grid}>
          {TRUST_ITEMS.map((item) => (
            <div key={item.title} className={styles.card}>
              <div
                className={styles.iconWrap}
                style={{ background: item.iconBg, color: item.iconColor }}
              >
                {item.icon}
              </div>
              <h3 className={styles.card__title}>{item.title}</h3>
              <p className={styles.card__desc}>{item.desc}</p>
            </div>
          ))}
        </div>

        <p className={styles.safetyNote}>
          <ShieldCheck size={14} />
          Your safety is our priority.{" "}
          <a href='#' className={styles.link}>
            Safety Center
          </a>
        </p>
      </div>
    </section>
  );
}
