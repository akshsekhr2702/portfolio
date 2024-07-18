import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Oswald, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const oswald = Oswald({
  subsets:["latin"],
  weight:['400','600','700'],
  variable:'--font-oswald',
})
const outfit = Outfit({
  subsets:["latin"],
  weight:['400','600','700'],
  variable:'--font-outfit',
})
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${outfit.variable} bg-[#0D1321] flex flex-col justify-center items-center  `}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
