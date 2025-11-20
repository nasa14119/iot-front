import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Dashboard para controlar y visualizar la informacion del vivero inteligente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} antialiased max-w-[500px] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
