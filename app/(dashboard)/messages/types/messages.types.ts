export interface User {
  id: string;
  name: string;
  avatar: string;
  role?: string;
  isOnline?: boolean;
  rating?: number;
  reviewCount?: number;
  memberSince?: string;
  responseTime?: string;
}

export interface Conversation {
  id: string;
  user: User;
  subject: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isRead?: boolean;
}

export interface SharedFile {
  id: string;
  name: string;
  uploadedAt: string;
  size: string;
}

export interface Request {
  title: string;
  date: string;
  time: string;
  status: "Confirmed" | "Pending" | "Completed";
}
