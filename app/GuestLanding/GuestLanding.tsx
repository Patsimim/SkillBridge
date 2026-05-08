import styles from "./guestlanding.module.css";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import { RequestForm } from "@/components/request/RequestForm";
import HelpersPanel from "@/components/Category/CategoryHelper";
import Image from "next/image";
import Reviews from "@/components/reviews/Reviews";
import HowItWorks from "@/components/howitworks/Howitwork";
import Banner from "@/components/Banner/Banner";
import TrustSection from "@/components/TrustSection/Trustsection";
import { Users, PhilippinePeso, Star, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa6";

/* ─── Browse-by-Category data ─── */
const BROWSE_CATS = [
  {
    label: "Tech Help",
    desc: "Tech issues, software, and troubleshooting",
    img: "/illustration/techHelpF.png",
    bg: "var(--cat-tech-bg)",
  },
  {
    label: "School Work",
    desc: "Thesis, essays, reports, and school tasks",
    img: "/illustration/schoolWorkF.png",
    bg: "var(--cat-school-bg)",
  },
  {
    label: "Business Support",
    desc: "Tasks, admin help, and business needs",
    img: "/illustration/businessF.png",
    bg: "var(--cat-biz-bg)",
  },
  {
    label: "Creative Design",
    desc: "Graphics, logos, videos, and creative projects",
    img: "/illustration/creativeDesignF.png",
    bg: "var(--cat-design-bg)",
  },
  {
    label: "Tutoring",
    desc: "One-on-one tutoring and lessons",
    img: "/illustration/tutoringF.png",
    bg: "var(--cat-tutor-bg)",
  },
  {
    label: "Others",
    desc: "Explore more ways to get help",
    img: "/illustration/othersf.png",
    bg: "var(--cat-other-bg)",
  },
];

/* ─── Stats bar data ─── */
const STATS = [
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    iconBg: "#e0eaff",
    iconColor: "#2171e3",
    value: "2,400+",
    label: "Active Helpers",
    sub: "Handang tumulong sa'yo",
  },
  {
    icon: <PhilippinePeso size={28} strokeWidth={1.5} />,
    iconBg: "#d1fae5",
    iconColor: "#10b981",
    value: "₱250",
    label: "Avg. Price",
    sub: "Sakto sa budget",
  },
  {
    icon: <Star size={28} strokeWidth={1.5} />,
    iconBg: "#fef9c3",
    iconColor: "#f59e0b",
    value: "98%",
    label: "Satisfied Customers",
    sub: "Tiwala ng maraming users",
  },
];

export default function GuestLanding() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Hero />

      <main className={styles.main}>
        {/* ── Browse by Category ── */}
        <section className={styles.browse}>
          <div className={styles.browse__header}>
            <h2 className={styles.browse__title}>Browse by Category</h2>
            <button className={styles.browse__see_all}>
              See all categories <ArrowRight size={14} />
            </button>
          </div>

          <div className={styles.browse__grid}>
            {BROWSE_CATS.map(({ label, desc, img, bg }) => (
              <button
                key={label}
                className={styles.browse__card}
                style={{ background: bg }}
              >
                <div className={styles.browse__card_img_wrap}>
                  <Image
                    src={img}
                    alt={label}
                    width={72}
                    height={72}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span className={styles.browse__card_label}>{label}</span>
                <span className={styles.browse__card_desc}>{desc}</span>
              </button>
            ))}
          </div>
        </section>

        {/* ── Stats bar ── */}
        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stats__item}>
              <div
                className={styles.stats__icon}
                style={{ background: s.iconBg, color: s.iconColor }}
              >
                {s.icon}
              </div>
              <div>
                <p className={styles.stats__value}>{s.value}</p>
                <p className={styles.stats__label}>{s.label}</p>
                <p className={styles.stats__sub}>{s.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Two-column grid ── */}
        <div className={styles.main__grid}>
          {/* Column 1 — helpers panel */}
          <HelpersPanel />

          {/* Column 2 — request form */}
          <RequestForm />
        </div>
      </main>

      <TrustSection />
      <HowItWorks />
      <Banner />
      <Reviews />

      <footer className={styles.footer}>
        <div className={styles.footer__inner}>
          <div className={styles.footer__brand}>
            <div className={styles["footer__logo-icon"]}>
              <Image
                src='/illustration/logotrial.png'
                alt='SkillBridge PH Logo'
                width={42}
                height={42}
                priority
              />
            </div>
            <p className={styles.footer__copy}>
              © 2026 <strong>SkillBridge PH</strong> — Para sa Pilipino, ng
              Pilipino.
            </p>
          </div>

          <div className={styles.footer__social}>
            <span className={styles.footer__social_label}>
              Follow us! We're friendly:
            </span>
            <div className={styles.footer__social_icons}>
              <a href='#' className={styles.footer__social_link}>
                <FaFacebookF size={16} />
              </a>
              <span className={styles.footer__social_divider} />
              <a href='#' className={styles.footer__social_link}>
                <FaXTwitter size={16} />
              </a>
              <span className={styles.footer__social_divider} />
              <a href='#' className={styles.footer__social_link}>
                <FaInstagram size={16} />
              </a>
              <span className={styles.footer__social_divider} />
              <a href='#' className={styles.footer__social_link}>
                <FaTiktok size={16} />
              </a>
              <span className={styles.footer__social_divider} />
              <a href='#' className={styles.footer__social_link}>
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          <div className={styles.footer__links}>
            <a href='#' className={styles.footer__link}>
              Privacy
            </a>
            <a href='#' className={styles.footer__link}>
              Terms
            </a>
            <a href='#' className={styles.footer__link}>
              Help Center
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
