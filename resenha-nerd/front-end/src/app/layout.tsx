import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resenha Nerd",
  description:
    "Resenhas, notícias, enquetes e opiniões no universo dos Games, Música, Tecnologia, Séries, Filmes e Animes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ptbr">
      <body className={inter.className}>
        <main className="min-h-full h-fit w-full relative">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
