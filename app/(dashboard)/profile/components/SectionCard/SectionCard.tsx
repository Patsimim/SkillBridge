import { ReactNode } from "react";
import styles from "./sectioncard.module.css";

interface SectionCardProps {
  title?: string;
  onEdit?: () => void;
  children: ReactNode;
  className?: string;
}

export default function SectionCard({
  title,
  onEdit,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <div className={`${styles.card} ${className}`}>
      {(title || onEdit) && (
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {onEdit && (
            <button type='button' className={styles.editBtn} onClick={onEdit}>
              <svg
                width='13'
                height='13'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' />
                <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' />
              </svg>
              Edit
            </button>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
