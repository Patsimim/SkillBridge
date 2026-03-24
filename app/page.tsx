import styles from "./page.module.css";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import { RequestForm, CategoriesGrid } from "@/components/request/RequestForm";
import HelpersPanel from "@/components/Category/CategoryHelper";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Hero />

      <main className={styles.main}>
        <div className={styles.main__grid}>
          {/* Left column */}
          <div className={styles.main__left}>
            <RequestForm />
            <CategoriesGrid />
          </div>

          {/* Right column */}
          <HelpersPanel />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer__inner}>
          <div className={styles.footer__brand}>
            <div className={styles["footer__logo-icon"]}>
              <span>S</span>
            </div>
            <p className={styles.footer__copy}>
              © 2026 <strong>SkillBridge PH</strong> — Para sa Pilipino, ng
              Pilipino.
            </p>
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
