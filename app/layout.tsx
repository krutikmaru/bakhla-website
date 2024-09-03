import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

import { cn } from "@/lib/utils";
import LayoutProvider from "./(pages)/layout-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Bakhla Tours",
  description: "Better Pilgrimage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-visible",
          fontSans.variable
        )}
      >
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
