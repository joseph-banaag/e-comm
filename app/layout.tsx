import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/sections/navbar/Navbar";
import NavSubMenu from "@/components/sections/navbar/NavSubMenu";
import BottomNav from "@/components/sections/navbar/BottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "| E-commerce Store",
  description: "Generated using Next.js, TypeScript and TailwindCSS"
};

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behaviour="smooth"
    >
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <Navbar/>
    <NavSubMenu/>
    <div className="p-1 md:p-5">
      {children}
    </div>
    <BottomNav/>
    </body>
    </html>
  );
}