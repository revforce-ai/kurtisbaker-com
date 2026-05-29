import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { GhlChatWidget } from "@/app/components/GhlChatWidget";
import { ScrollProgress } from "@/app/components/ScrollProgress";

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
  title: "Kurt Baker — Private Wealth Manager, Entrepreneur, Speaker",
  description:
    "Kurtis 'Kurt' Baker, CFP® · CEPA® · AIF® — private wealth manager helping small and middle-market business owners build a Freedom Ready Business. Host of Master Your Finances and co-founder of Attitudes In Reverse®.",
  metadataBase: new URL("https://kurtisbaker.com"),
  openGraph: {
    title: "Kurt Baker",
    description:
      "Private wealth manager (CFP® · CEPA® · AIF®) helping business owners build a Freedom Ready Business.",
    url: "https://kurtisbaker.com",
    siteName: "Kurt Baker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurt Baker",
    description:
      "Private wealth manager (CFP® · CEPA® · AIF®) helping business owners build a Freedom Ready Business.",
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
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <ScrollProgress />
        {children}
        <GhlChatWidget />
      </body>
    </html>
  );
}
