import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sierra Tech Spaces — AI That Works As Hard As You Do",
  description:
    "Egypt's AI automation agency. We help businesses save hours, capture leads, and grow revenue with custom AI solutions — delivered in days, not months.",
  keywords: [
    "AI agency Egypt",
    "automation Cairo",
    "WhatsApp chatbot Arabic",
    "AI consulting",
    "Sierra Tech Spaces",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
