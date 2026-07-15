import type { HelperProfile } from "./profileTypes";

export const mockHelperProfile: HelperProfile = {
  id: "usr_001",
  name: "Russel",
  email: "russel@email.com",
  phone: "+63 912 345 6789",
  dateOfBirth: "May 15, 2003",
  location: "Manila, Philippines",
  memberSince: "April 2024",
  imageUrl: undefined,
  role: "Student",
  isVerified: true,
  bio: "Hi! I'm Russel, a BS Computer Science student who enjoys helping others learn and accomplish tasks. I specialize in Math Tutoring, Essay Writing, Data Encoding, and Canva Design. I'm committed to delivering quality work and making sure my clients are 100% satisfied.",
  availability: {
    status: "Available",
    responseTime: "5 minutes",
    workingHours: "9:00 AM – 6:00 PM",
    workingDays: "Mon – Fri",
  },
  stats: {
    completedJobs: 127,
    repeatClients: 18,
    responseRate: 98,
    averageRating: 4.9,
    totalReviews: 38,
  },
  skills: [
    "Math Tutoring",
    "Essay Writing",
    "Data Encoding",
    "Canva Design",
    "Research",
    "Presentation Design",
  ],
  experience: [
    {
      title: "Math Tutor",
      period: "Jan 2024 – Present",
      description:
        "Tutoring high school and college students in algebra, geometry, trigonometry, and basic calculus.",
      current: true,
    },
    {
      title: "Data Encoder",
      period: "Oct 2023 – Dec 2023",
      description: "Encoded and organized data for a student research project.",
      current: false,
    },
    {
      title: "Canva Designer",
      period: "Aug 2023 – Present",
      description:
        "Created posters, presentations, and social media graphics for school organizations.",
      current: true,
    },
  ],
  portfolio: [
    {
      id: "p1",
      title: "Algebra Reviewer PDF",
      type: "PDF",
      thumbnailUrl: "",
    },
    {
      id: "p2",
      title: "Canva Presentation Project",
      type: "Presentation",
      thumbnailUrl: "",
    },
    {
      id: "p3",
      title: "Math Tutoring Sample Notes",
      type: "PDF",
      thumbnailUrl: "",
    },
    {
      id: "p4",
      title: "Infographic Design Sample",
      type: "Image",
      thumbnailUrl: "",
    },
  ],
  reviews: [
    {
      id: "r1",
      reviewerName: "Juan D.",
      rating: 4,
      comment:
        "Very patient and explains concepts clearly. Helped me improve my grades in Calculus!",
      date: "May 5, 2024",
    },
    {
      id: "r2",
      reviewerName: "Alexandra R.",
      rating: 5,
      comment: "Fast turnaround and quality work. Great communication!",
      date: "Apr 28, 2024",
    },
    {
      id: "r3",
      reviewerName: "Michael T.",
      rating: 4,
      comment: "Highly recommended tutor. Very reliable and knowledgeable.",
      date: "Apr 20, 2024",
    },
  ],
  verifications: ["email", "phone", "studentId", "governmentId"],
  rates: {
    hourly: 250,
    currency: "₱",
  },
  languages: [
    { name: "English", rating: 5 },
    { name: "Filipino", rating: 5 },
    { name: "Cebuano", rating: 4 },
  ],
  education: {
    institution: "University of the Philippines",
    degree: "BS Computer Science",
    period: "2021 – Present",
  },
  certificates: [
    {
      id: "c1",
      title: "Google Data Analytics Certificate",
      issuedDate: "Issued Mar 2024",
    },
    {
      id: "c2",
      title: "TESDA NC II – Computer System Servicing",
      issuedDate: "Issued Jan 2024",
    },
    {
      id: "c3",
      title: "Dean's Lister",
      issuedDate: "Academic Year 2022 – 2023",
    },
  ],
};
