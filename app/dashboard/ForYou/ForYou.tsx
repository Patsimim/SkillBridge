"use client";
import HorizontalCardSection from "@/components/UI/Section/horizontalcardsection";
import Card, { CardProps } from "@/components/UI/Card/Card";

const CARDS: CardProps[] = [
  {
    initials: "AR",
    name: "Alexandra R.",
    rating: 4.9,
    reviews: 128,
    skill: "Essay Writing",
    price: "₱250/hr",
    tag: "popular",
  },
  {
    initials: "JM",
    name: "John M.",
    rating: 4.8,
    reviews: 96,
    skill: "Math Tutor",
    price: "₱250/hr",
    tag: "nearYou",
  },
  {
    initials: "PL",
    name: "Patricia L.",
    rating: 4.9,
    reviews: 74,
    skill: "Canva Design",
    price: "₱300/hr",
    tag: "recommended",
  },
  {
    initials: "MT",
    name: "Michael T.",
    rating: 4.8,
    reviews: 83,
    skill: "Data Entry",
    price: "₱200/hr",
    tag: "trending",
  },
  {
    initials: "KD",
    name: "Kristine D.",
    rating: 4.9,
    reviews: 88,
    skill: "Lab Reports",
    price: "₱250/hr",
    tag: "popular",
  },
];

export default function ForYouSection() {
  return (
    <HorizontalCardSection title='For You'>
      {CARDS.map((c) => (
        <Card key={c.name} {...c} />
      ))}
    </HorizontalCardSection>
  );
}
