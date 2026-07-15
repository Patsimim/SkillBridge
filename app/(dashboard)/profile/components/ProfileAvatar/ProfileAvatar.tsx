import styles from "./profileavatar.module.css";

interface ProfileAvatarProps {
  name: string;
  imageUrl?: string;
  size?: number;
  editable?: boolean;
  onUpload?: () => void;
}

export default function ProfileAvatar({
  name,
  imageUrl,
  size = 96,
  editable = false,
  onUpload,
}: ProfileAvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={styles.wrapper} style={{ width: size, height: size }}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className={styles.image}
          style={{ width: size, height: size }}
        />
      ) : (
        <div
          className={styles.initials}
          style={{ width: size, height: size, fontSize: size * 0.35 }}
        >
          {initials}
        </div>
      )}
      {editable && (
        <button
          type='button'
          className={styles.cameraBtn}
          onClick={onUpload}
          aria-label='Upload profile photo'
        >
          <svg
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z' />
            <circle cx='12' cy='13' r='4' />
          </svg>
        </button>
      )}
    </div>
  );
}
