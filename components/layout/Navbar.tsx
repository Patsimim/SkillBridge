"use client";

import { MessageSquare, FileText, ChevronDown } from "lucide-react";
import styles from "./navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__inner}>
        {/* Logo */}
        <div className={styles.navbar__logo}>
          <div className={styles["navbar__logo-icon"]}>
            <Image
              src='/illustration/logotrial.png'
              alt='SkillBridge PH Logo'
              width={42}
              height={42}
              priority
            />
          </div>
          <div className={styles.navbar__brand}>
            <span className={styles["navbar__brand-skill"]}>SkillBridge</span>
            <span className={styles["navbar__brand-ph"]}>PH</span>
          </div>
          <span className={styles.navbar__tagline}>Pa-Help, Kaya Yan!</span>
        </div>

        {/* Nav */}
        <nav className={styles.navbar__nav}>
          <button className={styles["navbar__nav-btn"]}>
            <MessageSquare size={16} />
            Messages
            <ChevronDown className={styles["navbar__nav-chevron"]} />
          </button>
          <button className={styles["navbar__nav-btn"]}>
            <FileText size={16} />
            My Requests
            <ChevronDown className={styles["navbar__nav-chevron"]} />
          </button>
        </nav>

        {/* User */}
        <div className={styles.navbar__user}>
          <button className={styles["navbar__user-btn"]}>
            Tess
            <ChevronDown size={14} />
          </button>
          <div className={styles.navbar__avatar}>T</div>
        </div>
      </div>
    </header>
  );
}
