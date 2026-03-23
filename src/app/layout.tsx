import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Simplecore | HR Solutions & Talent Acquisition",
  description:
    "Simplecore delivers recruitment, executive search, and HR consulting services that help businesses build high-performing teams.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-brand-bg text-brand-text`}>
        {children}
      </body>
    </html>
  );
}
