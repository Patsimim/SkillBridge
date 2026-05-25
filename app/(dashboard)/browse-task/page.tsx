"use client";

import { useState } from "react";
import styles from "./browsetask.module.css";
import TaskCard, {
  Task,
} from "@/app/(dashboard)/browse-task/components/TaskCard/TaskCard";
import FilterSidebar, {
  FilterState,
} from "@/app/(dashboard)/browse-task/components/FilterSideBar/FilterSideBar";

//  Mock Data
const MOCK_TASKS: Task[] = [
  {
    id: "1",
    title: "Math Tutoring",
    status: "Open",
    description: "Get help with algebra, calculus, statistics, and more.",
    tags: ["Math", "Algebra", "Calculus"],
    startPrice: 250,
    priceUnit: "/ hr",
    delivery: "Within 24 hours",
    provider: {
      name: "John M.",
      avatar: "https://i.pravatar.cc/40?img=11",
      rating: 4.9,
      reviews: 96,
    },
    icon: "➕",
    iconBg: "#7C3AED",
  },
  {
    id: "2",
    title: "Essay Writing",
    status: "Open",
    description: "High-quality essays, research papers, and assignments.",
    tags: ["Writing", "Research", "Academic"],
    startPrice: 350,
    delivery: "Within 3 days",
    provider: {
      name: "Alexandra R.",
      avatar: "https://i.pravatar.cc/40?img=47",
      rating: 4.9,
      reviews: 128,
    },
    icon: "✏️",
    iconBg: "#F97316",
  },
  {
    id: "3",
    title: "Data Encoding",
    status: "Open",
    description: "Accurate encoding of data from documents to spreadsheets.",
    tags: ["Data Entry", "Excel", "Google Sheets"],
    startPrice: 200,
    delivery: "Within 24 hours",
    provider: {
      name: "Michael T.",
      avatar: "https://i.pravatar.cc/40?img=12",
      rating: 4.8,
      reviews: 63,
    },
    icon: "📋",
    iconBg: "#10B981",
  },
  {
    id: "4",
    title: "Canva Design",
    status: "Open",
    description:
      "Create stunning posters, presentations, and social media graphics.",
    tags: ["Canva", "Design", "Presentation"],
    startPrice: 200,
    delivery: "Within 2 days",
    provider: {
      name: "Kristine D.",
      avatar: "https://i.pravatar.cc/40?img=49",
      rating: 4.9,
      reviews: 88,
    },
    icon: "🎨",
    iconBg: "#06B6D4",
  },
  {
    id: "5",
    title: "English-Tagalog Translation",
    status: "Open",
    description: "Accurate and natural translation for any document.",
    tags: ["Translation", "English", "Tagalog"],
    startPrice: 150,
    delivery: "Within 24 hours",
    provider: {
      name: "Patricia L.",
      avatar: "https://i.pravatar.cc/40?img=45",
      rating: 4.9,
      reviews: 74,
    },
    icon: "💬",
    iconBg: "#8B5CF6",
  },
  {
    id: "6",
    title: "PowerPoint Presentation",
    status: "Open",
    description: "Well-designed and professional presentations.",
    tags: ["PowerPoint", "Design", "Presentation"],
    startPrice: 250,
    delivery: "Within 3 days",
    provider: {
      name: "John M.",
      avatar: "https://i.pravatar.cc/40?img=11",
      rating: 4.9,
      reviews: 96,
    },
    icon: "📊",
    iconBg: "#EF4444",
  },
];

const DEFAULT_FILTERS: FilterState = {
  categories: ["All Categories"],
  priceMin: 0,
  priceMax: 5000,
  deliveryTime: ["Anytime"],
  taskLevel: ["Intermediate"],
};

//  BrowseTask Page
export default function BrowseTask() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Recommended");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className={styles.page}>
      {/* ── Page Shell ── */}
      <div className={styles.shell}>
        {/* ── Page Header ── */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Browse Tasks</h1>
          <p className={styles.pageSubtitle}>
            Find the right task and get expert help.
          </p>
        </div>

        {/* ── Search Row ── */}
        <div className={styles.searchRow}>
          <div className={styles.searchInputWrapper}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type='text'
              className={styles.searchInput}
              placeholder='Search tasks (e.g. Math tutor, Essay writing, Data encoding...)'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select className={styles.select}>
            <option>All Categories</option>
            <option>Academic Help</option>
            <option>Writing & Editing</option>
            <option>Data & Tech</option>
            <option>Design & Multimedia</option>
            <option>Business Support</option>
          </select>
          <div className={styles.sortRow}>
            <span className={styles.sortLabel}>Sort by</span>
            <select
              className={styles.select}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Body: Sidebar + Listing  */}
        <div className={styles.body}>
          <FilterSidebar filters={filters} onChange={setFilters} />

          <main className={styles.listing}>
            {/* Result count + view toggle */}
            <div className={styles.listingHeader}>
              <span className={styles.resultCount}>
                Showing 1–10 of 120 tasks
              </span>
              <div className={styles.viewToggle}>
                <button
                  className={`${styles.viewBtn} ${viewMode === "list" ? styles.viewBtnActive : ""}`}
                  onClick={() => setViewMode("list")}
                  aria-label='List view'
                >
                  ☰
                </button>
                <button
                  className={`${styles.viewBtn} ${viewMode === "grid" ? styles.viewBtnActive : ""}`}
                  onClick={() => setViewMode("grid")}
                  aria-label='Grid view'
                >
                  ⊞
                </button>
              </div>
            </div>

            {/* Task cards */}
            <div
              className={
                viewMode === "grid" ? styles.gridCards : styles.listCards
              }
            >
              {MOCK_TASKS.map((task) => (
                <TaskCard key={task.id} task={task} viewMode={viewMode} />
              ))}
            </div>
          </main>
        </div>

        {/*  Pagination  */}
        <div className={styles.pagination}>
          <button
            className={styles.pageBtn}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            ‹
          </button>
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              className={`${styles.pageBtn} ${currentPage === p ? styles.pageBtnActive : ""}`}
              onClick={() => setCurrentPage(p)}
            >
              {p}
            </button>
          ))}
          <span className={styles.pageEllipsis}>…</span>
          <button className={styles.pageBtn} onClick={() => setCurrentPage(12)}>
            12
          </button>
          <button
            className={styles.pageBtn}
            onClick={() => setCurrentPage((p) => Math.min(12, p + 1))}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
