import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIR Redesign Sandbox — Attitudes In Reverse®",
  description:
    "Design prototype for a best-in-class Attitudes In Reverse® (AIR®) website — youth mental health education and suicide prevention.",
  // Prototype only — keep it out of search indexes until it ships for real.
  robots: { index: false, follow: false },
};

export default function AirSandboxLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="bg-slate-50 text-slate-900">{children}</div>;
}
