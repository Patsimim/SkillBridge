"use client";
import { useEffect, useRef } from "react";
import { CheckCircle, MessageSquare, CalendarClock, Inbox } from "lucide-react";
import Link from "next/link";
import styles from "./notification.module.css";

export type NotificationType = "request" | "confirmed" | "message" | "reminder";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  time: string;
  read: boolean;
}

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    type: "request",
    title: "New request received",
    description: "John M. requested your help with Math Tutoring Session.",
    time: "2m ago",
    read: false,
  },
  {
    id: "2",
    type: "confirmed",
    title: "Request confirmed",
    description: "Your request for Math Tutoring Session has been confirmed.",
    time: "10m ago",
    read: true,
  },
  {
    id: "3",
    type: "message",
    title: "New message from Alexandra R.",
    description: "Re: Essay Writing Consultation",
    time: "1h ago",
    read: false,
  },
  {
    id: "4",
    type: "reminder",
    title: "Reminder: Upcoming session",
    description: "You have Math Tutoring Session tomorrow at 3:00 PM.",
    time: "1d ago",
    read: false,
  },
];

const iconMap: Record<NotificationType, React.ReactNode> = {
  request: <Inbox size={16} strokeWidth={1.8} />,
  confirmed: <CheckCircle size={16} strokeWidth={1.8} />,
  message: <MessageSquare size={16} strokeWidth={1.8} />,
  reminder: <CalendarClock size={16} strokeWidth={1.8} />,
};

interface Props {
  onClose: () => void;
}

export default function NotificationDropdown({ onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => !n.read).length;

  return (
    <div
      className={styles.dropdown}
      ref={ref}
      role='dialog'
      aria-label='Notifications'
    >
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.title}>Notifications</span>
          {unreadCount > 0 && (
            <span className={styles.headerBadge}>{unreadCount}</span>
          )}
        </div>
        <button className={styles.markAllBtn}>Mark all as read</button>
      </div>

      {/* List */}
      <ul className={styles.list} role='list'>
        {MOCK_NOTIFICATIONS.map((notif) => (
          <li
            key={notif.id}
            className={`${styles.item} ${!notif.read ? styles.itemUnread : ""}`}
          >
            {/* Icon */}
            <span
              className={`${styles.iconWrap} ${styles[`iconWrap--${notif.type}`]}`}
            >
              {iconMap[notif.type]}
            </span>

            {/* Content */}
            <div className={styles.content}>
              <p className={styles.notifTitle}>{notif.title}</p>
              <p className={styles.notifDesc}>{notif.description}</p>
              <span className={styles.time}>{notif.time}</span>
            </div>

            {/* Unread dot */}
            {!notif.read && <span className={styles.dot} aria-label='Unread' />}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className={styles.footer}>
        <Link
          href='/notifications'
          className={styles.viewAll}
          onClick={onClose}
        >
          View all notifications
          <span className={styles.arrow}>→</span>
        </Link>
      </div>
    </div>
  );
}
