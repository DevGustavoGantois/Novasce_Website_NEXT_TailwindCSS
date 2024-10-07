import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Escolha os pesos que deseja usar
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Novasce Website",
  description: "New Website Novasce Startup and bussiness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} antialiased green-gradient max-w-[1440px] mx-auto px-4 `}>
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
