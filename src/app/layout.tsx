import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppFooter from "@/components/footer/app-footer";
import { Toaster } from "sonner";
import ResponsiveNavbar from "@/components/navbar/navbar-check";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});


export const metadata: Metadata = {
  title: "Viettrip Tourist",
  description: "Lữ Hành Quốc Tế Việt Trip",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`${inter.variable}  antialiased`}
      >
       <ResponsiveNavbar />
        <Toaster richColors position="top-center" />
        <main>{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
