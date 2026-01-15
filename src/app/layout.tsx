import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as requested/planned
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kushagra Sharma | Portfolio",
  description: "Portfolio of Kushagra Sharma - Software Engineer & Competitive Programmer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
