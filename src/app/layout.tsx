import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "../components/navbar/navbar";
import AppFooter from "@/components/footer/app-footer";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});


export const metadata: Metadata = {
  title: "Viettrip Tourist",
  description: "Trung tâm du lịch Viet Trip Tourist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  antialiased`}
      >
        <NavigationBar />
        <Toaster richColors position="top-center"/>
        {children}
        <AppFooter/>
      </body>
    </html>
  );
}
