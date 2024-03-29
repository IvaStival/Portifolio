import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Menu from "@/components/Menu";

const inter = Inter({
  weight: ["100", "200", "300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const presStart = localFont({
  src: [
    {
      path: "../fonts/PressStart2P-Regular.ttf",
      weight: "400",
      style: "regular",
    },
  ],
  variable: "--font-pressstart",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${presStart.variable}`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
