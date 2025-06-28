import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "../components/navbar/navbar";
import AppFooter from "@/components/footer/app-footer";
import { Toaster } from "sonner";
import NavigationResponsive from "@/components/navbar/navbar-responsive";

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
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`${inter.variable}  antialiased`}
      >
        <div className="hidden md:block">
          <NavigationBar />
        </div>
        <div className="block md:hidden">
          <NavigationResponsive />
        </div>
        <Toaster richColors position="top-center" />
        <main>{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
