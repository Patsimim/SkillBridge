"use client";
import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, ArrowRight } from "lucide-react";
import Image from "next/image";

import TabBar from "@/components/TabBar/TabBar";
import RequestCard from "@/components/RequestCard/RequestCard";
import RequestSidebar from "@/components/RequestSibeBar/RequestSideBar";
import { ALL_REQUESTS, TABS, SUMMARY } from "./myrequestdata";
import styles from "./myrequest.module.css";

export default function MyRequestsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = ALL_REQUESTS;

    if (activeTab === "active")
      list = list.filter((r) => r.status === "confirmed");
    else if (activeTab === "pending")
      list = list.filter((r) => r.status === "pending");
    else if (activeTab === "completed")
      list = list.filter((r) => r.status === "completed");
    else if (activeTab === "cancelled")
      list = list.filter((r) => r.status === "cancelled");

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q) ||
          r.helperName.toLowerCase().includes(q),
      );
    }
    return list;
  }, [activeTab, search]);

  const activeRequests = filtered.filter((r) => r.status === "confirmed");
  const pendingRequests = filtered.filter((r) => r.status === "pending");
  const completedRequests = filtered.filter((r) => r.status === "completed");

  const handleViewDetails = (id: string) => {
    console.log("View details:", id);
  };

  return (
    <main className={styles.page}>
      <div className={styles.page__wrapper}>
        {/* ── Hero — full width, above the two-column layout ── */}
        <div className={styles.hero}>
          <div className={styles.hero__text}>
            <h1 className={styles.hero__title}>My Requests</h1>
            <p className={styles.hero__sub}>
              Track and manage all your tutoring requests in one place.
            </p>
          </div>
          <div className={styles.hero__illustration} aria-hidden='true'>
            <Image
              src='/dashboard_Illustration/dashboard_illustration.png'
              alt='Dashboard Illustration'
              width={220}
              height={160}
              priority
              className={styles.illustration}
            />
          </div>
        </div>

        {/* ── Two-column layout ── */}
        <div className={styles.page__inner}>
          {/* Main column */}
          <div className={styles.main}>
            {/* Tabs */}
            <TabBar tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

            {/* Search + Filter */}
            <div className={styles.toolbar}>
              <div className={styles.search}>
                <Search size={15} className={styles.search__icon} />
                <input
                  type='text'
                  placeholder='Search by task, subject, or helper…'
                  className={styles.search__input}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button className={styles.filterBtn}>
                <SlidersHorizontal size={15} strokeWidth={1.8} />
                Filters
              </button>
            </div>

            {/* Active / Confirmed */}
            {(activeTab === "all" || activeTab === "active") &&
              activeRequests.length > 0 && (
                <section className={styles.section}>
                  <h2 className={styles.section__title}>
                    {activeRequests.length} Active Request
                    {activeRequests.length !== 1 ? "s" : ""}
                  </h2>
                  <div className={styles.cardList}>
                    {activeRequests.map((req) => (
                      <RequestCard
                        key={req.id}
                        data={req}
                        onViewDetails={handleViewDetails}
                      />
                    ))}
                  </div>
                </section>
              )}

            {/* Pending */}
            {(activeTab === "all" || activeTab === "pending") &&
              pendingRequests.length > 0 && (
                <section className={styles.section}>
                  <h2 className={styles.section__title}>
                    {pendingRequests.length} Pending Request
                    {pendingRequests.length !== 1 ? "s" : ""}
                  </h2>
                  <div className={styles.cardList}>
                    {pendingRequests.map((req) => (
                      <RequestCard
                        key={req.id}
                        data={req}
                        onViewDetails={handleViewDetails}
                      />
                    ))}
                  </div>
                </section>
              )}

            {/* Completed */}
            {(activeTab === "all" || activeTab === "completed") &&
              completedRequests.length > 0 && (
                <section className={styles.section}>
                  <div className={styles.section__row}>
                    <h2 className={styles.section__title}>
                      {completedRequests.length} Completed Request
                      {completedRequests.length !== 1 ? "s" : ""}
                    </h2>
                    <button className={styles.viewAll}>
                      View all completed
                      <ArrowRight size={14} strokeWidth={2} />
                    </button>
                  </div>
                  <div className={styles.cardList}>
                    {completedRequests.map((req) => (
                      <RequestCard
                        key={req.id}
                        data={req}
                        onViewDetails={handleViewDetails}
                      />
                    ))}
                  </div>
                </section>
              )}

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className={styles.empty}>
                <span className={styles.empty__icon}>📭</span>
                <p className={styles.empty__title}>No requests found</p>
                <p className={styles.empty__sub}>
                  {search
                    ? `No results for "${search}". Try a different search term.`
                    : "You don't have any requests in this category yet."}
                </p>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <RequestSidebar
            counts={SUMMARY}
            onPostTask={() => console.log("Post task")}
            onBrowseHelpers={() => console.log("Browse helpers")}
            onContactSupport={() => console.log("Contact support")}
          />
        </div>
      </div>
    </main>
  );
}
