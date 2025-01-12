import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./_ui/fonts";

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
        className={`${inter.variable}`}
      > 
        {children}
      </body>
    </html>
  );
}
