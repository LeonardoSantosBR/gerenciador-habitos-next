import type { Metadata } from "next";
import { Dosis, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const dosis = Dosis({
  subsets: ["latin"],
  variable: "--font-dosis",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Metas Diárias",
  description: "gerenciador de Metas com Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dosis.variable} ${inter.variable} flex justify-center items-center flex-col mt-10 bg-neutral-900`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
