"use client";

import { useState } from "react";
import { Search, Plus } from "lucide-react";
import styles from "./hero.module.css";

export default function Hero() {
  const [query, setQuery] = useState("");

  return (
    <section className={styles.hero}>
      <div className={styles.hero__inner}>
        <p className={styles.hero__subtitle}>
          Hanapin ang tamang tulong para sa'yo ✨
        </p>
        <div className={styles["hero__search-row"]}>
          <div className={styles["hero__search-box"]}>
            <Search className={styles["hero__search-icon"]} />
            <input
              type='text'
              className={styles["hero__search-input"]}
              placeholder='Anong kailangan mo?'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button className={styles["hero__post-btn"]}>
            Post Help
            <Plus size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
