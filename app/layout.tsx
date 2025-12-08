import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/Nav";

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
    <html lang="es">
      <body
        className={`${interFont.variable} antialiased max-w-[500px] mx-auto pb-20 relative`}
      >
        {children}
        <Nav />
      </body>
    </html>
  );
}
