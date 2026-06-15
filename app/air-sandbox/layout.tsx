import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// AIR's own voice — a warm, approachable sans, deliberately different from
// kurtisbaker.com's editorial serif. AIR is an independent nonprofit, not a
// section of the personal hub, so it gets its own typographic identity.
const airDisplay = Poppins({
  variable: "--font-air-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Attitudes In Reverse® — Youth Mental Health & Suicide Prevention",
    template: "%s · Attitudes In Reverse®",
  },
};

export default function AirSandboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={airDisplay.variable}>{children}</div>;
}
