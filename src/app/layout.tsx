import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next_Search_Engine",
  description: "This web app is a search engine build with Next14, Postgres, Shadcn, Upstash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen isolate overflow-hidden border-b border-gray-200 bg-white">
           
        </div>
      </body>
    </html>
  );
}
