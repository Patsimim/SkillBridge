import styles from "./taskcard.module.css";

//  Types
export interface Task {
  id: string;
  title: string;
  status: "Open" | "Closed" | "In Progress";
  description: string;
  tags: string[];
  startPrice: number;
  priceUnit?: string; // e.g. "/ hr" or undefined for flat rate
  delivery: string;
  provider: {
    name: string;
    avatar: string;
    rating: number;
    reviews: number;
  };
  icon: string;
  iconBg: string;
}

interface Props {
  task: Task;
  viewMode?: "list" | "grid";
  onClick?: (task: Task) => void;
}

//  StarRating (could also be its own file)
function StarRating({ value, count }: { value: number; count: number }) {
  return (
    <div className={styles.rating}>
      <span className={styles.star}>★</span>
      <span className={styles.ratingValue}>{value.toFixed(1)}</span>
      <span className={styles.ratingCount}>({count})</span>
    </div>
  );
}

//  TaskCard
export default function TaskCard({ task, viewMode = "list", onClick }: Props) {
  const isGrid = viewMode === "grid";

  return (
    <div
      className={`${styles.card} ${isGrid ? styles.cardGrid : styles.cardList}`}
      onClick={() => onClick?.(task)}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Icon */}
      <div className={styles.icon} style={{ background: task.iconBg }}>
        {task.icon}
      </div>

      {/* Main info */}
      <div className={styles.info}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{task.title}</h3>
          <span
            className={`${styles.statusBadge} ${styles[`status${task.status.replace(" ", "")}`]}`}
          >
            {task.status}
          </span>
        </div>
        <p className={styles.description}>{task.description}</p>
        <div className={styles.tags}>
          {task.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className={styles.meta}>
        <div className={styles.metaGroup}>
          <span className={styles.metaLabel}>Starts at</span>
          <span className={styles.price}>
            ₱{task.startPrice.toLocaleString()}
            {task.priceUnit && (
              <span className={styles.priceUnit}>{task.priceUnit}</span>
            )}
          </span>
        </div>
        <div className={styles.metaGroup}>
          <span className={styles.metaLabel}>Delivery</span>
          <span className={styles.deliveryValue}>{task.delivery}</span>
        </div>
      </div>

      {/* Provider */}
      <div className={styles.provider}>
        <img
          src={task.provider.avatar}
          alt={task.provider.name}
          className={styles.avatar}
        />
        <div className={styles.providerInfo}>
          <span className={styles.providerName}>{task.provider.name}</span>
          <StarRating
            value={task.provider.rating}
            count={task.provider.reviews}
          />
        </div>
      </div>

      {/* Chevron */}
      {!isGrid && <span className={styles.chevron}>›</span>}
    </div>
  );
}
