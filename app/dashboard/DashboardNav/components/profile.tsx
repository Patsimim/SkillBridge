"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  User,
  Wallet,
  Bookmark,
  Settings,
  HelpCircle,
  Sparkles,
  LogOut,
} from "lucide-react";
import styles from "./profile.module.css";

interface ProfileDropdownProps {
  onClose: () => void;
  user?: {
    name: string;
    email: string;
    role: string;
    avatarUrl?: string;
  };
}

const menuItems = [
  { label: "My Profile", icon: User, path: "/profile" },
  { label: "Notifications", icon: User, path: "/notifications" },
  { label: "My Earnings", icon: Wallet, path: "/earnings" },
  { label: "Saved Helpers", icon: Bookmark, path: "/saved" },
  { label: "Settings", icon: Settings, path: "/settings" },
  { label: "Help Center", icon: HelpCircle, path: "/help" },
  { label: "Become a Helper", icon: Sparkles, path: "/become-helper" },
];

export default function ProfileDropdown({
  onClose,
  user,
}: ProfileDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  const displayUser = user ?? {
    name: "Russel",
    email: "russel@email.com",
    role: "Student",
    avatarUrl: undefined,
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      className={styles.dropdown}
      ref={ref}
      role='dialog'
      aria-label='Profile menu'
    >
      {/* ── User info ── */}
      <div className={styles.profile}>
        <div className={styles.avatar}>
          {displayUser.avatarUrl ? (
            <img
              src={displayUser.avatarUrl}
              alt={displayUser.name}
              className={styles.avatarImg}
            />
          ) : (
            <span className={styles.avatarFallback}>
              {displayUser.name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div className={styles.profileInfo}>
          <span className={styles.profileName}>{displayUser.name}</span>
          <span className={styles.profileEmail}>{displayUser.email}</span>
          <span className={styles.roleBadge}>{displayUser.role}</span>
        </div>
      </div>

      <div className={styles.divider} />

      {/* ── Menu items ── */}
      <nav className={styles.menu}>
        {menuItems.map(({ label, icon: Icon, path }) => (
          <Link
            key={label}
            href={path}
            className={styles.menuItem}
            onClick={onClose}
          >
            <span className={styles.menuIcon}>
              <Icon size={16} strokeWidth={1.8} />
            </span>
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className={styles.divider} />

      {/* ── Log out ── */}
      <div className={styles.footer}>
        <button className={styles.logoutBtn} onClick={onClose}>
          <span className={styles.menuIcon}>
            <LogOut size={16} strokeWidth={1.8} />
          </span>
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}
