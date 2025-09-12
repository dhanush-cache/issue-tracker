import "@radix-ui/themes/styles.css";
import type {Metadata} from "next";
import "./globals.css";
import NavBar from "@/app/NavBar";
import {Theme} from "@radix-ui/themes";

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
        <Theme>
          <NavBar />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
