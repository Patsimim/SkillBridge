"use client";

import { useState } from "react";

import Avatar from "./components/Avatar/Avatar";
import ConversationItem from "./components/ConversationItem/ConversationItem";
import MessageBubble from "./components/MessageBubble/MessageBubble";
import ConversationDetails from "./components/ConversationDetails/ConversationDetails";
import SessionCard from "./components/SessionCard/SessionCard";

import {
  CURRENT_USER_ID,
  conversations,
  chatMessages,
  sharedFiles,
  sessionRequest,
} from "./data/messages.data";

import styles from "./messages.module.css";
import PageHero from "@/components/Hero/PageHero";

type TabKey = "all" | "unread" | "helpers" | "system";

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [activeConvId, setActiveConvId] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");

  const activeConv =
    conversations.find((c) => c.id === activeConvId) ?? conversations[0];

  const filteredConversations = conversations.filter((c) => {
    const matchesSearch =
      c.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.subject.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === "unread") return matchesSearch && !!c.unreadCount;
    if (activeTab === "helpers")
      return matchesSearch && c.user.id !== "support";
    if (activeTab === "system") return matchesSearch && c.user.id === "support";
    return matchesSearch;
  });

  const totalUnread = conversations.reduce(
    (acc, c) => acc + (c.unreadCount ?? 0),
    0,
  );

  const handleSend = () => {
    if (!inputValue.trim()) return;
    // TODO: dispatch to state/API
    setInputValue("");
  };

  return (
    <div className={styles.page}>
      {/* ── Page Header ── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeader__text}>
          <PageHero
            title='Messages'
            subtitle='Communicate with helpers and manage all your conversations.'
            illustrationSrc='/dashboard_Illustration/messages_illustration.png'
          />

          {/* Tabs */}
          <div className={styles.tabs}>
            {(
              [
                { key: "all", label: "All Messages", count: totalUnread },
                { key: "unread", label: "Unread", count: totalUnread },
                { key: "helpers", label: "Helpers" },
                { key: "system", label: "System" },
              ] as { key: TabKey; label: string; count?: number }[]
            ).map((tab) => (
              <button
                key={tab.key}
                className={`${styles.tab} ${activeTab === tab.key ? styles["tab--active"] : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
                {tab.count ? (
                  <span
                    className={`${styles.tab__badge} ${
                      activeTab === tab.key ? styles["tab__badge--active"] : ""
                    }`}
                  >
                    {tab.count}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main 3-column Layout ── */}
      <div className={styles.layout}>
        {/* ── Left: Conversations ── */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebar__toolbar}>
            <div className={styles.searchBox}>
              <span className={styles.searchBox__icon}>🔍</span>
              <input
                aria-label='Search messages'
                className={styles.searchBox__input}
                placeholder='Search messages...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className={styles.newConvBtn} aria-label='New conversation'>
              ↗
            </button>
          </div>

          <div className={styles.sidebar__header}>
            <span className={styles.sidebar__heading}>Conversations</span>
            {totalUnread > 0 && (
              <span className={styles.sidebar__unreadLabel}>
                {totalUnread} unread
              </span>
            )}
          </div>

          <div className={styles.sidebar__list}>
            {filteredConversations.map((conv) => (
              <ConversationItem
                key={conv.id}
                conversation={conv}
                isActive={activeConvId === conv.id}
                onClick={() => setActiveConvId(conv.id)}
              />
            ))}
          </div>
        </aside>

        {/* ── Center: Chat ── */}
        <main className={styles.chat}>
          {/* Chat Header */}
          <div className={styles.chat__header}>
            <Avatar user={activeConv.user} size='md' showOnline />
            <div className={styles.chat__headerInfo}>
              <span className={styles.chat__headerName}>
                {activeConv.user.name}
              </span>
              {activeConv.user.isOnline && (
                <span className={styles.chat__headerStatus}>● Online</span>
              )}
            </div>
            <button className={styles.chat__menuBtn} aria-label='More options'>
              ⋮
            </button>
            <button className={styles.filtersBtn}>
              <span>⚙</span> Filters
            </button>
          </div>

          {/* Session Card */}
          <div className={styles.chat__sessionCard}>
            <SessionCard request={sessionRequest} />
          </div>

          {/* Messages */}
          <div className={styles.chat__messages}>
            <div className={styles.chat__dateDivider}>Today</div>
            {chatMessages.map((msg) => (
              <MessageBubble
                key={msg.id}
                message={msg}
                isSelf={msg.senderId === CURRENT_USER_ID}
              />
            ))}
          </div>

          {/* Input */}
          <div className={styles.chat__input}>
            <button className={styles.chat__attachBtn} aria-label='Attach file'>
              📎
            </button>
            <input
              className={styles.chat__textInput}
              placeholder='Type a message...'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className={styles.chat__emojiBtn} aria-label='Emoji'>
              🙂
            </button>
            <button
              className={styles.chat__sendBtn}
              onClick={handleSend}
              aria-label='Send'
            >
              ➤
            </button>
          </div>
        </main>

        {/* ── Right: Details ── */}
        <ConversationDetails
          conversation={activeConv}
          request={sessionRequest}
          files={sharedFiles}
        />
      </div>
    </div>
  );
}
