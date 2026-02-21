import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xai - Intelligence Workspace",
  description: "From raw data to structured intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background-dark text-white min-h-screen flex flex-col`} style={{ backgroundColor: '#050505' }}>
        {children}
      </body>
    </html>
  );
}