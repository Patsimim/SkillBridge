"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./horizontalcardsection.module.css";

interface HorizontalCardSectionProps {
  title: string;
  seeAllLabel?: string;
  onSeeAll?: () => void;
  children: React.ReactNode[];
}

export default function HorizontalCardSection({
  title,
  seeAllLabel = "See all →",
  onSeeAll,
  children,
}: HorizontalCardSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>

      <Swiper
        modules={[Pagination, FreeMode]}
        slidesPerView='auto'
        spaceBetween={14}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 0.4,
          momentumVelocityRatio: 0.4,
        }}
        pagination={{ clickable: true }}
        grabCursor={true}
        className={styles.swiper}
      >
        {React.Children.map(children, (child, i) => (
          <SwiperSlide key={i} className={styles.swiperSlide}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
