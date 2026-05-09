"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./dashboardnav.module.css";
import { Bell, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Browse Tasks", path: "/browse-task" },
  { label: "My Requests", path: "/my-requests" },
  { label: "Messages", path: "/messages" },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__inner}>
        {/* Logo */}
        <div className={styles.navbar__logo}>
          <div className={styles["navbar__logo-icon"]}>
            <Image
              src='/illustration/logotrial.png'
              alt='SkillBridge PH Logo'
              width={28}
              height={28}
              priority
            />
          </div>
          <span className={styles.navbar__brand}>
            <span className={styles["navbar__brand-skill"]}>SkillBridge</span>
            <span className={styles["navbar__brand-ph"]}>PH</span>
          </span>
        </div>

        {/* Nav Links */}
        <nav className={styles.navbar__nav}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className={`${styles["navbar__nav-btn"]} ${
                pathname === link.path ? styles["navbar__nav-btn--active"] : ""
              }`}
            >
              {link.label}
              {link.label === "Messages" && (
                <span className={styles.badge}>3</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className={styles.navbar__user}>
          <button className={styles.notifBtn}>
            <Bell size={18} strokeWidth={1.8} />
            <span className={styles.notifLabel}>Notifications</span>
          </button>
          <button className={styles.userBtn}>
            <div className={styles.navbar__avatar}>R</div>
            <span className={styles.userName}>Russel</span>
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}
