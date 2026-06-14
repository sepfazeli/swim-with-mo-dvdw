import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "swim with Mo",
  description: "Swim school for kids and adults",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}