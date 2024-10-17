import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "100xStore",
  description: "Pick Coding T-shirts from us",
  icons: {
    icon: "main.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-black text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
