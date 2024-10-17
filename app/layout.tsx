import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

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
      <body className=" dark:bg-black bg-white dark:text-white text-white antialiased">
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
