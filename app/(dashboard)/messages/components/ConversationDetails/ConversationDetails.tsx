import type {
  Conversation,
  Request,
  SharedFile,
} from "../../types/messages.types";
import Avatar from "../Avatar/Avatar";
import styles from "./conversationdetails.module.css";

interface ConversationDetailsProps {
  conversation: Conversation;
  request: Request;
  files: SharedFile[];
}

export default function ConversationDetails({
  conversation,
  request,
  files,
}: ConversationDetailsProps) {
  const { user } = conversation;

  const statusClass =
    request.status === "Confirmed"
      ? styles["status--confirmed"]
      : styles["status--pending"];

  return (
    <aside className={styles.detailsPanel}>
      {/* Header */}
      <div className={styles.detailsPanel__header}>
        <span className={styles.detailsPanel__title}>Conversation Details</span>
        <button className={styles.detailsPanel__infoBtn} aria-label='Info'>
          ⓘ
        </button>
      </div>

      {/* Helper Profile */}
      <div className={styles.helperCard}>
        <Avatar user={user} size='lg' showOnline />
        <div className={styles.helperCard__info}>
          <div className={styles.helperCard__nameRow}>
            <span className={styles.helperCard__name}>{user.name}</span>
            {user.isOnline && (
              <span className={styles.onlineLabel}>● Online</span>
            )}
          </div>
          <span className={styles.helperCard__role}>{user.role}</span>
          {user.rating && (
            <span className={styles.helperCard__rating}>
              ★ {user.rating}{" "}
              <span className={styles.helperCard__reviews}>
                ({user.reviewCount} reviews)
              </span>
            </span>
          )}
          {user.memberSince && (
            <span className={styles.helperCard__meta}>
              Member since {user.memberSince}
            </span>
          )}
          {user.responseTime && (
            <span className={styles.helperCard__meta}>
              Typically replies within {user.responseTime}
            </span>
          )}
        </div>
        <button className={styles.helperCard__profileBtn}>View Profile</button>
      </div>

      {/* About This Request */}
      <div className={styles.requestSection}>
        <span className={styles.sectionLabel}>About This Request</span>
        <div className={styles.requestCard}>
          <span className={styles.requestCard__title}>{request.title}</span>
          <div className={styles.requestCard__row}>
            <span className={styles.requestCard__datetime}>
              <span className={styles.requestCard__datetimeIcon}>📅</span>
              {request.date} • {request.time}
            </span>
            <span className={`${styles.statusBadge} ${statusClass}`}>
              {request.status}
            </span>
          </div>
          <button className={styles.requestCard__detailsBtn}>
            View Request Details →
          </button>
        </div>
      </div>

      {/* Shared Files */}
      <div className={styles.filesSection}>
        <span className={styles.sectionLabel}>Shared Files</span>
        {files.map((file) => (
          <div key={file.id} className={styles.fileItem}>
            {/* Styled PDF icon */}
            <div className={styles.fileItem__icon} aria-hidden='true'>
              📄
            </div>
            <div className={styles.fileItem__info}>
              <span className={styles.fileItem__name}>{file.name}</span>
              <span className={styles.fileItem__meta}>
                Uploaded {file.uploadedAt} • {file.size}
              </span>
            </div>
            <button className={styles.fileItem__download} aria-label='Download'>
              ↓
            </button>
          </div>
        ))}
        <button className={styles.uploadBtn}>Upload File</button>
      </div>
    </aside>
  );
}
