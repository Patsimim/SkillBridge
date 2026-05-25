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
      {/* Avatar */}
      <div className={styles.convItem__avatar}>
        <Avatar user={conversation.user} size='md' showOnline />
      </div>

      {/* Body */}
      <div className={styles.convItem__body}>
        <span className={styles.convItem__name}>{conversation.user.name}</span>
        <span className={styles.convItem__subject}>{conversation.subject}</span>
        <p className={styles.convItem__preview}>{conversation.lastMessage}</p>
      </div>

      {/* Right column: time + unread badge stacked */}
      <div className={styles.convItem__right}>
        <span className={styles.convItem__time}>{conversation.timestamp}</span>
        {conversation.unreadCount ? (
          <span className={styles.convItem__badge}>
            {conversation.unreadCount}
          </span>
        ) : null}
      </div>
    </button>
  );
}
