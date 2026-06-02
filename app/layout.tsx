import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "SkillBridge PH | Pa-Help? Kaya Yan!",
  description: "Find trusted local helpers and services.",
  metadataBase: new URL("http://localhost:3000"),
  icons: {
    icon: "/illustration/logotrial.png",
    shortcut: "/illustration/logotrial.png",
  },
  openGraph: {
    images: "/illustration/logotrial.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en-PH'>
      <body>{children}</body>
    </html>
  );
}
