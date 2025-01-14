import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./_ui/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VanLife",
  description: "Travel Vans Rental Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} space-y-3`}
      > 
        <Navbar />
        <main className="custom-container min-h-[85vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
