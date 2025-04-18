import type { Metadata } from "next";
import "./globals.css";
import "./textAnim.module.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeWrapper from "@/components/ThemeWraper";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Vuk Connect",
  description: "Generated by create next app",
  icons:{
    icon: "/images/logo.webP"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeWrapper>
        <Header />
        {children}
        <Footer />
      </ThemeWrapper>
    </html>
  );
}
