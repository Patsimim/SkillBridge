import type { User } from "../../types/messages.types";
import styles from "./avatar.module.css";

interface AvatarProps {
  user: User;
  size?: "sm" | "md" | "lg";
  showOnline?: boolean;
}

export default function Avatar({
  user,
  size = "md",
  showOnline = false,
}: AvatarProps) {
  const isEmoji = user.avatar.length <= 2 && !/[a-zA-Z]{3}/.test(user.avatar);

  return (
    <div className={`${styles.avatar} ${styles[`avatar--${size}`]}`}>
      {isEmoji ? (
        <span className={styles.avatarEmoji}>{user.avatar}</span>
      ) : (
        <span className={styles.avatarInitials}>{user.avatar}</span>
      )}
      {showOnline && (
        <span
          className={`${styles.onlineDot} ${
            user.isOnline
              ? styles["onlineDot--online"]
              : styles["onlineDot--offline"]
          }`}
        />
      )}
    </div>
  );
}
