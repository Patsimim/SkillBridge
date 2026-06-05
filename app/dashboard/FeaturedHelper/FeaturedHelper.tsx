"use client";
import HorizontalCardSection from "@/components/UI/Section/horizontalcardsection";
import Card, { CardProps } from "@/components/UI/Card/Card";

const HELPERS: CardProps[] = [
  {
    initials: "AR",
    name: "Alexandra R.",
    rating: 4.9,
    reviews: 128,
    skill: "Essay Writing · Research",
    price: "₱250",
    verified: true,
    showBookBtn: true,
  },
  {
    initials: "JM",
    name: "John M.",
    rating: 4.8,
    reviews: 96,
    skill: "Math Tutor · Calculus",
    price: "₱250",
    verified: true,
    showBookBtn: true,
  },
  {
    initials: "PL",
    name: "Patricia L.",
    rating: 4.9,
    reviews: 74,
    skill: "Canva · Social Media",
    price: "₱300",
    verified: true,
    showBookBtn: true,
  },
  {
    initials: "MT",
    name: "Michael T.",
    rating: 4.8,
    reviews: 83,
    skill: "Excel · Data Entry",
    price: "₱200",
    verified: true,
    showBookBtn: true,
  },
  {
    initials: "KD",
    name: "Kristine D.",
    rating: 4.9,
    reviews: 88,
    skill: "Lab Reports · Biology",
    price: "₱250",
    verified: true,
    showBookBtn: true,
  },
];

export default function FeaturedHelpers() {
  return (
    <HorizontalCardSection title='Featured Helpers'>
      {HELPERS.map((h) => (
        <Card key={h.name} {...h} />
      ))}
    </HorizontalCardSection>
  );
}
