import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UK Police & Crime Data Tracker | Official Statistics Dashboard",
  description: "A centralised, neutral dashboard aggregating UK police and crime statistics from official sources. Updated daily with data from ONS, Home Office, MoJ, and HMICFRS.",
  keywords: [
    "UK police statistics",
    "crime data",
    "England Wales crime",
    "police workforce",
    "criminal justice",
    "official statistics",
    "ONS crime",
    "Home Office data",
    "HMICFRS PEEL",
    "stop and search",
    "prison population",
    "homicide statistics",
  ],
  authors: [{ name: "UK Police & Crime Data Tracker" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "UK Police & Crime Data Tracker",
    description: "Official UK police and crime statistics dashboard - neutral, transparent, daily updated",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Police & Crime Data Tracker",
    description: "Official UK police and crime statistics dashboard",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#003087" />
        <link rel="preconnect" href="https://www.ons.gov.uk" />
        <link rel="preconnect" href="https://www.gov.uk" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
