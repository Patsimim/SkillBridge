import type {
  Conversation,
  Message,
  SharedFile,
  Request,
} from "../types/messages.types";

export const CURRENT_USER_ID = "russel";

export const conversations: Conversation[] = [
  {
    id: "1",
    user: {
      id: "john",
      name: "John M.",
      avatar: "JM",
      isOnline: true,
      role: "Math Tutor",
      rating: 4.9,
      reviewCount: 96,
      memberSince: "Jan 2024",
      responseTime: "1 hour",
    },
    subject: "Math Tutoring Session",
    lastMessage: "Sure! See you tomorrow at 3PM.",
    timestamp: "2m ago",
    unreadCount: 1,
  },
  {
    id: "2",
    user: {
      id: "alexandra",
      name: "Alexandra R.",
      avatar: "AR",
      isOnline: true,
      role: "Essay Writer",
    },
    subject: "Essay Writing Consultation",
    lastMessage: "I've sent the draft. Please check.",
    timestamp: "1h ago",
    unreadCount: 1,
  },
  {
    id: "3",
    user: {
      id: "michael",
      name: "Michael T.",
      avatar: "MT",
      isOnline: true,
      role: "Data Encoder",
    },
    subject: "Data Encoding Project",
    lastMessage: "Thank you! Will submit it later.",
    timestamp: "3h ago",
  },
  {
    id: "4",
    user: {
      id: "kristine",
      name: "Kristine D.",
      avatar: "KD",
      isOnline: false,
      role: "Canva Designer",
    },
    subject: "Canva Presentation Design",
    lastMessage: "Can you send the instructions?",
    timestamp: "1d ago",
  },
  {
    id: "5",
    user: {
      id: "support",
      name: "Support Team",
      avatar: "🎧",
      isOnline: false,
      role: "Account & Technical Support",
    },
    subject: "Account & Technical Support",
    lastMessage: "Your request has been updated.",
    timestamp: "2d ago",
  },
];

export const chatMessages: Message[] = [
  {
    id: "m1",
    senderId: "john",
    content: "Hi Russel! This is John, your math tutor for tomorrow's session.",
    timestamp: "1:30 PM",
  },
  {
    id: "m2",
    senderId: CURRENT_USER_ID,
    content: "Hi John! Yes, I'm ready for our session.",
    timestamp: "1:32 PM",
    isRead: true,
  },
  {
    id: "m3",
    senderId: "john",
    content:
      "Great! Just a reminder, our session is tomorrow, May 22 at 3:00 PM.",
    timestamp: "1:33 PM",
  },
  {
    id: "m4",
    senderId: CURRENT_USER_ID,
    content: "Noted! See you tomorrow at 3PM.",
    timestamp: "1:34 PM",
    isRead: true,
  },
  {
    id: "m5",
    senderId: "john",
    content: "Sure! See you tomorrow at 3PM. 😊",
    timestamp: "1:35 PM",
  },
];

export const sharedFiles: SharedFile[] = [
  {
    id: "f1",
    name: "Math_Problem_Set_1.pdf",
    uploadedAt: "May 21, 2025",
    size: "2.4 MB",
  },
];

export const sessionRequest: Request = {
  title: "Math Tutoring Session",
  date: "May 22, 2025",
  time: "3:00 PM",
  status: "Confirmed",
};
