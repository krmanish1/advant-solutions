import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Advant Solutions | Innovate, Scale, Succeed",
  description: "To empower businesses through innovative software solutions that facilitate growth and drive success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="YxitOy7HY295J/yVowzJEA" async></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full  flex flex-col items-center justify-center relative border-b">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
