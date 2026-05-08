"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./dashboardnav.module.css";
import { MessageSquare, FileText, ChevronDown } from "lucide-react";

export default function DashboardNav() {
  const [active, setActive] = useState("Browse Tasks");
  const navLinks = ["Browse Tasks", "My Requests", "Messages"];

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

        {/* Nav Links */}
        <nav className={styles.navbar__nav}>
          {navLinks.map((link) => (
            <button
              key={link}
              className={`${styles["navbar__nav-btn"]} ${
                active === link ? styles["navbar__nav-btn--active"] : ""
              }`}
              onClick={() => setActive(link)}
            >
              {link}
              {link === "Messages" && <span className={styles.badge}>3</span>}
            </button>
          ))}
        </nav>

        {/* User */}
        <div className={styles.navbar__user}>
          <button className={styles["navbar__user-btn"]}>
            Russel
            <ChevronDown size={14} />
          </button>
          <div className={styles.navbar__avatar}>R</div>
        </div>
      </div>
    </header>
  );
}
