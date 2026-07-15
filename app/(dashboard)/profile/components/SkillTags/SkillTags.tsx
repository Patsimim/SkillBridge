import styles from "./skilltags.module.css";

interface SkillTagsProps {
  tags: string[];
}

export default function SkillTags({ tags }: SkillTagsProps) {
  return (
    <div className={styles.list}>
      {tags.map((tag) => (
        <span key={tag} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
