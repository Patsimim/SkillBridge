import { ArrowRight, MapPin } from "lucide-react";
import styles from "./category.module.css";

type Helper = {
  id: number;
  title: string;
  price: number;
  name: string;
  location: string;
  online: boolean;
  initials: string;
  avatarGradient: [string, string];
};

const HELPERS: Helper[] = [
  {
    id: 1,
    title: "Fix My Thesis Formatting",
    price: 300,
    name: "Aling Tess",
    location: "Pasig",
    online: false,
    initials: "AT",
    avatarGradient: ["#E8A87C", "#D4845A"],
  },
  {
    id: 2,
    title: "Upload Products to Shopee",
    price: 400,
    name: "Bryan",
    location: "Online Now",
    online: true,
    initials: "BR",
    avatarGradient: ["#7CB9E8", "#4A9BD4"],
  },
  {
    id: 3,
    title: "Tuturo Mag Zoom",
    price: 250,
    name: "Mark",
    location: "Mandaluyong",
    online: false,
    initials: "MK",
    avatarGradient: ["#90C97C", "#5DAE47"],
  },
];

const STATS = [
  { value: "2,400+", label: "Active Helpers" },
  { value: "₱250", label: "Avg. Price" },
  { value: "98%", label: "Satisfied" },
];

export default function HelpersPanel() {
  return (
    <div className={styles.helpers}>
      {/* Header */}
      <div className={styles.helpers__header}>
        <h2 className={styles.helpers__title}>Tulong Para Sa'Yo!</h2>
        <button className={styles["helpers__see-more"]}>
          See More <ArrowRight size={14} />
        </button>
      </div>

      {/* Helper list */}
      <div className={styles.helpers__list}>
        {HELPERS.map((h) => (
          <div key={h.id} className={styles["helper-card"]}>
            {/* Avatar */}
            <div
              className={styles["helper-card__avatar"]}
              style={{
                background: `linear-gradient(135deg, ${h.avatarGradient[0]}, ${h.avatarGradient[1]})`,
              }}
            >
              {h.initials}
            </div>

            {/* Info */}
            <div className={styles["helper-card__info"]}>
              <p className={styles["helper-card__title"]}>{h.title}</p>
              <div className={styles["helper-card__meta"]}>
                <span className={styles["helper-card__name"]}>{h.name}</span>
                <span className={styles["helper-card__dot"]}>•</span>
                <span
                  className={`${styles["helper-card__location"]} ${
                    h.online ? styles["helper-card__location--online"] : ""
                  }`}
                >
                  {h.online ? (
                    <span className={styles["helper-card__online-dot"]} />
                  ) : (
                    <MapPin size={10} />
                  )}
                  {h.location}
                </span>
              </div>
            </div>

            {/* Price + Chat */}
            <div className={styles["helper-card__actions"]}>
              <span className={styles["helper-card__price"]}>₱{h.price}</span>
              <button className={styles["helper-card__chat-btn"]}>Chat</button>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      {/* <div className={styles.helpers__stats}>
        {STATS.map((s) => (
          <div key={s.label}>
            <p className={styles["helpers__stat-value"]}>{s.value}</p>
            <p className={styles["helpers__stat-label"]}>{s.label}</p>
          </div>
        ))}
      </div> */}

      {/* CTA Banner */}
      {/* <div className={styles["helpers__cta-banner"]}>
        <div className={styles["helpers__cta-text"]}>
          <strong>Maging Helper Ka Rin!</strong>
          <span>Kumita habang nagtutulungan tayo 🤝</span>
        </div>
        <button className={styles["helpers__cta-signup"]}>Mag-Sign Up</button>
      </div> */}
    </div>
  );
}
