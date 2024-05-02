import type { Metadata } from "next";
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import "./globals.css";

const spaceGrotesk = SpaceGrotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Solana Wallet Manager",
  description: "A opensource wallet manager for Solana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
