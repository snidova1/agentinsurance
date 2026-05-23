import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentInsurance - Parametric Insurance for AI Agents",
  description: "The first insurance protocol for autonomous AI agent failures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
