import styles from "./footer.module.css";
import Image from "next/image";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  return (
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
  );
}
