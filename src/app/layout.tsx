import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header } from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}

        <p style={{textAlign: 'center', marginTop: '54px', marginBottom: '24px'}}>
          Todos Direitos Reservados @{`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  );
}
