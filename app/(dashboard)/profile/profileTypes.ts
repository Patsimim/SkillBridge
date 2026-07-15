export type VerificationItem = "email" | "phone" | "studentId" | "governmentId";

export interface ExperienceItem {
  title: string;
  period: string;
  description: string;
  current: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  type: "PDF" | "Presentation" | "Image" | "Video" | "Other";
  thumbnailUrl: string;
}

export interface Review {
  id: string;
  reviewerName: string;
  reviewerAvatar?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Language {
  name: string;
  rating: number; // 1–5
}

export interface Certificate {
  id: string;
  title: string;
  issuedDate: string;
}

export interface HelperProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  location: string;
  memberSince: string;
  imageUrl?: string;
  role: "Student" | "Helper" | "Both";
  isVerified: boolean;
  bio: string;
  availability: {
    status: "Available" | "Busy" | "Away";
    responseTime: string;
    workingHours: string;
    workingDays: string;
  };
  stats: {
    completedJobs: number;
    repeatClients: number;
    responseRate: number; // percentage
    averageRating: number;
    totalReviews: number;
  };
  skills: string[];
  experience: ExperienceItem[];
  portfolio: PortfolioItem[];
  reviews: Review[];
  verifications: VerificationItem[];
  rates: {
    hourly: number;
    currency: string;
  };
  languages: Language[];
  education: {
    institution: string;
    degree: string;
    period: string;
  };
  certificates: Certificate[];
}
