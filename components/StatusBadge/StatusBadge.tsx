import styles from "./statusbadge.module.css";

export type RequestStatus = "confirmed" | "pending" | "completed" | "cancelled";

interface StatusBadgeProps {
  status: RequestStatus;
}

const STATUS_LABELS: Record<RequestStatus, string> = {
  confirmed: "Confirmed",
  pending: "Pending",
  completed: "Completed",
  cancelled: "Cancelled",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[status]}`}>
      {STATUS_LABELS[status]}
    </span>
  );
}
