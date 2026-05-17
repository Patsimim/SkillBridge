// components/ui/MessageBubble.tsx

import type { Message } from "../../types/messages.types";
import styles from "./messagebubble.module.css";

interface MessageBubbleProps {
  message: Message;
  isSelf: boolean;
}

export default function MessageBubble({ message, isSelf }: MessageBubbleProps) {
  return (
    <div
      className={`${styles.bubble} ${
        isSelf ? styles["bubble--self"] : styles["bubble--other"]
      }`}
    >
      <p className={styles.bubble__text}>{message.content}</p>
      <div className={styles.bubble__meta}>
        <span className={styles.bubble__time}>{message.timestamp}</span>
        {isSelf && message.isRead && (
          <span className={styles.bubble__read} title='Read'>
            ✓✓
          </span>
        )}
      </div>
    </div>
  );
}
