import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abigail Elaho | Portfolio",
  description:
    "Portfolio of Abigail Elaho, a Computer Science graduate and developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.variable}>
        <Navbar />
        <main>{children}</main>
        <BackToTop/>
        <Footer/>
      </body>
    </html>
  );
}