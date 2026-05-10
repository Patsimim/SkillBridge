"use client";
import styles from "./tabbar.module.css";

export interface Tab {
  key: string;
  label: string;
  count?: number;
}

interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (key: string) => void;
}

export default function TabBar({ tabs, activeTab, onChange }: TabBarProps) {
  return (
    <div className={styles.tabBar}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`${styles.tab} ${activeTab === tab.key ? styles["tab--active"] : ""}`}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span
              className={`${styles.tab__badge} ${
                activeTab === tab.key ? styles["tab__badge--active"] : ""
              }`}
            >
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
