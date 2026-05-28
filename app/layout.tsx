import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans-stack",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif-stack",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Kurt Baker — Wealth Advisor, Entrepreneur, Mental Health Advocate",
  description:
    "Kurtis 'Kurt' Baker is a CERTIFIED FINANCIAL PLANNER™ who helps small and middle-market business owners build an Exit Ready Business. Host of Master Your Finances and co-founder of Attitudes In Reverse®.",
  metadataBase: new URL("https://kurtisbaker.com"),
  openGraph: {
    title: "Kurt Baker",
    description:
      "CFP® and private wealth manager helping business owners build an Exit Ready Business.",
    url: "https://kurtisbaker.com",
    siteName: "Kurt Baker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurt Baker",
    description:
      "CFP® and private wealth manager helping business owners build an Exit Ready Business.",
    creator: "@kurtisbaker",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">{children}</body>
    </html>
  );
}
