import Image from "next/image";
import styles from "./pagehero.module.css";

interface PageHeroProps {
  title: string;
  subtitle: string;
  illustrationSrc: string;
  illustrationAlt?: string;
}

export default function PageHero({
  title,
  subtitle,
  illustrationSrc,
  illustrationAlt = "Page illustration",
}: PageHeroProps) {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__text}>
        <h1 className={styles.hero__title}>{title}</h1>
        <p className={styles.hero__sub}>{subtitle}</p>
      </div>
      <div className={styles.hero__illustration} aria-hidden='true'>
        <Image
          src={illustrationSrc}
          alt={illustrationAlt}
          width={220}
          height={160}
          priority
          className={styles.illustration}
        />
      </div>
    </div>
  );
}
