import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton, MobileBookButton } from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tana Event Center | Premium Event Venue in Port Harcourt",
  description:
    "A premium event venue in the heart of GRA Phase II, Port Harcourt — perfect for weddings, celebrations, conferences and unforgettable occasions. Book your moment at Tana.",
  keywords: [
    "Tana Event Center",
    "event venue Port Harcourt",
    "wedding venue GRA Phase II",
    "conference center Port Harcourt",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        <Navbar />
        {children}
        <WhatsAppButton />
        <MobileBookButton />
      </body>
    </html>
  );
}
