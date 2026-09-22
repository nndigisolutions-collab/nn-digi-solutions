import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NN Digi Solutions | Websites & Digital Solutions for Small Businesses",
    template: "%s | NN Digi Solutions",
  },

  description:
    "Simple websites, appointment booking, SEO, Meta Ads and AI solutions for solopreneurs and small businesses in Coimbatore and Tamil Nadu.",

  keywords: [
    "NN Digi Solutions",
    "website development Coimbatore",
    "website development Tamil Nadu",
    "small business website",
    "business website development",
    "appointment booking website",
    "SEO services Coimbatore",
    "AI chatbot services",
    "AI consultancy",
    "Meta Ads services",
  ],

  authors: [
    {
      name: "NN Digi Solutions",
    },
  ],

  creator: "NN Digi Solutions",

  openGraph: {
    title: "NN Digi Solutions | Enter into Digital Space. Level Up Your Business.",
    description:
      "Beginner-friendly digital solutions for solopreneurs and small businesses.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
