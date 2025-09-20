import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/NavBar";
import { Container, Theme } from "@radix-ui/themes";
import React from "react";

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
        <Theme accentColor="blue" radius="large">
          <NavBar />
          <main className="p-5">
            <Container>{children}</Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
