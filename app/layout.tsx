import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { GhlChatWidget } from "@/app/components/GhlChatWidget";
import { ScrollProgress } from "@/app/components/ScrollProgress";
import { JsonLd } from "@/app/components/JsonLd";
import { SmoothScroll } from "@/app/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  title: {
    default: "Kurt Baker — Private Wealth Manager (CFP® · CEPA® · AIF®)",
    template: "%s · Kurt Baker",
  },
  description:
    "Kurtis 'Kurt' Baker, CFP® · CEPA® · AIF® — private wealth manager in Princeton, NJ helping small and middle-market business owners build a Freedom Ready Business. Host of Master Your Finances and co-founder of Attitudes In Reverse®.",
  keywords: [
    "Kurt Baker",
    "Kurtis Baker",
    "CFP",
    "CEPA",
    "AIF",
    "private wealth manager Princeton NJ",
    "Freedom Ready Business",
    "Exit Planning Advisor",
    "Master Your Finances",
    "Attitudes In Reverse",
    "Certified Wealth Management Investment",
    "CWMI",
  ],
  authors: [{ name: "Kurt Baker", url: "https://kurtisbaker.com" }],
  creator: "Kurt Baker",
  publisher: "Kurt Baker",
  alternates: {
    canonical: "https://kurtisbaker.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-bg focus:shadow-lg"
        >
          Skip to content
        </a>
        <JsonLd />
        <ScrollProgress />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <GhlChatWidget />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
