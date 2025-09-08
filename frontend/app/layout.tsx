import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/NavBar";

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Minimal issue tracker app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
