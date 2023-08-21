import Navbar from "@/components/Navbard";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
