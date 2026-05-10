"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./dashboardnav.module.css";
import { Bell, ChevronDown } from "lucide-react";
import NotificationDropdown from "./components/notification";
import ProfileDropdown from "./components/profile";

const navLinks = [
  { label: "Browse Tasks", path: "/browse-task" },
  { label: "My Requests", path: "/my-requests" },
  { label: "Messages", path: "/messages" },
];

export default function DashboardNav() {
  const pathname = usePathname();
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    setNotifOpen(false);
    setProfileOpen(false);
  }, [pathname]);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__inner}>
        {/* Logo */}
        <div className={styles.navbar__logo}>
          <Link href='/' className={styles["navbar__logo-icon"]}>
            <Image
              src='/illustration/logotrial.png'
              alt='SkillBridge PH Logo'
              width={28}
              height={28}
              priority
            />
          </Link>
          <Link href='/' className={styles.navbar__brand}>
            <span className={styles["navbar__brand-skill"]}>SkillBridge</span>
            <span className={styles["navbar__brand-ph"]}>PH</span>
          </Link>
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
          <div className={styles.notifWrapper}>
            <button
              className={styles.notifBtn}
              onClick={() => setNotifOpen((prev) => !prev)}
            >
              <Bell size={18} strokeWidth={1.8} />
              <span className={styles.notifLabel}>Notifications</span>
            </button>

            {notifOpen && (
              <NotificationDropdown onClose={() => setNotifOpen(false)} />
            )}
          </div>

          <div className={styles.profileWrapper}>
            <button
              className={styles.userBtn}
              onClick={() => setProfileOpen((prev) => !prev)}
            >
              <div className={styles.navbar__avatar}>R</div>
              <span className={styles.userName}>Russel</span>
              <ChevronDown size={14} />
            </button>

            {profileOpen && (
              <ProfileDropdown onClose={() => setProfileOpen(false)} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
