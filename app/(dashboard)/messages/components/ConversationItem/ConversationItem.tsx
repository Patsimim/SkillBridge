// components/ui/ConversationItem.tsx

import type { Conversation } from "../../types/messages.types";
import Avatar from "../Avatar/Avatar";
import styles from "./conversationitem.module.css";

interface ConversationItemProps {
  conversation: Conversation;
  isActive: boolean;
  onClick: () => void;
}

export default function ConversationItem({
  conversation,
  isActive,
  onClick,
}: ConversationItemProps) {
  return (
    <button
      className={`${styles.convItem} ${isActive ? styles["convItem--active"] : ""}`}
      onClick={onClick}
    >
      <div className={styles.convItem__avatar}>
        <Avatar user={conversation.user} size='md' showOnline />
      </div>

      <div className={styles.convItem__body}>
        <div className={styles.convItem__header}>
          <span className={styles.convItem__name}>
            {conversation.user.name}
          </span>
          <span className={styles.convItem__time}>
            {conversation.timestamp}
          </span>
        </div>
        <span className={styles.convItem__subject}>{conversation.subject}</span>
        <p className={styles.convItem__preview}>{conversation.lastMessage}</p>
      </div>

      {conversation.unreadCount && (
        <span className={styles.convItem__badge}>
          {conversation.unreadCount}
        </span>
      )}
    </button>
  );
}
